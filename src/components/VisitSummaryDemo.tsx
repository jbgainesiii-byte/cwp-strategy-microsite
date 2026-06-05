import { visitSummary } from "../data/journey";
import { Section } from "./Section";

export function VisitSummaryDemo() {
  return (
    <Section
      id="visit-summary"
      eyebrow="11 / Visit summary demo"
      title="The visit summary is the strategic artifact."
      intro="It should feel warm, dignified, specific, and calm. Not surveillance. Not a report card. Just enough information to reassure the family."
      tone="white"
    >
      <article className="rounded-lg border border-line bg-warm-white p-6 shadow-panel sm:p-8">
        <div className="mb-8 max-w-3xl">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            Sample summary
          </p>
          <p className="mt-5 text-xl leading-8 text-navy">
            {visitSummary.greeting}
          </p>
          <p className="mt-3 text-xl leading-8 text-navy">
            {visitSummary.opening}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <SummaryList title="Completed tasks" items={visitSummary.completedTasks} />
          <SummaryList title="Helpful notes" items={visitSummary.helpfulNotes} />
          <SummaryList
            title="Supplies running low"
            items={visitSummary.suppliesLow}
          />
        </div>

        <p className="mt-8 rounded-lg bg-sage p-5 leading-8 text-forest">
          {visitSummary.nextVisit}
        </p>
      </article>
    </Section>
  );
}

function SummaryList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-forest">{title}</h3>
      <ul className="mt-4 grid gap-3 text-slate">
        {items.map((item) => (
          <li key={item} className="border-t border-line pt-3 leading-7">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
