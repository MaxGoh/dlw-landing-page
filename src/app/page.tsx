import { Hero } from "@/components/hero";
import { WhyReddit } from "@/components/why-reddit";
import { Analysis } from "@/components/analysis";
import { Discovery } from "@/components/discovery";
import { Engage } from "@/components/engage";
import { GenerateBacklink } from "@/components/generate-backlink";
import { TimeSaver } from "@/components/time-saver";

export default function Page() {
  return (
    <>
      <Hero />
      <WhyReddit />
      <Analysis />
      <Discovery />
      <Engage />
      <GenerateBacklink />
      <TimeSaver />
    </>
  );
}
