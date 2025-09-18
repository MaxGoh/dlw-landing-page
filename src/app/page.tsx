import { Hero } from "@/components/hero";
import { WhyReddit } from "@/components/why-reddit";
import { Analysis } from "@/components/analysis";
import { Discovery } from "@/components/discovery";
import { Engage } from "@/components/engage";
import { GenerateBacklink } from "@/components/generate-backlink";
import { TimeSaver } from "@/components/time-saver";
import { FAQ } from "@/components/faq";
import { Listen } from "@/components/listen";

export default function Page() {
  return (
    <>
      <Hero />
      <WhyReddit />
      <Analysis />
      <Discovery />
      <Listen />
      <Engage />
      <GenerateBacklink />
      <TimeSaver />
      <FAQ />
    </>
  );
}
