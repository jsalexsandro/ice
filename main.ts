import { Lexer } from "./src/lexer";
import { Parser } from "./src/parser";

const tests = [
  {
    name: "title + body + return + aside",
    code: `val x = <div class="test" data-id={-cfg.factor.get[idx.current()]}>texto</div> `
  },
]

for (const test of tests) {
  try {
    const p = new Parser(new Lexer(test.code).tokenize());
    p.parseProgram();
    console.log("✅", test.name);
  } catch (e) {
    console.log("❌", test.name);
    console.log("   Error:", (e as Error).message);
  }
}
