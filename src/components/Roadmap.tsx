import { first30Days, first90Days, type RoadmapItem } from "../data/roadmap";
import { Section } from "./Section";

export function Roadmap() {
  return (
    <>
      <Section
        id="first-30"
        eyebrow="12 / First 30 days"
        title="The first month should prove the offer, not overbuild the business."
      >
        <RoadmapGrid items={first30Days} />
      </Section>

      <Section
        id="first-90"
        eyebrow="13 / First 90 days"
        title="By day 90, the trust-centered lane should be measurable."
        tone="white"
      >
        <RoadmapGrid items={first90Days} />
      </Section>
    </>
  );
}

function RoadmapGrid({ items }: { items: RoadmapItem[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={`${item.label}-${item.title}`}
          className="rounded-lg border border-line bg-warm-white p-5 shadow-panel"
        >
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            {item.label}
          </p>
          <h3 className="mt-4 text-xl font-semibold text-forest">{item.title}</h3>
          <p className="mt-3 leading-7 text-slate">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
