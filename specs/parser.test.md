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

---

## Break/Continue Statement Tests

### 128. break em while
```ice
while (true) { break }
```
**Resultado:** ✅ Sucesso
- Parseado como: `BreakStmt`

### 129. continue em while
```ice
while (true) { continue }
```
**Resultado:** ✅ Sucesso
- Parseado como: `ContinueStmt`

### 130. break em for
```ice
for (val i = 0; i < 10; i = i + 1) { break }
```
**Resultado:** ✅ Sucesso
- Parseado como: `BreakStmt`

---

## Complex Expression Tests - Final

### 131. Encadeamento extremo
```ice
a.b(c + d * e)[f + g].h(i, j * k)[l].m
```
**Resultado:** ✅ Sucesso
- Estrutura: Member → Call → Index → Member → Call → Index → Member
- Combinação de todos os tipos de expressões encadeadas

### 132. Expressão lógica complexa
```ice
val result = -a * b + c / (d + e * f) >= g && !(h < i || j == k)
```
**Resultado:** ✅ Sucesso
- Precedência: unary (-) > * / > + > >= > && > ||
- Parênteses preservados como Group
- Operadores lógicos com precedência correta

### 133. Múltiplas atribuições
```ice
obj.a[foo(1,2)][bar + baz].value = arr[x + 1] = compute(10, 20 * 3)
```
**Resultado:** ✅ Sucesso
- Right-associative: a = b = c → a = (b = c)
- Membro com índices encadeados
- Precedência correta nos argumentos

### 134. While com break/continue
```ice
while (getValue(a.b()[0]) > 10 && !isValid(x)) {
  if (sum(1,2,3) * arr[i + 1] >= limit) {
    break
  } else {
    continue
  }
}
```
**Resultado:** ✅ Sucesso
- While com condição lógica complexa
- If/else com break e continue
- Chamadas encadeadas na condição

### 135. Função complexa completa
```ice
func compute(a: int, b: int): int {
  val x = arr[a + b * 2][foo(bar(1,2))] + obj.method(a,b)[0]
  for (val i = 0; i < 10 && check(i); i = i + 1) {
    if (x > threshold || !ready()) {
      break
    }
    x = x + data[i].value
  }
  return x
}
```
**Resultado:** ✅ Sucesso
- Função com parâmetros tipados e retorno
- Variável com expressão complexa (índices, chamadas, membros)
- For com condição lógica
- If com OR e NOT
- Break e Member expression
- Return com identifier

### 136. Extreme expression chaining
```ice
obj.a()[b](c).d[e](f)
```
**Arquivo:** `tests/parser/test_parser_136.json`
**Resultado:** ✅ Sucesso
- Estrutura: Call → Index → Member → Call → Index → Call → Member → Identifier
- Combinação extrema de todos os tipos de expressão encadeada

---

## ICEX (HTML-like Template) Tests

### 137. Basic tag
```ice
<div>Hello</div>
```
**Arquivo:** `tests/parser/test_parser_137.json`
**Resultado:** ✅ Sucesso

### 138. Tag with text
```ice
<div>Hello World</div>
```
**Arquivo:** `tests/parser/test_parser_138.json`
**Resultado:** ✅ Sucesso

### 139. Self-closing tag
```ice
<br/>
```
**Arquivo:** `tests/parser/test_parser_139.json`
**Resultado:** ✅ Sucesso

### 140. Tag with string attribute
```ice
<div class="container">Text</div>
```
**Arquivo:** `tests/parser/test_parser_140.json`
**Resultado:** ✅ Sucesso

### 141. Tag with boolean attribute
```ice
<button disabled>Click</button>
```
**Arquivo:** `tests/parser/test_parser_141.json`
**Resultado:** ✅ Sucesso

### 142. Tag with expression attribute
```ice
val x = 10
val t = <input value={x}/>
```
**Arquivo:** `tests/parser/test_parser_142.json`
**Resultado:** ✅ Sucesso

### 143. Nested tags
```ice
<div><span>Text</span></div>
```
**Arquivo:** `tests/parser/test_parser_143.json`
**Resultado:** ✅ Sucesso

### 144. Interpolation
```ice
val name = "World"
val t = <div>Hello {name}!</div>
```
**Arquivo:** `tests/parser/test_parser_144.json`
**Resultado:** ✅ Sucesso

### 145. Self-closing with attributes
```ice
<input type="text" disabled/>
```
**Arquivo:** `tests/parser/test_parser_145.json`
**Resultado:** ✅ Sucesso

### 146. Multiple attributes
```ice
<input type="text" name="username" placeholder="Enter name"/>
```
**Arquivo:** `tests/parser/test_parser_146.json`
**Resultado:** ✅ Sucesso

### 147. Deep nesting (10 levels)
```ice
<a><b><c><d><e><f><g><h><i><j>text</j></i></h></g></f></e></d></c></b></a>
```
**Arquivo:** `tests/parser/test_parser_147.json`
**Resultado:** ✅ Sucesso

### 148. Attribute with hyphen (data-*)
```ice
<div data-value="test"></div>
```
**Arquivo:** `tests/parser/test_parser_148.json`
**Resultado:** ✅ Sucesso

### 149. Interpolation with binary expression
```ice
val a = 10
val b = 20
val t = <div>{a + b}</div>
```
**Arquivo:** `tests/parser/test_parser_149.json`
**Resultado:** ✅ Sucesso

### 150. Multiple interpolations
```ice
val a = "Hello"
val b = "World"
val t = <div>{a} {b}</div>
```
**Arquivo:** `tests/parser/test_parser_150.json`
**Resultado:** ✅ Sucesso

### 151. Text between tags (mixed content)
```ice
<div>Text before<span>inner</span>Text after</div>
```
**Arquivo:** `tests/parser/test_parser_151.json`
**Resultado:** ✅ Sucesso

### 152. Array access in interpolation
```ice
val items = ["a", "b", "c"]
val t = <div>{items[0]}</div>
```
**Arquivo:** `tests/parser/test_parser_152.json`
**Resultado:** ✅ Sucesso

### 153. Expression attribute (arithmetic)
```ice
val x = 10
val t = <div data-count={x * 2}></div>
```
**Arquivo:** `tests/parser/test_parser_154.json`
**Resultado:** ✅ Sucesso

### 154. Parentheses in interpolation
```ice
val t = <div>{(1 + 2) * 3}</div>
```
**Arquivo:** `tests/parser/test_parser_155.json`
**Resultado:** ✅ Sucesso

### 155. Boolean expression in interpolation
```ice
val t = <div>{true && false}</div>
```
**Arquivo:** `tests/parser/test_parser_156.json`
**Resultado:** ✅ Sucesso

### 156. Button with class and boolean attribute
```ice
val button = <button class="primary" disabled>Click me</button>
```
**Arquivo:** `tests/parser/test_parser_157.json`
**Resultado:** ✅ Sucesso

### 157. Input with multiple attributes
```ice
val input = <input type="text" name="username" placeholder="Enter name"/>
```
**Arquivo:** `tests/parser/test_parser_158.json`
**Resultado:** ✅ Sucesso

### 158. Card with nested elements
```ice
val card = <div class="card" data-id="123">
    <h1>Title</h1>
    <p>Content here</p>
</div>
```
**Arquivo:** `tests/parser/test_parser_159.json`
**Resultado:** ✅ Sucesso

### 159. Interpolation with variables
```ice
val name = "João"
val age = 25
val score = 98
val profile = <div class="profile">
    <h2>{name}</h2>
    <span>Age: {age}</span>
    <span>Score: {score * 2}</span>
</div>
```
**Arquivo:** `tests/parser/test_parser_160.json`
**Resultado:** ✅ Sucesso

### 160. Arrays and complex expressions
```ice
val items = ["apple", "banana", "grape"]
val count = 3
val isAdmin = true

val panel = <div data-count={count + 1} data-admin={isAdmin && count > 0}>
    <span>First: {items[0]}</span>
    <span>Total: {count * 10}</span>
    <span>Check: {(count + 1) * 2}</span>
</div>
```
**Arquivo:** `tests/parser/test_parser_161.json`
**Resultado:** ✅ Sucesso

### 161. ICEX as function return
```ice
func renderUser(name: string, age: int): string {
    val greeting = "Hello"
    return <div class="user">
        <h1>{greeting}, {name}!</h1>
        <p>Age: {age}</p>
    </div>
}
```
**Arquivo:** `tests/parser/test_parser_162.json`
**Resultado:** ✅ Sucesso

### 162. Complex expressions in interpolation
```ice
val x = 10
val t = <div class="result" data-valid={isValid && x > 0}>
    <span>{x + y * 2}</span>
    <span>{!(x == y)}</span>
    <span>{(x + y) * (x - y)}</span>
    <input type="number" value={x * y}/>
</div>
```
**Arquivo:** `tests/parser/test_parser_163.json`
**Resultado:** ✅ Sucesso

### 164. Extreme dashboard with complex expressions
```ice
func renderDashboard(data: Dashboard, cfg: Config): string {
    val header = <header data-ready={cfg.status.get(data.items[0].key) && !data.loading}>
        <nav data-active={!(data.route == cfg.routes[0])}>
            <ul data-items={data.items[0].count * cfg.factor.get()}>
                <li data-selected={data.active[0] && !(cfg.hidden)}>{data.items[0].label}</li>
            </ul>
        </nav>
    </header>
    val body = <main>
        <section>
            <article>
                <h1>{data.title}</h1>
                <p>Body: {data.body}</p>
            </article>
        </section>
    </main>
    return <div data-ready={cfg.status.get(data.items[0].key) && !(data.loading)}>
        {header}
        {body}
    </div>
}
```
**Arquivo:** `tests/parser/test_parser_164.json`
**Resultado:** ✅ Sucesso
- Teste extremo com 2016 tokens
- Múltiplas tags aninhadas
- Expressões complexas encadeadas (member access + index + call)
- Atributos com expressões lógicas e aritméticas
- Retorno de função com ICEX

---

## ICEX Limitations

### Objetos literais não suportados
```ice
val t = <div>{ { name: "John" } }</div>
```
**Resultado:** ❌ Erro - Objetos literais `{ key: value }` não são suportados pela linguagem ainda.

### Múltiplas tags consecutivas sem pai
```ice
val t = <div></div><span></span>
```
**Resultado:** ❌ Erro - Múltiplas tags ICEX no mesmo nível requerem um elemento pai (como no JSX).

```ice
val t = <wrapper><div></div><span></span></wrapper>
```
**Resultado:** ✅ Sucesso - Com elemento pai.

---

## ICEX Tests 165-198: Extended ICEX Features

### Categoria A — ICEX como argumento / return value

### 165. ICEX direto como argumento de função
```ice
icerender(<div class="app">Hello</div>)
```
**Arquivo:** `tests/parser/test_parser_165.json`
**Resultado:** ✅ Sucesso
- `CallExpression { callee: render, args: [IcexElement] }`
- Parser reconhece `<div` como início de expressão dentro de ArgumentList

### 166. ICEX como segundo argumento
```ice
icemount(root, <section id="main"><h1>Title</h1></section>)
```
**Arquivo:** `tests/parser/test_parser_166.json`
**Resultado:** ✅ Sucesso
- Dois argumentos: `root` (Identifier) + IcexElement aninhado

### 167. ICEX como argumento com interpolação
```ice
val name = "World"
render(<div>Hello {name}!</div>, target)
```
**Arquivo:** `tests/parser/test_parser_167.json`
**Resultado:** ✅ Sucesso
- ICEX com IcexText + IcexExpression + IcexText como children
- Seguido de Identifier(target) como segundo arg

### 168. ICEX retornado em return simples
```ice
func view(): string {
    return <main><p>Hello</p></main>
}
```
**Arquivo:** `tests/parser/test_parser_168.json`
**Resultado:** ✅ Sucesso
- `ReturnStatement { value: IcexElement }`

### 169. ICEX retornado com expressão antes
```ice
func greet(name: string): string {
    val prefix = "Hello"
    return <h1>{prefix}, {name}!</h1>
}
```
**Arquivo:** `tests/parser/test_parser_169.json`
**Resultado:** ✅ Sucesso
- Múltiplas interpolações no mesmo elemento

### 170. ICEX como valor de val com chamada encadeada depois
```ice
val el = <div>content</div>
render(el)
```
**Arquivo:** `tests/parser/test_parser_170.json`
**Resultado:** ✅ Sucesso
- Garante que o parser não "engole" o `render(el)` como parte do ICEX

---

### Categoria B — ICEX em expressões lógicas e binárias

### 171. ICEX em lado direito de && (logical)
```ice
val show = true
val result = show && <span>Visible</span>
```
**Arquivo:** `tests/parser/test_parser_171.json`
**Resultado:** ✅ Sucesso
- `LogicalExpression { left: Identifier(show), op: &&, right: IcexElement }`
- Pattern de render condicional — comum para o parser

### 172. ICEX em lado direito de ||
```ice
val fallback = cached || <div class="loading">Loading...</div>
```
**Arquivo:** `tests/parser/test_parser_172.json`
**Resultado:** ✅ Sucesso

### 173. ICEX com negação antes
```ice
val el = !<div>test</div>
```
**Arquivo:** `tests/parser/test_parser_173.json`
**Resultado:** ✅ Sucesso (parse OK)
- `UnaryExpression { op: !, operand: IcexElement }`
- Parser aceita — a semântica é responsabilidade do type checker

### 174. ICEX assigned com expressão lógica no atributo
```ice
val isOn = true
val count = 5
val el = <div data-active={isOn && count > 0}>Content</div>
```
**Arquivo:** `tests/parser/test_parser_174.json`
**Resultado:** ✅ Sucesso
- Atributo com LogicalExpression completo

---

### Categoria C — ICEX composto (ICEX interpolando outros ICEX)

### 175. ICEX com variável ICEX interpolada
```ice
val header = <header>Top</header>
val page = <div>{header}</div>
```
**Arquivo:** `tests/parser/test_parser_175.json`
**Resultado:** ✅ Sucesso
- `IcexExpression { expression: Identifier(header) }` dentro de children

### 176. Dois ICEX interpolados no mesmo pai
```ice
val nav = <nav>Menu</nav>
val footer = <footer>Bottom</footer>
val layout = <div>{nav}{footer}</div>
```
**Arquivo:** `tests/parser/test_parser_176.json`
**Resultado:** ✅ Sucesso
- Dois IcexExpression consecutivos em children (sem texto entre eles)

### 177. ICEX interpolado entre texto
```ice
val badge = <span class="badge">New</span>
val el = <div>Product {badge} is available</div>
```
**Arquivo:** `tests/parser/test_parser_177.json`
**Resultado:** ✅ Sucesso
- `[IcexText("Product "), IcexExpression(badge), IcexText(" is available")]`

### 178. ICEX com chamada de função retornando ICEX
```ice
func icon(name: string): string {
    return <i class={name}/>
}
val el = <button>{icon("star")} Save</button>
```
**Arquivo:** `tests/parser/test_parser_178.json`
**Resultado:** ✅ Sucesso
- `IcexExpression { expression: CallExpression(icon, "star") }`

### 179. ICEX aninhado com 5 níveis e interpolações em todos
```ice
val a = "alpha"
val b = "beta"
val c = "gamma"
val el = <L1 data-a={a}>
    <L2 data-b={b}>
        <L3 data-c={c}>
            <L4>{a} and {b}</L4>
        </L3>
    </L2>
</L1>
```
**Arquivo:** `tests/parser/test_parser_179.json`
**Resultado:** ✅ Sucesso
- Teste de profundidade com estado (atributos diferentes em cada nível)

---

### Categoria D — Atributos com expressões extremas

### 180. Atributo com member + index + call encadeado
```ice
val el = <div data-value={obj.items[0].getValue()}/>
```
**Arquivo:** `tests/parser/test_parser_180.json`
**Resultado:** ✅ Sucesso
- Atributo: `Call(Member(Index(Member(obj, items), 0), getValue))`

### 181. Múltiplos data-* com hifens e expressões complexas
```ice
val el = <input
    type="text"
    data-user-id={user.id}
    data-is-valid={validator.check(input) && !hasError}
    data-score={base * factor + bonus[0]}
    disabled
/>
```
**Arquivo:** `tests/parser/test_parser_181.json`
**Resultado:** ✅ Sucesso
- 4 tipos de atributo: string, expr simples, expr lógica, expr aritmética, boolean
- `data-user-id`, `data-is-valid`, `data-score` todos com hífen

### 182. Atributo com assignment expression
```ice
val el = <div data-x={a = 10}/>
```
**Arquivo:** `tests/parser/test_parser_182.json`
**Resultado:** ✅ Sucesso (parse OK)
- Parser aceita assignment — type checker vai rejeitar no futuro

### 183. Atributo com expressão que usa < e > (ambiguidade máxima)
```ice
val el = <div data-check={a < b && c > d}/>
```
**Arquivo:** `tests/parser/test_parser_183.json`
**Resultado:** ✅ Sucesso
- `<` e `>` dentro de `{}` em atributo ICEX
- Parser distingue que está dentro de `{}` e trata `<` como comparação, não tag

### 184. Auto-closing com 8 atributos
```ice
val el = <input type="email" name="email" id="email-field"
    placeholder="Enter email" required autocomplete="off"
    data-validate="true" data-min-length={minLen}/>
```
**Arquivo:** `tests/parser/test_parser_184.json`
**Resultado:** ✅ Sucesso
- Stress test de parseIcexAttributes — muitos atributos em self-closing

---

### Categoria E — ICEX dentro de controle de fluxo

### 185. ICEX dentro de body de if
```ice
val isLogged = true
if (isLogged) {
    val view = <dashboard user={currentUser}/>
}
```
**Arquivo:** `tests/parser/test_parser_185.json`
**Resultado:** ✅ Sucesso

### 186. ICEX em ambos os branches do if/else
```ice
val isAdmin = false
val panel = if (isAdmin) {
    <admin-panel/>
} else {
    <user-panel/>
}
```
**Arquivo:** `tests/parser/test_parser_186.json`
**Resultado:** ❌ Erro esperado
- `if` é um statement, não uma expressão na linguagem — não pode ser usado como valor

### 187. ICEX dentro de for acumulando em array
```ice
val items = ["a", "b", "c"]
for (val i = 0; i < 3; i = i + 1) {
    val el = <li data-index={i}>{items[i]}</li>
}
```
**Arquivo:** `tests/parser/test_parser_187.json`
**Resultado:** ✅ Sucesso
- ICEX com duas interpolações de tipos diferentes (int e string[] index)

### 188. Função com ICEX condicional e return
```ice
func renderItem(item: string, index: int, isLast: bool): string {
    val cls = "item"
    if (isLast) {
        return <li class="item last" data-index={index}>{item}</li>
    }
    return <li class={cls} data-index={index}>{item}</li>
}
```
**Arquivo:** `tests/parser/test_parser_188.json`
**Resultado:** ✅ Sucesso
- Dois return com ICEX em caminhos diferentes
- Mistura de string attribute e expression attribute no mesmo elemento

### 189. ICEX dentro de while (acumulação)
```ice
val i = 0
while (i < items.length) {
    val row = <tr data-row={i}><td>{items[i].name}</td></tr>
    i = i + 1
}
```
**Arquivo:** `tests/parser/test_parser_189.json`
**Resultado:** ✅ Sucesso
- ICEX com atributo numérico e interpolação de member encadeado

---

### Categoria F — Interpolação ambígua (< e > dentro de { })

### 190. Comparação < e > em interpolação de texto
```ice
val el = <div>{a < b}</div>
```
**Arquivo:** `tests/parser/test_parser_190.json`
**Resultado:** ✅ Sucesso
- `IcexExpression { expression: Binary(a, <, b) }`
- `<` aqui é operador, não início de tag

### 191. Expressão com < e > em atributo
```ice
val el = <div data-check={x > 0 && y < 100}/>
```
**Arquivo:** `tests/parser/test_parser_191.json`
**Resultado:** ✅ Sucesso
- Parser distingue `>` (operador) de `>` (fim de tag de abertura)

### 192. Interpolação com comparação dupla
```ice
val el = <span>{min < value && value < max}</span>
```
**Arquivo:** `tests/parser/test_parser_192.json`
**Resultado:** ✅ Sucesso
- `Binary(Logical(Binary(min, <, value), &&, Binary(value, <, max)))`
- Dois `<` dentro de `{}` — nenhum deles é tag

### 193. Interpolação com expressão que começa com < após espaço
```ice
val el = <div>Result: {a < b}</div>
```
**Arquivo:** `tests/parser/test_parser_193.json`
**Resultado:** ✅ Sucesso
- Texto "Result: " seguido de expressão com `<`

---

### Categoria G — Erros esperados

### 194. Tag de fechamento errada
```ice
<div>content</span>
```
**Arquivo:** `tests/parser/test_parser_194.json`
**Resultado:** ❌ Erro correto
- `ParserError: Expected closing tag </div> but got </span>`

### 195. Tag não fechada (EOF)
```ice
<div>
    <span>content
```
**Arquivo:** `tests/parser/test_parser_195.json`
**Resultado:** ❌ Erro correto
- `ParserError: Unclosed tag <span> — unexpected EOF`

### 196. Atributo com = mas sem valor
```ice
<div class=>Text</div>
```
**Arquivo:** `tests/parser/test_parser_196.json`
**Resultado:** ❌ Erro correto
- `ParserError: Expected expression but got 'GREATER_THAN'`

### 197. Interpolação não fechada
```ice
<div>{a + b</div>
```
**Arquivo:** `tests/parser/test_parser_197.json`
**Resultado:** ❌ Erro correto
- `ParserError: Expected RBRACE but got LESS_THAN (encontrou </div>)`

### 198. Self-closing com tag de fechamento (contradição)
```ice
<br/>Hello</br>
```
**Arquivo:** `tests/parser/test_parser_198.json`
**Resultado:** ❌ Erro correto
- O `<br/>` encerra na primeira tag — `Hello</br>` é código solto
- `ParserError: Unexpected closing tag </br>`

---

## Parser Bug Fixes

### Fix: Expression Overflow Bug

**Problema:** Expressões estavam "transbordando" e consumindo tokens extras.

```javascript
// ANTES (bug): parseExpression consumia render(<div></div>, target)
val name = "World"
render(<div>Hello</div>, target)

// DEPOIS (corrigido): Para corretamente no COMMA
```

**Correção em `src/parser.ts` (commit 3faf344):**
```typescript
if (operator.type === TokenType.IDENTIFIER ||
    operator.type === TokenType.NUMBER ||
    operator.type === TokenType.STRING ||
    operator.type === TokenType.BOOLEAN ||
    operator.type === TokenType.NULL) {
  break
}
```

**Explicação:** Adicionada verificação para parar `parseExpression` quando o token atual é um operando (IDENTIFIER, NUMBER, STRING, BOOLEAN, NULL) em vez de um operador. Isso evita que expressões consumam tokens extras indevidamente.

---

### Fix: Precedence of Binary Operators

**Problema:** Precedência de operadores binários estava incorreta.

```javascript
a + b * c - d / e  // era parsed como: a + ((b * c) - (d / e))
                    // deveria ser: (a + (b * c)) - (d / e)
```

**Correção em `src/parser.ts` (commit 4f428a4):**
```typescript
// ANTES (errado):
const nextMinPrecedence = operatorPrecedence

// DEPOIS (correto):
const nextMinPrecedence = operatorPrecedence + 1
```

**Explicação:** Para operadores left-associative, o `minPrecedence` deve ser `operatorPrecedence + 1`, garantindo que operadores de mesma precedência sejam agrupados da esquerda para a direita.

---

## Stress Tests 199-203

### Teste 199: Complex ICEX with 2D Arrays
**Arquivo:** `tests/parser/test_parser_199.json`
**Métricas:** 567 tokens, 21ms | **Foco:** Arrays 2D, expressões complexas

```ice
val matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
val el = <section
    data-arith={-a * b + matrix[0][0] * matrix[1][1] + matrix[2][2]}
    data-logic={!!flags[0] && !flags[1] || flags[2]}
    ...
>
    <div><span>{matrix[0][0] + matrix[0][1]}</span></div>
</section>
```

### Teste 200: Multiple Functions with ICEX Returns
**Arquivo:** `tests/parser/test_parser_200.json`
**Métricas:** 795 tokens, 19ms | **Foco:** Funções com `items: string[]`, composição

```ice
func makeLabel(key: string, items: string[], idx: int): string {
    return <label data-score={items[idx].length}>{key}</label>
}
func renderForm(data: Form): string {
    return <form>{makeField(data, 0)}<button/></form>
}
```

### Teste 201: Complex Control Flow
**Arquivo:** `tests/parser/test_parser_201.json`
**Métricas:** 664 tokens, 14ms | **Foco:** 16 ifs, 6 continues, 4 breaks

```ice
while (i < rows && !state.aborted) {
    for (val k = 0; k < cols && !state.error) {
        if (val < 0) { skipped++; continue }
        if (score > peak) { if (proc >= max) { break } }
    }
}
```

### Teste 202: Single ICEX with 16 Extreme Attributes
**Arquivo:** `tests/parser/test_parser_202.json`
**Métricas:** 722 tokens, 19ms, 16 attrs | **Foco:** Expressões extremas

```ice
val el = <input
    data-j={obj.a.b.c[0].d[1].e(x, y)[0].f > 0 && ...}
    data-final={-obj.config.limits[0].value * x / (y + z) >= ...}
/>
```

### Teste 203: Full Dashboard with HTML Table
**Arquivo:** `tests/parser/test_parser_203.json`
**Métricas:** 1711 tokens, 39ms, 26 elementos, 83 attrs | **Foco:** Composição real

```ice
func renderDashboard(data: Dataset): string {
    return <div>
        <header/>
        <table><thead/><tbody>{row0}{rowN}</tbody><tfoot/></table>
        <footer><button/><button/></footer>
    </div>
}
```

---

## Bugs Found During Stress Tests

### Bug: Array Types in Function Parameters
**Commit:** fa0e155 | **Teste:** 200

```typescript
// Não tratava items: string[] nos parâmetros
if (this.current().type === TokenType.COLON) {
  if (this.isValidType(this.current())) {
    paramType = this.advance() // Não tratava []
  }
}
```

### Bug: continue/break as Expression Terminators
**Commit:** fa0e155 | **Teste:** 201

```ice
// Falhava com: skipped = skipped + 1; continue
if (operator.type === TokenType.KEYWORD && 
    ['val', 'const', 'if', 'while', 'for', 'func', 'return', 'else'].includes(...)) {
  break
}
// Adicionado: 'break', 'continue'
```

---

## Resumo Final

| Métrica | Valor |
|---------|-------|
| Total de testes | **203** |
| Total de tokens processados | ~4,519 |
| Bugs corrigidos | 6 |
| Tempo total de parsing | ~130ms |

---

