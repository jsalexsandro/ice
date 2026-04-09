// ICEX - BASSIC GRAMMAR

const name = "Potter"

val head = <header>Hello world</header>
val headers = (
    <header>
        <text color="blue">
            Ola, { name }!
        </text>
    </header>
)

const myTag =  <tag number={ 10 }/>

  func renderItem(item: Item, cfg: Config, idx: int): string {
      return <li data-key={item.key.get(cfg.base[getIdx(0, item.size())], cfg.meta[getFoo(idx, item.size())])} data-score={item.score * cfg.factor.get[idx.current(item.key.get(cfg.base[0], cfg.meta[getIdx(0, item.size())]))] + -item.offset.compute(cfg.base, cfg.step * -cfg.factor.get[idx.current()])} data-active={!(item.status == cfg.expected[getIdx(idx, item.size())]) && item.active[getIdx(0, item.size())] || cfg.ready.check(item.key.get(cfg.base[0], cfg.meta[0]), item.data[getIdx(0, item.size())].value)}>
          <span data-raw={item.data[getIdx(0, item.size())].raw.get(cfg.base[0], cfg.step * -cfg.factor.get[idx.current(item.key.get(cfg.base[0], cfg.meta[0]))])}>{item.label}: {item.score * cfg.factor.get[idx.current(item.key.get(cfg.base[0], cfg.meta[getIdx(0, item.size())]))]}</span>
          <input type="range" value={item.score} data-max={cfg.limits[getIdx(idx, item.size())].max.get(cfg.base, cfg.step * -cfg.factor.get[idx.current(item.key.get(cfg.base[0], cfg.meta[0]))])}/>
      </li>
  }

  func renderSection(section: Section, cfg: Config, items: Item[]): string {
      val title = <h2 data-class={!(section.title == cfg.labels[getIdx(0, section.size())]) && section.active[0]}>{section.title}: {section.count * cfg.factor.get[idx.current(section.key.get(cfg.base[0], cfg.meta[getIdx(0, section.size())]))]}</h2>
      val body = <div class="section-body" data-id={section.id.get(cfg.base, cfg.step * -cfg.factor.get[idx.current(section.key.get(cfg.base[0], cfg.meta[0]))])} data-valid={section.valid && !(cfg.hidden || section.loading) && cfg.ready.check(section.key.get(cfg.base[0], cfg.meta[getIdx(0, section.size())]), section.data[getIdx(0, section.size())].value)}>
          <p data-raw={section.data[getIdx(0, section.size())].raw.get(cfg.base[0], cfg.step * -cfg.factor.get[idx.current()])}>{section.body[0]} {section.data[getIdx(0, section.size())].subtitle}</p>
          <ul data-count={section.items[getIdx(0, section.size())].count * cfg.factor.get[idx.current(section.key.get(cfg.base[0], cfg.meta[0]))]}>
              {renderItem(items[getIdx(0, section.size())], cfg, 0)}
              {renderItem(items[getIdx(1, section.size())], cfg, 1)}
          </ul>
      </div>
      return <section data-id={section.id.get(cfg.base[getIdx(0, section.size())], cfg.meta[getFoo(0, section.size())])} data-score={section.score * cfg.factor.get[idx.current(section.key.get(cfg.base[0], cfg.meta[getIdx(0, section.size())]))] + -section.offset.compute(cfg.base, cfg.step * 2)}>
          {title}
          {body}
          <aside data-open={cfg.sidebar.check(section.key.get(cfg.base[0], cfg.meta[getIdx(0, section.size())]), section.data[0].value) && !(section.loading || cfg.hidden[getIdx(0, section.size())])}>
              <div class="panel" data-index={section.panels[getIdx(0, section.size())].index.compute(cfg.base + cfg.step * -cfg.factor.get[idx.current(section.key.get(cfg.base[0], cfg.meta[0]))])}>{section.panels[getIdx(0, section.size())].title}: {section.panels[0].score * cfg.factor.get[idx.current()] + -section.offset.compute(cfg.base, cfg.step)}</div>
          </aside>
      </section>
  }

  func renderPage(data: Page, cfg: Config): string {
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
  }
