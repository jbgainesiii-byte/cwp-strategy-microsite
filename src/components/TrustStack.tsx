import { trustStack } from "../data/trustStack";
import { Section } from "./Section";

export function TrustStack() {
  return (
    <Section
      id="trust"
      eyebrow="06 / Trust stack"
      title="Every trust signal should make the family feel safer choosing Cleaning With Purpose."
      intro="The trust stack turns a warm promise into something visible, documented, and repeatable."
      tone="white"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {trustStack.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="rounded-lg border border-line bg-cream p-6 shadow-panel"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-warm-white text-forest">
                <Icon size={21} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-forest">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate">{item.detail}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
