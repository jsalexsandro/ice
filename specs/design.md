# Decisões de Design da Linguagem Ice

## Arrays

### Abordagem Atual
- **Homogêneos**: Arrays devem conter apenas um tipo de elemento
- **Tipo inferido**: O tipo é inferido do conteúdo ou declarado com `tipo[]`

### Exemplos
```ice
val numeros: int[] = [1, 2, 3]
val nomes: string[] = ["John", "Doe"]
val automatico = [1, 2, 3]  // infere int[]
```

### Futuro
- Arrays heterogêneos podem ser implementados como `any[]` ou tipos union
- Suporte a tuple: `[int, string, bool]`
