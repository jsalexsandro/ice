// Variáveis
val nome: string = "Olá, Mundo!"
const ano: int = 30
const numero = 30 // tipo automático

val teste; // criada mas não inicializada, é permitido para "val"
const teste; // erro, "const" requer atribuição de inicialização!
const a: void = null // caso o tipo seja void (o valor da variável sempre será null)

// Controle de Fluxo
if (condicao) {
  // código
}

if (condicao)
  // statement único

if (condicao) {
  // então
} else {
  // senão
}

if (condicao)
  // então
else
  // senão

// Loop
while (condicao) {
  // código
}

while (condicao)
  // statement único

// Funções
func nome() {
  // corpo
}

func nome(param: tipo, param2: tipo): tipo_retorno {
  return valor
}

// Return
return valor
return

// Blocos
{
  val x = 10
  val y = 20
}

// Arrays

val nomes: string[] = ["John", "Doe"]
val numbers: int[] = [1, 2, 3]
val numbers2: int[] [...numbers, 4, 5] // spread operator
// o parser não permite trailing comma. [1, 2, 3, ] -> error