import { createTest } from "./tests/test-runner"

createTest("parser", {
  id: "164",
  description: "ICEX - extreme dashboard with complex expressions",
  code: `func renderDashboard(data: Dashboard, cfg: Config): string {
    val header = <header class="main" data-ready={cfg.status.get(data.items[0].key, data.meta[getIdx(0, data.size())]) && !data.loading} data-count={data.items[getIdx(0, data.size())].compute(cfg.base + cfg.step * -cfg.factor.get[idx.current(data.items[0].key)])}>
        <nav data-active={!(data.route == cfg.routes[getIdx(data.current, data.size())])}>
            <ul data-items={data.items[0].count * cfg.factor.get[idx.current()]}>
                <li data-selected={data.active[getIdx(0, data.size())] && !(cfg.hidden || data.loading)}>{data.items[getIdx(0, data.size())].label}</li>
                <li data-href={cfg.routes[data.current].path.get(data.meta[0], cfg.base[getIdx(0, n.size())])}>Route: {cfg.routes[data.current].label}</li>
            </ul>
        </nav>
        <div class="toolbar" data-state={data.state.compute(cfg.base + cfg.step * -factor.get[idx.current(data.items[0].key)], !(data.ready.check(data.items[getIdx(0, data.size())].key, cfg.base[0]) || data.loading))}>
            <span>{data.title}</span>
            <span>Count: {data.items[getIdx(0, data.size())].count * cfg.factor.get[idx.current()]}</span>
            <span>Status: {!(data.status == cfg.expected[getIdx(0, data.size())])}</span>
            <input type="text" value={data.items[0].label} data-valid={data.items[getIdx(0, data.size())].check(cfg.base, cfg.step * -cfg.factor.get[idx.current()]) && !(data.loading || cfg.hidden)}/>
        </div>
    </header>

    val body = <main data-loading={data.loading && !(cfg.ready.check(data.items[0].key, data.meta[getIdx(0, data.size())]) || data.error)}>
        <section data-id={data.sections[getIdx(0, data.size())].id.get(cfg.base, cfg.step)}>
            <article data-score={data.items[getIdx(0, data.size())].score * cfg.factor.get[idx.current(data.items[0].key)] + -data.offset.compute(cfg.base, cfg.step * 2)}>
                <h1 data-class={!(data.title == cfg.labels[getIdx(0, data.size())]) && data.active[0]}>{data.sections[0].title}: {data.items[getIdx(0, data.size())].label}</h1>
                <p data-raw={data.items[getIdx(0, data.size())].raw.get(cfg.base[0], cfg.step * -cfg.factor.get[idx.current()])}>Body: {data.body[0]} {data.sections[getIdx(0, data.size())].subtitle}</p>
                <ul>
                    <li data-key={data.items[0].key.get(cfg.base, data.meta[getIdx(0, data.size())])}>{data.items[0].label}: {data.items[0].score * cfg.factor.get[idx.current(data.items[0].key)]}</li>
                    <li data-key={data.items[1].key.get(cfg.base, data.meta[getIdx(1, data.size())])}>{data.items[1].label}: {data.items[1].score * cfg.factor.get[idx.current(data.items[1].key)]}</li>
                </ul>
            </article>
        </section>
        <aside data-open={cfg.sidebar.check(data.items[getIdx(0, data.size())].key, data.meta[0]) && !(data.loading || cfg.hidden[getIdx(0, n.size())])}>
            <div class="panel" data-index={data.panels[getIdx(0, data.size())].index.compute(cfg.base + cfg.step * -cfg.factor.get[idx.current(data.items[0].key)])}>
                <span>Panel: {data.panels[getIdx(0, data.size())].title}</span>
                <span>Score: {data.panels[0].score * cfg.factor.get[idx.current()] + -data.offset.compute(cfg.base, cfg.step)}</span>
                <input type="range" value={data.panels[0].score} data-max={cfg.limits[getIdx(0, data.size())].max.get(cfg.base, cfg.step * -cfg.factor.get[idx.current(data.items[0].key)])}/>
            </div>
        </aside>
    </main>

    val footer = <footer data-sync={data.sync.check(cfg.base[getIdx(0, data.size())], data.meta[getFoo(0, n.size())]) && !(data.error || cfg.disabled[getIdx(0, n.size())])}>
        <div class="status" data-code={data.status.compute(cfg.base + cfg.step * -cfg.factor.get[idx.current(data.items[0].key)], !(data.ready || cfg.expected[getIdx(0, data.size())] == data.current))}>
            <span>Sync: {data.sync.check(cfg.base[0], data.meta[getIdx(0, data.size())])}</span>
            <span>Code: {!(data.status == cfg.expected[getIdx(0, data.size())])}</span>
            <span>Offset: {data.offset.compute(cfg.base, cfg.step * -cfg.factor.get[idx.current()]) + data.items[getIdx(0, data.size())].score}</span>
            <input type="hidden" value={data.token.get(cfg.base[0], cfg.step * -cfg.factor.get[idx.current(data.items[0].key)])}/>
        </div>
    </footer>

    return <div class="dashboard" data-ready={cfg.status.get(data.items[0].key, data.meta[getIdx(0, data.size())]) && !(data.loading || data.error)} data-version={data.version.compute(cfg.base + cfg.step * -cfg.factor.get[idx.current(data.items[0].key)], !(data.ready.check(data.items[getIdx(0, data.size())].key, cfg.base[0]) || cfg.hidden))}>
        {header}
        {body}
        {footer}
        <div class="overlay" data-active={!(data.overlay.check(cfg.base[getIdx(0, data.size())], data.meta[getFoo(0, n.size())]) || data.loading) && cfg.ready[getIdx(0, data.size())] == data.current}>
            <span>Ready: {data.ready.check(data.items[getIdx(0, data.size())].key, cfg.base[0]) && !(data.loading || cfg.hidden)}</span>
            <span>Version: {data.version.compute(cfg.base, cfg.step * -cfg.factor.get[idx.current()])}</span>
        </div>
    </div>
}`
})
