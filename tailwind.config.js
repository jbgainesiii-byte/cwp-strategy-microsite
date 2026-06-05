/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E8",
        "warm-white": "#FFFDF8",
        forest: "#173C34",
        navy: "#18212B",
        sage: "#DDE6D8",
        brass: "#B88A44",
        taupe: "#B7A99A",
        charcoal: "#202020",
        ink: "#18212B",
        midnight: "#173C34",
        harbor: "#173C34",
        mint: "#DDE6D8",
        coral: "#B88A44",
        paper: "#F7F1E8",
        cloud: "#FFFDF8",
        slate: "#5E5A54",
        line: "#D8CDC1",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        label: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        panel: "0 22px 70px rgba(24, 33, 43, 0.08)",
        soft: "0 16px 44px rgba(23, 60, 52, 0.14)",
      },
    },
  },
  plugins: [],
};
