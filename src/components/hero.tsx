"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

const RedditIcon = ({ className }: { className?: string }) => null;

const PlatformLogos = () => (
  <div className="flex flex-wrap items-center gap-4">
    {/* Reddit */}
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF4500">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.249-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.25-.561 1.25-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>

    {/* X (Twitter) */}
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000000">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>

    {/* TikTok */}
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000000">
      <path d="M19.59 6.69a4.83 4.83 0 0 0-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>

    {/* YouTube */}
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF0000">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>

    {/* Instagram */}
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="url(#instagram-gradient)"
    >
      <defs>
        <linearGradient
          id="instagram-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#833AB4" />
          <stop offset="50%" stopColor="#FD1D1D" />
          <stop offset="100%" stopColor="#FCB045" />
        </linearGradient>
      </defs>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.281-.059-1.69-.073-4.949-.073c-1.281 0-1.69.014-4.949.073.796.058 1.44.07 4.849.07 3.204 0 3.584-.012 4.85-.07.149-3.225 1.664-4.771 4.919-4.919 1.281-.059 1.69-.073 4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>

    {/* LinkedIn */}
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0077B5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>

    {/* Facebook */}
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C16.046 4.747 13.087 8.686 12 10.8z" />
    </svg>

    {/* Bluesky */}
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#00A8E8">
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.018-.276.037-.415.056 2.67.296 5.568-.628 6.383-3.364.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z" />
    </svg>
  </div>
);

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
    <section className="hero-pattern relative min-h-screen flex items-center justify-center px-4 py-8 lg:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Content */}
        <div className="space-y-12 lg:space-y-16 text-center">
          {/* Announcement Badge */}
          {/* <div className="flex justify-center animate-fadeInUp">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-primary/15 group"
            >
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-primary">
                Do Less Work 1.0 is here
              </span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
 */}
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
              Isolate what matters. Filter the noise. Drive traffic, build leads
              and authority for your business across social platforms.
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
              audience and identify the best communities to engage with them.
            </p>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-md">
              <div className="relative">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm lg:text-base font-semibold text-secondary">
                Join 50+ businesses listening to what matters
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
