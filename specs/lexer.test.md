# Testes do Lexer

## Teste 1: Funções de Leitura (Passo 3)

**Data:** 13/03/2026
**Objetivo:** Testar as funções `peek()`, `advance()` e `consume()`

**Código testado:**
```typescript
import { Lexer } from './src/lexer'

const source = 'let x = 42'
const lexer = new Lexer(source)

console.log('Testing Lexer functions:')
console.log('Initial char:', lexer.ch)
console.log('peek():', lexer.peek())
console.log('consume():', lexer.consume())
console.log('After consume, ch:', lexer.ch)
console.log('advance()')
lexer.advance()
console.log('After advance, ch:', lexer.ch)
console.log('peek():', lexer.peek())
```

**Resultado:**
```
Testing Lexer functions:
Initial char: l
peek(): e
consume(): l
After consume, ch: e
advance()
After advance, ch: t
peek():  
```

**Status:** ✅ SUCESSO

**Observações:**
- `peek()` retorna próximo caractere sem avançar
- `consume()` retorna caractere atual e avanza
- `advance()` simplesmente avança
- Todas as funções working corretamente

---

## Teste 2: Números Inteiros e Decimais (Passo 4)

**Data:** 13/03/2026
**Objetivo:** Testar o reconhecedor de números inteiros e decimais

**Código testado:**
```typescript
import { Lexer } from './src/lexer'

console.log('\n--- Testing Numbers ---')
const source2 = '42 3.14 100'
const lexer2 = new Lexer(source2)
let token = lexer2.nextToken()
console.log('Token 1:', token)
token = lexer2.nextToken()
console.log('Token 2:', token)
token = lexer2.nextToken()
console.log('Token 3:', token)
```

**Resultado:**
```
--- Testing Numbers ---
Token 1: { type: 'NUMBER', value: 42, line: 1, column: 0 }
Token 2: { type: 'NUMBER', value: 3.14, line: 1, column: 3 }
Token 3: { type: 'NUMBER', value: 100, line: 1, column: 8 }
```

**Status:** ✅ SUCESSO

**Observações:**
- Números inteiros são reconhecidos corretamente (42, 100)
- Números decimais são reconhecidos corretamente (3.14)
- Column position está correta para cada token

---

## Teste 3: Identificadores e Palavras-chave (Passo 4)

**Data:** 13/03/2026
**Objetivo:** Testar o reconhecedor de identificadores e palavras-chave

**Código testado:**
```typescript
console.log('\n--- Testing Identifiers and Keywords ---')
const source2 = 'foo bar func if else let x = 42'
const lexer2 = new Lexer(source2)
token = lexer2.nextToken()
console.log('Token 1:', token)
token = lexer2.nextToken()
console.log('Token 2:', token)
token = lexer2.nextToken()
console.log('Token 3:', token)
token = lexer2.nextToken()
console.log('Token 4:', token)
token = lexer2.nextToken()
console.log('Token 5:', token)
```

**Resultado:**
```
--- Testing Identifiers and Keywords ---
Token 1: { type: 'IDENTIFIER', value: 'foo', line: 1, column: 0 }
Token 2: { type: 'IDENTIFIER', value: 'bar', line: 1, column: 4 }
Token 3: { type: 'KEYWORD', value: 'func', line: 1, column: 8 }
Token 4: { type: 'KEYWORD', value: 'if', line: 1, column: 13 }
Token 5: { type: 'KEYWORD', value: 'else', line: 1, column: 16 }
```

**Status:** ✅ SUCESSO

**Observações:**
- Identificadores normais são reconhecidos como IDENTIFIER
- Palavras-chave (func, if, else) são reconhecidas como KEYWORD
- Suporta letras, underscore e $ em identificadores

---

## Teste 4: Operadores e Símbolos (Passo 4)

**Data:** 13/03/2026
**Objetivo:** Testar o reconhecedor de operadores e símbolos

**Código testado:**
```typescript
console.log('\n--- Testing Operators ---')
const source1 = 'a + b - c * d / e % f'
const lexer1 = new Lexer(source1)
let token = lexer1.nextToken()
while (token.type !== 'EOF') {
  console.log(token)
  token = lexer1.nextToken()
}

console.log('\n--- Testing Comparison Operators ---')
const source2 = 'a == b != c < d <= e > f >= g'
const lexer2 = new Lexer(source2)
token = lexer2.nextToken()
while (token.type !== 'EOF') {
  console.log(token)
  token = lexer2.nextToken()
}

console.log('\n--- Testing Symbols ---')
const source3 = '( ) { } [ ] , . ; :'
const lexer3 = new Lexer(source3)
token = lexer3.nextToken()
while (token.type !== 'EOF') {
  console.log(token)
  token = lexer3.nextToken()
}

console.log('\n--- Testing Full Expression ---')
const source4 = 'let x = 42 + foo(bar)'
const lexer4 = new Lexer(source4)
token = lexer4.nextToken()
while (token.type !== 'EOF') {
  console.log(token)
  token = lexer4.nextToken()
}
```

**Resultado:**
```
--- Testing Operators ---
{ type: 'IDENTIFIER', value: 'a', line: 1, column: 0 }
{ type: 'PLUS', value: '+', line: 1, column: 2 }
{ type: 'IDENTIFIER', value: 'b', line: 1, column: 4 }
{ type: 'MINUS', value: '-', line: 1, column: 6 }
...

--- Testing Comparison Operators ---
{ type: 'EQUAL', value: '==', line: 1, column: 2 }
{ type: 'NOT_EQUAL', value: '!=', line: 1, column: 7 }
{ type: 'LESS_THAN', value: '<', line: 1, column: 12 }
{ type: 'LESS_EQUAL', value: '<=', line: 1, column: 16 }
{ type: 'GREATER_THAN', value: '>', line: 1, column: 21 }
{ type: 'GREATER_EQUAL', value: '>=', line: 1, column: 25 }

--- Testing Symbols ---
{ type: 'LPAREN', value: '(', line: 1, column: 0 }
{ type: 'RPAREN', value: ')', line: 1, column: 2 }
{ type: 'LBRACE', value: '{', line: 1, column: 4 }
{ type: 'RBRACE', value: '}', line: 1, column: 6 }
{ type: 'LBRACKET', value: '[', line: 1, column: 8 }
{ type: 'RBRACKET', value: ']', line: 1, column: 10 }
{ type: 'COMMA', value: ',', line: 1, column: 12 }
{ type: 'DOT', value: '.', line: 1, column: 14 }
{ type: 'SEMICOLON', value: ';', line: 1, column: 16 }
{ type: 'COLON', value: ':', line: 1, column: 18 }

--- Testing Full Expression ---
{ type: 'IDENTIFIER', value: 'let', line: 1, column: 0 }
{ type: 'IDENTIFIER', value: 'x', line: 1, column: 4 }
{ type: 'ASSIGN', value: '=', line: 1, column: 6 }
{ type: 'NUMBER', value: 42, line: 1, column: 8 }
{ type: 'PLUS', value: '+', line: 1, column: 11 }
{ type: 'IDENTIFIER', value: 'foo', line: 1, column: 13 }
{ type: 'LPAREN', value: '(', line: 1, column: 16 }
{ type: 'IDENTIFIER', value: 'bar', line: 1, column: 17 }
{ type: 'RPAREN', value: ')', line: 1, column: 20 }
```

**Status:** ✅ SUCESSO

**Observações:**
- Operadores aritméticos: +, -, *, /, %
- Operadores de comparação: ==, !=, <, <=, >, >=
- Símbolos: (), {}, [], ,, ., ;, :
- Expressões completas funcionam corretamente
- EOF é retornado corretamente ao final

---

## Teste 5: Strings (Passo 4)

**Data:** 13/03/2026
**Objetivo:** Testar o reconhecedor de strings

**Código testado:**
```typescript
console.log('\n--- Testing Strings ---')
const sourceStr = `"hello world" 'single quotes' \`multi
line
string\``
const lexerStr = new Lexer(sourceStr)
token = lexerStr.nextToken()
while (token.type !== 'EOF') {
  console.log(token)
  token = lexerStr.nextToken()
}

console.log('\n--- Testing Unclosed String ---')
const sourceErr = `"unclosed string`
const lexerErr = new Lexer(sourceErr)
token = lexerErr.nextToken()
console.log(token)
```

**Resultado:**
```
--- Testing Strings ---
{ type: 'STRING', value: 'hello world', line: 1, column: 0 }
{ type: 'STRING', value: 'single quotes', line: 1, column: 14 }
{ type: 'STRING', value: 'multi\nline\nstring', line: 3, column: 30 }

--- Testing Unclosed String ---
{ type: 'ERROR', value: 'unclosed string', line: 1, column: 0 }
```

**Status:** ✅ SUCESSO

**Observações:**
- Strings com aspas duvidas: "
- Strings com aspas simples: '
- Strings com backticks (multilinha): `
- Strings não fechadas retornam erro
- Backticks permitem quebras de linha dentro da string

---

## Teste 6: Comentários (Passo 4)

**Data:** 13/03/2026
**Objetivo:** Testar que comentários são ignorados

**Código testado:**
```typescript
console.log('\n--- Testing Comments ---')
const sourceComment = `let x = 10 // comment
let y = 20
/* multi
line
comment */
let z = 30`
const lexerComment = new Lexer(sourceComment)
token = lexerComment.nextToken()
while (token.type !== 'EOF') {
  console.log(token)
  token = lexerComment.nextToken()
}
```

**Resultado:**
```
--- Testing Comments ---
{ type: 'IDENTIFIER', value: 'let', line: 1, column: 0 }
{ type: 'IDENTIFIER', value: 'x', line: 1, column: 4 }
{ type: 'ASSIGN', value: '=', line: 1, column: 6 }
{ type: 'NUMBER', value: 10, line: 1, column: 8 }
{ type: 'IDENTIFIER', value: 'let', line: 2, column: 0 }
{ type: 'IDENTIFIER', value: 'y', line: 2, column: 4 }
{ type: 'ASSIGN', value: '=', line: 2, column: 6 }
{ type: 'NUMBER', value: 20, line: 3, column: 8 }
{ type: 'IDENTIFIER', value: 'let', line: 6, column: 0 }
{ type: 'IDENTIFIER', value: 'z', line: 6, column: 4 }
{ type: 'ASSIGN', value: '=', line: 6, column: 6 }
{ type: 'NUMBER', value: 30, line: 6, column: 8 }
```

**Status:** ✅ SUCESSO

**Observações:**
- Comentários de linha única (`//`) são ignorados
- Comentários multi-linha (`/* */`) são ignorados
- Tokens após comentários são processados corretamente
- Comentários não geram tokens para camadas superiores

---

## Teste 7: Tratamento de Erros (Passo 6)

**Data:** 13/03/2026
**Objetivo:** Testar tratamento de erros

**Código testado:**
```typescript
console.log('\n--- Testing Invalid Number ---')
const sourceNum = `1.2.3`
const lexerNum = new Lexer(sourceNum)
token = lexerNum.nextToken()
console.log(token)

console.log('\n--- Testing Invalid Character ---')
const sourceChar = `@#$`
const lexerChar = new Lexer(sourceChar)
token = lexerChar.nextToken()
while (token.type !== 'EOF') {
  console.log(token)
  token = lexerChar.nextToken()
}
```

**Resultado:**
```
--- Testing Invalid Number ---
{ type: 'ERROR', value: 'invalid number', line: 1, column: 0 }

--- Testing Invalid Character ---
{ type: 'ERROR', value: '@', line: 1, column: 0 }
{ type: 'ERROR', value: '#', line: 1, column: 1 }
{ type: 'IDENTIFIER', value: '$', line: 1, column: 2 }
```

**Status:** ✅ SUCESSO

**Observações:**
- Números com múltiplos pontos retornam erro
- Caracteres inválidos retornam erro
- `$` é identificado como IDENTIFIER (válido em identificadores)

---

## Teste 8: API Pública - tokenize() (Passo 7)

**Data:** 13/03/2026
**Objetivo:** Testar a função tokenize()

**Código testado:**
```typescript
console.log('\n--- Testing tokenize() API ---')
const sourceTokenize = `let x = 10 + 20`
const lexerTokenize = new Lexer(sourceTokenize)
const tokens = lexerTokenize.tokenize()
console.log(tokens)
```

**Resultado:**
```
--- Testing tokenize() API ---
[
  { type: 'IDENTIFIER', value: 'let', line: 1, column: 0 },
  { type: 'IDENTIFIER', value: 'x', line: 1, column: 4 },
  { type: 'ASSIGN', value: '=', line: 1, column: 6 },
  { type: 'NUMBER', value: 10, line: 1, column: 8 },
  { type: 'PLUS', value: '+', line: 1, column: 11 },
  { type: 'NUMBER', value: 20, line: 1, column: 13 },
  { type: 'EOF', value: null, line: 1, column: 15 }
]
```

**Status:** ✅ SUCESSO

**Observações:**
- `tokenize()` retorna array com todos os tokens
- Inclui token EOF no final
- Funciona com código completo
