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

Passo 22 ContinueStatement             ✅
IMPLEMENTADO
  while (true) { continue }

---

## Adições Futuras (Não Implementadas)
- Switch statement
- Classes/Structs
- Try/Catch
- Operador ternário
- Import/require
