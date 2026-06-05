import type { RoadmapItem } from "./roadmap";

export const customerJourney: RoadmapItem[] = [
  {
    label: "01",
    title: "Family is worried",
    detail:
      "A family member notices the home is becoming harder to maintain or wants more reassurance between visits.",
  },
  {
    label: "02",
    title: "They find Cleaning With Purpose",
    detail:
      "The positioning immediately signals senior-friendly care, trust, and family communication.",
  },
  {
    label: "03",
    title: "They request a Purpose Home Reset",
    detail: "The first step is a reset visit, not a vague general cleaning quote.",
  },
  {
    label: "04",
    title: "They submit home details/photos",
    detail:
      "The intake captures home size, condition, routines, access, pets, and helpful context.",
  },
  {
    label: "05",
    title: "Fit review and quote",
    detail:
      "Cleaning With Purpose confirms fit, scope, price, and boundaries before the visit.",
  },
  {
    label: "06",
    title: "First reset happens",
    detail: "The home is cleaned carefully and the recurring care needs become clearer.",
  },
  {
    label: "07",
    title: "Family receives visit summary",
    detail: "A warm note closes the worry loop after the visit.",
  },
  {
    label: "08",
    title: "Recurring plan is offered",
    detail:
      "The family receives a recommended rhythm based on home condition and needs.",
  },
  {
    label: "09",
    title: "Review/referral request goes out",
    detail:
      "Positive early experiences turn into proof, reviews, and family referrals.",
  },
];

export const visitSummary = {
  greeting: "Hi [Family Name],",
  opening:
    "I was with [Parent's First Name] today. The home is clean and comfortable, and the visit went smoothly.",
  completedTasks: [
    "Kitchen surfaces cleaned and floors refreshed.",
    "Bathroom cleaned and high-touch areas wiped.",
    "Living room straightened, dusted, and vacuumed.",
  ],
  helpfulNotes: [
    "The home felt calm and easy to move through.",
    "[Parent's First Name] mentioned wanting the bedroom prioritized next time.",
  ],
  suppliesLow: ["Paper towels", "Dish soap"],
  nextVisit:
    "Next visit: [Date / Time]. I will focus on [priority area] unless you would like anything adjusted.",
};
