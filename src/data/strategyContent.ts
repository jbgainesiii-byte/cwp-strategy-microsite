export type NavItem = {
  label: string;
  href: string;
};

export type ContentCard = {
  title: string;
  detail: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type LaneProofStat = {
  value: string;
  label: string;
  detail: string;
  source: string;
};

export type ShiftContent = {
  problem?: string;
  from: string;
  to: string;
  note: string;
};

export const navItems: NavItem[] = [
  { label: "Hero", href: "#top" },
  { label: "Shift", href: "#strategic-shift" },
  { label: "Niche", href: "#niche" },
  { label: "Transformation", href: "#transformation" },
  { label: "Core Offer", href: "#core-offer" },
  { label: "Entry Offer", href: "#entry-offer" },
  { label: "Trust", href: "#trust" },
  { label: "Insurance", href: "#insurance-plan" },
  { label: "Pricing", href: "#pricing" },
  { label: "Journey", href: "#journey" },
  { label: "Marketing", href: "#marketing" },
  { label: "Summary", href: "#visit-summary" },
  { label: "30 Days", href: "#first-30" },
  { label: "90 Days", href: "#first-90" },
  { label: "Workflow", href: "#dai-workflow" },
  { label: "Now/Later", href: "#build-now-later" },
  { label: "Recommendation", href: "#final-recommendation" },
];

export const heroContent = {
  eyebrow: "Senior-friendly repositioning strategy",
  title: "Cleaning With Purpose",
  subtitle: "A senior-friendly home cleaning and family peace-of-mind strategy.",
  statement:
    "The cleaning is the service. The visit summary is the peace of mind.",
  primaryCta: { label: "View the Strategy", href: "#strategic-shift" },
  secondaryCta: {
    label: "See the Proposed Workflow",
    href: "#dai-workflow",
  },
};

export const heroStats: Stat[] = [
  { value: "Cleaning", label: "the visible service families understand" },
  { value: "Summary", label: "the trust signal they remember" },
  { value: "Peace", label: "the outcome they are really buying" },
];

export const strategicShift: ShiftContent = {
  problem:
    "The market problem is not cleaning demand. It is trust, communication, and family reassurance.",
  from: "General cleaning company",
  to: "Trusted senior-home support brand",
  note:
    "Cleaning With Purpose can stop competing as another task-based cleaner and instead own a trust-centered lane for families caring from a distance.",
};

export const nicheContent = {
  title:
    "Aging-in-place home cleaning for families who cannot always be there.",
  intro:
    "This lane fits Cleaning With Purpose because it turns warmth, reliability, and communication into strategic advantages.",
};

export const nicheCards: ContentCard[] = [
  {
    title: "Primary buyer",
    detail:
      "The adult child, caregiver, niece, nephew, or family member who is worried about an aging parent's home and cannot always be there.",
  },
  {
    title: "Service recipient",
    detail:
      "The older adult living at home who deserves respectful, familiar, non-rushed help that preserves dignity and comfort.",
  },
  {
    title: "Why this lane fits",
    detail:
      "It rewards trust, communication, warmth, and consistency, which are stronger assets for Cleaning With Purpose than competing for commercial, Airbnb, post-construction, or generic move-out jobs.",
  },
];

export const laneProofStats: LaneProofStat[] = [
  {
    value: "63M",
    label: "U.S. family caregivers",
    detail:
      "AARP and the National Alliance for Caregiving report a large, growing buyer universe: nearly one in four U.S. adults provided ongoing care in 2025.",
    source: "AARP / NAC",
  },
  {
    value: "1.52M",
    label: "Michigan adult caregivers",
    detail:
      "AARP Michigan reports 1.52 million Michiganders caring for adult loved ones, which makes this a local market rather than a broad national abstraction.",
    source: "AARP Michigan",
  },
  {
    value: "+64%",
    label: "Michigan 65-plus growth",
    detail:
      "Michigan's 65-plus population grew about 64% between 2005 and 2025, adding roughly 800,000 older adults and increasing aging-in-place pressure.",
    source: "Michigan MCDA",
  },
  {
    value: "80% / 74%",
    label: "Facebook use by buyer bands",
    detail:
      "Pew's 2025 data shows Facebook use remains high among adults ages 30-49 and 50-64, the adult-child and caregiver decision bands.",
    source: "Pew Research Center",
  },
];

export const laneProofSummary =
  "The strongest opening is not another cleaning category. It is the gap between what families worry about and what most cleaning companies actually communicate.";

export const laneOwnabilityCards: ContentCard[] = [
  {
    title: "Why this is the best lane",
    detail:
      "It matches what Cleaning With Purpose can credibly deliver: care, consistency, dignity, and clear family communication.",
  },
  {
    title: "Why it is underserved",
    detail:
      "Most cleaners sell rooms, hours, and tasks. The worried family buyer needs reassurance after the visit, not just a completed checklist.",
  },
  {
    title: "Why this can be owned locally",
    detail:
      "The offer is local, human, trust-centered, and simple to operationalize before adding software, automation, or a larger team.",
  },
];

export const transformation: ShiftContent = {
  from: "Competing on tasks, hours, and cleaning categories.",
  to: "Selling reassurance, documentation, family communication, and consistency.",
  note:
    "The service becomes less about a checklist of chores and more about a recurring relationship families can trust.",
};

export const coreOfferItems: ContentCard[] = [
  {
    title: "Senior-friendly recurring cleaning",
    detail:
      "A consistent visit rhythm built around the older adult's home, routines, comfort, and priorities.",
  },
  {
    title: "Supply check",
    detail:
      "A simple note on everyday household supplies that appear low, such as paper goods, soap, or cleaning basics.",
  },
  {
    title: "Light home observations",
    detail:
      "Warm, practical observations about the home environment, limited to what is naturally noticed during cleaning.",
  },
  {
    title: "Family visit summary",
    detail:
      "A short, dignified update after each visit so the family knows the home was cared for.",
  },
  {
    title: "Clear non-medical boundaries",
    detail:
      "The offer stays in the home cleaning and family communication lane, with no personal care, wellness monitoring, or emergency response.",
  },
];

export const entryOffer = {
  title: "The Purpose Home Reset",
  detail:
    "The first visit is priced higher because it resets the home, clarifies scope, documents priorities, and gives Cleaning With Purpose enough context to recommend the right recurring plan.",
  statement:
    "The first visit should be positioned as a purposeful reset, not a discounted trial clean.",
};

export const daiWorkflow: ContentCard[] = [
  {
    title: "Positioning",
    detail: "Define the senior-friendly category, buyer language, and central promise.",
  },
  {
    title: "Offer structure",
    detail:
      "Shape the Purpose Home Reset, Peace-of-Mind Visit, package ladder, and boundaries.",
  },
  {
    title: "Strategy microsite",
    detail:
      "Build this private presentation experience for alignment and decision-making.",
  },
  {
    title: "Public landing page later",
    detail: "Translate the approved strategy into a client-facing sales page.",
  },
  {
    title: "Intake form",
    detail:
      "Design the family intake flow for home details, photos, access, and preferences.",
  },
  {
    title: "Quote workflow",
    detail: "Create the steps from intake review to quote message and reset booking.",
  },
  {
    title: "Visit summary workflow",
    detail:
      "Create the template and process that turns each visit into peace of mind.",
  },
  {
    title: "Review/referral workflow",
    detail:
      "Build follow-up prompts that convert trust into proof and introductions.",
  },
  {
    title: "Launch assets",
    detail:
      "Prepare profile copy, outreach scripts, service descriptions, and launch messaging.",
  },
];

export const buildNow: ContentCard[] = [
  {
    title: "Presentation microsite",
    detail: "Private strategy page for explaining and approving the direction.",
  },
  {
    title: "Offer page",
    detail:
      "Public-ready copy for the Purpose Home Reset and Peace-of-Mind Visit.",
  },
  {
    title: "Intake form mockup",
    detail: "A clear model for what families should submit before a quote.",
  },
  {
    title: "Quote workflow mockup",
    detail: "The recommended quote review and response process.",
  },
  {
    title: "Visit summary template",
    detail: "A warm, repeatable update format after every visit.",
  },
  {
    title: "Google Business Profile copy",
    detail: "Positioning and service language for local discovery.",
  },
  {
    title: "Referral script",
    detail: "A simple message for trusted partners and family referrals.",
  },
];

export const buildLater: ContentCard[] = [
  {
    title: "Supabase backend",
    detail: "Database support once the workflow is proven.",
  },
  {
    title: "Client dashboard",
    detail: "A portal for summaries, schedules, and client history later.",
  },
  {
    title: "Automated SMS",
    detail: "Text reminders and updates after the manual process is validated.",
  },
  {
    title: "Payment integration",
    detail: "Online payments when the offer and pricing floor are steady.",
  },
  {
    title: "Full CRM",
    detail: "A more complete client pipeline after volume justifies it.",
  },
  {
    title: "Concierge vendor coordination",
    detail: "A later expansion beyond cleaning if the trust lane proves strong.",
  },
];

export const nextSteps: ContentCard[] = [
  {
    title: "1. Review this strategy",
    detail:
      "Confirm that the senior-friendly lane, buyer, offer, pricing, and trust stack feel right for Cleaning With Purpose.",
  },
  {
    title: "2. Approve the public build",
    detail:
      "Detroit AI Works turns the approved direction into the public offer page, intake form, Google Business Profile copy, and launch assets.",
  },
  {
    title: "3. Complete trust stack actions",
    detail:
      "Complete insurance quotes, bonding quotes, a founder-provided background check, service agreement, and photo/access policies.",
  },
  {
    title: "4. Launch founding-family outreach",
    detail:
      "Start direct email, referral outreach, Facebook business setup, and founding-family conversations to validate the offer.",
  },
];

export const finalRecommendation =
  "Cleaning With Purpose should not compete as another cleaning company. It should own the trust-centered senior home cleaning lane, starting with the Peace-of-Mind Home Visit.";
