import { Lexer } from './src/lexer';
import { Parser } from './src/parser';

const code = `val obj = {a:{a:1}}`;

try {
  const ast = new Parser(new Lexer(code).tokenize()).parseProgram();
  console.log('✅ Funcionou!');
  console.log(JSON.stringify(ast, null, 2));
} catch(e: any) {
  console.log('❌ Erro:', e.message);
}
