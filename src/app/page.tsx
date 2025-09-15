import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { WhyReddit } from "@/components/why-reddit";
import { Analysis } from "@/components/analysis";
import { Discovery } from "@/components/discovery";
import { Engage } from "@/components/engage";
import { GenerateBacklink } from "@/components/generate-backlink";
import { Leads } from "@/components/leads";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <WhyReddit />
      <Analysis />
      <Discovery />
      <Engage />
      <GenerateBacklink />
      <Leads />
    </main>
  );
}
