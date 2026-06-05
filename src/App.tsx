import { BuildNowLater } from "./components/BuildNowLater";
import { CustomerJourney } from "./components/CustomerJourney";
import { DetroitAIWorksWorkflow } from "./components/DetroitAIWorksWorkflow";
import { FinalRecommendation } from "./components/FinalRecommendation";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InsurancePlan } from "./components/InsurancePlan";
import { KeyboardScroll } from "./components/KeyboardScroll";
import { MarketingSection } from "./components/MarketingSection";
import { NicheSection } from "./components/NicheSection";
import { OfferCards } from "./components/OfferCards";
import { PricingSection } from "./components/PricingSection";
import { Roadmap } from "./components/Roadmap";
import { StrategyShift } from "./components/StrategyShift";
import { TransformationSection } from "./components/TransformationSection";
import { TrustStack } from "./components/TrustStack";
import { VisitSummaryDemo } from "./components/VisitSummaryDemo";

function App() {
  return (
    <>
      <KeyboardScroll />
      <Header />
      <main>
        <Hero />
        <StrategyShift />
        <NicheSection />
        <TransformationSection />
        <OfferCards />
        <TrustStack />
        <InsurancePlan />
        <PricingSection />
        <CustomerJourney />
        <MarketingSection />
        <VisitSummaryDemo />
        <Roadmap />
        <DetroitAIWorksWorkflow />
        <BuildNowLater />
        <FinalRecommendation />
      </main>
      <Footer />
    </>
  );
}

export default App;
