"use client";

import { useState, useEffect } from "react";
import { Link2, Zap, BarChart3, Search, TrendingUp, CheckCircle, Brain } from "lucide-react";

export function SearchRanking() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"seo" | "aeo">("seo");

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
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          style={{
            transformOrigin: "center center",
          }}>
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-semibold border-2 border-primary text-primary uppercase tracking-wider">
                  SEARCH RANKING
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

          {/* Right side - SEO/AEO tabs */}
          <div className="space-y-6">
            {/* Tab buttons */}
            <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setActiveTab("seo")}
                className={`flex-1 px-4 py-2 rounded-md font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${activeTab === "seo"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                <Search className="w-4 h-4" />
                SEO
              </button>
              <button
                onClick={() => setActiveTab("aeo")}
                className={`flex-1 px-4 py-2 rounded-md font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${activeTab === "aeo"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                <Brain className="w-4 h-4" />
                AEO
              </button>
            </div>

            {/* Tab content */}
            <div>
              {activeTab === "seo" ? (
                <div className="space-y-3 sm:space-y-4">
                  {/* Google Search Bar */}
                  <div className="bg-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-1">
                        <span className="text-lg sm:text-2xl font-sans">
                          <span className="text-blue-500">G</span>
                          <span className="text-red-500">o</span>
                          <span className="text-yellow-500">o</span>
                          <span className="text-blue-500">g</span>
                          <span className="text-green-500">l</span>
                          <span className="text-red-500">e</span>
                        </span>
                      </div>
                      <div className="flex-1 w-full">
                        <div className="bg-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 border border-gray-300">
                          <Search className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700 truncate">best B2B lead generation tool reddit</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Search Results */}
                  <div className="space-y-2 sm:space-y-3">
                    {/* Featured Snippet */}
                    <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Featured snippet from the web</p>
                      <p className="text-xs sm:text-sm text-gray-800 font-medium mb-2">The most recommended B2B lead generation tools on Reddit:</p>
                      <ul className="text-xs sm:text-sm text-gray-700 space-y-1 ml-2 sm:ml-4">
                        <li className="break-words">• <span className="font-semibold text-blue-600">Your Product</span> - AI-powered Reddit monitoring</li>
                        <li className="break-words">• Apollo.io - Sales intelligence platform</li>
                        <li className="break-words">• Clay - Data enrichment automation</li>
                      </ul>
                      <p className="text-xs text-gray-500 mt-2">22 Jan 2025</p>
                    </div>

                    {/* First Result - Your Product */}
                    <div className="bg-white rounded-lg p-2.5 sm:p-3 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">R</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-600 mb-1">
                            <span className="block sm:inline">Reddit · r/sales</span>
                            <span className="text-gray-400 block sm:inline sm:ml-2">40+ comments · 2 days ago</span>
                          </div>
                          <h3 className="text-sm sm:text-base text-blue-600 hover:underline cursor-pointer font-medium mb-1 line-clamp-2">
                            Finally found a tool that actually finds real leads : r/sales
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-700 line-clamp-2">
                            Been using <span className="font-semibold">Your Product</span> for 3 months now. Unlike traditional scrapers, it actually finds people discussing their problems in real-time...
                          </p>
                          <p className="text-xs text-gray-500 mt-1 hidden sm:block">89 upvotes · Top answer: "This is exactly what we needed..."</p>
                        </div>
                      </div>
                    </div>

                    {/* Second Result */}
                    <div className="bg-white rounded-lg p-2.5 sm:p-3 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">R</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-600 mb-1">
                            <span className="block sm:inline">Reddit · r/startups</span>
                            <span className="text-gray-400 block sm:inline sm:ml-2">156 comments · 1 week ago</span>
                          </div>
                          <h3 className="text-sm sm:text-base text-blue-600 hover:underline cursor-pointer font-medium mb-1 line-clamp-2">
                            What are your must-have tools for B2B growth? : r/startups
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-700 line-clamp-2">
                            For lead generation: <span className="font-semibold">Your Product</span> (Reddit monitoring), Apollo (email outreach), Clay (enrichment)...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-2.5 sm:p-3 border border-green-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-green-800">Your Impact</span>
                    </div>
                    <p className="text-xs text-green-700 mt-1">
                      Ranking #1 for "B2B lead generation tool reddit" • 12K+ searches/mo
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* ChatGPT Interface */}
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    {/* User Message */}
                    <div className="flex gap-3 mb-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-gray-700">Y</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">You</p>
                        <p className="text-gray-800 mt-1 text-sm">What are the best tools for finding B2B leads on Reddit?</p>
                      </div>
                    </div>

                    {/* ChatGPT Response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-[#10a37f] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">ChatGPT</p>
                        <div className="text-gray-800 mt-2 space-y-3">
                          <p className="text-sm leading-relaxed">
                            Based on extensive discussions across Reddit communities, here are the most recommended tools for B2B lead generation on Reddit:
                          </p>

                          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                            <p className="font-semibold text-sm mb-2 text-blue-900">1. Your Product</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              Highly recommended by r/sales and r/startups users. This AI-powered tool monitors Reddit conversations in real-time to identify high-intent leads. Users report an 18% qualified lead rate, significantly higher than traditional methods.
                            </p>
                            <div className="flex gap-3 mt-2">
                              <span className="text-xs text-blue-700">✓ Real-time monitoring</span>
                              <span className="text-xs text-blue-700">✓ AI scoring</span>
                              <span className="text-xs text-blue-700">✓ Automated responses</span>
                            </div>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                            <p className="font-semibold text-sm mb-1 text-gray-900">2. Manual monitoring</p>
                            <p className="text-xs text-gray-600">Time-consuming but free approach using Reddit's native search...</p>
                          </div>

                          <p className="text-xs text-gray-500 italic">
                            Sources: r/sales (89 upvotes), r/startups (156 comments), r/GrowthHacking (42 recommendations)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Brain className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-semibold text-blue-800">AI Mentions</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-900">87%</p>
                      <p className="text-xs text-blue-700">of AI responses include your brand</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-semibold text-green-800">Visibility Boost</span>
                      </div>
                      <p className="text-2xl font-bold text-green-900">5x</p>
                      <p className="text-xs text-green-700">more AI recommendations</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
