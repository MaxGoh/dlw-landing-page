"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Search,
  TrendingUp,
  DollarSign,
  Clock,
  MousePointer,
  Shield,
  Lightbulb,
  Zap,
  ScrollText,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { trackButtonClick, trackFormSubmit } from "@/lib/analytics";

export function Hero() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

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

  const validateUrl = (url: string) => {
    if (!url) return "Please enter a website URL";

    try {
      const urlObj = new URL(url.startsWith("http") ? url : `https://${url}`);
      if (!urlObj.hostname.includes(".")) {
        return "Please enter a valid website URL";
      }
      return "";
    } catch {
      return "Please enter a valid website URL";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateUrl(websiteUrl);
    if (error) {
      setUrlError(error);
      return;
    }
    setUrlError("");
    trackFormSubmit("hero_discover_form");
    console.log("Finding subreddits for:", websiteUrl);
    // TODO: Implement subreddit discovery logic
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWebsiteUrl(value);
    if (urlError && value) {
      const error = validateUrl(value);
      if (!error) setUrlError("");
    }
  };

  return (
    <section className="hero-pattern relative flex items-start justify-center px-4 pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-20 md:pb-28 lg:pb-32 xl:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Content */}
        <div className="space-y-6 lg:space-y-6 text-center">
          {/* Announcement Badge */}
          {/* <div className="flex justify-center animate-fadeInUp">
            <a
              href="https://form.typeform.com/to/J59frRUQ"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-primary/15 group"
            >
              <span className="px-2 py-0.5 text-xs font-bold bg-primary text-white rounded">
                NEW
              </span>
              <span className="text-sm font-semibold text-primary">
                Limited Beta Access Available
              </span>
            </a>
          </div> */}
          {/* Main Headline & Description */}
          <div className="space-y-8 lg:space-y-10 animate-fadeInUp animation-delay-100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance text-secondary font-black tracking-tight">
              <Image
                src="/reddit.svg"
                alt="Reddit logo"
                width={56}
                height={56}
                className="inline-block w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 mr-2 align-baseline"
              />
              <span className="text-[#FF4500]">Reddit</span> intelligence{" "}
              <br className="md:hidden" />
              <br className="hidden lg:block" />
              that drives{" "}
              <span className="inline-block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                traffic
              </span>{" "}
              <br className="md:hidden" />
              and <br className="hidden lg:block" />
              boosts{" "}
              <span className="inline-block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                search rankings
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance">
              Isolate the noise in Reddit. Drive traffic, build
              authority, access reddit insights and gain leads for your
              business.
            </p>
          </div>

          {/* CTA Form Section */}
          <div className="space-y-6 max-w-2xl mx-auto animate-fadeInUp animation-delay-300">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder={placeholderText}
                  value={websiteUrl}
                  onChange={handleUrlChange}
                  className={`h-14 lg:h-16 text-base lg:text-lg px-6 bg-white/80 backdrop-blur-sm border-2 border-border/50 focus-visible:border-primary shadow-lg hover:shadow-xl transition-shadow ${urlError ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  required
                />
                {urlError && (
                  <p className="text-sm text-destructive mt-2 text-left">
                    {urlError}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                size="default"
                className="h-14 lg:h-16 px-8 lg:px-10 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => trackButtonClick("discover_now", "hero")}
              >
                <Link
                  href="https://form.typeform.com/to/J59frRUQ"
                  className="flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Book free consultation</span>
                </Link>
              </Button>
            </form>

            <p className="text-sm lg:text-base text-muted-foreground max-w-lg mx-auto">
              We'll analyze your business to build a profile of your target
              audience and identify the best communities to drive traffic and grow search ranking.
            </p>

            {/* Trust Badge */}
            {/* <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-md">
              <div className="relative">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm lg:text-base font-semibold text-secondary">
                Only 50 beta spots remaining
              </span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-primary/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
