import { Check } from "lucide-react";
import { packages, pricingNote } from "../data/packages";
import { Section } from "./Section";

export function PricingSection() {
  return (
    <Section
      id="pricing"
      eyebrow="08 / Packages and pricing"
      title="Use clear package anchors so families understand the value."
      intro={pricingNote}
      tone="white"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {packages.map((plan, index) => (
          <article
            key={plan.name}
            className={`rounded-lg border p-6 shadow-panel ${
              index === 2
                ? "border-forest bg-forest text-warm-white"
                : "border-line bg-warm-white text-navy"
            }`}
          >
            <p
              className={`font-label text-xs font-semibold uppercase tracking-[0.18em] ${
                index === 2 ? "text-sage" : "text-brass"
              }`}
            >
              {plan.name}
            </p>
            <p className="mt-5 font-display text-4xl font-semibold leading-none">
              {plan.price}
            </p>
            <p
              className={`mt-4 leading-7 ${
                index === 2 ? "text-warm-white/75" : "text-slate"
              }`}
            >
              {plan.bestFor}
            </p>
            <ul className="mt-6 grid gap-3">
              {plan.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6">
                  <Check
                    className={index === 2 ? "text-sage" : "text-forest"}
                    size={18}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
