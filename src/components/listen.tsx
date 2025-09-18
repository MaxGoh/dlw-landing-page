"use client";

import { useState, useEffect } from "react";
import {
  MessageCircle,
  Users,
  Heart,
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Share,
  MoreHorizontal,
} from "lucide-react";

export function Listen() {
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

    const element = document.getElementById("engage-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="engage-section"
      className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-blue-50/50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative overflow-hidden px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 transition-all duration-1000 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
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
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-semibold border-2 border-primary text-primary uppercase tracking-wider">
                    LISTEN
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Listen to what your customers are saying.
                </h2>

                <p className="text-lg text-gray-800 leading-relaxed">
                  Your prospects are on Reddit right now asking for recommendations.
                  Your customers are explaining why they chose you (or didn't).
                  Your competitors are being discussed in threads you've never seen.
                  Our intelligence finds and scores these conversations so you can join the valuable ones.                </p>
              </div>

              {/* Feature list */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-gray-800 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">
                    AI-assisted response suggestions that match Reddit's culture
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-gray-800 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">
                    Build genuine connections with potential customers
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-gray-800 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">
                    Track engagement metrics and community sentiment
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - placeholder for image */}
            <div className="relative space-y-4">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]"></h3>

                <div className="bg-white rounded-lg border hover:shadow-xl transition-all duration-300 transform rotate-2 hover:rotate-0 hover:scale-105 shadow-lg shadow-blue-200/50">
                  <div className="p-4">
                    {/* Header with subreddit icon and info */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <SubredditIcon letter="e" />
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <span className="font-medium">r/entrepreneur</span>
                          <span>•</span>
                          <span>2h ago</span>
                        </div>
                      </div>
                      <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </div>

                    {/* Post title */}
                    <h4
                      className="font-semibold text-lg text-black mb-3 leading-tight"
                      style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
                    >
                      Struggling to find qualified leads for my B2B SaaS
                    </h4>

                    {/* Post content */}
                    <p
                      className="text-black text-sm leading-relaxed mb-4"
                      style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
                    >
                      I've tried cold email, LinkedIn outreach, and paid ads but
                      the quality is terrible. Most leads aren't even in our
                      target market. How do you find people who actually need
                      your product?
                    </p>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                        <ArrowUp className="w-4 h-4 text-gray-600 mr-1" />
                        <span className="text-sm font-medium text-gray-800">
                          47
                        </span>
                        <ArrowDown className="w-4 h-4 text-gray-600 ml-1" />
                      </div>
                      <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                        <MessageSquare className="w-4 h-4 text-gray-600 mr-1" />
                        <span className="text-sm text-gray-600">23</span>
                      </div>
                      <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                        <Share className="w-4 h-4 text-gray-600 mr-1" />
                        <span className="text-sm text-gray-600">Share</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border hover:shadow-xl transition-all duration-300 transform -rotate-1 hover:rotate-0 hover:scale-105 shadow-lg shadow-blue-200/50 ml-8">
                  <div className="p-4">
                    {/* Header with subreddit icon and info */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <SubredditIcon letter="s" />
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <span className="font-medium">r/sales</span>
                          <span>•</span>
                          <span>5h ago</span>
                        </div>
                      </div>
                      <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </div>

                    {/* Post title */}
                    <h4
                      className="font-semibold text-lg text-black mb-3 leading-tight"
                      style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
                    >
                      Anyone else tired of generic lead gen tools?
                    </h4>

                    {/* Post content */}
                    <p
                      className="text-black text-sm leading-relaxed mb-4"
                      style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
                    >
                      Every tool promises "high-quality leads" but they're all
                      scraped from the same databases. I want to find prospects
                      who are actually talking about needing our solution, not
                      just fit our ICP on paper.
                    </p>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                        <ArrowUp className="w-4 h-4 text-gray-600 mr-1" />
                        <span className="text-sm font-medium text-gray-800">
                          89
                        </span>
                        <ArrowDown className="w-4 h-4 text-gray-600 ml-1" />
                      </div>
                      <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                        <MessageSquare className="w-4 h-4 text-gray-600 mr-1" />
                        <span className="text-sm text-gray-600">34</span>
                      </div>
                      <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                        <Share className="w-4 h-4 text-gray-600 mr-1" />
                        <span className="text-sm text-gray-600">Share</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border hover:shadow-xl transition-all duration-300 transform rotate-1 hover:rotate-0 hover:scale-105 shadow-lg shadow-blue-200/50 mr-4">
                  <div className="p-4">
                    {/* Header with subreddit icon and info */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <SubredditIcon letter="m" />
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <span className="font-medium">r/marketing</span>
                          <span>•</span>
                          <span>1d ago</span>
                        </div>
                      </div>
                      <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </div>

                    {/* Post title */}
                    <h4
                      className="font-semibold text-lg text-black mb-3 leading-tight"
                      style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
                    >
                      Reddit is an untapped goldmine for B2B research
                    </h4>

                    {/* Post content */}
                    <p
                      className="text-black text-sm leading-relaxed mb-4"
                      style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
                    >
                      I've been lurking in industry subreddits and the insights
                      are incredible. People share their real problems, not what
                      they think you want to hear. Wish there was a way to
                      systematically track these conversations...
                    </p>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                        <ArrowUp className="w-4 h-4 text-gray-600 mr-1" />
                        <span className="text-sm font-medium text-gray-800">
                          156
                        </span>
                        <ArrowDown className="w-4 h-4 text-gray-600 ml-1" />
                      </div>
                      <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                        <MessageSquare className="w-4 h-4 text-gray-600 mr-1" />
                        <span className="text-sm text-gray-600">67</span>
                      </div>
                      <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                        <Share className="w-4 h-4 text-gray-600 mr-1" />
                        <span className="text-sm text-gray-600">Share</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
