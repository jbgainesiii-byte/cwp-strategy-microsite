export type Package = {
  name: string;
  price: string;
  bestFor: string;
  includes: string[];
};

export const packages: Package[] = [
  {
    name: "Purpose Home Reset",
    price: "Starting at $225-$375",
    bestFor:
      "The first visit used to reset the home, understand scope, and recommend the recurring plan.",
    includes: [
      "Home priority review",
      "Deeper first clean",
      "Initial family summary",
    ],
  },
  {
    name: "Comfort Clean",
    price: "Starting at $149/visit",
    bestFor:
      "Senior-friendly recurring cleaning for a home that mainly needs consistency.",
    includes: [
      "Recurring cleaning checklist",
      "Respectful room-by-room care",
      "Basic visit completion note",
    ],
  },
  {
    name: "Peace-of-Mind Visit",
    price: "Starting at $199/visit",
    bestFor:
      "Recurring cleaning plus the family visit summary and light household observations.",
    includes: [
      "Senior-friendly clean",
      "Supply check",
      "Family visit summary",
    ],
  },
  {
    name: "Purpose Plus",
    price: "Starting at $289/visit",
    bestFor:
      "Families who want the highest-touch recurring service within the cleaning and communication lane.",
    includes: [
      "Expanded focus areas",
      "More detailed summary",
      "Recurring priority planning",
    ],
  },
];

export const pricingNote =
  "Final pricing depends on home size, condition, pets, frequency, and scope.";
