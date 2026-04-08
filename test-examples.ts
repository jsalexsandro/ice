import { Lexer } from './src/lexer'
import { Parser } from './src/parser'
import { readFileSync } from 'fs'

const code = readFileSync('./examples.ice', 'utf-8')
const p = new Parser(new Lexer(code).tokenize())
const ast = p.parseProgram()
console.log('Parsed successfully!')
console.log('Total statements:', ast.body.length)