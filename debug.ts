import { Lexer } from "./src/lexer"
import { Parser } from "./src/parser"

const testCases = [
  { code: "async func fetch(): string { return 'hi' }", name: "async func" },
  { code: "func normal(): int { return 1 }", name: "normal func" },
  { code: "await fetch()", name: "await expr" },
  { code: "async x => x + 1", name: "async arrow no parens" },
  { code: "async (x: int): int => x * 2", name: "async arrow with parens" },
  { code: "val fn = async () => await test()", name: "async arrow assigned" },
]

for (const tc of testCases) {
  console.log(`\n=== ${tc.name} ===`)
  console.log(`Code: ${tc.code}`)
  try {
    const lexer = new Lexer(tc.code)
    const tokens = lexer.tokenize()
    const parser = new Parser(tokens)
    const ast = parser.parseProgram()
    console.log("Result:", JSON.stringify(ast.body[0], null, 2))
  } catch (e: any) {
    console.log("Error:", e.message)
  }
}