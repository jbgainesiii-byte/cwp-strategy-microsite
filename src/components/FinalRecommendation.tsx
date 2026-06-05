import { finalRecommendation, nextSteps } from "../data/strategyContent";
import { Section } from "./Section";

export function FinalRecommendation() {
  return (
    <Section
      id="final-recommendation"
      eyebrow="16 / Final recommendation"
      title="Own the trust-centered senior home cleaning lane."
      tone="dark"
    >
      <div className="rounded-lg border border-warm-white/20 bg-warm-white/10 p-8 shadow-panel">
        <p className="max-w-5xl font-display text-4xl font-semibold leading-[1.08] text-warm-white sm:text-5xl">
          {finalRecommendation}
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {nextSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-lg border border-warm-white/20 bg-warm-white/10 p-5"
            >
              <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                {step.title}
              </p>
              <p className="mt-4 leading-7 text-warm-white/72">{step.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
