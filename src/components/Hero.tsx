import { ArrowDown, ShieldCheck } from "lucide-react";
import { heroContent, heroStats } from "../data/strategyContent";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-forest text-warm-white">
      <div className="absolute inset-0">
        <img
          src="/assets/cwp-strategy-hero.png"
          alt="Warm senior-friendly home setting with a cleaning basket and family visit notes"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/20" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-forest to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-68px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-warm-white/20 bg-warm-white/10 px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.12em] text-sage backdrop-blur">
            <ShieldCheck size={16} aria-hidden="true" />
            {heroContent.eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[0.98] sm:text-7xl lg:text-[5.8rem]">
            {heroContent.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-warm-white/80 sm:text-xl">
            {heroContent.subtitle}
          </p>
          <p className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.12] text-warm-white sm:text-4xl">
            {heroContent.statement}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={heroContent.primaryCta.href}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-brass px-5 text-sm font-bold text-forest transition hover:bg-sage"
            >
              <ArrowDown size={18} aria-hidden="true" />
              {heroContent.primaryCta.label}
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex h-12 items-center rounded-full border border-warm-white/25 px-5 text-sm font-bold text-warm-white transition hover:bg-warm-white/10"
            >
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="grid gap-4 lg:justify-self-end">
          <div className="rounded-lg border border-warm-white/20 bg-warm-white/10 p-5 shadow-panel backdrop-blur">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-sage">
              Core insight
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-md border border-warm-white/70 bg-warm-white p-4 text-navy"
                >
                  <p className="font-display text-3xl font-semibold leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-5 text-slate">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
