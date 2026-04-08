const { Lexer } = require('./src/lexer')
const { Parser } = require('./src/parser')

function test(name, code) {
    try {
        const tokens = new Lexer(code).tokenize()
        const ast = new Parser(tokens).parseProgram()
        console.log(`✅ ${name}`)
        return true
    } catch (e) {
        console.log(`❌ ${name}`)
        console.log(`   ${e.message}`)
        return false
    }
}

console.log('=== Testing Object Literals ===\n')

test("1. Basic object", `val cfg = { min: 0, max: 100, label: "test" }`)

test("2. Object with expressions", `val obj = { score: a * b - c, valid: x > 0 && !locked }`)

test("3. Nested object", `val nested = { meta: { key: "a", value: 10 }, count: 5 }`)

test("4. Object as argument", `process({ id: "x", data: [1, 2, 3], active: true })`)

test("5. Object in ICEX", `val el = <div data-cfg={ { min: 0, max: 100 } }>{cfg.label}</div>`)

console.log('\n=== Done ===')