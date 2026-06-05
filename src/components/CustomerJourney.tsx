import { customerJourney } from "../data/journey";
import { Section } from "./Section";

export function CustomerJourney() {
  return (
    <Section
      id="journey"
      eyebrow="09 / Customer journey"
      title="The family journey starts with worry and ends with a repeatable reassurance loop."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {customerJourney.map((item) => (
          <article
            key={`${item.label}-${item.title}`}
            className="rounded-lg border border-line bg-warm-white p-5 shadow-panel"
          >
            <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              {item.label}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-forest">
              {item.title}
            </h3>
            <p className="mt-3 leading-7 text-slate">{item.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
