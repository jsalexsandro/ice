import { Lexer } from './src/lexer'
import { Parser } from './src/parser'

function test(name: string, code: string) {
    try {
        const tokens = new Lexer(code).tokenize()
        const ast = new Parser(tokens).parseProgram()
        console.log(`✅ ${name}`)
        return true
    } catch (e: any) {
        console.log(`❌ ${name}: ${e.message}`)
        return false
    }
}

console.log("=== More Stress Tests ===\n")

// Bug 1: ICEX with map (found above)
// test("ICEX map", `val x = <div>{items.map(i => <li>{i}</li>)}</div>`)

// More ICEX edge cases
test("ICEX child expression", "val x = <div>{a + b}</div>")
test("ICEX ternary child", "val x = <div>{a ? <span/> : <p/>}</div>")
test("ICEX multiple children", "val x = <div><a/>{b}<c/></div>")

// Object edge cases
test("Empty object", "val x = {}")
test("Object with spaces", "val x = { a : 1 , b : 2 }")
test("Object computed key", "val x = {[key]: value}")
test("Object method shorthand", "val x = { fn() { } }")
test("Object getter", "val x = { get name() { return 1 } }")
test("Object setter", "val x = { set name(v) { } }")

// Array edge cases
test("Empty array", "val x = []")
test("Trailing comma array", "val x = [1, 2, 3,]")
test("Spread in array", "val x = [1, ...arr, 5]")

// Function edge cases
test("Function no params", "func f() { }")
test("Function default param", "func f(a = 1) { }")
test("Function rest param", "func f(...args) { }")

// Class edge cases
test("Abstract class", "abstract class X { }")
test("Interface", "interface X { }")
test("Class with private field", "class X { #field }")
test("Class getter/setter", "class X { get prop() { } set prop(v) { } }")

// Type annotation edge cases
test("Nullable type", "val x: int? = 1")
test("Union type", "val x: int | string = 1")
test("Type alias", "type MyType = int")

// Edge operators
test("Pipeline operator", "val x = a |> b |> c")
test("Null coalesce assign", "val x = a ??= b")
test("Logical assign", "val x = a &&= b")

// Unicode identifiers
test("Unicode identifier", "val índice = 1")
test("Emoji identifier", "val 🐱 = 1")

// Newlines in weird places
test("Newline in expression", "val x = a\n+ b")
test("Newline in object", "val x = {\na: 1\n}")

// Semicolon edge cases
test("Multiple semicolons", "val x = 1;;;val y = 2")
test("Semicolon after block", "if (true) { };")

// Template string edge cases
test("Template string", 'val x = `hello ${name}`')

// Comments in weird places
test("Comment in expression", "val x = a /* comment */ + b")
test("Line comment in block", `val x = {
    val y = 1 // comment
}`)

// Large numbers
test("Large number", "val x = 999999999999999999999999")
test("Negative large", "val x = -999999999999999999999999")

console.log("\n=== Done ===")