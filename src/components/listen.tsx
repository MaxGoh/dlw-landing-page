"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ear, Bell, Filter } from "lucide-react";

export function Listen() {
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

    const element = document.getElementById("listen-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="listen-section"
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
            {/* Left side - placeholder for image */}
            <div className="hidden lg:block order-1 lg:order-2">
              {/* Placeholder for listening dashboard image */}
            </div>

            {/* Right side - content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-[#993955] uppercase tracking-wider">
                    LISTEN
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Never miss a conversation about your brand
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Monitor mentions, track sentiment, and stay informed about
                  what people are saying. Get real-time alerts when high-value
                  conversations happen so you can respond at the perfect moment.
                </p>

                <Button className="bg-[#993955] hover:bg-[#993955]/90 text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2">
                  Start listening
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Feature list */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Ear className="w-5 h-5 text-[#993955] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    24/7 monitoring of Reddit threads and discussions
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-[#993955] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Instant notifications for brand mentions and keywords
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Filter className="w-5 h-5 text-[#993955] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Smart filtering to focus on high-intent conversations
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
