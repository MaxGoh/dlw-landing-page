"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    subreddits: 0,
    keywords: 0,
    monitoring: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const animateCount = (
            target: number,
            key: keyof typeof animatedStats,
            duration = 2000,
          ) => {
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setAnimatedStats((prev) => ({
                ...prev,
                [key]: Math.floor(current),
              }));
            }, 16);
          };

          setTimeout(() => animateCount(10000, "subreddits"), 200);
          setTimeout(() => animateCount(200, "keywords"), 400);
          setTimeout(() => animateCount(24, "monitoring"), 600);
        }
      },
      { threshold: 0.2 },
    );

    const section = document.getElementById("custom-monitoring-modules");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="custom-monitoring-modules" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center`}>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-ridge bg-white">
              <div className="text-3xl font-bold mb-2">
                {animatedStats.subreddits}+
              </div>
              <div className="text-sm">Subreddits Monitored</div>
            </Card>
            <Card className="p-6 text-center border-ridge bg-white">
              <div className="text-3xl font-bold mb-2">
                {animatedStats.keywords}+
              </div>
              <div className="text-sm">Keywords Tracked</div>
            </Card>
            <Card className="p-6 text-center border-ridge bg-white">
              <div className="text-3xl font-bold mb-2">
                {animatedStats.monitoring}/7
              </div>
              <div className="text-sm">Active Monitoring</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
