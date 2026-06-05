import {
  laneOwnabilityCards,
  laneProofStats,
  laneProofSummary,
  nicheCards,
  nicheContent,
} from "../data/strategyContent";
import { Section } from "./Section";

export function NicheSection() {
  return (
    <Section
      id="niche"
      eyebrow="02 / The niche"
      title={nicheContent.title}
      intro={nicheContent.intro}
      tone="white"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {nicheCards.map((card) => (
          <article
            key={card.title}
            className="rounded-lg border border-line bg-warm-white p-6 shadow-panel"
          >
            <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              {card.title}
            </p>
            <p className="mt-5 leading-8 text-slate">{card.detail}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-lg border border-line bg-cream p-6 shadow-panel">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-brass">
          Why this lane is best, underserved, and ownable
        </p>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate">
          {laneProofSummary}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {laneProofStats.map((stat) => (
            <article
              key={`${stat.value}-${stat.label}`}
              className="rounded-md border border-line bg-warm-white p-4"
            >
              <p className="font-display text-4xl font-semibold leading-none text-forest">
                {stat.value}
              </p>
              <h3 className="mt-3 text-base font-semibold text-navy">
                {stat.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate">{stat.detail}</p>
              <p className="mt-4 font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-brass">
                {stat.source}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {laneOwnabilityCards.map((card) => (
            <article
              key={card.title}
              className="rounded-md border border-line bg-sage/60 p-5"
            >
              <h3 className="text-base font-semibold text-forest">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate">{card.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
