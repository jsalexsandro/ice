import { Lexer } from './src/lexer'
import { Parser } from './src/parser'

const code = `
val x = 10
const y = 20
x + y
`

const lexer = new Lexer(code)
const tokens = lexer.tokenize()

console.log(tokens)

const parser = new Parser(tokens)
const ast = parser.parseProgram()

console.log('AST:', JSON.stringify(ast, null, 2))
