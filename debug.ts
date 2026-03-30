import { Lexer } from './src/lexer';
import { Parser } from './src/parser';

const code = 'a ?? "default"';
const ast = new Parser(new Lexer(code).tokenize()).parseProgram();
console.log(JSON.stringify(ast, null, 2));
