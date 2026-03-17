import { Lexer } from "./src/lexer";
import { Parser } from "./src/parser";

const code = `
val name = 2 ?? 3
`;

try {
  const lexer = new Lexer(code);
  const tokens = lexer.tokenize();
  console.log('Tokens:', tokens.length);
  
  const parser = new Parser(tokens);
  const ast = parser.parseProgram();
  console.log('✅ Parse successful!');
  console.log('Statements:', JSON.stringify(ast, {}, 2));
} catch (e) {
  console.log('❌ Error:', e.message);
}
