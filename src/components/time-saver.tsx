"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Target, Zap } from "lucide-react";
import Link from "next/link";
import { trackButtonClick } from "@/lib/analytics";

export function TimeSaver() {
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

    const element = document.getElementById("time-saver-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="time-saver-section" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center space-y-8 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main heading */}
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Take back your time.
            </h2>
          </div>

          {/* Process explanation */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Reddit marketing is time-consuming
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    5+ hrs
                  </div>
                  <p className="text-gray-700">Finding the right subreddits</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    8+ hrs
                  </div>
                  <p className="text-gray-700">Creating valuable content</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    7+ hrs
                  </div>
                  <p className="text-gray-700">Writing non-spammy responses</p>
                </div>
              </div>

              <div className="text-center py-6 border-t border-gray-200">
                <p className="text-xl text-gray-700 mb-4">
                  That's{" "}
                  <span className="font-bold text-gray-900">
                    20 hours every week
                  </span>{" "}
                  just to maintain a presence on Reddit.
                </p>
                <p className="text-3xl font-bold text-primary">
                  We reduce it to 10 minutes a day.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => trackButtonClick("book_demo", "time_saver")}
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScNv4caC6PJxIahcUqA8hlCqFRnBoLW9uLLvEo7LG2kdramRg/viewform?usp=header">
                Join waitlist
              </Link>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Let's work together to get you started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
