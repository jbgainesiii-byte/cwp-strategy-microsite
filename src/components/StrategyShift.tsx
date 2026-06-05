import { strategicShift } from "../data/strategyContent";
import { Section } from "./Section";

export function StrategyShift() {
  return (
    <Section
      id="strategic-shift"
      eyebrow="01 / Strategic shift"
      title="The opportunity is not more cleaning demand. It is more family trust."
      intro={strategicShift.problem}
    >
      <ShiftCards
        from={strategicShift.from}
        to={strategicShift.to}
        note={strategicShift.note}
      />
    </Section>
  );
}

function ShiftCards({ from, to, note }: { from: string; to: string; note: string }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
      <article className="rounded-lg border border-line bg-warm-white p-6 shadow-panel">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-taupe">
          From
        </p>
        <h3 className="mt-5 font-display text-4xl font-semibold leading-[1.04] text-navy">
          {from}
        </h3>
      </article>
      <div className="hidden items-center px-3 font-label text-xs uppercase tracking-[0.18em] text-brass lg:flex">
        shift
      </div>
      <article className="rounded-lg border border-forest bg-forest p-6 text-warm-white shadow-panel">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-sage">
          To
        </p>
        <h3 className="mt-5 font-display text-4xl font-semibold leading-[1.04]">
          {to}
        </h3>
      </article>
      <p className="leading-8 text-slate lg:col-span-3 lg:max-w-3xl">{note}</p>
    </div>
  );
}
