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
