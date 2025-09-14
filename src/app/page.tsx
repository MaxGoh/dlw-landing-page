import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { WhyReddit } from "@/components/why-reddit"
import { Analysis } from "@/components/analysis"
import { Discovery } from "@/components/discovery"
import { Engage } from "@/components/engage"
import { GenerateBacklink } from "@/components/generate-backlink"
import { Leads } from "@/components/leads"
import { Navbar } from "@/components/navbar"
import { PricingSection } from "@/components/pricing"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-card to-secondary/30">
      <Navbar />
      <Hero />
      <Stats />
      <WhyReddit />
      <Analysis />
      <Discovery />
      <Engage />
      <GenerateBacklink />
      <Leads />
      <PricingSection />
    </main>
  );
}
