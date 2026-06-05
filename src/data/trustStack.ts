import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Camera,
  FileCheck2,
  FileSignature,
  Fingerprint,
  KeyRound,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import type { ContentCard } from "./strategyContent";

export type TrustStackItem = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

export const trustStack: TrustStackItem[] = [
  {
    title: "General liability insurance",
    detail:
      "A foundational trust signal for in-home service work and protection if a property damage or injury claim arises.",
    icon: ShieldCheck,
  },
  {
    title: "Janitorial/dishonesty bond",
    detail:
      "A reassurance layer for families concerned about keys, access, valuables, and in-home trust.",
    icon: FileCheck2,
  },
  {
    title: "Background check",
    detail:
      "A documented trust step for anyone entering a senior's home, communicated calmly and professionally.",
    icon: Fingerprint,
  },
  {
    title: "Service agreement",
    detail:
      "Plain-language expectations for scope, payment, cancellations, access, family communication, and boundaries.",
    icon: FileSignature,
  },
  {
    title: "Photo consent",
    detail:
      "Clear permission rules for any home photos, visit documentation, proof library, or family updates.",
    icon: Camera,
  },
  {
    title: "Camera/pet/access policy",
    detail:
      "A written approach to home cameras, pets, keys, lockboxes, parking, entry notes, and safe access.",
    icon: KeyRound,
  },
  {
    title: "Visit summary",
    detail:
      "The recurring communication artifact that turns the visit into peace of mind for the family.",
    icon: MessageSquareText,
  },
  {
    title: "Clear non-medical scope",
    detail:
      "A careful statement that the service is cleaning and family communication, not personal care, wellness monitoring, or emergency response.",
    icon: BadgeCheck,
  },
];

export const insurancePlan: ContentCard[] = [
  {
    title: "General liability insurance",
    detail:
      "Get quotes for a cleaning/home service policy before scaling the senior-friendly offer beyond close referrals.",
  },
  {
    title: "Janitorial/dishonesty bond",
    detail:
      "Add a bond option that supports the trust promise around valuables, keys, and access.",
  },
  {
    title: "Commercial auto check",
    detail:
      "Review whether current driving and vehicle use are properly covered for business travel between homes.",
  },
  {
    title: "Workers' comp before hiring",
    detail:
      "Before adding helpers or employees, review workers' compensation needs with a licensed insurance professional.",
  },
  {
    title: "Michigan ICHAT/self background check",
    detail:
      "Use Michigan ICHAT or a similar self-check as an early trust-building step and documentation starting point.",
  },
  {
    title: "Third-party checks when hiring",
    detail:
      "When hiring begins, move to a consistent third-party background check process for anyone entering client homes.",
  },
];

export const lowCostInsuranceLinks: ContentCard[] = [
  {
    title: "NEXT general liability quote",
    detail:
      "Public starting point found: NEXT says general liability can start at $19/month for some low-risk businesses. Quote first, then compare coverage.",
  },
  {
    title: "Thimble cleaning insurance quote",
    detail:
      "Public starting point found: Thimble promotes flexible cleaner coverage by the job, month, or year; separate Thimble pages mention general liability from $17/month or hourly policies from $5.",
  },
  {
    title: "Hiscox janitor insurance quote",
    detail:
      "Public starting point found: Hiscox says general liability insurance for janitors starts at $30/month.",
  },
  {
    title: "Insurance Canopy janitorial bond",
    detail:
      "Public starting point found: Insurance Canopy says a $5,000 janitorial bond starts at $131/year.",
  },
];

export const insuranceLinks = [
  {
    label: "NEXT general liability",
    href: "https://www.nextinsurance.com/general-liability-insurance/",
  },
  {
    label: "Thimble cleaners insurance",
    href: "https://www.thimble.com/lp/cleaners",
  },
  {
    label: "Hiscox janitor insurance",
    href: "https://www.hiscox.com/small-business-insurance/professional-business-insurance/janitor-insurance",
  },
  {
    label: "Insurance Canopy janitorial bond",
    href: "https://www.insurancecanopy.com/surety-bond/janitorial-bond",
  },
  {
    label: "Michigan ICHAT background check",
    href: "https://www.michigan.gov/msp/services/chr",
  },
];
