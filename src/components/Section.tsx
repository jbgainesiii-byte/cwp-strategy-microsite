import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "cream" | "white" | "dark";
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "cream",
  children,
}: SectionProps) {
  const toneClass =
    tone === "dark"
      ? "bg-forest text-warm-white"
      : tone === "white"
        ? "bg-warm-white text-navy"
        : "bg-cream text-navy";

  return (
    <section
      id={id}
      className={`presentation-section ${toneClass} scroll-mt-32 border-t border-line/80 py-16 sm:py-24`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mb-10 grid gap-5 lg:mb-14 lg:grid-cols-[0.33fr_0.67fr] lg:items-start">
          <div>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              {eyebrow}
            </p>
            {id ? (
              <a
                href={`#${id}`}
                className="mt-3 inline-flex font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-slate underline-offset-4 hover:text-forest hover:underline"
                aria-label={`Copy anchor for ${title}`}
              >
                #{id}
              </a>
            ) : null}
          </div>
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl leading-[1.06] text-current sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            {intro ? (
              <p
                className={`mt-6 max-w-3xl text-base leading-8 sm:text-xl ${
                  tone === "dark" ? "text-warm-white/70" : "text-slate"
                }`}
              >
                {intro}
              </p>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
