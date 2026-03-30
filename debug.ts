import { Lexer } from './src/lexer';
import { Parser } from './src/parser';

const tests = [
    // Ternary
    'a ? b : c',
    // Nullish
    'a ?? b',
    'null ?? "default"',
    // Logical
    'a || b',
    // Bitwise
    'a | b',
    // Combinações
    'a ?? b ?? c',
    'a || b ?? c',
];

console.log('=== BASIC TESTS ===\n');
for (const code of tests) {
    try {
        const ast = new Parser(new Lexer(code).tokenize()).parseProgram();
        console.log('✅', code);
    } catch(e: any) {
        console.log('❌', code, '-', e.message);
    }
}
