# Futuras Melhorias do Lexer

Este arquivo contém prompts estruturados para evoluir o lexer no futuro.
As melhorias abaixo **não são bugs críticos**, mas extensões importantes para tornar a linguagem mais robusta.

---

# 1️⃣ Suporte a separador numérico (`_`)

## Problema

Atualmente o lexer aceita apenas:

```
1000
123456
```

Mas muitas linguagens modernas permitem separadores para melhorar a leitura:

```
1_000
10_000_000
3.14_15
```

## Prompt de implementação

Melhorar a função `readNumber()` para suportar separadores `_` dentro de números.

Regras:

1. `_` pode aparecer apenas entre dígitos.
2. `_` não pode aparecer:

   * no início do número
   * no final do número
   * ao lado de `.`

Exemplos válidos:

```
1_000
10_000_000
3.14_15
```

Exemplos inválidos:

```
_100
100_
1_.5
```

Se inválido, retornar `TokenType.ERROR`.

---

# 2️⃣ Suporte a notação científica

## Problema

Hoje o lexer provavelmente aceita apenas:

```
123
123.45
```

Mas linguagens modernas suportam:

```
1e10
2.5e8
3.2E-4
```

## Prompt de implementação

Adicionar suporte a notação científica em `readNumber()`.

Formato:

```
<number>e<number>
<number>E<number>
```

Exemplos válidos:

```
1e10
2.5e8
3.2E-4
```

Regras:

1. Após `e` ou `E` deve haver um número.
2. Pode haver `+` ou `-`.

Exemplos inválidos:

```
1e
1e+
1e-
```

Nesses casos retornar erro `"invalid number"`.

---

# 3️⃣ Suporte a números hexadecimais

## Problema

Atualmente não é possível escrever:

```
0xFF
0x1A3
```

## Prompt de implementação

Adicionar suporte a números hexadecimais.

Formato:

```
0x<number>
```

Exemplos válidos:

```
0xFF
0x1A
0xABC
```

Caracteres permitidos:

```
0-9
A-F
a-f
```

Retornar token:

```
TokenType.NUMBER
```

com valor convertido para decimal.

---

# 4️⃣ Suporte a números binários

## Problema

Algumas linguagens permitem:

```
0b1010
0b111111
```

## Prompt de implementação

Adicionar suporte a números binários.

Formato:

```
0b<number>
```

Exemplos válidos:

```
0b1010
0b1111
```

Caracteres permitidos:

```
0
1
```

Converter o valor para decimal no token.

---

# 5️⃣ Melhorar suporte a operadores compostos

## Problema

Hoje o lexer suporta operadores simples:

```
+
-
*
/
==
!=
<=
>=
&&
||
```

Mas linguagens modernas usam operadores compostos.

## Prompt de implementação

Refatorar o reconhecimento de operadores para suportar operadores compostos.

Adicionar suporte a:

```
+=
-=
*=
/=
%=
===
!==
=> 
??
```

Utilizar `peek()` para verificar o próximo caractere.

---

# 6️⃣ Template strings com interpolação

## Problema

Atualmente strings com crase funcionam apenas como texto simples:

```
`hello world`
```

Mas não suportam interpolação.

## Prompt de implementação

Adicionar suporte a template strings com interpolação.

Exemplo:

```
`hello ${name}`
```

O lexer deve gerar tokens como:

```
STRING_PART
INTERPOLATION_START
IDENTIFIER
INTERPOLATION_END
STRING_PART
```

Delimitadores:

```
${   }
```

---

# 7️⃣ Suporte a Unicode em identificadores

## Problema

Hoje identificadores provavelmente aceitam apenas:

```
a-z
A-Z
_
$
```

Mas algumas linguagens permitem Unicode.

Exemplo:

```
ação
π
用户
```

## Prompt de implementação

Permitir caracteres Unicode em identificadores.

Regras:

1. Primeiro caractere deve ser letra Unicode, `_` ou `$`.
2. Caracteres seguintes podem incluir números.

---

# 8️⃣ Melhorar mensagens de erro

## Problema

Mensagens de erro ainda podem ser genéricas.

Exemplo atual:

```
invalid number
```

## Prompt de implementação

Melhorar mensagens de erro do lexer.

Adicionar informações como:

```
Invalid number at line 4 column 12
```

ou

```
Unclosed string starting at line 5 column 8
```

---

# 9️⃣ Performance do lexer

## Problema

Comparações de caracteres usando strings podem ser mais lentas.

## Prompt de implementação

Otimizar o lexer usando `charCodeAt()` para comparações de caracteres.

Substituir verificações como:

```
ch >= '0' && ch <= '9'
```

por comparações de código ASCII quando apropriado.

---

# Observação

Essas melhorias **não precisam ser feitas agora**.

O lexer atual já é suficiente para iniciar:

```
Parser
AST
Interpreter
```

As melhorias podem ser implementadas gradualmente conforme a linguagem evolui.
