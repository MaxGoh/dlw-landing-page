"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserCheck, TrendingUp, DollarSign } from "lucide-react";

export function Leads() {
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

    const element = document.getElementById("leads-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="leads-section"
      className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E9ECF5] via-[#E9ECF5]/90 to-[#E9ECF5]/80 px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            transformOrigin: "center center",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-[#993955] uppercase tracking-wider">
                    GENERATE LEADS
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Convert conversations into qualified leads
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Transform Reddit discussions into a predictable pipeline of
                  warm leads. Our AI identifies buying signals and helps you
                  connect with prospects when they're actively looking for
                  solutions.
                </p>

                <Button className="bg-[#993955] hover:bg-[#993955]/90 text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2">
                  Generate leads
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Feature list */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-[#993955] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Qualify leads based on engagement and buying intent signals
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#993955] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Automated lead scoring and CRM integration
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-[#993955] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Track ROI and conversion metrics from Reddit engagement
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - placeholder for image */}
            <div className="hidden lg:block">
              {/* Placeholder for leads dashboard image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
