import { MarketDashboard } from "@/components/home/MarketDashboard";
import { NewsTicker } from "@/components/home/NewsTicker";
import { HeroSection } from "@/components/home/HeroSection";
import { IndustryChainMap } from "@/components/home/IndustryChainMap";
import { BrandSpotlight } from "@/components/home/BrandSpotlight";
import { ResearchHub } from "@/components/home/ResearchHub";
import { CaseStudyGrid } from "@/components/home/CaseStudyGrid";
import { StandardsList } from "@/components/home/StandardsList";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 pt-28">

      {/* 1. Global Market Intelligence (Top Bar) */}
      <MarketDashboard />

      {/* 2. Real-time News Wire (Terminal Style) */}
      <NewsTicker />

      {/* 3. Command Center (Hero) */}
      <HeroSection />

      {/* 4. Supply Chain Topology (Schematic) */}
      <IndustryChainMap />

      {/* 5. Data Tables (High Density) */}
      <div className="grid md:grid-cols-2 border-b border-slate-800">
        <div className="border-r border-slate-800">
          <ResearchHub />
        </div>
        <div>
          <StandardsList />
        </div>
      </div>

      {/* 6. Success Stories (Visual Break) */}
      <CaseStudyGrid />

      {/* 7. Member Network */}
      <BrandSpotlight />

    </main>
  );
}
