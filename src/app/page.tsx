import { Hero } from "@/components/hero";
import { WhyReddit } from "@/components/why-reddit";
import { Analysis } from "@/components/analysis";
import { Discovery } from "@/components/discovery";
import { Engage } from "@/components/engage";
import { SearchRanking } from "@/components/search-ranking";
import { TimeSaver } from "@/components/time-saver";
import { FAQ } from "@/components/faq";
import { Listen } from "@/components/listen";

export const dynamic = "force-static";
export const revalidate = false;

export default function Page() {
  return (
    <>
      <Hero />
      <WhyReddit />
      <SearchRanking />
      <Analysis />
      <Discovery />
      <Listen />
      <Engage />
      <TimeSaver />
      <FAQ />
    </>
  );
}
