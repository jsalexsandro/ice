import { Lexer } from "./src/lexer";
import { Parser } from "./src/parser";

// Found! nested function call with more args
const tests = [
  // 2 args where first is nested function call
  '<div data-test={fn(a.get(b), c)}></div>',
  '<div data-test={fn(a.get(b, c), d)}></div>',
  '<div data-test={fn(a.get(b), c[d])}></div>',
  '<div data-test={fn(a.get(b[0]), c)}></div>',
  '<div data-test={fn(a.get(b[0], c), d)}></div>',
  '<div data-test={fn(a.get(b), c[d].e)}></div>',
  // With cfg prefix
  '<div data-test={cfg.ready.check(section.key.get(cfg.base[0]), y)}></div>',
  '<div data-test={cfg.ready.check(section.key.get(cfg.base[0], y.z[0])}></div>',
  // Original pattern
  '<div data-test={cfg.ready.check(section.key.get(cfg.base[0], cfg.meta[getIdx(0, section.size())].value)}></div>',
];

for (const code of tests) {
  try {
    const p = new Parser(new Lexer(code).tokenize());
    p.parseProgram();
    console.log("✅", code.slice(0, 65));
  } catch (e) {
    console.log("❌", code.slice(0, 65));
  }
}
