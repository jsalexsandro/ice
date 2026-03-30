Passo 1  Estrutura do Parser            ✅
IMPLEMENTADO

Passo 2  parseProgram                  ✅
IMPLEMENTADO

Passo 3  parseStatement                ✅
IMPLEMENTADO

Passo 3.1 parseExpressionStatement     ✅
IMPLEMENTADO

Passo 4  Precedence Table              ✅
IMPLEMENTADO

Passo 5  Pratt Parser                 ✅
IMPLEMENTADO

Passo 6  Prefix Expressions
   6.1 Literal (NumberLiteral)         ✅
   6.2 Identifier                      ✅
   6.3 GroupedExpression              ✅
   6.4 PrefixExpression (Unary)        ✅
IMPLEMENTADO

Passo 7  BinaryExpression              ✅
IMPLEMENTADO

Passo 8  CallExpression               ✅
IMPLEMENTADO

Passo 9  VariableDeclaration          ✅
IMPLEMENTADO
  - val com anotação de tipo
  - const com anotação de tipo
  - val com auto type
  - const com auto type
  - val sem inicializador
  - const sem inicializador (erro)
  - tipo inválido (erro)
  - tipos nativos: int, float, bool, string, void

  [Ver testes em parser.test.md](./parser.test.md)

Passo 10 BlockStatement                 ✅
IMPLEMENTADO

Passo 11 IfStatement                   ✅
IMPLEMENTADO
  - if (condição) { }
  - if (condição) statement
  - if (condição) { } else { }
  - if (condição) statement else statement



Passo 12 WhileStatement                ✅
IMPLEMENTADO
  - while (condição) { }
  - while (condição) statement

Passo 13 FunctionStmt                  ✅
IMPLEMENTADO
  - func nome(params) { }
  - func nome(params): tipo_retorno { }
  - Parâmetros com/sem tipo

Passo 13.1 ReturnStatement            ✅
IMPLEMENTADO
  - return valor
  - return (sem valor)

Passo 14 ArgumentList                ✅
IMPLEMENTADO
  - params: (a, b, c)
  - params com tipo: (a: int, b: string)

Passo 15 ExpressionList (Arrays)           ✅
IMPLEMENTADO
  - Array literals: [1, 2, 3]
  - Tipos de array: int[], string[]
  - Arrays heterogêneos (futuro)

---

Passo 16 AssignmentExpression          ✅
IMPLEMENTADO
  - x = 10
  - x = a + b
  - Atribuição em while/for

Passo 17 MemberExpression              ✅
IMPLEMENTADO
  user.name
  person.age
  Encadeamento: user.profile.name
  Atribuição: user.name = valor

Passo 18 IndexExpression               ✅
IMPLEMENTADO
  arr[0]
  numbers[i]
  Encadeamento: matrix[x][y]
  Atribuição: arr[0] = valor

Passo 19 LogicalExpression
  Operadores: &&, ||
  Exemplo: if (a > 10 && b < 5) {}

Passo 20 ForStatement                  ✅
IMPLEMENTADO
  for (val i = 0; i < 10; i = i + 1) { }

Passo 21 BreakStatement               ✅
IMPLEMENTADO
  while (true) { break }

Passo 22 ContinueStatement               ✅
IMPLEMENTADO
  while (true) { continue }

---

## ICEX - Implementação

o basico da gramatica está em icex.ice

### Fase 1: Lexer
Reutilizar tokens existentes: `<`, `>`, `{`, `}`, `=`, `/`
Parser controla todo fluxo, lexer não deve ser modificado

<tag>
    tudo aqui dentro é ICEX_Text
<tag/>

<tag>
    tudo aqui dentro é Icex Text
    { 2 + 4 } aqui é um interpolação deve aceitar codigo valido 
<tag/>

### Fase 2: AST (src/ast.ts)                  
Adicionar novos tipos:

```typescript
// IcexElement - elemento principal
export interface IcexElement extends Expr {
  kind: "IcexElement"
  tag: string
  attributes: IcexAttribute[]
  children: IcexChild[]
  isSelfClosing: boolean
  isComponent: boolean
}

// IcexAttribute - atributo da tag
export interface IcexAttribute {
  name: string
  value: Expr | string | boolean
}

// IcexChild - children pode ser texto, expressão ou elemento
export type IcexChild = IcexElement | IcexText | IcexExpression

// IcexText - texto puro dentro da tag
export interface IcexText {
  kind: "IcexText"
  value: string
}

// IcexExpression - interpolação {expressão}
export interface IcexExpression {
  kind: "IcexExpression"
  expression: Expr
}
```

Adicionar `IcexElement` ao tipo `Expr`.

### Fase 3: Parser - parsePrefix() (src/parser.ts)  
Modificar `parsePrefix()` para detectar `<tag`:

1. Se current token é `<` E peek token é IDENTIFIER → iniciar parse ICEX
2. Caso contrário, deixar para tratamento padrão (comparação)

### Fase 4: Parser - parseIcexElement()              
Fluxo completo:

```
1. Consumir '<'
2. Ler nome da tag (IDENTIFIER)
3. Detectar se é componente (primeira letra maiúscula) - para futura extensão
4. Parse atributos (enquanto IDENTIFIER)
5. Detectar self-closing (se '/>' encontrado)
6. Consumir '>'
7. Se não self-closing → parse children
8. Consumir '</tag>' de fechamento
9. Retornar IcexElement
```

### Fase 5: Parser - parseIcexAttributes()          
Parse de atributos:

```
- name="value"    → { name: "name", value: "value" }
- name={expr}     → { name: "name", value: expr }
- name            → { name: "name", value: true }  (boolean)
```

### Fase 6: Parser - parseIcexChildren()              
Loop até encontrar `</tag>`:

- Texto puro → IcexText
- `{` + expressão + `}` → IcexExpression  
- `<` + tag → IcexElement (recursivo)

### Fase 7: Parser - Validação de erros             
- Tag não fechada → erro de parser
- Tag de fechamento incorreta (ex: `<tag></div>`) → erro de parser

### Fase 8: Precedence                              
Adicionar `<` e `>` com alta precedência (como DOT, LBRACKET) para permitir:
- `<tag>` como expressão
- `a < b` como comparação (em contextos não-ICEX)

---

## Exemplos de Input/Output

| Input | Output AST |
|-------|------------|
| `<tag/>` | IcexElement { tag: "tag", isSelfClosing: true } |
| `<tag></tag>` | IcexElement { tag: "tag", isSelfClosing: false } |
| `<tag>Hello</tag>` | IcexElement + IcexText |
| `<tag>{name}</tag>` | IcexElement + IcexExpression |
| `<tag><child/></tag>` | IcexElement + IcexElement aninhado |
| `<tag a="b"/>` | IcexElement + IcexAttribute |
| `<tag a={b}/>` | IcexElement + IcexAttribute (Expr) |

---

## Arquivos a modificar
1. `src/lexer.ts` 
2. `src/ast.ts` - adicionar tipos
3. `src/parser.ts` - adicionar parsing ICEX

---

## Adições Futuras (Não Implementadas)
- Switch statement
- Classes/Structs
- Anonimus functions
- arrow function
- ?? 
- ?: ternario
- Try/Catch
- Operador ternário
- Import/require

---

## Features Faltantes - Análise Completa

### Features de Sintaxe

| # | Feature | Status | Prioridade | Notas |
|---|---------|--------|------------|-------|
| 1 | Try-Catch | ⚠️ Parcial | Alta | Keywords existem (`try`, `catch`, `throw`), mas não são parsed |
| 2 | Switch/Match | ❌ Falta | Média | Não existe, útil para match de valores |
| 3 | Classes | ⚠️ Parcial | Alta | Keywords existem (`class`, `new`, `this`), não são parsed |
| 4 | Import/Export | ⚠️ Parcial | Alta | Keywords existem, não são parsed |
| 5 | Ternary `? :` | ❌ Falta | Alta | Operador condicional essencial |
| 6 | Do-While | ❌ Falta | Baixa | Só tem `while` |
| 7 | Lambdas | ❌ Falta | Alta | Arrow functions para callbacks |
| 8 | Generics `<T>` | ❌ Falta | Média | Só arrays `[]` por enquanto |
| 9 | Async/Await | ⚠️ Parcial | Alta | Keywords existem, não são parsed |
| 10 | Null Safety `?.` `??` | ❌ Falta | Alta | Optional chaining e coalescing |
| 11 | String Interpolation `$""` | ❌ Falta | Alta | Templates string nativos |
| 12 | Range/Iterator `..` | ❌ Falta | Média | Para loops estilo `for i in 0..10` |

### Bugs Conhecidos

| Bug | Severidade | Descrição | Solução |
|-----|------------|-----------|---------|
| Erro Recovery | Alta | Parser para no primeiro erro | Implementar recovery mechanism |
| ICEX Comments | Média | `<!-- -->` vira texto | Adicionar skip de comentários em ICEX |
| Contexto de Erros | Média | Mensagens sem contexto útil | Adicionar expected/got context |

### Keywords Definidas mas Não Parsed

```
src/keywords.ts - KEYWORDS array
├── try, catch, throw       → Error handling
├── class, new, this         → OOP
├── import, export, from     → Módulos
└── async, await             → Async programming
```

### Plano de Implementação

#### Fase 1: Features Essenciais para Web (Alta Prioridade)
1. **Try-Catch** - Error handling básico
2. **Async/Await** - Programação assíncrona
3. **Ternary** - Operador condicional
4. **Null Safety** - `?.` e `??`
5. **Classes** - OOP básico

#### Fase 2: Features de Conveniência
1. **String Interpolation** - `$"hello {name}"`
2. **Lambdas** - Arrow functions
3. **Import/Export** - Módulos

#### Fase 3: Features Avançadas
1. **Switch/Match** - Pattern matching
2. **Generics** - Type parameters
3. **Range/Iterator** - Loop estilizado
4. **Do-While** - Loop invertido

### Métricas de Cobertura

| Componente | Cobertura | Notes |
|------------|-----------|-------|
| Statements | ~80% | Falta: try-catch, class, switch |
| Expressions | ~75% | Falta: ternary, null safety |
| Types | ~70% | Falta: generics, unions |
| Modules | ~0% | Import/export não implementado |
| Error Handling | ~20% | Só parsing errors, sem recovery |

### Features Implementadas (Total: 22 Passos)

| # | Passo | Status |
|---|-------|--------|
| 1 | Estrutura do Parser | ✅ |
| 2 | parseProgram | ✅ |
| 3 | parseStatement | ✅ |
| 3.1 | parseExpressionStatement | ✅ |
| 4 | Precedence Table | ✅ |
| 5 | Pratt Parser | ✅ |
| 6 | Prefix Expressions | ✅ |
| 6.1 | Literal (NumberLiteral) | ✅ |
| 6.2 | Identifier | ✅ |
| 6.3 | GroupedExpression | ✅ |
| 6.4 | PrefixExpression (Unary) | ✅ |
| 7 | BinaryExpression | ✅ |
| 8 | CallExpression | ✅ |
| 9 | VariableDeclaration | ✅ |
| 10 | BlockStatement | ✅ |
| 11 | IfStatement | ✅ |
| 12 | WhileStatement | ✅ |
| 13 | FunctionStmt | ✅ |
| 13.1 | ReturnStatement | ✅ |
| 14 | ArgumentList | ✅ |
| 15 | ExpressionList (Arrays) | ✅ |
| 16 | AssignmentExpression | ✅ |
| 17 | MemberExpression | ✅ |
| 18 | IndexExpression | ✅ |
| 19 | LogicalExpression | ✅ |
| 20 | ForStatement | ✅ |
| 21 | BreakStatement | ✅ |
| 22 | ContinueStatement | ✅ |
