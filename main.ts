// import { Lexer } from './src/lexer'
// import { Parser } from './src/parser'

// const code = `-5 * 2`

// const lexer = new Lexer(code)
// const tokens = lexer.tokenize()

// const parser = new Parser(tokens)
// const ast = parser.parseProgram()

// console.log('AST:', JSON.stringify(ast, null, 2))


import { runAll } from "./tests/test-runner";

runAll("parser", { id: ["01"]})
