# Sistema de Testes - Ice Lang

## Visão Geral

Sistema de testes **universal** para todo o projeto Ice Lang. Pode testar qualquer componente:
- Lexer (tokenização)
- Parser (análise sintática)
- Semantic Analyzer (análise semântica)
- Interpreter/Compiler (execução)
- Qualquer outro componente futuro

---

## Estrutura de Arquivos

```
tests/
├── test-runner.ts        # Executor principal
├── parser/
│   └── test_*.json      # Testes do Parser
├── lexer/
│   └── test_*.json      # Testes do Lexer
├── semantic/
│   └── test_*.json      # Testes do Semantic Analyzer
└── interpreter/
    └── test_*.json      # Testes do Interpretador
```

Cada componente pode ter seus próprios arquivos de teste seguindo o mesmo formato.

---

## Formato JSON dos Testes

### Teste de Sucesso (AST)
```json
{
  "id": "parser_01",
  "reference": "arquivo parser.test.md - teste 01",
  "description": "val com anotação de tipo",
  "code": "val name: string = \"Olá\"",
  "result": {
    "kind": "Program",
    "body": [...]
  }
}
```

### Teste de Erro
```json
{
  "id": "parser_06",
  "reference": "arquivo parser.test.md - teste 06",
  "description": "const sem inicializador (erro)",
  "code": "const test;",
  "result": "Constant 'test' must be initialized"
}
```

**Campos:**
- `id`: Identificador único do teste (ex: `parser_01`, `lexer_01`)
- `reference`: Referência para a documentação no arquivo .md correspondente
- `description`: Descrição breve do teste
- `code`: Código fonte Ice Lang a ser testado
- `result`: 
  - **Objeto (AST)**: Quando o teste espera sucesso e uma AST como resultado
  - **String**: Quando o teste espera um erro (a string deve estar contida na mensagem de erro)

---

## API de Execução

O sistema usa uma **API programática** - você chama `runAll()` no seu código:

```typescript
import { runAll } from './tests/test-runner'

// Executar todos os testes de todos os componentes
runAll()

// Executar todos os testes do parser
runAll("parser")

// Executar testes específicos do parser (por ID)
runAll("parser", { id: ["01", "02", "03", "04"] })

// Executar todos os testes do lexer
runAll("lexer")

// Executar todos os testes do semantic
runAll("semantic")
```

### Parâmetros

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| component | string? | Componente a testar: `"parser"`, `"lexer"`, `"semantic"`, `"interpreter"`. Se omitido, executa todos. |
| options | object? | Opções adicionais |
| options.id | string[]? | IDs específicos dos testes (ex: `["01", "02"]`) |

---

## Como Importar Testes do arquivo .test.md

Se você encontrou um teste no arquivo `.test.md` mas não existe o arquivo `.json` correspondente, use a função `createTest`:

### Exemplo: Importar teste 16 do parser.test.md

Suponha que você viu no `parser.test.md`:
```markdown
### 16. if com bloco
```ice
if (true) { val x = 10 }
```
**Resultado:** ✅ Sucesso
```

Para criar o arquivo JSON correspondente:

```typescript
import { createTest } from './tests/test-runner'

createTest("parser", {
  id: "16",
  description: "if com bloco",
  code: "if (true) { val x = 10 }"
})
```

Execute o código acima e o arquivo `tests/parser/test_parser_16.json` será criado automaticamente com o resultado.

---

## Como Adicionar Novos Testes

### Passo 1: Criar o teste com createTest

Usar a função `createTest` para gerar o arquivo JSON automaticamente:

```typescript
import { createTest } from './tests/test-runner'

// Criar teste de sucesso
createTest("parser", {
  id: "16",
  description: "if com bloco",
  code: "if (true) { val x = 10 }"
})

// Criar teste de erro
createTest("parser", {
  id: "17",
  description: "parêntese não fechado",
  code: "val x = (10"
})
```

### Passo 2: Adicionar referência no arquivo .test.md

**IMPORTANTE:** Sempre adicionar a referência no arquivo de documentação correspondente.

Exemplo para parser - editar `specs/parser.test.md`:

```markdown
### 16. if com bloco
```ice
if (true) { val x = 10 }
```
**Resultado:** ✅ Sucesso
```

### Passo 3: Executar os testes

```typescript
runAll("parser")
```

---

### Regra Fundamental

> **Sempre que um novo teste for criado, ele DEVE ter sua referência e funcionamento documentado no arquivo "x".test.md correspondente. Isso é mandatory e não deve ser ignorado.**

---

## Como Atualizar Testes (updateTest)

Quando a estrutura do AST muda (ex: novo campo `async` adicionado), os testes falham. A função `updateTest` re-executa o parser e salva o novo resultado automaticamente.

### Quando usar

- Quando o AST do parser muda e vários testes falham
- Quando você quer atualizar o resultado esperado para o código atual

### Exemplo

```typescript
import { updateTest } from './tests/test-runner'

// Atualiza um teste específico
updateTest("parser", "24")    // Atualiza parser_24
updateTest("parser", "135")   // Atualiza parser_135
```

### Executar múltiplos testes

```typescript
// atualiza-varios.ts
import { updateTest } from './tests/test-runner'

const testes = ["24", "25", "26", "27", "28", "29", "34"]
for (const id of testes) {
  updateTest("parser", id)
}
```

```bash
bun run atualiza-varios.ts
```

**Nota:** Use com cautela - isso sobrescreve o resultado esperado com o resultado atual. Sempre verifique se a mudança no AST está correta.

---

## Comparação de Resultados

A comparação é feita convertendo ambos os resultados (AST gerada e resultado esperado) para JSON ordenado:

```typescript
const actualStr = JSON.stringify(sortKeys(actual))
const expectedStr = JSON.stringify(sortKeys(expected))
```

Isso significa:
- Campos `undefined` são omitidos
- A ordem das chaves não importa
- Arrays são comparados por posição

---

## Fluxo de Execução

```
1. runAll(component, options) é chamada
2. loadTests() carrega os arquivos JSON do componente
3. Para cada teste:
   a. Executa o código via Lexer + Parser
   b. Se result é string → espera erro
   c. Se result é objeto → compara AST
4. Exibe relatório (passed/failed/total)
```

---

## Comandos npm

```bash
bun run test           # Executar todos os testes (se configurado no package.json)
bun tests/test-runner.ts  # Executar diretamente
```

---

## Funções Principais

### deepEqual(actual, expected)
Compara dois objetos convertendo para JSON ordenado.

### runParserTest(testCase)
Executa um caso de teste individual (sucesso ou erro).

### runAll(component?, options?)
Função principal exportada. Coordena a execução de todos os testes.

### loadTests(component, ids?)
Carrega arquivos JSON de teste do componente especificado.

### createTest(component, options)
Cria novo arquivo de teste JSON automaticamente a partir do código.

### updateTest(component, id)
Atualiza o resultado de um teste existente executando o parser novamente.

---

## Padrão de Nomenclatura

- Arquivos: `test_<componente>_<id>.json`
- IDs: `<componente>_<numero>` (ex: `parser_01`, `lexer_05`)
- Numeração: com zeros à esquerda (01, 02, ..., 10, 11)

---

## Exemplos

### Teste de sucesso do Parser
```json
{
  "id": "parser_01",
  "code": "val x = 10",
  "result": {
    "kind": "Program",
    "body": [
      {
        "kind": "VarStmt",
        "type": "val",
        "name": { "type": "IDENTIFIER", "value": "x" }
      }
    ]
  }
}
```

### Teste de erro do Parser
```json
{
  "id": "parser_06",
  "code": "const test;",
  "result": "Constant 'test' must be initialized"
}
```

---

## Futuras Melhorias

- [ ] Detecção automática de componentes com testes
- [x] Testes de snapshot (atualizar resultados com --update) ✅ Implementado com updateTest()
- [ ] Testes de performance/timing
- [ ] Configurar CI/CD para execução automática
