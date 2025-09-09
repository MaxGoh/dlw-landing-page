import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { WhyReddit } from "@/components/why-reddit"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-card to-secondary/30">
      <Hero />
      <Stats />
      <WhyReddit />
    </main>
  );
}
