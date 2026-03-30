# Bugs e Features Futuras - Ice Lang

---

## Bugs Corrigidos ✅

| # | Bug | Commit |
|---|-----|--------|
| 1 | Operador unário + | d4d0361 |
| 2 | Keywords como Member Access | 650c1bf |
| 3 | Operador Ternário ? : | 4f79deb |
| 4 | Objetos literais em interpolação | faf403e |

---

## Bugs Pendentes (Parser)

| # | Bug | Descrição |
|---|-----|-----------|
| 1 | for sem inicializador/update | `for (; i < 10; ) {}` |
| 2 | Strings com escape | `"hello\nworld"` |
| 3 | Assign em l-value inválido | `f() = 10`, `1 + 2 = x` |
| 4 | Expressão incompleta em index | `arr[1 +]` |
| 5 | Parâmetro duplicado | `func f(a: int, a: int)` |

---

## Bugs Pendentes (Semântico) - Futuros

| # | Bug | Descrição |
|---|-----|-----------|
| 1 | Return fora de função | Erro semântico |

---

## Histórico de Correções

### Bug: Operador unário + não suportado

O parser não reconhece + como operador unário (ex: +10, -5 + +10)

- **Local**: src/parser.ts:588
- **Status**: CORRIGIDO em d4d0361
- **Correção**: Adicionar TokenType.PLUS no case do parsePrefix

---

### Bug: Keywords como Member Access

O lexer tokeniza palavras-chave (keywords) como `val`, `const`, `if`, etc. como KEYWORD mesmo quando aparecem após um `.` (dot), causando falha no parser ao tentar fazer member access.

**Exemplo de Código que Falha**:
```ice
m.val[0]  // "val" é tokenizado como KEYWORD ao invés de IDENTIFIER
obj.if    // "if" é tokenizado como KEYWORD
arr.const // "const" é tokenizado como KEYWORD
x.while   // "while" é tokenizado como KEYWORD
```

**Correção**: Modificado o parser para aceitar KEYWORD, BOOLEAN e NULL após o ponto (`.`)

- **Local**: src/parser.ts:500-519
- **Status**: CORRIGIDO em 650c1bf

---

### Bug: Operador Ternário não suportado

O parser não reconhecia o operador `? :`

**Correção**: 
- Adicionado token QUESTION no lexer
- Adicionado precedence 0 para operador ternario no parser
- Adicionado parsing de ConditionalExpression
- Adicionado tipo ConditionalExpr na AST

- **Arquivos**: src/lexer.ts, src/parser.ts, src/ast.ts
- **Status**: CORRIGIDO em 4f79deb

---

### Bug: Objetos literais em interpolação

Objetos literais não funcionam em interpolação JSX (ex: {name: "John"})

**Correção**:
- Adicionado parseObjectLiteral no parser
- Adicionado ObjectExpr na AST
- Suporte a objetos em interpolação JSX: `{name: "John"}`
- Suporte a objetos aninhados: `{{a: 1, b: 2}}`
- Suporte a múltiplas propriedades: `{a: 1, b: 2}`

- **Arquivos**: src/parser.ts, src/ast.ts
- **Status**: CORRIGIDO em faf403e
