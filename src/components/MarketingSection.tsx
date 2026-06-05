import {
  facebookPlan,
  marketingChannels,
  marketingMath,
  marketStats,
  sourceLinks,
} from "../data/marketing";
import { Section } from "./Section";

export function MarketingSection() {
  return (
    <Section
      id="marketing"
      eyebrow="10 / Marketing and lead generation"
      title="The buyer is the adult child, and the adult child is reachable."
      intro="Facebook is not about personal preference. It is a business channel for reaching the family member who is worried, searching, asking friends, and deciding who can be trusted inside Mom's home."
      tone="white"
    >
      <div className="grid gap-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {marketStats.map((stat) => (
            <article
              key={`${stat.value}-${stat.label}`}
              className="rounded-lg border border-line bg-cream p-5 shadow-panel"
            >
              <p className="font-display text-5xl font-semibold leading-none text-forest">
                {stat.value}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-navy">
                {stat.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate">{stat.detail}</p>
              <a
                href={stat.url}
                className="mt-4 inline-block font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-brass underline-offset-4 hover:underline"
              >
                {stat.source}
              </a>
            </article>
          ))}
        </div>

        <MarketingBlock
          title="Channels to activate"
          items={marketingChannels}
          columns="four"
        />

        <MarketingBlock
          title="Facebook setup position"
          items={facebookPlan}
          columns="four"
        />

        <MarketingBlock
          title="Simple revenue logic"
          items={marketingMath}
          columns="four"
        />

        <div className="rounded-lg border border-line bg-warm-white p-6 shadow-panel">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            Research links
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {sourceLinks.map((source) => (
              <a
                key={source.title}
                href={source.detail}
                className="min-w-0 overflow-hidden rounded-md border border-line bg-cream p-4 text-sm leading-6 text-forest underline-offset-4 hover:underline"
              >
                <span className="font-semibold">{source.title}</span>
                <span className="mt-1 block break-all text-slate">
                  {source.detail}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

type MarketingBlockProps = {
  title: string;
  items: Array<{ title: string; detail: string }>;
  columns: "three" | "four";
};

function MarketingBlock({ title, items, columns }: MarketingBlockProps) {
  const gridClass = columns === "four" ? "xl:grid-cols-4" : "xl:grid-cols-3";

  return (
    <div>
      <h3 className="mb-4 font-display text-3xl font-semibold text-forest">
        {title}
      </h3>
      <div className={`grid gap-4 md:grid-cols-2 ${gridClass}`}>
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-line bg-warm-white p-6 shadow-panel"
          >
            <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              {item.title}
            </p>
            <p className="mt-5 leading-8 text-slate">{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
