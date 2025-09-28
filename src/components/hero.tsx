"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Search,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
  Users,
  Target,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { trackButtonClick, trackFormSubmit } from "@/lib/analytics";

export function Hero() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const websiteExamples = [
    "microsoft.com",
    "apple.com",
    "nvidia.com",
    "abc.xyz",
    "aboutamazon.com",
    "meta.com",
    "berkshirehathaway.com",
    "lilly.com",
    "broadcom.com",
    "jpmorganchase.com",
    "tesla.com",
    "corporate.visa.com",
    "corporate.exxonmobil.com",
    "unitedhealthgroup.com",
    "jnj.com",
    "mastercard.com",
    "pg.com",
    "costco.com",
    "corporate.homedepot.com",
    "merck.com",
    "chevron.com",
    "abbvie.com",
    "salesforce.com",
    "netflix.com",
    "amd.com",
    "coca-colacompany.com",
    "pepsico.com",
    "adobe.com",
    "oracle.com",
  ];

  useEffect(() => {
    const currentWebsite = websiteExamples[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (placeholderText.length < currentWebsite.length) {
        timeoutId = setTimeout(() => {
          setPlaceholderText(
            currentWebsite.slice(0, placeholderText.length + 1),
          );
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (placeholderText.length > 0) {
        timeoutId = setTimeout(() => {
          setPlaceholderText(placeholderText.slice(0, -1));
        }, 50);
      } else {
        setCurrentIndex((prev) => (prev + 1) % websiteExamples.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [placeholderText, currentIndex, isTyping, websiteExamples]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmit("hero_discover_form");
    // Navigate to consultation form
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScNv4caC6PJxIahcUqA8hlCqFRnBoLW9uLLvEo7LG2kdramRg/viewform?usp=header";
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWebsiteUrl(value);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-20" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Content */}
        <div className="space-y-8 text-center">
          {/* Announcement Badge */}
          <div className="flex justify-center animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                AI-Powered Reddit Marketing Platform
              </span>
            </div>
          </div>

          {/* Main Headline & Description */}
          <div className="space-y-6 animate-fadeInUp animation-delay-100">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                Find customers for your business on{" "}
                <span className="inline-flex items-baseline">
                  <Image
                    src="/reddit.svg"
                    alt="Reddit logo"
                    width={72}
                    height={72}
                    className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 relative -top-0.5 sm:-top-1"
                  />
                  <span className="text-[#FF4500] ml-2">Reddit</span>
                </span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
              Our AI Marketing agent{" "}
              <span className="text-gray-600">
                finds conversations
              </span>
              ,{" "}
              <span className=" text-gray-600">
                writes thoughtful replies
              </span>
              , and{" "}
              <span className=" text-gray-600">
                brings you customers
              </span>
            </p>

            {/* Stats/Social Proof */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 pt-4">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  24/7 Real-time Monitoring
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  100K+ Subreddits Tracked
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Find customers while you sleep
                </span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group relative px-8 py-6 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                onClick={() => {
                  trackButtonClick("join_waitlist", "hero");
                  window.location.href =
                    "https://docs.google.com/forms/d/e/1FAIpQLScNv4caC6PJxIahcUqA8hlCqFRnBoLW9uLLvEo7LG2kdramRg/viewform?usp=header";
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join Waitlist
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse animation-delay-400" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-300" />
      </div>
    </section>
  );
}
