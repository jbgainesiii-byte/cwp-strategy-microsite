import type { ContentCard } from "./strategyContent";

export type MarketStat = {
  value: string;
  label: string;
  detail: string;
  source: string;
  url: string;
};

export const marketStats: MarketStat[] = [
  {
    value: "63M",
    label: "U.S. family caregivers",
    detail:
      "AARP/NAC reported that nearly one in four U.S. adults provided ongoing care in 2025.",
    source: "AARP / National Alliance for Caregiving",
    url: "https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers",
  },
  {
    value: "1.52M",
    label: "Michigan adult caregivers",
    detail:
      "AARP Michigan reported 1.52 million Michiganders caring for adult loved ones.",
    source: "AARP Michigan",
    url: "https://www.aarp.org/states/michigan/the-invisible-workforce-powering-michigans-care-economy/",
  },
  {
    value: "80%",
    label: "Facebook use, ages 30-49",
    detail:
      "Pew's 2025 Social Media Fact Sheet shows Facebook is still a majority-use platform for the adult-child buyer age band.",
    source: "Pew Research Center",
    url: "https://www.pewresearch.org/internet/fact-sheet/social-media/",
  },
  {
    value: "74%",
    label: "Facebook use, ages 50-64",
    detail:
      "Pew also shows Facebook remains widely used among older adult children and younger senior caregivers.",
    source: "Pew Research Center",
    url: "https://www.pewresearch.org/internet/fact-sheet/social-media/",
  },
  {
    value: "+64%",
    label: "Michigan 65+ growth, 2005-2025",
    detail:
      "Michigan's older-adult population has already grown sharply, and the 85+ population is projected to grow substantially through 2050.",
    source: "Michigan Center for Data and Analytics",
    url: "https://www.michigan.gov/mcda/insights/2026/03/02/baby-boomers-65plus-insight",
  },
];

export const marketingChannels: ContentCard[] = [
  {
    title: "Detroit AI Works lead seeding",
    detail:
      "Detroit AI Works can help identify warm local referral paths, draft outreach, and send early lead opportunities into a simple tracker.",
  },
  {
    title: "Direct email outreach",
    detail:
      "Use careful, personal outreach to churches, senior centers, organizers, estate planners, realtors, caregiver groups, and trusted community connectors.",
  },
  {
    title: "Facebook business presence",
    detail:
      "Create the Facebook business Page and Meta Business assets even if Facebook is not a personal platform you use. The Page is for the buyer, not personal habits.",
  },
  {
    title: "Founding-family conversations",
    detail:
      "Use five to ten real conversations with adult children to test language, objections, pricing, and the emotional promise.",
  },
];

export const facebookPlan: ContentCard[] = [
  {
    title: "Create the business Page",
    detail:
      "Set up Cleaning With Purpose as a Facebook business Page with service area, description, phone/email, and the Peace-of-Mind Home Visit offer.",
  },
  {
    title: "Keep the personal profile separate",
    detail:
      "Personal Facebook use can stay minimal. The business asset exists so the company can be found, trusted, and advertised.",
  },
  {
    title: "Publish only when ready",
    detail:
      "A Facebook Page is generally public when published. During setup, keep it unpublished or minimal until the offer copy, contact details, and first posts are ready.",
  },
  {
    title: "Start with proof and reassurance",
    detail:
      "The first content does not need to be constant posting. Start with the offer, trust stack, founder story, sample visit summary, and a simple call to request a reset.",
  },
];

export const marketingMath: ContentCard[] = [
  {
    title: "One Reset funds learning",
    detail:
      "A $225-$375 Purpose Home Reset can pay for early testing while revealing whether the family is a fit for recurring service.",
  },
  {
    title: "One recurring client compounds",
    detail:
      "One Peace-of-Mind Visit client at $199 twice monthly is roughly $398/month gross before expenses.",
  },
  {
    title: "Five recurring clients matter",
    detail:
      "Five clients at that same rhythm is roughly $1,990/month gross before expenses, which is why recurring trust beats one-off cleaning.",
  },
  {
    title: "Marketing goal",
    detail:
      "The first campaign should not chase vanity engagement. It should generate conversations, reset bookings, and recurring-plan conversions.",
  },
];

export const sourceLinks: ContentCard[] = [
  {
    title: "AARP caregiver scale",
    detail:
      "https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers",
  },
  {
    title: "AARP Michigan caregiver data",
    detail:
      "https://www.aarp.org/states/michigan/the-invisible-workforce-powering-michigans-care-economy/",
  },
  {
    title: "Pew social media usage",
    detail: "https://www.pewresearch.org/internet/fact-sheet/social-media/",
  },
  {
    title: "Michigan aging population",
    detail:
      "https://www.michigan.gov/mcda/insights/2026/03/02/baby-boomers-65plus-insight",
  },
];
