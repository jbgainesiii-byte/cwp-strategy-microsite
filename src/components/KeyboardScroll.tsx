import { useEffect } from "react";

const scrollKeys = new Set([
  "ArrowDown",
  "ArrowUp",
  "PageDown",
  "PageUp",
  "Home",
  "End",
  " ",
]);

export function KeyboardScroll() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!scrollKeys.has(event.key) || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName.toLowerCase();
      const isEditing =
        target?.isContentEditable ||
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select";

      if (isEditing) {
        return;
      }

      const viewport = window.innerHeight;
      const smallStep = Math.round(viewport * 0.12);
      const pageStep = Math.round(viewport * 0.82);

      const scrollBy = (top: number) => {
        event.preventDefault();
        window.scrollBy({ top, behavior: "smooth" });
      };

      if (event.key === "ArrowDown") scrollBy(smallStep);
      if (event.key === "ArrowUp") scrollBy(-smallStep);
      if (event.key === "PageDown" || event.key === " ") scrollBy(pageStep);
      if (event.key === "PageUp") scrollBy(-pageStep);
      if (event.key === "Home") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (event.key === "End") {
        event.preventDefault();
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
