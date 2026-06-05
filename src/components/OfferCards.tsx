import { coreOfferItems, entryOffer } from "../data/strategyContent";
import { Section } from "./Section";

export function OfferCards() {
  return (
    <>
      <Section
        id="core-offer"
        eyebrow="04 / Core offer"
        title="The Peace-of-Mind Home Visit"
        intro="A recurring senior-friendly cleaning visit that gives the family a calm, dignified update after the home has been cared for."
        tone="white"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreOfferItems.map((item) => (
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
      </Section>

      <Section
        id="entry-offer"
        eyebrow="05 / Entry offer"
        title={entryOffer.title}
        intro={entryOffer.detail}
      >
        <div className="rounded-lg border border-line bg-warm-white p-8 shadow-panel">
          <p className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] text-forest">
            {entryOffer.statement}
          </p>
        </div>
      </Section>
    </>
  );
}
