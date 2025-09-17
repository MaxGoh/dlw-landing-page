"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <section className="hero-pattern relative min-h-screen flex items-center justify-center px-4 py-16 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Content */}
        <div className="space-y-6 lg:space-y-6 text-center">
          {/* Announcement Badge */}
          <div className="flex justify-center animate-fadeInUp">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-primary/15 group"
            >
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-primary">
                Limited Beta Access Available
              </span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          {/* Main Headline & Description */}
          <div className="space-y-8 lg:space-y-10 animate-fadeInUp animation-delay-100">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-balance text-secondary font-black tracking-tight">
              <span className="inline-block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Listen
              </span>{" "}
              <span className="inline-block">to what</span>{" "}
              <br className="hidden lg:block" />
              <span className="inline-block">actually</span>{" "}
              <span className="inline-block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                matters
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance">
              Isolate what matters. Filter the noise. Drive traffic, build authority
              and gain leads for your business.
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
              >
                <Link
                  href="https://form.typeform.com/to/j3zGikNE"
                  className="flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Discover Now</span>
                </Link>
              </Button>
            </form>

            <p className="text-sm lg:text-base text-muted-foreground max-w-lg mx-auto">
              We'll analyze your business to build a profile of your target
              audience and identify the best communities to listen and engage with them.
            </p>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-md">
              <div className="relative">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm lg:text-base font-semibold text-secondary">
                Only 50 beta spots remaining
              </span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto pt-8 animate-fadeInUp animation-delay-400">
            <div className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-black text-primary">
                100K+
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">
                Subreddits Indexed
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-black text-primary">
                10K+
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">
                {" "}
                Posts Analyzed
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-black text-primary">
                24/7
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">
                Active Monitoring
              </div>
            </div>
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
