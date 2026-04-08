# Parser Implementations - Ice Lang

Este documento rastreia a implementação do parser Ice Lang.

---

## Features Implementadas ✅

| # | Feature | Sintaxe |
|---|---------|---------|
| 1 | parseProgram | Entry point |
| 2 | parseStatement | parseStatement |
| 3 | parseExpressionStatement | Expressão como statement |
| 4 | Precedence Table | Tabela de precedência |
| 5 | Pratt Parser | Parser combinador |
| 6 | Literal | number, string, boolean, null |
| 7 | Identifier | Variáveis, nomes |
| 8 | GroupedExpression | `(expr)` |
| 9 | PrefixExpression (Unary) | `-`, `+`, `!` |
| 10 | BinaryExpression | `+`, `-`, `*`, `/`, `%` |
| 11 | CallExpression | `fn(a, b)` |
| 12 | VariableDeclaration | `val`/`const` |
| 13 | BlockStatement | `{ ... }` |
| 14 | IfStatement | `if/else` |
| 15 | WhileStatement | `while` |
| 16 | FunctionStmt | `func` |
| 17 | ReturnStatement | `return` |
| 18 | ArgumentList | `(a: int, b: string)` |
| 19 | Array | `[1, 2, 3]`, `int[]` |
| 20 | Assignment | `x = 10` |
| 21 | MemberExpression | `obj.prop`, `obj.if` |
| 22 | IndexExpression | `arr[0]`, `obj["key"]` |
| 23 | LogicalExpression | `&&`, `\|\|` |
| 24 | ForStatement | `for (val i = 0; ...)` |
| 25 | BreakStatement | `break` |
| 26 | ContinueStatement | `continue` |
| 27 | ClassStatement | `class` |
| 28 | ThisExpr | `this` |
| 29 | SuperExpr | `super` |
| 30 | NewExpr | `new Class()` |

| 31 | TryCatchStmt | `try { } catch { }` | ✅ Implementado
| 32 | ThrowStmt | `throw new Error()` | ✅ Implementado
| 33 | ImportStmt | `import ... from ...` | ✅ Implementado

---

## Class Features Added
✓ basic class
✓ property (com tipo, com valor default)
✓ public/private/protected
✓ static property
✓ static method
✓ constructor (com params, array types, super())
✓ method (com params, return type)
✓ extends (herança)
✓ new expression
✓ super in constructor
✓ this expression
✓ ASI (Automatic Semicolon Insertion) - corrigido
✓ Array types em constructor params
✓ Métodos retornando ICEX
✓ new expressions dentro de métodos
✓ loops (while, for) dentro de classes
✓ Construtor com param visibility**
✓ Construtor no block code (construtor())

---

## Try-Catch-Finally  ✅ Implementado

✅ try-catch básico
✅ try-catch com parâmetro (e: Error)
✅ múltiplos catch
✅ finally block
✅ throw new Error("msg")
✅ throw string
✅ try aninhado com throw

---

## Expressões

### Implementadas ✅

| # | Expressão | Exemplo |
|---|-----------|---------|
| 1 | Binary | `a + b`, `a - b` |
| 2 | Unary | `-10`, `+10`, `!true` |
| 3 | Logical | `a && b`, `a \|\| b` |
| 4 | Comparison | `==`, `!=`, `<`, `>`, `<=`, `>=` |
| 5 | Ternary | `a ? b : c` |
| 6 | Member | `obj.prop`, `obj.if` (keywords) |
| 7 | Index | `arr[0]`, `obj["key"]` |
| 8 | Call | `fn(a, b)` |
| 9 | Group | `(a + b)` |
| 10 | Object | `{a: 1, b: 2}` |
| 11 | Array | `[1, 2, 3]` |
| 12 | Identifier | `name` |
| 13 | Literal | `"text"`, `123`, `true`, `null` |
| 14 | Nullish Coalescing | `a ?? b` |
| 15 | Arrow Function | `x => x`, `(x: int) => x + 1` |
| 16 | String Interpolation | `$`hello {name}` ` |

### Faltantes ❌

| # | Expressão | Sintaxe |
|---|-----------|---------|
| 1 | ~~String Interpolation~~ | ~~$`hello {name}`~~ ✅ Implementado |
| 2 | Spread | `...obj` |
| 3 | Export Statement | `export { x }` |

---

## ICEX (JSX-like)  ✅ Implementado

### Tipos AST

```typescript
interface IcexElement {
  kind: "IcexElement"
  tag: string
  attributes: IcexAttribute[]
  children: IcexChild[]
  isSelfClosing: boolean
}

interface IcexAttribute {
  name: string
  value: Expr | string | boolean
}

type IcexChild = IcexElement | IcexText | IcexExpression
```

### Exemplos

| Input | Output |
|-------|--------|
| `<tag/>` | IcexElement (self-closing) |
| `<tag></tag>` | IcexElement |
| `<tag>Hello</tag>` | + IcexText |
| `<tag>{expr}</tag>` | + IcexExpression |
| `<tag a={b}/>` | + IcexAttribute |

---

## Features Faltantes

| # | Feature | Prioridade | Notas |
|---|---------|------------|-------|
| 1 | ~~Try-Catch~~ | ~~Alta~~ | ✅ Implementado |
| 2 | Switch/Match | Média | Não existe |
| 3 | ~~Import/Export~~ | ~~Alta~~ | ✅ Implementado `import { x } from mod` |
| 4 | Do-While | Baixa | Só tem `while` |
| 5 | ~~Lambdas/Arrow~~ | ~~Alta~~ | ✅ Implementado `x => x * 2` |
| 6 | Async/Await | Alta | Keywords existem |
| 7 | ~~Type annotation multidimensional~~ | ~~Média~~ | ✅ Implementado `int[][]` em parâmetros/return/var |
| 8 | Export Statement | Alta | Keyword `export` existe, não parseado |
---

## Bugs Conhecidos

| Bug | Severidade | Descrição |
|-----|------------|-----------|
| Erro Recovery | Alta | Parser para no primeiro erro |
| ICEX Comments | Média | `<!-- -->` vira texto |
| Mensagens de Erro | Média | Sem contexto útil |

---

## Keywords Definidas e Parsed

```
try, catch, throw, finally  → Parsed
import, from, as            → Import parsed ✅
export                       → Não parsed
async, await               → Não parsed
```

---

## Classes ✅ Implementado
```

### Sintaxe Suportada

| Feature | Exemplo |
|---------|---------|
| Classe básica | `class User { }` |
| Propriedade | `name: string` |
| Propriedade com valor | `count: int = 0` |
| Visibilidade | `public`, `private`, `protected` |
| Static property | `static count: int` |
| Static method | `static getCount(): int { }` |
| Herança | `class User extends Person { }` |
| Construtor | `constructor(name: string) { }` |
| Construtor com array types | `constructor(data: int[]) { }` |
| **Construtor com param visibility** | `constructor(public name: string, private age: int)` |
| Super no construtor | `super(name)` |
| Método | `getName(): string { return "test" }` |
| Método retornando ICEX | `render(): string { return <div/> }` |
| This expression | `this.name = name` |
| Super expression | `super.method()` |
| New expression | `new User()` |
| New em método | `new DataWidget(...)` |
| ASI (sem `;`) | `super() \n this.x = 1` |
| Loops em métodos | `while`, `for`, `continue`, `break` |
| Construtores sem bloco de codigo obrigatorio. -> constructor(public name: string)

### Não Implementado (ainda) (para um futuro distante)
- Class expressions (apenas declarações)
- Abstract classes
- Interfaces
- Overloading
- Decorators
- Generic types

---

## Arrow Functions  ✅ Implementado

### Tipos AST

```typescript
interface ArrowFunctionExpr {
  kind: "ArrowFunction"
  params: { name: Token; type?: Token }[]
  returnType?: Token
  body: Expr | Stmt
}
```

### Sintaxe

| Feature | Exemplo |
|---------|---------|
| Parâmetro único | `x => x * 2` |
| Com parênteses | `(x) => x + 1` |
| Múltiplos parâmetros | `(x, y) => x + y` |
| Com tipos | `(x: int) => x` |
| Com return type | `(x: int): int => x` |
| Bloco | `x => { return x * 2 }` |
| Em chamada | `items.map(x => x * 2)` |
| Sem parâmetros | `() => defaultValue` |

---

## String Interpolation  ✅ Implementado

### Tipos AST

```typescript
interface TemplateLiteralExpr {
  kind: "TemplateLiteral"
  quasis: string[]
  expressions: (Expr | null)[]
}
```

### Sintaxe

| Feature | Exemplo |
|---------|---------|
| Template simples | `$`hello` ` |
| Com interpolação | `$`hello {name}` ` |
| Múltiplas expressões | `$`{a} + {b} = {a + b}` ` |
| Acesso a objetos | `$`User: {user.name}` ` |
| Acesso a arrays | `$`Items: {arr[0]}` ` |
| Métodos | `$`Count: {items.length}` ` |
| Expressões complexas | `$`Result: {(x + y) * z}` ` |

### Notas
- Usa backticks: `` $`...` ``
- Expressões dentro de `{}` são parseadas recursivamente
- Requer `templateMode: true` no Lexer

---

## Import Statement  ✅ Implementado

### Tipos AST

```typescript
interface ImportSpecifier {
  kind: "ImportSpecifier"
  name: string
  alias?: string
}

interface ImportStmt {
  kind: "ImportStmt"
  source: string
  specifiers?: ImportSpecifier[]
  alias?: string
}
```

### Sintaxe

| Feature | Exemplo |
|---------|---------|
| Import completo | `import math` |
| Import caminho | `import web.document` |
| Import específico | `import { pow } from math` |
| Múltiplos | `import { pow, sqrt, sin } from math` |
| Alias módulo | `import math as m` |
| Alias membro | `import { pow as power } from math` |

### Notas
- Keyword `as` adicionada ao lexer
- `source` contém o caminho do módulo
- Resolução de módulos (index.ice) fica por conta do module loader

---

## Try-Catch-Finally  ✅ Implementado

### Tipos AST

```typescript
interface TryCatchStmt {
  kind: "TryCatchStmt"
  tryBlock: BlockStmt
  catchClauses: CatchClause[]
  finallyBlock?: BlockStmt
}

interface CatchClause {
  param?: { name: Token; type?: Token }
  body: BlockStmt
}

interface ThrowStmt {
  kind: "ThrowStmt"
  value: Expr
}
```

### Sintaxe 

| Feature | Exemplo |
|---------|---------|
| try-catch básico | `try { } catch { }` |
| try-catch com param | `try { } catch (e: Error) { }` |
| múltiplos catch | `catch (e: Error) { } catch (e: Exception) { }` |
| try-catch-finally | `try { } catch { } finally { }` |
| throw new Error | `throw new Error("msg")` |
| throw string | `throw "erro"` |
| throw expression | `throw getError()` |
| try aninhado | `try { try { } catch {} } catch {}` |

---

## Plano de Implementação

### Fase 1: Essentials
1. ~~Classes~~ ✅ (completo!)
2. ~~Try-Catch~~  ✅ (completo!)


### Fase 2: Conveniência
1. ~~String Interpolation (`$""`)~~ ✅
2. ~~Arrow Functions~~ ✅ (completo!)
3. ~~Import/Export~~ ✅

### Fase 3: Avançadas
1. Switch/Match
2. Do-While
3. Range/Iterator
4. Async/Await

---

## Métricas

| Componente | Cobertura |
|------------|-----------|
| Statements | ~95% |
| Expressions | ~85% |
| Types | ~80% |
| Classes | ~100% |
| Modules | ~50% |
| Error Handling | ~100% |

