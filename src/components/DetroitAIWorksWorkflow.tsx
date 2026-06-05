import { daiWorkflow } from "../data/strategyContent";
import { Section } from "./Section";

export function DetroitAIWorksWorkflow() {
  return (
    <Section
      id="dai-workflow"
      eyebrow="14 / Detroit AI Works proposed workflow"
      title="Build the strategy, offer, and operating workflow in the right order."
      intro="Detroit AI Works should help turn this positioning into practical assets Cleaning With Purpose can use immediately."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {daiWorkflow.map((item) => (
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
  );
}
