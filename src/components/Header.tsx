import { useEffect, useState } from "react";
import { ArrowDown, HeartHandshake } from "lucide-react";
import { navItems } from "../data/strategyContent";

export function Header() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) * 100 : 0;
      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <header className="presentation-nav sticky top-0 z-40 border-b border-warm-white/10 bg-forest text-warm-white">
      <div className="h-1 bg-warm-white/10">
        <div
          className="h-full bg-brass"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass text-forest">
            <HeartHandshake size={20} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">
              Detroit AI Works
            </span>
            <span className="block truncate font-label text-[11px] uppercase tracking-[0.12em] text-warm-white/60">
              CWP Strategy
            </span>
          </span>
        </a>
        <a
          href="#dai-workflow"
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-warm-white px-4 text-sm font-bold text-forest shadow-soft transition hover:bg-sage"
        >
          <ArrowDown size={16} aria-hidden="true" />
          <span>Build offer</span>
        </a>
      </div>
      <nav
        className="border-t border-warm-white/10"
        aria-label="Presentation sections"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-2 sm:px-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-1.5 font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-warm-white/65 transition hover:bg-warm-white/10 hover:text-warm-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
