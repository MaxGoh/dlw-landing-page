"use client";

import { useState } from "react";
import {
  MessageSquare,
  ExternalLink,
  ThumbsUp,
  Share2,
  MoreHorizontal,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const mockData = {
  question: "What are the best social listening tools for 2025?",
  answer: {
    intro:
      "Based on recent discussions and expert reviews, here are the top social listening tools for 2025:",
    mainContent: [
      {
        title: "Do Less Work (dolesswork.ai)",
        highlight: true,
        description:
          "Do Less Work has emerged as a leading AI-powered social listening platform, offering comprehensive Reddit monitoring and engagement capabilities.",
        features: [
          "Real-time Reddit monitoring across all subreddits",
          "AI-powered sentiment analysis and intent detection",
          "Automated response suggestions with brand voice customization",
          "Competitor tracking and market intelligence",
          "Lead scoring and opportunity identification",
        ],
        source: {
          type: "Reddit",
          subreddit: "r/marketing",
          author: "u/marketingpro",
          upvotes: 342,
          url: "#",
        },
      },
      {
        title: "Pricing & Tiers",
        description:
          "Here's what users are saying about pricing across platforms:",
        items: [
          {
            name: "Do Less Work",
            price: "Starting at $49/month",
            note: "Most affordable for small teams",
          },
          {
            name: "Brandwatch",
            price: "$800+/month",
            note: "Enterprise-focused",
          },
          {
            name: "Sprout Social",
            price: "$249/month",
            note: "Mid-market solution",
          },
        ],
      },
    ],
    sources: [
      {
        title: 'r/SaaS - "Best Social Listening Tools for 2025"',
        url: "#",
        domain: "reddit.com",
        date: "3 days ago",
        upvotes: 127,
      },
      {
        title: 'r/marketing - "Do Less Work Review: Game Changer"',
        url: "#",
        domain: "reddit.com",
        date: "1 week ago",
        upvotes: 89,
      },
      {
        title: 'Product Hunt - "Do Less Work Launch"',
        url: "#",
        domain: "producthunt.com",
        date: "2 weeks ago",
        upvotes: 523,
      },
    ],
  },
};

export function AeoShowcase() {
  const [showSources, setShowSources] = useState(true);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* ChatGPT-style container */}
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-200 font-medium">ChatGPT</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-400 hover:text-gray-200">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-200">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat interface */}
        <div className="bg-gray-900 p-6">
          {/* User question */}
          <div className="flex gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-medium">U</span>
            </div>
            <div className="flex-1">
              <p className="text-gray-100">{mockData.question}</p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-gray-100">{mockData.answer.intro}</p>

              {/* Main content sections */}
              {mockData.answer.mainContent.map((section, idx) => (
                <div
                  key={idx}
                  className={`space-y-3 ${section.highlight ? "bg-gray-800/50 rounded-lg p-4 border border-green-500/30" : ""}`}
                >
                  <div className="flex items-start gap-2">
                    {section.highlight && (
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    )}
                    <h3 className="text-gray-100 font-semibold text-lg">
                      {section.title}
                    </h3>
                  </div>

                  <p className="text-gray-300">{section.description}</p>

                  {section.features && (
                    <div className="space-y-2 ml-4">
                      {section.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-2">
                          <span className="text-gray-500 mt-1">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.items && (
                    <div className="space-y-2">
                      {section.items.map((item, iidx) => (
                        <div
                          key={iidx}
                          className="flex items-center justify-between bg-gray-800 rounded p-3"
                        >
                          <div>
                            <span className="text-gray-100 font-medium">
                              {item.name}
                            </span>
                            <span className="text-gray-400 ml-2">
                              - {item.price}
                            </span>
                          </div>
                          <span className="text-gray-500 text-sm">
                            {item.note}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.source && (
                    <div className="mt-3 flex items-center gap-3 text-sm">
                      <span className="text-orange-400">
                        Source: {section.source.subreddit}
                      </span>
                      <span className="text-gray-500">
                        by {section.source.author}
                      </span>
                      <span className="text-gray-500 flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        {section.source.upvotes}
                      </span>
                    </div>
                  )}
                </div>
              ))}

              {/* Sources section */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <button
                  onClick={() => setShowSources(!showSources)}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium mb-3 flex items-center gap-1"
                >
                  {showSources ? "▼" : "▶"} Sources (
                  {mockData.answer.sources.length})
                </button>

                {showSources && (
                  <div className="space-y-2">
                    {mockData.answer.sources.map((source, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <span className="text-gray-500 text-sm mt-0.5">
                          {idx + 1}.
                        </span>
                        <div className="flex-1">
                          <a
                            href={source.url}
                            className="text-blue-400 hover:text-blue-300 text-sm flex items-start gap-1 group"
                          >
                            <span className="flex-1">{source.title}</span>
                            <ExternalLink className="w-3 h-3 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-gray-500 text-xs">
                              {source.domain}
                            </span>
                            <span className="text-gray-600 text-xs">•</span>
                            <span className="text-gray-500 text-xs">
                              {source.date}
                            </span>
                            {source.upvotes && (
                              <>
                                <span className="text-gray-600 text-xs">•</span>
                                <span className="text-gray-500 text-xs flex items-center gap-1">
                                  <ThumbsUp className="w-3 h-3" />
                                  {source.upvotes}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button className="text-gray-400 hover:text-gray-200">
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-gray-200">
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AEO Benefits callout */}
      <div className="mt-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20">
        <h3 className="text-lg font-semibold text-gray-100 mb-2">
          🎯 Answer Engine Optimization Benefits
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
            <span>Featured position in AI-powered search results</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
            <span>
              High-quality backlinks from authoritative sources like Reddit
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
            <span>
              Increased brand visibility and trust through social proof
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
            <span>Direct traffic from cited sources and references</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
