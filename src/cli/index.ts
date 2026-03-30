import { Lexer } from "../lexer"
import { Parser } from "../parser"
import { readFileSync, existsSync } from "fs"

const args = process.argv.slice(2)

if (args.length === 0) {
  console.log("Usage: ice <file.ice>")
  console.log("       ice --help")
  process.exit(1)
}

const command = args[0]

if (command === "--help" || command === "-h") {
  console.log("Ice Lang CLI")
  console.log("")
  console.log("Usage: ice <file.ice>")
  console.log("")
  console.log("Options:")
  console.log("  --help, -h     Show this help message")
  console.log("  --version, -v Show version")
  process.exit(0)
}

if (command === "--version" || command === "-v") {
  console.log("Ice Lang v1.0.0")
  process.exit(0)
}

const filePath = command

if (!existsSync(filePath)) {
  console.error(`Error: File '${filePath}' not found`)
  process.exit(1)
}

if (!filePath.endsWith(".ice")) {
  console.error("Error: File must have .ice extension")
  process.exit(1)
}

try {
  const code = readFileSync(filePath, "utf-8")
  const lexer = new Lexer(code)
  const tokens = lexer.tokenize()
  const parser = new Parser(tokens)
  const ast = parser.parseProgram()
  
  console.log(JSON.stringify(ast, null, 2))
} catch (error: any) {
  console.error(`Error: ${error.message}`)
  process.exit(1)
}
