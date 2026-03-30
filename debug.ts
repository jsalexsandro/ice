import { Lexer } from "./src/lexer";
import { Parser } from "./src/parser";

const code = `func renderPage(data: Page, cfg: Config): string {
    val nav = <nav class="main-nav" data-ready={cfg.status.get(data.items[0].key, data.meta[getIdx(0, data.size())]) && !(data.loading || data.error)} data-version={data.version.compute(cfg.base + cfg.step * -cfg.factor.get[idx.current(data.items[0].key)], !(data.ready.check(data.items[getIdx(0, data.size())].key, cfg.base[0]) || cfg.hidden))}>
        <ul data-items={data.items[getIdx(0, data.size())].count * cfg.factor.get[idx.current(data.items[0].key)]}>
            <li data-selected={data.active[getIdx(0, data.size())] && !(cfg.hidden || data.loading)}>{data.items[getIdx(0, data.size())].label}</li>
            <li data-href={cfg.routes[data.current].path.get(data.meta[0], cfg.base[getIdx(0, data.size())])}>{cfg.routes[data.current].label}</li>
        </ul>
    </nav>

    val sections = [
        renderSection(data.sections[0], cfg, data.items),
        renderSection(data.sections[1], cfg, data.items),
        renderSection(data.sections[getIdx(2, data.size())], cfg, data.items)
    ]

    val footer = <footer data-sync={data.sync.check(cfg.base[getIdx(0, data.size())], data.meta[getFoo(0, data.size())]) && !(data.error || cfg.disabled[getIdx(0, data.size())])}>
        <div class="status" data-code={data.status.compute(cfg.base + cfg.step * -cfg.factor.get[idx.current(data.items[0].key)], !(data.ready || cfg.expected[getIdx(0, data.size())] == data.current))}>
            <span>Sync: {data.sync.check(cfg.base[0], data.meta[getIdx(0, data.size())])}</span>
            <span>Offset: {data.offset.compute(cfg.base, cfg.step * -cfg.factor.get[idx.current()]) + data.items[getIdx(0, data.size())].score}</span>
            <input type="hidden" value={data.token.get(cfg.base[0], cfg.step * -cfg.factor.get[idx.current(data.items[0].key)])}/>
        </div>
    </footer>

    return <div class="page" data-ready={cfg.status.get(data.items[0].key, data.meta[getIdx(0, data.size())]) && !(data.loading || data.error)} data-version={data.version.compute(cfg.base + cfg.step * -cfg.factor.get[idx.current(data.items[0].key)], !(data.ready.check(data.items[getIdx(0, data.size())].key, cfg.base[0]) || cfg.hidden))}>
        {nav}
        {sections[0]}
        {sections[1]}
        {sections[getIdx(2, data.size())]}
        {footer}
        <div class="overlay" data-active={!(data.overlay.check(cfg.base[getIdx(0, data.size())], data.meta[getFoo(0, data.size())]) || data.loading) && cfg.ready[getIdx(0, data.size())] == data.current}>
            <span>Ready: {data.ready.check(data.items[getIdx(0, data.size())].key, cfg.base[0]) && !(data.loading || cfg.hidden)}</span>
        </div>
    </div>
}`;

console.log("Testing renderPage...\n");

try {
  const p = new Parser(new Lexer(code).tokenize());
  p.parseProgram();
  console.log("✅ SUCCESS");
} catch (e) {
  console.log("❌ FAILED");
  console.log("Error:", (e as Error).message);
}
