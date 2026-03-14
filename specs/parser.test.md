# Parser Tests

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

### 13. tipo inválido
```ice
val x: invalidType = 10
```
**Resultado:** ✅ Erro lançado corretamente
- `ParserError: Parser Error: Invalid type 'invalidType' at line 2, column 7`

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
- `-5 * 2` é parsed como: Binary(Unary(-, 5), *, 2)
