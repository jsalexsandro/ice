## Variable Declaration Tests

### 1. val com anotação de tipo
```ice
val name: string = "Olá"
```
**Resultado:** ✅ Sucesso
- `type`: "val"
- `typeAnnotation`: "string"
- `name`: "name"
- `initializer`: "Olá"

### 2. const com anotação de tipo
```ice
const year: int = 30
```
**Arquivo:** `tests/parser/test_parser_02.json`
**Resultado:** ✅ Sucesso
- `type`: "const"
- `typeAnnotation`: "int"
- `name`: "year"
- `initializer`: 30

### 3. val com auto type
```ice
val x = 10
```
**Resultado:** ✅ Sucesso
- `type`: "val"
- `name`: "x"
- `initializer`: 10
- `typeAnnotation`: undefined

### 4. const com auto type
```ice
const y = 20
```
**Resultado:** ✅ Sucesso
- `type`: "const"
- `name`: "y"
- `initializer`: 20
- `typeAnnotation`: undefined

### 5. val sem inicializador
```ice
val test;
```
**Resultado:** ✅ Sucesso
- `type`: "val"
- `name`: "test"
- `initializer`: undefined
- `typeAnnotation`: undefined

### 6. const sem inicializador (erro)
```ice
const test;
```
**Resultado:** ✅ Erro lançado corretamente
- `ParserError: Constant 'test' must be initialized at line 2, column 6`

### 7. tipo personalizado (qualquer identificador é aceito)
```ice
val x: qualquerCoisa = 10
```
**Resultado:** ✅ Sucesso
- O parser aceita qualquer identificador como tipo
- O tipo é tokenizado como IDENTIFIER
- A validação de tipos será feita pelo Semantic Analyzer no futuro

### 8. Tipos nativos: int, float, bool, string, void

#### int
```ice
val a: int = 10
```
**Resultado:** ✅ Sucesso

#### float
```ice
val b: float = 1.5
```
**Resultado:** ✅ Sucesso

#### bool
```ice
val c: bool = true
```
**Resultado:** ✅ Sucesso

#### string
```ice
val d: string = "hello"
```
**Resultado:** ✅ Sucesso

#### void
```ice
val e: void
```
**Resultado:** ✅ Sucesso

### 9. const com tipo void (requer inicialização com null)
```ice
const a: void = null
```
**Resultado:** ✅ Sucesso
- `type`: "const"
- `typeAnnotation`: "void"
- `name`: "a"
- `initializer`: null
- Nota: Validação de tipo (void = null) será feita pelo Analisador Semântico no futuro

---

## Error Tests

### 10. val com atribuidor sem expressão
```ice
val name = 
```
**Resultado:** ✅ Erro lançado corretamente
- `ParserError: Parser Error: Expected expression but got 'EOF' at line 3, column 0`

### 11. const com atribuidor sem expressão
```ice
const name = 
```
**Resultado:** ✅ Erro lançado corretamente
- `ParserError: Parser Error: Expected expression but got 'EOF' at line 3, column 0`

### 12. const sem inicializador
```ice
const test;
```
**Resultado:** ✅ Erro lançado corretamente
- `ParserError: Parser Error: Constant 'test' must be initialized at line 2, column 6`

### 13. tipo personalizado (aceito pelo parser)
```ice
val x: invalidType = 10
```
**Resultado:** ✅ Sucesso
- O parser aceita qualquer identificador como tipo
- A validação de tipos será feita pelo Semantic Analyzer no futuro

---

## BlockStatement Tests

### 14. Bloco vazio
```ice
{}
```
**Resultado:** ✅ Sucesso

### 15. Bloco com statements
```ice
{
  val x = 10
  val y = 20
}
```
**Resultado:** ✅ Sucesso

---

## IfStatement Tests

### 16. if com bloco
```ice
if (true) {
  val x = 10
}
```
**Resultado:** ✅ Sucesso

### 17. if sem bloco (single statement)
```ice
if (true)
  val x = 10
```
**Resultado:** ✅ Sucesso

### 18. if-else com blocos
```ice
if (true) {
  val x = 10
} else {
  val y = 20
}
```
**Resultado:** ✅ Sucesso

### 19. if-else sem blocos
```ice
if (true)
  val x = 10
else
  val y = 20
```
**Resultado:** ✅ Sucesso

### 20. if com expressão condicional
```ice
if (x > 5) {
  val a = 1
}
```
**Resultado:** ✅ Sucesso

---

## WhileStatement Tests

### 21. while com bloco
```ice
while (true) {
  val x = 10
}
```
**Resultado:** ✅ Sucesso

### 22. while sem bloco
```ice
while (true)
  val x = 10
```
**Resultado:** ✅ Sucesso

### 23. while com expressão condicional
```ice
while (x > 0) {
  val a = 1
}
```
**Resultado:** ✅ Sucesso

---

## FunctionStatement Tests

### 24. função sem parâmetros
```ice
func test() {
  val x = 10
}
```
**Resultado:** ✅ Sucesso

### 25. função com parâmetros
```ice
func test(a: int, b: int) {
  return a + b
}
```
**Resultado:** ✅ Sucesso

### 26. função com parâmetros e tipo de retorno
```ice
func test(a: int, b: int): int {
  return a + b
}
```
**Resultado:** ✅ Sucesso

---

## ReturnStatement Tests

### 27. return com valor
```ice
func test(): int {
  return 10
}
```
**Resultado:** ✅ Sucesso

### 28. return sem valor
```ice
func test() {
  return
}
```
**Resultado:** ✅ Sucesso

### 29. return com expressão
```ice
func test(): int {
  return 5 + 5
}
```
**Resultado:** ✅ Sucesso

---

## Array Tests

### 30. array com tipo int[]
```ice
val numeros: int[] = [1, 2, 3]
```
**Resultado:** ✅ Sucesso

### 31. array com tipo string[]
```ice
val nomes: string[] = ["John", "Doe"]
```
**Resultado:** ✅ Sucesso

### 32. array com tipo automático
```ice
val automatico = [1, 2, 3]
```
**Resultado:** ✅ Sucesso

### 33. array vazio
```ice
val vazio: int[] = []
```
**Resultado:** ✅ Sucesso

### 34. função com tipos personalizados
```ice
func teste(param: qualquerCoisa): outroTipo {
  return 10
}
```
**Resultado:** ✅ Sucesso
- O parser aceita qualquer identificador como tipo
- A validação de tipos será feita pelo Semantic Analyzer no futuro

---

## AssignmentExpression Tests

### 35. atribuição simples
```ice
x = 10
```
**Resultado:** ✅ Sucesso

### 36. atribuição com expressão
```ice
x = a + b
```
**Resultado:** ✅ Sucesso

### 37. atribuição em while
```ice
while (x > 10 + 5) {
  x = x - 1
}
```
**Resultado:** ✅ Sucesso

---

## Mixed Features Tests

### 38. chamada de função simples
```ice
print("Olá mundo")
```
**Resultado:** ✅ Sucesso

### 39. múltiplos argumentos
```ice
sum(10, 20, 30)
```
**Resultado:** ✅ Sucesso

### 40. chamada em expressão
```ice
val result = sum(10, 20) + 5
```
**Resultado:** ✅ Sucesso

### 41. if com chamada na condição
```ice
if (isValid(user)) {
  val ok = true
}
```
**Resultado:** ✅ Sucesso

### 42. array com expressões
```ice
val numeros = [1 + 2, 3 * 4, 5]
```
**Resultado:** ✅ Sucesso

### 43. função retornando array
```ice
func create(): int[] {
  return [1, 2, 3]
}
```
**Resultado:** ✅ Sucesso

### 44. função chamando outra função
```ice
func calc(): int {
  return sum(5, 5)
}
```
**Resultado:** ✅ Sucesso

### 45. if aninhado
```ice
if (true) {
  if (false) {
    val x = 10
  }
}
```
**Resultado:** ✅ Sucesso

### 46. while dentro de função
```ice
func loop() {
  while (true) {
    val x = 1
  }
}
```
**Resultado:** ✅ Sucesso

### 47. função com tipo de retorno array
```ice
func create(): int[] {
  return [1, 2, 3]
}
```
**Resultado:** ✅ Sucesso

### 48. expressões misturadas
```ice
sum(1, 2) + 3 * 4
```
**Resultado:** ✅ Sucesso

### 49. precedência de operadores
```ice
1 + 2 * 3
```
**Resultado:** ✅ Sucesso
- Observação: 2 * 3 é avaliado primeiro (precedência correta)

### 50. nested calls
```ice
print(sum(1, 2))
```
**Resultado:** ✅ Sucesso

### 51. arrays com expressões
```ice
[1, 2 + 3, sum(4, 5)]
```
**Resultado:** ✅ Sucesso

---

## Error Tests

### 52. parêntese não fechado
```ice
val x = (10 + 5
```
**Resultado:** ✅ Erro lançado
- `ParserError: Expected RPAREN but got EOF`

### 53. array com vírgula inválida (trailing comma)
```ice
val a = [1, 2, ]
```
**Resultado:** ✅ Erro lançado
- `ParserError: Expected expression but got 'RBRACKET'`

---

## Unary Expression Tests

### 54. unary minus em expressão
```ice
val x = -5 * 2
```
**Resultado:** ✅ Sucesso
- `-5 * 2` é parsed como: `Binary(Unary(-, 5), *, 2)`
- Isso é igual a `(-5) * 2` = -10 (correto!)

---

## Advanced Expression Tests

### 55. associatividade de assignment
```ice
a = b = 10
```
**Resultado:** ✅ Sucesso
- Parsed como: `Assign(a, Assign(b, 10))`
- Assignment é right-associative

### 56. chamada + precedência
```ice
sum(1,2) * 3 + 4
```
**Resultado:** ✅ Sucesso
- Parsed como: `Binary(Binary(Call(sum, 1, 2), *, 3), +, 4)`

### 57. chamada encadeada
```ice
print(sum(1,2))(3)
```
**Resultado:** ✅ Sucesso
- Parsed como: `Call(Call(print, Call(sum, 1, 2)), 3)`

---

## MemberExpression Tests

### 58. MemberExpression básico
```ice
user.name
```
**Resultado:** ✅ Sucesso
- Parsed como: `Member(object: Identifier(user), property: name)`

### 59. MemberExpression encadeado
```ice
user.profile.name
```
**Resultado:** ✅ Sucesso
- Parsed como: `Member(Member(user, profile), name)`

---

## IndexExpression Tests

### 60. IndexExpression básico
```ice
arr[0]
```
**Resultado:** ✅ Sucesso
- Parsed como: `Index(object: Identifier(arr), index: 0)`

### 61. IndexExpression encadeado
```ice
matrix[0][1]
```
**Resultado:** ✅ Sucesso
- Parsed como: `Index(Index(matrix, 0), 1)`

---

## Assignment com L-Value Tests

### 62. Assignment com IndexExpression
```ice
arr[0] = 10
```
**Resultado:** ✅ Sucesso
- Parsed como: `Assign(name: Index(arr, 0), value: 10)`

### 63. Assignment com MemberExpression
```ice
user.name = "John"
```
**Resultado:** ✅ Sucesso
- Parsed como: `Assign(name: Member(user, name), value: "John")`

---

## ForStatement Tests

### 64. ForStatement completo
```ice
for (val i = 0; i < 3; i = i + 1) {
  print(i)
}
```
**Resultado:** ✅ Sucesso
- Parsed como: `ForStmt(initializer, condition, update, body)`

---

## Precedence Tests

### 65. Unary precedence (-5 * 2)
```ice
-5 * 2
```
**Resultado:** ✅ Sucesso
- Parsed como: `Binary(Unary(-, 5), *, 2)`
- Unary tem precedência IGUAL ao `*`, então `-5 * 2` = `(-5) * 2` = -10

### 66. Unary precedence (-a + b)
```ice
-a + b
```
**Resultado:** ✅ Sucesso
- Parsed como: `Binary(Unary(-, a), +, b)`
- Unary tem precedência MAIOR que `+`, então `-a + b` = `(-a) + b`

---

## Combined Expression Tests

### 67. Expressões combinadas complexas
```ice
obj.method()[0].name()
```
**Resultado:** ✅ Sucesso
- Parsed como: `Call(Member(Index(Call(Member(obj, method)), 0), name))`
- Encadeamento completo: Call → Member → Index → Call → Member → Identifier

---

## Unary Expression Avançados

### 68. Unary múltiplo
```ice
!!true
```
**Resultado:** ✅ Sucesso
- Parsed como: `Unary(!, Unary(!, true))`

### 69. Unary com chamada
```ice
-sum(1, 2)
```
**Resultado:** ✅ Sucesso
- Parsed como: `Unary(-, Call(sum, 1, 2))`

### 70. Unary com member
```ice
-user.age
```
**Resultado:** ✅ Sucesso
- Parsed como: `Unary(-, Member(user, age))`

### 71. Unary com index
```ice
-arr[0]
```
**Resultado:** ✅ Sucesso
- Parsed como: `Unary(-, Index(arr, 0))`

---

## Error Tests - Chamadas

### 72. Chamada sem fechar parêntese
```ice
sum(1, 2
```
**Resultado:** ✅ Erro correto
- `ParserError: Expected token RPAREN but got EOF`

### 73. Vírgula inválida em chamada
```ice
sum(1,,2)
```
**Resultado:** ✅ Erro correto
- `ParserError: Expected expression but got 'COMMA'`

### 74. Vírgula no início
```ice
sum(,1)
```
**Resultado:** ✅ Erro correto
- `ParserError: Expected expression but got 'COMMA'`

---

## Error Tests - Membros e Index

### 75. Acesso inválido (user.)
```ice
user.
```
**Resultado:** ✅ Erro correto
- `ParserError: Expected token IDENTIFIER but got EOF`

### 76. Index vazio (arr[])
```ice
arr[]
```
**Resultado:** ✅ Erro correto
- `ParserError: Expected expression but got 'RBRACKET'`

### 77. Index sem fechar (arr[1)
```ice
arr[1
```
**Resultado:** ✅ Erro correto
- `ParserError: Expected token RBRACKET but got EOF`

---

## Error Tests - Statements

### 78. If sem condição
```ice
if () {
}
```
**Resultado:** ✅ Erro correto
- `ParserError: Expected expression but got 'RPAREN'`

### 79. While sem condição
```ice
while () {
}
```
**Resultado:** ✅ Erro correto
- `ParserError: Expected expression but got 'RPAREN'`

### 80. Função sem nome
```ice
func () {
}
```
**Resultado:** ✅ Erro correto
- `ParserError: Expected token IDENTIFIER but got LPAREN`

### 81. Parâmetros com trailing comma
```ice
func test(a: int,) {
}
```
**Resultado:** ✅ Erro correto
- `ParserError: Expected token IDENTIFIER but got RPAREN`

---

## Error Tests - Assignment

### 82. Assignment com literal (5 = x)
```ice
5 = x
```
**Resultado:** ✅ Erro correto (corrigido)
- `ParserError: Invalid assignment target`
- O parser agora valida que o lado esquerdo do assignment é um l-value válido

---

## Teste Crítico de Encadeamento

### 83. Encadeamento completo de expressões
```ice
a.b()[0].c(d)[1]
```
**Resultado:** ✅ Sucesso
- Parseado como: `Index(Call(Member(Index(Call(Member(a, b)), 0), c), [d]), 1)`
- Estrutura: Identifier → Member → Call → Index → Member → Call → Index
- Este é o caso extremo que quebra muitos parsers!

---

## Teste de Precedência Extrema

### 84. Precedência de operadores aritméticos
```ice
a + b * c / d - e
```
**Resultado:** ✅ Sucesso
- Parseado como: `Binary(Binary(a, +, Binary(Binary(b, *, c), /, d)), -, e)`
- Representa: `a + ((b * c) / d) - e`
- Precedência correta: `*` e `/` (6) são avaliados antes de `+` e `-` (5)

---

## Testes Avançados de Encadeamento

### 85. Chamada + Index + Chamada
```ice
a()[0]()
```
**Resultado:** ✅ Sucesso
- Estrutura: `Call(Index(Call(a), 0))`

### 86. Index + Member + Call
```ice
arr[0].method()
```
**Resultado:** ✅ Sucesso
- Estrutura: `Call(Member(Index(arr, 0), method))`

### 87. Chamada com expressões complexas nos argumentos
```ice
sum(1 + 2, 3 * 4)
```
**Resultado:** ✅ Sucesso
- Args são parseados com precedência correta

### 88. Encadeamento com operadores
```ice
a.b + c.d * e.f()
```
**Resultado:** ✅ Sucesso
- Member tem precedência maior que operadores binários

### 89. Teste SUPREMO de encadeamento
```ice
a.b(c)[d].e(f)[g].h
```
**Resultado:** ✅ Sucesso
- Este é o teste que quebra parsers fracos!
- Estrutura: Member → Call → Index → Member → Call → Index → Member
- Combina: .b(c) [d] .e(f) [g] .h

---

## Additional Expression Tests

### 90. Right-associative assignment (múltiplo)
```ice
a = b = c = d
```
**Resultado:** ✅ Sucesso
- Parsed como: `Assign(a, Assign(b, Assign(c, d)))`
- Right-associative: `a = (b = (c = d))`

### 91. Multiple assignment com literais
```ice
x = y = z = 10
```
**Resultado:** ✅ Sucesso
- Parsed como: `Assign(x, Assign(y, Assign(z, 10)))`

### 92. Not operator
```ice
!true
```
**Resultado:** ✅ Sucesso
- Parsed como: `Unary(!, true)`

### 93. Not com comparação
```ice
!a == b
```
**Resultado:** ✅ Sucesso
- Parsed como: `Binary(Unary(!, a), ==, b)`
- `!a` tem precedência maior que `==`, então `(!a) == b`

### 94. Double unary
```ice
--5
```
**Resultado:** ✅ Sucesso
- Parsed como: `Unary(-, Unary(-, 5))`

---

## Logical Operators Tests

### 95. Comparison chain com AND
```ice
a < b && c > d
```
**Resultado:** ✅ Sucesso
- Parsed como: `Logical(Binary(a, <, b), &&, Binary(c, >, d))`

### 96. Complex boolean expression
```ice
a && b || c && d
```
**Resultado:** ✅ Sucesso
- Parsed como: `Logical(Logical(a, &&, b), ||, Logical(c, &&, d))`
- AND tem precedência maior que OR

### 97. Ternary-like precedence
```ice
a && b == c
```
**Resultado:** ✅ Sucesso
- Parsed como: `Logical(a, &&, Binary(b, ==, c))`
- `==` tem precedência maior que `&&`

---

## Complex Expression Tests

### 98. Complex aritmetic expression
```ice
a + b * c - d / e
```
**Resultado:** ✅ Sucesso
- Parsed como: `Binary(a, +, Binary(Binary(b, *, c), -, Binary(d, /, e)))`
- Representa: `a + ((b * c) - (d / e))`

### 99. Parentheses multiplication
```ice
(a + b) * (c - d)
```
**Resultado:** ✅ Sucesso
- Parênteses são preservados como `Group`

### 100. Function call com expressões nos argumentos
```ice
foo(a + b, c * d)
```
**Resultado:** ✅ Sucesso
- Args são parseados com precedência correta

---

## Additional Chaining Tests

### 101. Chained function calls
```ice
foo().bar().baz()
```
**Resultado:** ✅ Sucesso
- Estrutura: `Call(Member(Call(Member(Call(foo), bar)), baz))`

### 102. Chained index
```ice
arr[0][1][2]
```
**Resultado:** ✅ Sucesso
- Estrutura: `Index(Index(Index(arr, 0), 1), 2)`

### 103. Chained member
```ice
a.b.c.d
```
**Resultado:** ✅ Sucesso
- Estrutura: `Member(Member(Member(a, b), c), d)`

### 104. Mixed chain (call + index)
```ice
a.b()[0].c(d)[1]
```
**Resultado:** ✅ Sucesso
- Estrutura: `Index(Call(Member(Index(Call(Member(a, b)), 0), c), [d]), 1)`

---

## Additional Assignment Tests

### 105. Assignment com binary expression
```ice
x = a + b * c
```
**Resultado:** ✅ Sucesso
- Parsed como: `Assign(x, Binary(a, +, Binary(b, *, c)))`
- Expressão à direita tem precedência correta

### 106. Member assignment
```ice
obj.prop = 10
```
**Resultado:** ✅ Sucesso
- Parsed como: `Assign(Member(obj, prop), 10)`

### 107. Index assignment
```ice
arr[0] = 10
```
**Resultado:** ✅ Sucesso
- Parsed como: `Assign(Index(arr, 0), 10)`

---

## Additional Complex Tests

### 108. Complex arithmetic com parênteses
```ice
val x = 10 + 20 * 3 - 5 / (2 + 3)
```
**Resultado:** ✅ Sucesso

### 109. Logical expression complex
```ice
val result = !(true && false) || (5 > 3 && 10 <= 20)
```
**Resultado:** ✅ Sucesso

### 110. Variables e expressões
```ice
val a = 10
val b = 20
val c = a * b + (a - b) * (a + b)
```
**Resultado:** ✅ Sucesso

### 111. Comparison and unary
```ice
val x = 5
val y = x + 10 * (x - 3) >= 20 && !false
```
**Resultado:** ✅ Sucesso

### 112. String concatenation
```ice
const message: string = "Hello" + " " + "World"
```
**Resultado:** ✅ Sucesso

### 113. Nested parentheses
```ice
val complex = ((1 + 2) * (3 + 4)) / (5 - (6 - 7))
```
**Resultado:** ✅ Sucesso

### 114. Multiple unary operators
```ice
val flag = !!true && !!!false
```
**Resultado:** ✅ Sucesso

### 115. Mixed logical operators
```ice
val mix = (10 > 5) && (3 < 2 || 8 == 8) && !(4 != 4)
```
**Resultado:** ✅ Sucesso

### 116. Deep nesting
```ice
val nested = (((((1 + 2)))) * (((3 + 4))))
```
**Resultado:** ✅ Sucesso

### 117. Final complex expression
```ice
val test = 1 + 2 * 3 > 5 && 10 / (2 + 3) == 2
```
**Resultado:** ✅ Sucesso

---

## Multiple Statements Tests

### 118. Múltiplas variáveis em linhas separadas
```ice
val a = 10
val b = 20
val c = a * b + (a - b) * (a + b)
```
**Resultado:** ✅ Sucesso
- 3 statements separados
- Cada `val` é reconhecido como início de novo statement

### 119. Variável com expressão complexa em linha seguinte
```ice
val x = 5
val y = x + 10 * (x - 3) >= 20 && !false
```
**Resultado:** ✅ Sucesso
- 2 statements separados
- Bug corrigido: keywords agora terminam expressões

---

## String Tests

### 120. String concatenation
```ice
const message: string = "Hello" + " " + "World"
```
**Resultado:** ✅ Sucesso

---

## Precedence Tests (Additional)

### 121. Complex arithmetic precedence
```ice
val x = 10 + 20 * 3 - 5 / (2 + 3)
```
**Resultado:** ✅ Sucesso

### 122. Deep nested parentheses
```ice
val complex = ((1 + 2) * (3 + 4)) / (5 - (6 - 7))
```
**Resultado:** ✅ Sucesso

### 123. Deep nesting
```ice
val nested = (((((1 + 2)))) * (((3 + 4))))
```
**Resultado:** ✅ Sucesso

---

## Unary Expression Tests (Additional)

### 124. Multiple unary operators
```ice
val flag = !!true && !!!false
```
**Resultado:** ✅ Sucesso

---

## Logical Operators Tests (Additional)

### 125. Mixed logical operators
```ice
val mix = (10 > 5) && (3 < 2 || 8 == 8) && !(4 != 4)
```
**Resultado:** ✅ Sucesso

---

## Advanced Expression Tests (Additional)

### 126. Logical complex expression
```ice
val result = !(true && false) || (5 > 3 && 10 <= 20)
```
**Resultado:** ✅ Sucesso

### 127. Final complex expression (extended)
```ice
val test = 1 + 2 * 3 > 5 && 10 / (2 + 3) == 2
```
**Resultado:** ✅ Sucesso
