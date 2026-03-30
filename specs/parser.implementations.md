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

---


## Class Features Added
✓ basic class
✓ property
✓ public/private/protected
✓ static property
✓ static with default
✓ constructor
✓ constructor with body
✓ method
✓ static method
✓ extends
✓ extends with props
✓ new expression
✓ new with args
✓ super in constructor
✓ full class


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

### Faltantes ❌

| # | Expressão | Sintaxe |
|---|-----------|---------|
| 1 | String Interpolation | `$"hello {name}"` |
| 2 | Spread | `...obj` |
| 3 | Arrow Functions | `fn(x) => x + 1` |

---

## ICEX (JSX-like)

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
| 1 | Try-Catch | Alta | Keywords existem, não parseado |
| 2 | Switch/Match | Média | Não existe |
| 3 | Import/Export | Alta | Keywords existem, não parseado |
| 4 | Do-While | Baixa | Só tem `while` |
| 5 | Lambdas/Arrow | Alta | Não existe |
| 6 | Generics | Média | Só arrays `[]` |
| 7 | Async/Await | Alta | Keywords existem |

---

## Bugs Conhecidos

| Bug | Severidade | Descrição |
|-----|------------|-----------|
| Erro Recovery | Alta | Parser para no primeiro erro |
| ICEX Comments | Média | `<!-- -->` vira texto |
| Mensagens de Erro | Média | Sem contexto útil |

---

## Keywords Definidas mas Não Parsed

```
try, catch, throw       → Error handling
new                     → OOP (instanciar classes)
import, export, from    → Módulos
async, await            → Async
```

---

## Classes ✅ Implementado

### Tipos AST

```typescript
interface ClassExpr {
  kind: "Class"
  name: string
  extends?: string
  properties: ClassProperty[]
  methods: ClassMethod[]
}

interface ClassProperty {
  name: string
  type?: Token
  visibility: "public" | "private" | "protected" | null
  isStatic: boolean
  initializer?: Expr
}

interface ClassMethod {
  name: string
  params: { name: Token; type?: Token }[]
  returnType?: Token
  body: BlockStmt
  visibility: "public" | "private" | "protected" | null
  isStatic: boolean
}
```

### Sintaxe Suportada

| Feature | Exemplo |
|---------|---------|
| Classe básica | `class User { }` |
| Propriedade | `name: string` |
| Propriedade com valor | `count: int = 0` |
| Visibilidade | `public`, `private`, `protected` |
| Static | `static count: int` |
| Herança | `class User extends Person { }` |
| Construtor | `constructor(name: string) { }` |
| Método | `getName(): string { return "test" }` |
| This | `this.name = name` |

---

## Plano de Implementação

### Fase 1: Essentials
1. ~~Classes básico~~ ✅
2. Try-Catch

### Fase 2: Conveniência
1. String Interpolation (`$""`)
2. Arrow Functions
3. Import/Export

### Fase 3: Avançadas
1. Switch/Match
2. Generics
3. Do-While
4. Range/Iterator

---

## Métricas

| Componente | Cobertura |
|------------|-----------|
| Statements | ~85% |
| Expressions | ~80% |
| Types | ~70% |
| Classes | ~90% |
| Modules | ~0% |
| Error Handling | ~20% |
