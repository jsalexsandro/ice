import { Lexer } from '../src/lexer'
import { Parser } from '../src/parser'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'

interface TestResult {
  passed: boolean
  message: string
}

interface RunOptions {
  id?: string[]
}

interface CreateTestOptions {
  id: string
  description: string
  code: string
}

type Component = "parser" | "lexer" | "semantic" | "interpreter"

function loadTests(component: Component, ids?: string[]): any[] {
  if (ids) {
    return ids.map(id => {
      try {
        return require(`./${component}/test_${component}_${id}.json`)
      } catch {
        return null
      }
    }).filter(t => t !== null)
  }

  const tests: any[] = []
  let i = 1
  while (true) {
    const id = i.toString().padStart(2, '0')
    try {
      const test = require(`./${component}/test_${component}_${id}.json`)
      tests.push(test)
      i++
    } catch {
      break
    }
  }
  return tests
}

function deepEqual(actual: any, expected: any): TestResult {
  const sortKeys = (obj: any): any => {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }
    if (Array.isArray(obj)) {
      return obj.map(sortKeys)
    }
    const sorted: any = {}
    Object.keys(obj).sort().forEach(key => {
      sorted[key] = sortKeys(obj[key])
    })
    return sorted
  }

  const actualStr = JSON.stringify(sortKeys(actual))
  const expectedStr = JSON.stringify(sortKeys(expected))

  if (actualStr === expectedStr) {
    return { passed: true, message: '' }
  }

  return { passed: false, message: 'AST mismatch' }
}

function runParserTest(testCase: { id: string, code: string, result: any }): TestResult {
  const expected = testCase.result

  if (typeof expected === 'string') {
    // Teste de erro - espera que o parser lance exceção
    try {
      const lexer = new Lexer(testCase.code)
      const tokens = lexer.tokenize()
      const parser = new Parser(tokens)
      parser.parseProgram()

      return { passed: false, message: `Test ${testCase.id} failed: Expected error "${expected}" but no error was thrown` }
    } catch (error: any) {
      if (error.message.includes(expected)) {
        return { passed: true, message: `Test ${testCase.id} passed` }
      } else {
        return { passed: false, message: `Test ${testCase.id} failed: Expected error "${expected}" but got "${error.message}"` }
      }
    }
  }

  // Teste de sucesso - compara AST
  try {
    const lexer = new Lexer(testCase.code)
    const tokens = lexer.tokenize()

    const parser = new Parser(tokens)
    const ast = parser.parseProgram()

    const result = deepEqual(ast, expected)

    if (result.passed) {
      return { passed: true, message: `Test ${testCase.id} passed` }
    } else {
      const actualStr = JSON.stringify(ast, null, 2)
      const expectedStr = JSON.stringify(expected, null, 2)
      return {
        passed: false,
        message: `Test ${testCase.id} failed: ${result.message}\n\nExpected:\n${expectedStr}\n\nActual:\n${actualStr}`
      }
    }
  } catch (error: any) {
    return { passed: false, message: `Test ${testCase.id} error: ${error.message}` }
  }
}

function runAll(component?: Component, options?: RunOptions): void {
  const components: Component[] = component ? [component] : ["parser", "lexer", "semantic"]

  let totalPassed = 0
  let totalFailed = 0
  let totalTests = 0

  for (const comp of components) {
    const tests = loadTests(comp, options?.id)

    if (tests.length === 0) {
      console.log(`No tests found for component: ${comp}`)
      continue
    }

    console.log(`\n=== Running ${comp.toUpperCase()} tests ===`)

    for (const testCase of tests) {
      totalTests++
      const result = runParserTest(testCase)

      if (result.passed) {
        totalPassed++
        console.log(`✅ ${result.message}`)
      } else {
        totalFailed++
        console.log(`❌ ${result.message}`)
      }
    }
  }

  console.log(`\n--- Results ---`)
  console.log(`Passed: ${totalPassed}/${totalTests}`)
  console.log(`Failed: ${totalFailed}/${totalTests}`)
  console.log(`Total: ${totalTests}`)

  if (totalFailed > 0) {
    process.exit(1)
  }
}

export { runAll, createTest, updateTest }

function updateTest(component: Component, id: string): void {
  const testId = `${component}_${id.padStart(2, '0')}`
  const filePath = `./tests/${component}/test_${testId}.json`
  
  let testData: any
  
  try {
    const content = readFileSync(filePath, 'utf-8')
    testData = JSON.parse(content)
  } catch {
    console.log(`❌ Test ${testId} not found`)
    return
  }
  
  try {
    const lexer = new Lexer(testData.code)
    const tokens = lexer.tokenize()
    const parser = new Parser(tokens)
    const ast = parser.parseProgram()
    testData.result = ast
    console.log(`✅ Test ${testId} - UPDATED (new AST saved)`)
  } catch (error: any) {
    testData.result = error.message
    console.log(`✅ Test ${testId} - UPDATED (new error: ${error.message})`)
  }
  
  writeFileSync(filePath, JSON.stringify(testData, null, 2))
  console.log(`📄 Saved: ${filePath}`)
}

function createTest(component: Component, options: CreateTestOptions): any {
  const { id, description, code } = options
  const testId = `${component}_${id.padStart(2, '0')}`

  let result: any

  try {
    const lexer = new Lexer(code)
    const tokens = lexer.tokenize()
    const parser = new Parser(tokens)
    const ast = parser.parseProgram()
    result = ast
    console.log(`✅ Test ${testId} - SUCCESS (AST generated)`)
  } catch (error: any) {
    result = error.message
    console.log(`✅ Test ${testId} - ERROR (${error.message})`)
  }

  const testData = {
    id: testId,
    reference: `arquivo ${component}.test.md - teste ${id}`,
    description,
    code,
    result
  }

  const dir = `./tests/${component}`
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }

  const filePath = `./tests/${component}/test_${testId}.json`
  writeFileSync(filePath, JSON.stringify(testData, null, 2))
  console.log(`📄 Created: ${filePath}`)

  return testData
}
