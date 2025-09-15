"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Share,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";
import { RecommendedSubreddits } from "@/components/recommended-subreddits";

export function Discovery() {
  const [isVisible, setIsVisible] = useState(false);

  const SubredditIcon = ({ letter }: { letter: string }) => (
    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
      r/{letter}
    </div>
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("discovery-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="discovery-section"
      className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative overflow-hidden rounded-3xl px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 transition-all duration-1000 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          style={{
            transformOrigin: "center center",
          }}
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-block">
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-semibold border-2 border-primary text-primary uppercase tracking-wider">
                    DISCOVERY
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                  Find your audience where they're most active
                </h2>

                <p className="text-base sm:text-lgleading-relaxed">
                  Automatically discover relevant subreddits and communities
                  where your target audience discusses their challenges, asks
                  for recommendations, and shares experiences related to your
                  industry.
                </p>

                {/* <Button className="bg-white hover:bg-gray-100 text-[#993955] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-2 text-sm sm:text-base">
                  Start discovering
                  <ArrowRight className="w-4 h-4" />
                </Button> */}
              </div>

              {/* Feature list */}
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base">
                    AI-powered subreddit discovery based on your business domain
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base">
                    Identify high-intent keywords and phrases your audience uses
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base">
                    Track trending topics and emerging discussions in real-time
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - RecommendedSubreddits */}
            <div className="w-full lg:relative space-y-4">
              <RecommendedSubreddits />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
