"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2, Zap, BarChart3 } from "lucide-react";

export function GenerateBacklink() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("backlink-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="backlink-section"
      className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#993955] via-[#993955]/80 to-[#993955]/60 px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            transformOrigin: "center center",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - placeholder for image */}
            <div className="hidden lg:block order-1 lg:order-2">
              {/* Placeholder for backlink generation interface */}
            </div>

            {/* Right side - content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                    GENERATE BACKLINKS
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                  Build authority with strategic link placement
                </h2>

                <p className="text-lg text-white/90 leading-relaxed">
                  Naturally earn high-quality backlinks by providing valuable
                  insights and solutions. Our system identifies perfect
                  opportunities to share your expertise and build domain
                  authority.
                </p>

                <Button className="bg-white hover:bg-gray-100 text-[#993955] font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2">
                  Generate backlinks
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Feature list */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Link2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <p className="text-white/90">
                    Identify high-authority threads for natural link placement
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <p className="text-white/90">
                    Automated opportunity detection for relevant discussions
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <p className="text-white/90">
                    Track backlink performance and domain authority growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
