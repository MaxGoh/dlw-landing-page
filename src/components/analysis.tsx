"use client";

import { useState, useEffect } from "react";
import { JsonCodeDisplay } from "@/components/json-code-display";
import { Wand2, Search } from "lucide-react";

export function Analysis() {
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

    const element = document.getElementById("analysis-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const sampleData = {
    company: "Do Less Work",
    tagline: "Listen to what actually matters",
    product: "AI-powered Reddit social listening platform",
    core_features: [
      "Auto-discovers subreddits where your customers discuss pain points",
      "Converts 'looking for recommendations' posts into qualified leads",
      "AI-crafted authentic Reddit responses",
      "Lead scoring with CRM integration",
      "ROI and conversion tracking",
    ],
    target: "B2B SaaS companies and marketers",
    pricing: {
      free_tier: "Available",
      trial: "30 days",
      paid_tiers: "Custom pricing",
    },
    key_metric: "1.2B monthly Reddit users with 50M+ posts/month",
  };

  return (
    <section id="analysis-section" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Container */}
        <div
          className={`relative px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24 transition-all duration-1000 transform overflow-hidden ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            transformOrigin: "center center",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left side - JSON display on desktop, shows below on mobile */}
            <div className="order-2 lg:order-1 w-full overflow-x-auto">
              <JsonCodeDisplay
                data={sampleData}
                fileName="company-profile.json"
                className="max-w-full"
              />
            </div>

            {/* Right side - content, shows first on mobile */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-semibold border-2 border-primary text-primary uppercase tracking-wider">
                    ANALYSIS
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  We figure out what your business does.
                </h2>

                <p className="text-base lg:text-lg font-semibold text-blue-500">
                  No pre-requisites required
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We'll scrape your website to build a profile of your business.
                  We'll then use that profile to identify the best communities
                  to listen and engage with them.
                </p>

                {/* <Button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Button> */}
              </div>

              {/* Feature list */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    One-click analysis of your business
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Wand2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Learn the best keywords to use for listening and ranking on.
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
