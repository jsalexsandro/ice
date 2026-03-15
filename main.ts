// import { Lexer } from './src/lexer'
// import { Parser } from './src/parser'

// const code = `-5 * 2`

// const lexer = new Lexer(code)
// const tokens = lexer.tokenize()

// const parser = new Parser(tokens)
// const ast = parser.parseProgram()

// console.log('AST:', JSON.stringify(ast, null, 2))


import { Lexer } from "./src/lexer";
import { Parser } from "./src/parser";

const code = `obj.a[foo(1,2)][bar + baz].value = arr[x + 1] = compute(10, 20 * 3)`;

const lexer = new Lexer(code);
const tokens = lexer.tokenize();
const parser = new Parser(tokens);
const ast = parser.parseProgram();

console.log("=== TESTE 133 ===");
console.log("Código:", code);
console.log("\nAST:");
console.log(JSON.stringify(ast, null, 2));
