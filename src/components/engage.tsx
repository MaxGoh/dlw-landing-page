"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Users, Heart } from "lucide-react";
import { RedditPost } from "@/components/reddit-post";
import { RedditReply } from "@/components/reddit-reply";

export function Engage() {
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

    const element = document.getElementById("engage-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="engage-section"
      className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
                    ENGAGE
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Build authentic relationships at scale
                </h2>

                <p className="text-lg text-gray-800 leading-relaxed">
                  Engage meaningfully with your community by providing value,
                  answering questions, and building trust. Our AI helps craft
                  authentic responses that resonate with the Reddit community.
                </p>
              </div>

              {/* Feature list */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">
                    AI-assisted response suggestions that match Reddit's culture
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">
                    Build genuine connections with potential customers
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">
                    Track engagement metrics and community sentiment
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Reddit post with AI reply */}
            <div className="order-2 lg:order-2">
              <div className="space-y-0">
                <RedditPost
                  subreddit="r/sales"
                  author="u/salesmanager"
                  timeAgo="2h ago"
                  title="Anyone else tired of generic lead gen tools?"
                  content="Every tool promises 'high-quality leads' but they're all scraped from the same databases. I want to find prospects who are actually talking about needing our solution, not just fit our ICP on paper. Has anyone found a better way?"
                  upvotes={89}
                  comments={34}
                  companyRelevance={90}
                />
                <RedditReply isVisible={isVisible} autoStart={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
