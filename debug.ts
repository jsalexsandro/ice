import { Lexer } from './src/lexer';
import { Parser } from './src/parser';

const code = `class User {
    public name: string
    private age: int
    protected email: string
    
    static count: int = 0
    
    constructor(name: string) {
        this.name = name
    }
    
    public getName(): string {
        return this.name
    }
    
    private setAge(age: int): void {
        this.age = age
    }
}`;

try {
    const ast = new Parser(new Lexer(code).tokenize()).parseProgram();
    console.log('✅ Full class parsed!');
    console.log(JSON.stringify(ast, null, 2));
} catch(e: any) {
    console.log('❌ Error:', e.message);
}
