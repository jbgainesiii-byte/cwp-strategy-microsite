import { transformation } from "../data/strategyContent";
import { Section } from "./Section";

export function TransformationSection() {
  return (
    <Section
      id="transformation"
      eyebrow="03 / The transformation"
      title="Move the sale from tasks and hours to reassurance and consistency."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <article className="rounded-lg border border-line bg-warm-white p-6 shadow-panel">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-taupe">
            Before
          </p>
          <h3 className="mt-5 font-display text-4xl font-semibold leading-[1.04] text-navy">
            {transformation.from}
          </h3>
        </article>
        <div className="hidden items-center px-3 font-label text-xs uppercase tracking-[0.18em] text-brass lg:flex">
          after
        </div>
        <article className="rounded-lg border border-forest bg-forest p-6 text-warm-white shadow-panel">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-sage">
            After
          </p>
          <h3 className="mt-5 font-display text-4xl font-semibold leading-[1.04]">
            {transformation.to}
          </h3>
        </article>
        <p className="leading-8 text-slate lg:col-span-3 lg:max-w-3xl">
          {transformation.note}
        </p>
      </div>
    </Section>
  );
}
