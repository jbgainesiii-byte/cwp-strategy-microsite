import { buildLater, buildNow } from "../data/strategyContent";
import { Section } from "./Section";

export function BuildNowLater() {
  const groups = [
    { title: "Build now", items: buildNow },
    { title: "Build later", items: buildLater },
  ];

  return (
    <Section
      id="build-now-later"
      eyebrow="15 / Build now vs later"
      title="Build the manual trust system before the software system."
      intro="The first phase should validate the offer and workflow without Supabase, dashboards, payments, SMS automation, or a full CRM."
      tone="white"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.title}
            className="rounded-lg border border-line bg-warm-white p-6 shadow-panel"
          >
            <h3 className="font-display text-4xl font-semibold text-forest">
              {group.title}
            </h3>
            <div className="mt-6 grid gap-4">
              {group.items.map((item) => (
                <div key={item.title} className="border-t border-line pt-4">
                  <p className="font-semibold text-navy">{item.title}</p>
                  <p className="mt-2 leading-7 text-slate">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
