import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  ExternalLink,
  Factory,
  FileSearch,
  FlaskConical,
  LineChart,
  LockKeyhole,
  Megaphone,
  MousePointer2,
  PackageCheck,
  Pill,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  Users,
  WalletCards,
} from "lucide-react";

type Metric = {
  label: string;
  value: string;
  detail: string;
  source: string;
};

type Path = {
  name: string;
  verdict: string;
  fit: string;
  note: string;
};

type LaunchLane = {
  lane: string;
  promise: string;
  why: string;
  risk: string;
  verdict: string;
};

type NicheOpportunity = {
  name: string;
  score: string;
  audience: string;
  signal: string;
  gap: string;
  firstTest: string;
  caution: string;
  verdict: string;
  priority?: boolean;
};

type SupplierRoute = {
  route: string;
  cash: string;
  moq: string;
  timing: string;
  use: string;
};

type CostItem = {
  item: string;
  range: string;
  note: string;
};

type GlossaryItem = {
  term: string;
  plain: string;
};

type SupplierCandidate = {
  name: string;
  model: string;
  startup: string;
  score: string;
  verdict: string;
  reason: string;
  url: string;
  best?: boolean;
};

type CreatorStep = {
  title: string;
  window: string;
  action: string;
  proof: string;
};

type ContentAngle = {
  angle: string;
  example: string;
};

type GateItem = {
  label: string;
  pass: string;
  fail: string;
};

const metrics: Metric[] = [
  {
    label: "US sports nutrition",
    value: "$18.28B -> $27.76B",
    detail: "2025 to 2031 benchmark; online retail is roughly 40% of category sales.",
    source: "Mordor Intelligence",
  },
  {
    label: "US protein supplements",
    value: "$9.88B -> $22.58B",
    detail: "2024 to 2032 benchmark; protein remains the anchor repeat-purchase product.",
    source: "Fortune Business Insights",
  },
  {
    label: "Women and creatine",
    value: "30% of GNC buyers",
    detail: "Up from 18% in 2020, with women's creatine wellness estimated at $929.1M in 2025.",
    source: "Fitt Insider / Grand View Research",
  },
  {
    label: "GLP-1 adjacent demand",
    value: "Protein-first support",
    detail: "Reduced appetite makes nutrient density, protein, fiber, and strength routines more important.",
    source: "BMJ Nutrition / WSRO",
  },
];

const sources = [
  {
    name: "Mordor Intelligence",
    note: "US sports nutrition market size and online channel share.",
    url: "https://www.mordorintelligence.com/industry-reports/united-states-sports-nutrition-market",
  },
  {
    name: "Fortune Business Insights",
    note: "US protein supplements market forecast.",
    url: "https://www.fortunebusinessinsights.com/u-s-protein-supplements-market-107171",
  },
  {
    name: "Fitt Insider",
    note: "Women fueling creatine sales; GNC buyer shift.",
    url: "https://insider.fitt.co/women-fuel-creatine-sales/",
  },
  {
    name: "Grand View Research",
    note: "Women’s creatine wellness products market benchmark.",
    url: "https://www.grandviewresearch.com/horizon/statistics/women-s-wellness-products-market/muscle-building-supplements/creatine/global",
  },
  {
    name: "Grand View Research",
    note: "Women’s electrolyte and hydration product market benchmark.",
    url: "https://www.grandviewresearch.com/horizon/statistics/women-s-wellness-products-market/sports-nutrition-products/electrolyte-hydration-products/global",
  },
  {
    name: "Cohere Commerce",
    note: "Retail trend read on pre-workout shifting toward clean, sustained, lower-crash energy.",
    url: "https://www.coherecommerce.com/blog/2eaf839f-f90e-80a3-bd16-e70b00f128b1/pre-workout-everyday-energy-retailer-trends",
  },
  {
    name: "Journal of the International Society of Sports Nutrition",
    note: "2025 review on creatine considerations across women’s life stages.",
    url: "https://www.tandfonline.com/doi/abs/10.1080/15502783.2025.2502094",
  },
  {
    name: "Journal of Sport and Health Science",
    note: "Female athlete iron deficiency and performance review; useful for caution, not a first product claim.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11863318/",
  },
  {
    name: "FDA",
    note: "Dietary supplement label claims and structure/function guidance.",
    url: "https://www.fda.gov/food/dietary-supplements-guidance-documents-regulatory-information/dietary-supplement-labeling-guide-chapter-vi-claims",
  },
  {
    name: "FTC",
    note: "Health product advertising substantiation and endorsement guidance.",
    url: "https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance",
  },
  {
    name: "Supliful",
    note: "Private-label supplement dropshipping / print-on-demand style model with no minimum order quantities.",
    url: "https://supliful.com/pricing",
  },
  {
    name: "Supliful Help Center",
    note: "Explains product cost, fulfillment fee, processing fee, shipping fee, and tier-based pricing.",
    url: "https://help.supliful.com/en/articles/11628949-supliful-pricing-what-you-need-to-know",
  },
  {
    name: "ClickNutra",
    note: "Example supplement dropshipping platform claiming no minimum orders and Shopify/WooCommerce/API integration.",
    url: "https://clicknutra.io/",
  },
  {
    name: "OK Capsule",
    note: "Example on-demand personalized supplement packs with no minimums and Shopify/API integration.",
    url: "https://www.okcapsule.com/summit-landing-page",
  },
  {
    name: "Private Label Partners",
    note: "Example white-label/blank-label supplement dropship program with no minimum order quantity claims.",
    url: "https://privatelabelpartners.com/",
  },
  {
    name: "GreenDropShip",
    note: "Example wholesale dropship catalog for existing supplement brands and natural products.",
    url: "https://greendropship.com/what-to-sell/vitamins-supplements/",
  },
  {
    name: "Inventory Ready",
    note: "Later-stage manufacturing cost ranges and protein powder launch budget benchmarks.",
    url: "https://inventoryready.com/guides/how-to-create-and-sell-your-own-protein-powder",
  },
  {
    name: "CSK Biotech",
    note: "Private-label supplement minimum order and per-unit cost benchmark ranges.",
    url: "https://www.cskbiotech.com/guides/typical-costs-moqs-private-label-supplements/",
  },
  {
    name: "Nutricraft",
    note: "Later-stage lower-minimum white-label/private-label manufacturer reference.",
    url: "https://nutricraftlabs.com/services/private-white-label-manufacturing/",
  },
  {
    name: "Atrium Scientific",
    note: "Later-stage contract manufacturer reference with stated 3,000-unit minimum order.",
    url: "https://atriumsci.com/dietary-supplement",
  },
  {
    name: "NutraSeller",
    note: "Later-stage protein powder manufacturer reference; not an endorsement.",
    url: "https://nutraseller.com/services/protein-powder-manufacturer/",
  },
  {
    name: "SupliPac",
    note: "Later-stage lower-minimum manufacturing reference; not an endorsement.",
    url: "https://www.suplipac.com/moq-pricing",
  },
  {
    name: "FDA cGMP",
    note: "Dietary supplement manufacturing requirements under 21 CFR Part 111.",
    url: "https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/current-good-manufacturing-practices-cgmps-food-and-dietary-supplements",
  },
  {
    name: "BMJ Nutrition",
    note: "GLP-1 weight loss and lean-mass discussion; reinforces protein and resistance training context.",
    url: "https://nutrition.bmj.com/content/early/2025/03/02/bmjnph-2025-001206",
  },
];

const paths: Path[] = [
  {
    name: "Generic unbranded dropship marketplace",
    verdict: "Weak",
    fit: "Low startup cost, but no real brand control.",
    note: "Useful only for learning demand signals. Not enough trust for a supplement brand people ingest.",
  },
  {
    name: "White-label dropship / supplement POD",
    verdict: "Best first test",
    fit: "No inventory, fast launch, branded label, automated fulfillment.",
    note: "This is the correct starting lane if Nader cannot afford a full manufacturing run.",
  },
  {
    name: "Paid ads into one white-label product",
    verdict: "Dangerous",
    fit: "Easy to start, hard to make profitable.",
    note: "Even with no inventory, ad costs can still erase the margin on the first sale.",
  },
  {
    name: "Creator/community first",
    verdict: "Strongest",
    fit: "Best fit for a solo founder with limited ad budget.",
    note: "The goal is trust, list-building, and repeat orders before paid scale.",
  },
  {
    name: "Owned-store bundle + subscription",
    verdict: "Viable",
    fit: "Still possible with white-label dropship products if the platform supports both items.",
    note: "The bundle starts as a store offer, not necessarily a manufacturer-created kit.",
  },
];

const decisionGaps = [
  "The market data is encouraging, but it does not prove this specific product should be manufactured or stocked.",
  "The first version should be sourced through white-label dropship or supplement print-on-demand, not a custom production run.",
  "The decision is not simply pre-workout or protein. The stronger choice compares after-work performance, creatine/recovery, GLP-1 support, and general women's protein.",
  "Inventory should wait until a no-inventory test shows demand, margin, and repeat-purchase potential.",
];

const launchLanes: LaunchLane[] = [
  {
    lane: "After-work strength routine",
    promise: "Energy before training. Protein after.",
    why: "Most ownable and emotionally clear. It creates a daily ritual instead of a commodity supplement.",
    risk: "Needs community proof because paid ads into a new routine can be expensive.",
    verdict: "Lead lane",
  },
  {
    lane: "Creatine + recovery",
    promise: "Daily strength support without gym-bro positioning.",
    why: "Women are a growing share of creatine buyers, and creatine can become a repeatable routine product.",
    risk: "Education burden is higher; claims must stay structure/function safe.",
    verdict: "Best product adjacency",
  },
  {
    lane: "GLP-1 nutrition support",
    promise: "Protein, fiber, electrolytes, and strength routine support for smaller appetites.",
    why: "A fast-growing behavior shift is creating demand for nutrient-dense, easy-to-consume support.",
    risk: "Highest compliance risk. Do not imply treating medication side effects, preventing muscle loss, or replacing clinician guidance.",
    verdict: "Research lane",
  },
  {
    lane: "General women's protein",
    promise: "A better-tasting daily protein.",
    why: "Easy to understand and large category.",
    risk: "Most commoditized lane. Hardest to defend without a sharper routine or audience.",
    verdict: "Avoid as entry",
  },
];

const underservedNiches: NicheOpportunity[] = [
  {
    name: "Active midlife strength support",
    score: "9.4 / 10",
    audience: "Women 35-55 who lift, take classes, or are trying to stay strong through a busier life stage.",
    signal: "Women are a larger share of creatine buyers, and creatine discussion is moving into perimenopause, menopause, strength, and healthy-aging contexts.",
    gap: "Most brands still choose either young aesthetic fitness or clinical menopause language. The open lane is capable, active midlife.",
    firstTest: "Creatine plus protein routine content, sampled through creators over 35 who already train and speak plainly.",
    caution: "Use strength, recovery, and routine language. Do not promise hormone balance or menopause symptom relief.",
    verdict: "Best expansion lane",
    priority: true,
  },
  {
    name: "Low-stim after-work performance",
    score: "9.1 / 10",
    audience: "Women training between work and evening life who want energy without feeling overstimulated.",
    signal: "The pre-workout category is broadening beyond hardcore gym use toward cleaner, sustained energy, hydration support, and everyday usability.",
    gap: "Most pre-workout still feels loud, high-caffeine, and male-coded. AFTERFIVE can own the 5:30 p.m. training decision.",
    firstTest: "Low-caffeine or stim-light pre-workout stick packs paired with creator clips around the work-to-workout transition.",
    caution: "Avoid anxiety, sleep, stress, or medical language. Say low-jitter or evening-friendly only if the formula supports it.",
    verdict: "Lead concept",
    priority: true,
  },
  {
    name: "GLP-1 nutrition routine support",
    score: "8.7 / 10",
    audience: "Women using appetite-reducing weight-management medications who still need easy nutrition routines.",
    signal: "Clinical discussion around GLP-1 use keeps returning to protein adequacy, resistance training, nutrient density, and body-composition awareness.",
    gap: "Demand is moving faster than clear consumer-friendly nutrition routines, but the claim risk is high.",
    firstTest: "Waitlist or quiz for protein, hydration, and fiber routine support before building a dedicated product pack.",
    caution: "Do not imply treating medication side effects, preserving muscle, or replacing medical guidance.",
    verdict: "High-upside research lane",
  },
  {
    name: "Hydration for class and run-club women",
    score: "8.3 / 10",
    audience: "Pilates, barre, hot yoga, run-club, and strength-class buyers who want a better daily hydration ritual.",
    signal: "Women’s electrolyte and hydration products are a sizable, growing wellness segment, with North America a leading market.",
    gap: "The product is easy to understand, easy to sample, and easy to bundle, but most positioning is still generic sports drink replacement.",
    firstTest: "Electrolyte sticks for class bags, run clubs, and creator seeding. Use flavor and convenience as the hook.",
    caution: "Commodity risk is real. The offer needs a strong audience, flavor, or bundle reason.",
    verdict: "Best low-risk add-on",
  },
  {
    name: "Gut-friendly light protein",
    score: "7.9 / 10",
    audience: "Women who want protein but dislike heavy shakes, chalky texture, or products that feel hard to use daily.",
    signal: "Women’s wellness market maps now break out whey, plant, clear protein, protein shakes, and digestive health as distinct areas.",
    gap: "Most protein brands still compete on grams and flavor. A lighter daily-use protein can win on feel, mixability, and repeat use.",
    firstTest: "Clear protein, isolate, or lactose-free sample path if a white-label supplier has a credible formula and documentation.",
    caution: "Avoid medical digestive claims. Say light taste, easy to mix, or daily-use positioning unless substantiated.",
    verdict: "Watchlist product lane",
  },
  {
    name: "Iron-aware active women",
    score: "6.8 / 10",
    audience: "Female runners, endurance athletes, and high-output class users who complain about low energy.",
    signal: "Research consistently flags iron deficiency as more common in female athletes, but supplementation is not appropriate without status context.",
    gap: "The need is real, but selling iron directly creates unnecessary safety and medical-advice risk for this launch.",
    firstTest: "Educational content, screening questions, and referral language. Do not make this the first supplement product.",
    caution: "Iron is a clinician-guided lane. Avoid performance promises and do not encourage blind supplementation.",
    verdict: "Education only for now",
  },
];

const supplierRoutes: SupplierRoute[] = [
  {
    route: "No-inventory validation",
    cash: "$250-$1,500",
    moq: "0 units",
    timing: "1-3 weeks",
    use: "Landing page, quiz, creator content, waitlist, sample feedback, and retail product benchmarking before committing to a run.",
  },
  {
    route: "Supplement print-on-demand",
    cash: "$0-$49/mo + unit costs",
    moq: "No minimum",
    timing: "Days to 2 weeks",
    use: "Best first option. Pick existing formulas, apply the brand label, connect Shopify, and let the platform fulfill each order.",
  },
  {
    route: "Private-label dropshipper",
    cash: "$0-$500 setup + unit costs",
    moq: "Often no minimum",
    timing: "1-4 weeks",
    use: "Similar to print-on-demand, but often more supplier-managed. Better if they support label design, compliance docs, and recurring orders.",
  },
  {
    route: "Wholesale branded dropship",
    cash: "$0-$300/mo + wholesale costs",
    moq: "No owned inventory",
    timing: "Days to 2 weeks",
    use: "Sell existing trusted brands to test demand. Weak for building a proprietary brand, but useful for learning what category buyers click.",
  },
  {
    route: "Low-minimum white-label run",
    cash: "$8k-$25k+",
    moq: "500-3,000 units",
    timing: "4-10 weeks",
    use: "Second step only after the no-inventory test proves demand and the margins justify owning inventory.",
  },
];

const costStack: CostItem[] = [
  {
    item: "POD / dropship test",
    range: "$0-$500",
    note: "App fees, sample orders, label setup, and compliance review before ads.",
  },
  {
    item: "Samples and proof",
    range: "$100-$750",
    note: "Order the actual customer experience from each supplier before selling.",
  },
  {
    item: "Launch content",
    range: "$500-$2,500",
    note: "Product photos, short-form video, creator seeding, email/SMS, and landing page testing.",
  },
  {
    item: "Paid test reserve",
    range: "$500-$3,000",
    note: "Small ad tests after organic/creator content proves the offer can get clicks and email signups.",
  },
  {
    item: "Manufacturing step-up",
    range: "$8k-$60k",
    note: "Only later, if the no-inventory test proves demand and repeat purchase potential.",
  },
];

const glossary: GlossaryItem[] = [
  {
    term: "Customer acquisition cost",
    plain: "The average amount spent to get one new customer. If ads, samples, or creator fees cost $840 and bring 10 buyers, acquisition cost is $84.",
  },
  {
    term: "Average order value",
    plain: "The average amount a customer spends on one order. A single tub might be $55; a bundle might be $90.",
  },
  {
    term: "Minimum order quantity",
    plain: "The smallest production run a manufacturer will accept. For supplements this can be 1,000-5,000+ units per product.",
  },
  {
    term: "Supplement print-on-demand",
    plain: "A supplier keeps stock formulas and prints or applies your label after an order. You avoid inventory, but usually give up formula control and some margin.",
  },
  {
    term: "Gross margin",
    plain: "What is left after product cost before marketing. A 42% margin on a $90 bundle means about $38 before fulfillment and customer acquisition.",
  },
  {
    term: "Certificate of analysis",
    plain: "A supplier document showing test results for a batch, such as identity, micro, heavy metals, or allergen checks.",
  },
];

const supplierCandidates: SupplierCandidate[] = [
  {
    name: "ClickNutra",
    model: "Supplement dropshipping / custom label",
    startup: "Claims $0 start and no minimum orders",
    score: "9.2 / 10",
    verdict: "Best first call",
    reason: "Strongest fit for this test: no minimum orders, custom labels, Shopify/WooCommerce/API integration, 2-day US shipping claims, 50+ catalog products, and a path toward custom formulas.",
    url: "https://clicknutra.io/",
    best: true,
  },
  {
    name: "Supliful",
    model: "Supplement POD / private-label dropship",
    startup: "$0 Free plan; Pro listed at $49/mo or $39/mo annual",
    score: "8.6 / 10",
    verdict: "Best platform benchmark",
    reason: "Very strong for fast testing: no minimum orders, Shopify flow, samples, bulk later, and transparent product/fulfillment/processing/shipping cost breakdowns.",
    url: "https://supliful.com/pricing",
  },
  {
    name: "OK Capsule",
    model: "Personalized supplement packs on demand",
    startup: "Claims no minimum and no deposit",
    score: "7.8 / 10",
    verdict: "Best GLP-1 pack lane",
    reason: "Good for personalized packs and GLP-1-adjacent nutrition support, but less direct for a bottled pre-workout/protein routine and potentially more compliance-sensitive.",
    url: "https://www.okcapsule.com/summit-landing-page",
  },
  {
    name: "Private Label Partners",
    model: "White-label / blank-label dropship",
    startup: "Claims no minimum order quantities",
    score: "7.2 / 10",
    verdict: "Good quote comparison",
    reason: "Useful comparison target for no-minimum white-label products, but Nader needs to verify catalog fit, sports nutrition depth, fulfillment speed, and supplement documentation.",
    url: "https://privatelabelpartners.com/",
  },
  {
    name: "Amven Nutrition",
    model: "White-label supplement dropship",
    startup: "Claims no minimum inventory purchase on online orders",
    score: "6.8 / 10",
    verdict: "Worth screening",
    reason: "Worth checking for sports nutrition catalog fit and Shopify fulfillment, but it needs more due diligence on costs, integrations, and product depth.",
    url: "https://amvennutrition.store/pages/private-label-supplements",
  },
  {
    name: "GreenDropShip",
    model: "Wholesale branded supplement dropship",
    startup: "Membership/app model",
    score: "5.9 / 10",
    verdict: "Demand research only",
    reason: "Useful for testing demand with existing brands, but weakest for building Nader's own supplement brand because the products are not proprietary.",
    url: "https://greendropship.com/what-to-sell/vitamins-supplements/",
  },
];

const creatorSteps: CreatorStep[] = [
  {
    title: "Recruit micro-creators",
    window: "Days 1-5",
    action: "Find 25-40 women who already post lifting, Pilates, barre, run club, or after-work training content. Prioritize real routines over follower count.",
    proof: "Target 8-12 accepted creators and 20-30 usable raw clips.",
  },
  {
    title: "Seed samples",
    window: "Days 4-10",
    action: "Send sample orders from the chosen white-label supplier. If the product experience is weak, stop and switch suppliers before launch.",
    proof: "Target 5+ honest creator reactions and product handling feedback.",
  },
  {
    title: "Film the routine",
    window: "Days 7-18",
    action: "Ask creators to film the after-work transition: leaving work, mixing the product, training, and post-workout protein. No medical or body-transformation claims.",
    proof: "Target 15-25 short videos, 3 hooks per angle, and 5 strongest ad candidates.",
  },
  {
    title: "Launch organic first",
    window: "Days 14-24",
    action: "Post from the brand account and creators. Drive to a waitlist, quiz, or bundle landing page before spending meaningful ad dollars.",
    proof: "Track click rate, email signup rate, comments, saves, and direct messages.",
  },
  {
    title: "Turn winners into paid tests",
    window: "Days 21-30",
    action: "Put small spend behind the best-performing creator clips. Cut anything that cannot create affordable traffic or email signups.",
    proof: "Keep only hooks that show buying intent, not just views.",
  },
];

const contentAngles: ContentAngle[] = [
  {
    angle: "The 5:30 p.m. switch",
    example: "I do not need a hype drink. I need enough clean energy to make it to class after work.",
  },
  {
    angle: "Before + After routine",
    example: "Pre-workout before training. Protein after. No complicated supplement stack.",
  },
  {
    angle: "Low-jitter positioning",
    example: "I want energy without feeling like my evening is ruined.",
  },
  {
    angle: "Strength, not shrinking",
    example: "Content should point toward strength, consistency, and recovery, never fat-loss promises.",
  },
];

const supplierGate: GateItem[] = [
  {
    label: "True landed cost",
    pass: "They provide product cost, fulfillment fee, processing fee, shipping fee, and sample cost by product.",
    fail: "They only show retail-like pricing or avoid a full cost breakdown.",
  },
  {
    label: "Bundle handling",
    pass: "They confirm whether two products can sell as one offer and whether fulfillment ships together or separately.",
    fail: "They cannot support a bundle or the customer experience becomes confusing.",
  },
  {
    label: "Documentation",
    pass: "They provide testing documents, certificates of analysis, label requirements, and claim review process.",
    fail: "They cannot show quality or compliance documentation before launch.",
  },
  {
    label: "Creator sample speed",
    pass: "Samples can be ordered quickly enough to seed creators inside the 30-day sprint.",
    fail: "Samples or branded labels take long enough to break the test window.",
  },
];

const roadmap = [
  {
    phase: "Offer Lock",
    window: "Days 1-2",
    body: "Choose the lane, product pair, price hypothesis, compliance-safe claims, and one landing page message. No manufacturing work.",
  },
  {
    phase: "Supplier Screen",
    window: "Days 3-7",
    body: "Compare Supliful-style POD, private-label dropship, personalized packs, and wholesale dropship options. Order samples and check unit cost, shipping, testing, label control, and subscription support.",
  },
  {
    phase: "Creator Sprint",
    window: "Days 6-18",
    body: "Recruit micro-creators, seed samples, collect raw UGC, and test hooks around the after-work routine before spending heavily on ads.",
  },
  {
    phase: "Soft Launch",
    window: "Days 19-30",
    body: "Open the store or waitlist, use creator content as the traffic engine, and measure signups, clicks, add-to-cart behavior, and first orders.",
  },
  {
    phase: "Decision Gate",
    window: "Day 30",
    body: "Proceed only if supplier experience, creator content, traffic, and early conversion data show a believable path to repeat orders.",
  },
];

function currency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function App() {
  const [cac, setCac] = useState(84);

  const model = useMemo(() => {
    const singleAov = 55;
    const bundleAov = 90;
    const margin = 0.42;
    const variableCost = 10;
    const singleContribution = singleAov * margin - variableCost - cac;
    const bundleContribution = bundleAov * margin - variableCost - cac;
    const reorderContribution = bundleAov * margin - variableCost;
    const reordersToBreakEven =
      bundleContribution >= 0 ? 0 : Math.ceil(Math.abs(bundleContribution) / reorderContribution);

    return {
      singleContribution,
      bundleContribution,
      reorderContribution,
      reordersToBreakEven,
    };
  }, [cac]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="mark" href="#top" aria-label="Back to top">
          <span>DAW</span>
          <strong>Detroit AI Works</strong>
        </a>
        <nav aria-label="Report navigation">
          <a href="#concept">Brand Concept</a>
          <a href="#strategy">Strategy</a>
          <a href="#lanes">Lanes</a>
          <a href="#niches">Niches</a>
          <a href="#economics">Numbers</a>
          <a href="#suppliers">Sourcing</a>
          <a href="#marketing">Marketing</a>
          <a href="#roadmap">Roadmap</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-grid" aria-label="Executive opening">
          <div className="brand-pane" id="concept">
            <div className="brand-copy">
              <p className="eyebrow">Recommended concept / placeholder brand</p>
              <h1>AFTERFIVE</h1>
              <p>
                A low-inventory test for the after-work training routine: energy before, protein
                after, creator proof first.
              </p>
              <div className="hero-actions">
                <a href="#suppliers" className="primary-action">
                  See the sourcing path <ArrowRight size={18} />
                </a>
                <a href="#marketing" className="secondary-action">
                  Creator launch lane
                </a>
              </div>
            </div>
            <div className="hero-proof-panel" aria-label="Hero decision proof points">
              <span>30-day test</span>
              <span>No inventory first</span>
              <span>ClickNutra first call</span>
            </div>
            <img
              src="/nader-bazzi/afterfive-product-concept.png"
              alt="Afterfive supplement product concept with pre-workout, protein, and bundle box"
            />
            <div className="routine-strip" aria-label="Product routine">
              <span>Before: low-jitter pre-workout / $39.99</span>
              <span>After: daily protein / $54.99</span>
              <span>Bundle: $89.99 / subscribe 10-15% off</span>
            </div>
          </div>

          <aside className="memo-pane">
            <p className="eyebrow">Private feasibility report for Nader Bazzi</p>
            <h2>Do not fund inventory yet.</h2>
            <p className="lead">
              The best first move is a white-label dropship or supplement print-on-demand test,
              powered by UGC creators, with a day-30 decision gate.
            </p>
            <div className="hero-scorecard" aria-label="Recommended launch scorecard">
              <article>
                <span>Supplier lead</span>
                <strong>ClickNutra</strong>
                <p>Best first call based on no minimums, custom labels, integrations, and shipping claims.</p>
              </article>
              <article>
                <span>Launch window</span>
                <strong>30 days</strong>
                <p>Enough time to screen suppliers, seed creators, test content, and read early demand.</p>
              </article>
            </div>
            <div className="thesis-list">
              <div>
                <LockKeyhole size={20} />
                <span>No inventory until the offer earns it.</span>
              </div>
              <div>
                <Target size={20} />
                <span>Use white-label dropship before custom manufacturing.</span>
              </div>
              <div>
                <LineChart size={20} />
                <span>Let creator content prove demand before paid scale.</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="critique-section">
          <div className="section-heading">
            <p className="eyebrow">Decision readiness</p>
            <h2>This should start as a no-inventory brand test, not a manufacturing project.</h2>
          </div>
          <div className="critique-grid">
            {decisionGaps.map((gap) => (
              <article key={gap}>
                <FileSearch size={22} />
                <p>{gap}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section" id="strategy">
          <div className="section-heading">
            <p className="eyebrow">Strategic diagnosis</p>
            <h2>The market is real. Generic entry is the risk.</h2>
          </div>
          <div className="diagnosis-grid">
            <div className="diagnosis-copy">
              <p>
                Women&apos;s performance nutrition is shifting away from thin weight-loss promises
                toward strength, energy, recovery, and consistency. That is the opening. But a
                generic pre-workout or protein launch bought with paid ads walks directly into
                economics that can erase the first sale.
              </p>
              <p>
                The decision should not rest on category growth alone. Nader needs proof that the
                product can be sourced through a white-label or dropship partner, priced with enough
                margin, shipped reliably, and reordered without custom manufacturing risk.
              </p>
            </div>
            <div className="metrics-row">
              {metrics.map((metric) => (
                <article className="metric-tile" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.detail}</p>
                  <small>{metric.source}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="glossary-section" aria-label="Plain English number guide">
          <div className="section-heading">
            <p className="eyebrow">Plain English numbers</p>
            <h2>The math only matters if the terms are clear.</h2>
          </div>
          <div className="glossary-grid">
            {glossary.map((item) => (
              <article key={item.term}>
                <span>{item.term}</span>
                <p>{item.plain}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lanes-section" id="lanes">
          <div className="section-heading">
            <p className="eyebrow">Launch lanes</p>
            <h2>Pick the lane before picking the product.</h2>
          </div>
          <div className="lane-grid">
            {launchLanes.map((lane) => (
              <article className={lane.verdict === "Lead lane" ? "lane-card lead-lane" : "lane-card"} key={lane.lane}>
                <div className="lane-card-top">
                  {lane.lane.includes("GLP") ? <Pill size={24} /> : <Target size={24} />}
                  <strong>{lane.verdict}</strong>
                </div>
                <h3>{lane.lane}</h3>
                <p className="lane-promise">{lane.promise}</p>
                <p>{lane.why}</p>
                <small>{lane.risk}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="niche-section" id="niches">
          <div className="section-heading">
            <p className="eyebrow">Underserved niche map</p>
            <h2>The highest-value opportunities are specific routines, not broad women&apos;s wellness.</h2>
          </div>
          <div className="niche-intro">
            <TrendingUp size={24} />
            <p>
              These are the lanes worth testing if Nader wants more than a generic supplement
              launch. The top two fit the AFTERFIVE concept now. The others are expansion or
              research lanes that should be validated through creator content, supplier samples,
              and compliance review before product commitments.
            </p>
          </div>
          <div className="niche-grid">
            {underservedNiches.map((niche, index) => (
              <article className={niche.priority ? "niche-card priority-niche" : "niche-card"} key={niche.name}>
                <div className="niche-card-head">
                  <span>#{index + 1}</span>
                  <strong>{niche.score}</strong>
                </div>
                <h3>{niche.name}</h3>
                <p className="niche-audience">{niche.audience}</p>
                <dl>
                  <div>
                    <dt>Signal</dt>
                    <dd>{niche.signal}</dd>
                  </div>
                  <div>
                    <dt>Gap</dt>
                    <dd>{niche.gap}</dd>
                  </div>
                  <div>
                    <dt>First test</dt>
                    <dd>{niche.firstTest}</dd>
                  </div>
                </dl>
                <div className="niche-caution">
                  <ShieldCheck size={18} />
                  <p>{niche.caution}</p>
                </div>
                <small>{niche.verdict}</small>
              </article>
            ))}
          </div>
          <div className="niche-decision">
            <Sparkles size={22} />
            <p>
              Recommendation: keep AFTERFIVE focused on low-stim after-work performance, then use
              active midlife strength support as the first expansion story. Treat GLP-1 as research
              and content until supplier, medical-review, and claim boundaries are clean.
            </p>
          </div>
        </section>

        <section className="image-band" aria-label="Target customer moment">
          <img
            src="/nader-bazzi/afterwork-training-moment.png"
            alt="Woman preparing for an after-work strength training session"
          />
          <div>
            <p className="eyebrow">The buyer moment</p>
            <h2>Not “women’s pre-workout.” The 5:30 p.m. decision.</h2>
            <p>
              The sharper concept is the transition from work to training: low-jitter energy before
              class or lifting, simple protein after, and a recurring routine that can be owned.
            </p>
          </div>
        </section>

        <section className="trap-section">
          <div className="section-heading">
            <p className="eyebrow">The cash trap</p>
            <h2>If customer acquisition cost is too close to order value, the first sale loses money.</h2>
          </div>
          <div className="trap-grid">
            <div className="trap-point danger">
              <CircleDollarSign size={24} />
              <h3>Paid acquisition can exceed first-order value</h3>
              <p>
                Health and wellness direct-to-consumer benchmarks commonly put customer acquisition
                cost in a wide range. If a buyer spends $40-$80 and it costs roughly that much to
                acquire her, a single-product order starts underwater.
              </p>
            </div>
            <div className="trap-point">
              <PackageCheck size={24} />
              <h3>The offer must raise average order value</h3>
              <p>
                The Before + After bundle is not assumed to exist. It is a hypothesis: two products
                sourced separately, then sold together only if supplier quotes confirm enough margin.
              </p>
            </div>
            <div className="trap-point">
              <Users size={24} />
              <h3>Owned audience lowers the pressure</h3>
              <p>
                Community, creator partnerships, and a waitlist create trust before the first paid
                click. Paid ads come later as an amplifier.
              </p>
            </div>
          </div>
        </section>

        <section className="economics" id="economics">
          <div className="section-heading">
            <p className="eyebrow">Scenario model</p>
            <h2>You lose money on the wrong first order. You win on the reorder.</h2>
          </div>
          <div className="model-layout">
            <div className="slider-panel">
              <label htmlFor="cac-slider">Customer acquisition cost assumption</label>
              <div className="slider-value">{currency(cac)}</div>
              <input
                id="cac-slider"
                type="range"
                min="50"
                max="130"
                value={cac}
                onChange={(event) => setCac(Number(event.target.value))}
              />
              <div className="range-labels">
                <span>$50 low</span>
                <span>$130 high</span>
              </div>
              <p>
                Assumptions shown as benchmarks, not niche-measured facts: $55 single-product order,
                $90 bundle order, 42% gross margin for an asset-light white-label/dropship test,
                and $10 fulfillment/platform fees. Replace these with real supplier costs after
                sample orders and quote review.
              </p>
            </div>
            <div className="model-results">
              <article>
                <span>Single-product first order</span>
                <strong className={model.singleContribution < 0 ? "negative" : "positive"}>
                  {currency(model.singleContribution)}
                </strong>
                <p>Contribution after acquisition cost, margin, fulfillment, and fees.</p>
              </article>
              <article>
                <span>Bundle first order</span>
                <strong className={model.bundleContribution < 0 ? "negative" : "positive"}>
                  {currency(model.bundleContribution)}
                </strong>
                <p>Better average order value, but still acquisition-cost sensitive.</p>
              </article>
              <article>
                <span>Break-even reorders</span>
                <strong>{model.reordersToBreakEven}</strong>
                <p>Estimated bundle reorders needed after the acquired order.</p>
              </article>
              <article>
                <span>Reorder contribution</span>
                <strong className="positive">{currency(model.reorderContribution)}</strong>
                <p>Why retention, subscription, and replenishment matter.</p>
              </article>
            </div>
          </div>
          <div className="numbers-note">
            <strong>How to read this:</strong>
            <span>
              If single-product contribution is negative, the product cannot be scaled with cold
              paid ads alone. The business needs a higher average order value, lower customer
              acquisition cost, repeat purchasing, or all three.
            </span>
          </div>
        </section>

        <section className="paths-section">
          <div className="section-heading">
            <p className="eyebrow">Go-to-market choice</p>
            <h2>The right first path is asset-light. Manufacturing comes later.</h2>
          </div>
          <div className="path-table">
            {paths.map((path) => (
              <article
                className={
                  path.verdict === "Best first test" || path.verdict === "Strongest"
                    ? "path-row selected"
                    : "path-row"
                }
                key={path.name}
              >
                <div>
                  <h3>{path.name}</h3>
                  <p>{path.fit}</p>
                </div>
                <strong>{path.verdict}</strong>
                <span>{path.note}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="creator-section" id="marketing">
          <div className="section-heading">
            <p className="eyebrow">UGC creator lane</p>
            <h2>The first marketing engine is not ads. It is proof from real routines.</h2>
          </div>
          <div className="creator-layout">
            <div className="creator-steps">
              {creatorSteps.map((step) => (
                <article key={step.title}>
                  <Megaphone size={22} />
                  <span>{step.window}</span>
                  <h3>{step.title}</h3>
                  <p>{step.action}</p>
                  <strong>{step.proof}</strong>
                </article>
              ))}
            </div>
            <aside className="angle-panel">
              <h3>Content angles to test</h3>
              <div>
                {contentAngles.map((item) => (
                  <section key={item.angle}>
                    <span>{item.angle}</span>
                    <p>{item.example}</p>
                  </section>
                ))}
              </div>
            </aside>
          </div>
          <div className="creator-note">
            <Users size={22} />
            <p>
              The creator lane keeps risk low because Nader learns from comments, clicks, saves,
              direct messages, and email signups before committing to inventory. Paid ads should
              only amplify creator clips that already show buying intent.
            </p>
          </div>
        </section>

        <section className="adjacency-section">
          <div>
            <p className="eyebrow">White-space move</p>
            <h2>Lead with the routine. Let creatine/recovery become the margin engine.</h2>
            <p>
              Pre-workout and protein are familiar, but competition is heavy. Women&apos;s creatine
              is moving from niche gym culture into mainstream strength and wellness. That makes it
              a better second product or bundle enhancer than another generic flavor battle.
            </p>
          </div>
          <div className="adjacency-stack">
            <span>
              <FlaskConical size={20} /> Creatine as daily routine
            </span>
            <span>
              <Sparkles size={20} /> Recovery and consistency language
            </span>
            <span>
              <Boxes size={20} /> Bundle economics over single-product margin
            </span>
          </div>
        </section>

        <section className="supplier-section" id="suppliers">
          <div className="section-heading">
            <p className="eyebrow">Sourcing reality</p>
            <h2>The first version should come from white-label dropship or supplement POD.</h2>
          </div>
          <div className="sourcing-proof">
            <article>
              <Boxes size={24} />
              <h3>How the bundle would actually work</h3>
              <p>
                Pick existing white-label formulas from a platform like Supliful, ClickNutra, or a
                similar supplier. Sell the pre-workout and protein as separate products in Shopify,
                then create a bundle offer in the store. Fulfillment may ship as two items unless
                the supplier confirms true kit-packing.
              </p>
            </article>
            <article>
              <ShieldCheck size={24} />
              <h3>What must be confirmed before saying yes</h3>
              <p>
                Product availability, per-unit cost, fulfillment fee, shipping fee, label control,
                testing documents, certificate of analysis, return policy, subscription support,
                shipping speed, and whether two-item bundle fulfillment is actually supported.
              </p>
            </article>
          </div>
          <div className="supplier-layout">
            <div className="supplier-routes">
              {supplierRoutes.map((route) => (
                <article key={route.route}>
                  <Factory size={24} />
                  <div>
                    <h3>{route.route}</h3>
                    <p>{route.use}</p>
                  </div>
                  <dl>
                    <div>
                      <dt>Cash</dt>
                      <dd>{route.cash}</dd>
                    </div>
                    <div>
                      <dt>Minimum order</dt>
                      <dd>{route.moq}</dd>
                    </div>
                    <div>
                      <dt>Timing</dt>
                      <dd>{route.timing}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
            <aside className="supplier-checklist">
              <h3>Quote questions</h3>
              <ul>
                <li>Can we sell under our own label with no inventory purchase?</li>
                <li>What is the exact product cost, fulfillment fee, processing fee, and shipping fee?</li>
                <li>Can two products be sold as one bundle, and will they ship together or separately?</li>
                <li>What testing documents and certificates of analysis are available for each product?</li>
                <li>Can the supplier support subscriptions, returns, damaged shipments, and customer tracking?</li>
                <li>Who controls label copy, Supplement Facts, warnings, allergens, and claim review?</li>
              </ul>
            </aside>
          </div>
          <div className="candidate-section">
            <h3>Quote targets to investigate</h3>
            <p>
              These are not endorsements or final suppliers. They are examples worth contacting to
              test whether the concept can launch without inventory and without custom manufacturing.
            </p>
            <div className="candidate-grid">
              {supplierCandidates.map((candidate) => (
                <a
                  className={candidate.best ? "best-candidate" : undefined}
                  href={candidate.url}
                  target="_blank"
                  rel="noreferrer"
                  key={candidate.name}
                >
                  <div className="candidate-topline">
                    <span>{candidate.model}</span>
                    <b>{candidate.score}</b>
                  </div>
                  <strong>
                    {candidate.name} <ExternalLink size={15} />
                  </strong>
                  <small>{candidate.verdict}</small>
                  <em>{candidate.startup}</em>
                  <p>{candidate.reason}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="gate-section">
            <h3>ClickNutra call gate</h3>
            <p>
              This is the highest-value next step: do not judge the supplier by the homepage. Judge
              it by whether the call produces these four answers.
            </p>
            <div className="gate-grid">
              {supplierGate.map((item) => (
                <article key={item.label}>
                  <ClipboardCheck size={22} />
                  <h4>{item.label}</h4>
                  <div>
                    <span>Pass</span>
                    <p>{item.pass}</p>
                  </div>
                  <div>
                    <span>Fail</span>
                    <p>{item.fail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cost-section">
          <div className="section-heading">
            <p className="eyebrow">Startup capital</p>
            <h2>The first test can be affordable. Scaling is where cash gets real.</h2>
          </div>
          <div className="cost-table">
            {costStack.map((cost) => (
              <article key={cost.item}>
                <WalletCards size={22} />
                <span>{cost.item}</span>
                <strong>{cost.range}</strong>
                <p>{cost.note}</p>
              </article>
            ))}
          </div>
          <div className="cost-warning">
            <Truck size={22} />
            <p>
              Dropship margins can look attractive because they hide inventory risk, but they also
              can be thinner than owned inventory. That is acceptable for a first test because the
              goal is not maximum margin yet. The goal is to prove whether buyers want the routine
              before Nader pays for manufacturing.
            </p>
          </div>
        </section>

        <section className="roadmap-section" id="roadmap">
          <div className="section-heading">
            <p className="eyebrow">30-day sprint</p>
            <h2>This does not need months. It needs a tight test window.</h2>
          </div>
          <div className="timeline">
            {roadmap.map((item, index) => (
              <article key={item.phase}>
                <div className="timeline-index">{index + 1}</div>
                <span>{item.window}</span>
                <h3>{item.phase}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="compliance-section" id="compliance">
          <div className="section-heading">
            <p className="eyebrow">Compliance guardrails</p>
            <h2>Keep the promise strong without making the wrong claim.</h2>
          </div>
          <div className="guardrail-grid">
            <div>
              <ShieldCheck size={24} />
              <h3>Use structure/function language</h3>
              <p>
                Say supports energy, supports recovery, helps meet daily protein goals. Avoid
                disease, hormone, anxiety, fat-loss, and FDA-approved implications.
              </p>
            </div>
            <div>
              <ClipboardCheck size={24} />
              <h3>Substantiate the implied message</h3>
              <p>
                FTC risk includes visuals, testimonials, influencer posts, and context. The claim is
                what the buyer reasonably takes away, not just the exact sentence.
              </p>
            </div>
            <div>
              <BadgeCheck size={24} />
              <h3>Disclose creator relationships clearly</h3>
              <p>
                Creator-led growth is recommended, but paid, gifted, or affiliate relationships must
                be disclosed clearly and close to the endorsement.
              </p>
            </div>
            <div>
              <Pill size={24} />
              <h3>Treat GLP-1 as a careful research lane</h3>
              <p>
                Use nutrient-density and routine language only. Do not claim to treat medication
                side effects, prevent lean-mass loss, or replace physician/dietitian guidance.
              </p>
            </div>
          </div>
          <p className="fda-note">
            Standard supplement disclaimer for concept copy: These statements have not been
            evaluated by the Food and Drug Administration. This product is not intended to diagnose,
            treat, cure, or prevent any disease.
          </p>
        </section>

        <section className="recommendation">
          <p className="eyebrow">Final recommendation</p>
          <h2>Start with white-label dropship. Do not pay for custom manufacturing first.</h2>
          <p>
            The right test is not “Can Nader sell women&apos;s pre-workout?” The right test is “Can
            Nader use an asset-light supplier to prove one routine, one audience, and one repeatable
            offer before he owns inventory?”
          </p>
          <a href="#top">
            Return to concept <ChevronRight size={18} />
          </a>
        </section>

        <section className="sources-section" aria-label="Sources">
          <div className="section-heading">
            <p className="eyebrow">Source trail</p>
            <h2>Benchmarks used for strategy, not niche-specific forecasts.</h2>
          </div>
          <div className="source-grid">
            {sources.map((source) => (
              <a href={source.url} target="_blank" rel="noreferrer" key={source.name}>
                <span>{source.name}</span>
                <p>{source.note}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Detroit AI Works</strong>
          <span>Private strategic feasibility report for Nader Bazzi.</span>
        </div>
        <div className="footer-icons" aria-hidden="true">
          <BarChart3 />
          <Megaphone />
          <MousePointer2 />
          <TrendingUp />
        </div>
      </footer>
    </div>
  );
}

export default App;
