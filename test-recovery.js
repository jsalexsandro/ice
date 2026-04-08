const { Lexer } = require('./src/lexer')
const { Parser } = require('./src/parser')

console.log('=== Test Error Recovery ===\n')

// Test 1: Simple multiple errors
console.log('Test 1: Simple case')
const code1 = `val a = 1
val b = 
val c = 3`
const p1 = new Parser(new Lexer(code1).tokenize())
const r1 = p1.parseWithErrors()
console.log(`  Errors: ${r1.errors.length}, Statements: ${r1.ast.body.length}`)

// Test 2: Function
console.log('Test 2: Function')
const code2 = `func test() { val x = 1 return x }`
const p2 = new Parser(new Lexer(code2).tokenize())
const r2 = p2.parseWithErrors()
console.log(`  Errors: ${r2.errors.length}, Statements: ${r2.ast.body.length}`)

// Test 3: Try-catch
console.log('Test 3: Try-catch')
const code3 = `try { val x = 1 } catch (e) { val y = 2 }`
const p3 = new Parser(new Lexer(code3).tokenize())
const r3 = p3.parseWithErrors()
console.log(`  Errors: ${r3.errors.length}, Statements: ${r3.ast.body.length}`)

// Test 4: Class
console.log('Test 4: Class')
const code4 = `class Foo { val x = 1 }`
const p4 = new Parser(new Lexer(code4).tokenize())
const r4 = p4.parseWithErrors()
console.log(`  Errors: ${r4.errors.length}, Statements: ${r4.ast.body.length}`)

console.log('\n=== Done ===')