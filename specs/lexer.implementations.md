# Implementação do Lexer

## Passo 1: Tokens e Tipos
✅ Implementado

### TokenType Enum

### Token Interface

## Passo 2: Estado do Lexer
✅ Implementado

- Posição atual no código (offset)
- Linha e coluna atuais
- Código fonte completo

## Passo 3: Funções de Leitura
✅ Implementado

- `peek()` - Olhar próximo caractere sem avançar
- `advance()` - Avançar para próximo caractere
- `consume()` - Consumir e retornar próximo caractere

**Teste:** Ver `specs/lexer.test.md` - Teste 1: Funções de Leitura

## Passo 4: Reconhecedores de Tokens
✅ Implementado

- Números (inteiros, decimais) ✅ - **Teste:** Ver `specs/lexer.test.md` - Teste 2
- Identificadores e palavras-chave ✅ - **Teste:** Ver `specs/lexer.test.md` - Teste 3
- Operadores (=, +, -, *, /, etc.) ✅ - **Teste:** Ver `specs/lexer.test.md` - Teste 4
- Símbolos (parênteses, colchetes, chaves, etc.) ✅ - **Teste:** Ver `specs/lexer.test.md` - Teste 4
- Strings ✅ - **Teste:** Ver `specs/lexer.test.md` - Teste 5
- Comentários ✅ - **Teste:** Ver `specs/lexer.test.md` - Teste 6

## Passo 5: Tratamento de Espaços
✅ Implementado

- Ignorar espaços em branco
- Quebras de linha (atualizar linha/coluna)

## Passo 6: Tratamento de Erros
✅ Implementado

- Caractere inválido ✅
- Número mal formado ✅
- String incompleta ✅

## Passo 7: API Pública
✅ Implementado

- `tokenize(): Token[]` - Retorna todos os tokens de uma vez

---

## Atualizações e Correções

### literals boolean e null (readIdentifier)
✅ Implementado

Modificação na função `readIdentifier()` para tratar literais corretamente:
- `true` / `false` → TokenType.BOOLEAN, value: boolean
- `null` → TokenType.NULL, value: null
- Demais identificadores → KEYWORD ou IDENTIFIER conforme KEYWORDS list

### Correção lógica de detecção de comentários
✅ Implementado

Correção na função `nextToken()`:
- Comentários detectados apenas quando `//` ou `/*`
- Operador `/` (SLASH) funciona normalmente quando não é comentário
- Removido loop `while (this.ch === '/')` que causava problemas

### Sequências de escape em strings (readString)
✅ Implementado

Adicionado suporte a sequências de escape em strings:
- `\"` → `"`
- `\'` → `'`
- `\\` → `\`
- `\n` → newline
- `\t` → tab
- `` \` `` → `` ` ``
- Sequências inválidas retornam erro





######################################
# ESTAGIO: LEXER CONCLUIDO COM EXITO #
* o proximo passo listados em features não são de urgência
######################################
