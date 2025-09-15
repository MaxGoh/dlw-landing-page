"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2, Zap, BarChart3 } from "lucide-react";
import { RedditPost } from "@/components/reddit-post";
import { RedditReply } from "@/components/reddit-reply";

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
          className={`relative overflow-hidden rounded-3xl px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 transition-all duration-1000 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          style={{
            transformOrigin: "center center",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Reddit post example with AI reply - visible on all screens */}
            <div className="order-2 lg:order-2">
              <div className="space-y-0">
                <RedditPost
                  subreddit="r/marketing"
                  author="u/marketingpro"
                  timeAgo="1d ago"
                  title="Reddit is an untapped goldmine for B2B research"
                  content="I've been lurking in industry subreddits and the insights are incredible. People share their real problems, not what they think you want to hear. Wish there was a way to systematically track these conversations..."
                  upvotes={156}
                  comments={67}
                  companyRelevance={90}
                />
                <RedditReply isVisible={isVisible} autoStart={true} />
              </div>
            </div>

            {/* Content - shown first on mobile */}
            <div className="space-y-8 order-1 lg:order-1">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-semibold border-2 border-primary text-primary uppercase tracking-wider">
                    GENERATE BACKLINKS
                  </span>
                </div>



                <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                  Build authority with strategic link placement
                </h2>

                <p className="text-lg leading-relaxed">
                  Naturally earn high-quality backlinks by providing valuable
                  insights and solutions. Our system identifies perfect
                  opportunities to share your expertise and build domain
                  authority.
                </p>
              </div>

              {/* Feature list */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Link2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p>
                    Identify high-authority threads for natural link placement
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p>
                    Automated opportunity detection for relevant discussions
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <p>
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
