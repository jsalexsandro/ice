// 1. objeto em val
val cfg = { min: 0, max: 100, label: "test" }

// 2. objeto com expressões
val obj = { score: a * b - c, valid: x > 0 && !locked }

// 3. objeto aninhado
val nested = { meta: { key: "a", value: 10 }, count: 5 }

// 4. objeto em argumento
process({ id: "x", data: [1, 2, 3], active: true })

// 5. objeto em interpolação ICEX
val el = <div data-cfg={ { min: 0, max: 100 } }>{cfg.label}</div>