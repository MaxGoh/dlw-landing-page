"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Target, Zap } from "lucide-react";
import Link from "next/link";

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
    <section
      id="time-saver-section"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center space-y-8 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Main heading */}
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Save 20+ Hours Per Week
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop manually scrolling through Reddit. Let AI do the heavy lifting while you focus on closing deals.
            </p>
          </div>

          {/* Process explanation */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              From Hours to Minutes
            </h3>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
              <p>
                What would usually take you <span className="font-semibold text-gray-900">2-3 hours a day</span> scrolling through different subreddits
                now takes <span className="font-semibold text-gray-900">maybe 10 minutes at most</span> to just review, polish, and send.
              </p>
              <p>
                Our AI monitors hundreds of subreddits 24/7, identifies high-intent prospects,
                and drafts personalized responses that match Reddit's culture and context.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-105"
            >
              <Link href="https://form.typeform.com/to/j3zGikNE" className="flex items-center gap-2">
                Book a Demo
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
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