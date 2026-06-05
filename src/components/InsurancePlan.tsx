import {
  insuranceLinks,
  insurancePlan,
  lowCostInsuranceLinks,
} from "../data/trustStack";
import { Section } from "./Section";

export function InsurancePlan() {
  return (
    <Section
      id="insurance-plan"
      eyebrow="07 / Insurance and background check plan"
      title="Recommended protection steps before scaling the offer."
      intro="These are professional recommendations to review with licensed insurance, legal, and compliance advisors. This strategy does not assume a legal requirement unless separately verified."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {insurancePlan.map((item) => (
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
      <div className="mt-8 rounded-lg border border-line bg-warm-white p-6 shadow-panel">
        <div className="max-w-3xl">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            Low-cost quote research
          </p>
          <p className="mt-4 leading-8 text-slate">
            These are public starting points, not guarantees. Final quotes will
            depend on ZIP code, coverage limits, revenue, vehicle use,
            employees, services performed, and underwriting. The practical move:
            quote at least two liability providers and one bond provider before
            publishing “insured and bonded” language.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {lowCostInsuranceLinks.map((item) => (
            <article
              key={item.title}
              className="rounded-md border border-line bg-cream p-4"
            >
              <p className="font-semibold text-forest">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-slate">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {insuranceLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-semibold text-forest underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
