"use client";

import { useState } from "react";
import {
  MessageSquare,
  ArrowUp,
  ArrowDown,
  Share2,
  MoreHorizontal,
  Info,
} from "lucide-react";

interface RedditPostProps {
  subreddit: string;
  author?: string;
  timeAgo: string;
  title: string;
  content: string;
  upvotes: number;
  comments: number;
  relevanceScore?: number;
  companyRelevance?: number;
}

export function RedditPost({
  subreddit = "r/marketing",
  author = "u/user",
  timeAgo = "1d ago",
  title = "Reddit is an untapped goldmine for B2B research",
  content = "I've been lurking in industry subreddits and the insights are incredible. People share their real problems, not what they think you want to hear. Wish there was a way to systematically track these conversations...",
  upvotes = 156,
  comments = 67,
  relevanceScore = 85,
  companyRelevance = 95,
}: RedditPostProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Calculate engagement score based on various factors
  const calculateEngagementScore = () => {
    const voteWeight = Math.min((upvotes / 500) * 35, 35); // Max 35 points
    const commentWeight = Math.min((comments / 100) * 30, 30); // Max 30 points
    const relevanceWeight = (companyRelevance / 100) * 35; // Max 35 points

    return Math.round(voteWeight + commentWeight + relevanceWeight);
  };

  const engagementScore = 88; // Fixed at 88% as requested

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    if (score >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 relative">
      {/* Engagement Score Chip - Desktop only (top-right) */}
      <div className="hidden sm:block absolute top-4 right-4">
        <div className="relative">
          <button
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className={`${getScoreColor(engagementScore)} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 hover:opacity-90 transition-opacity`}
          >
            {engagementScore}% Score
            <Info className="w-3 h-3" />
          </button>

          {/* Tooltip for desktop */}
          {showTooltip && (
            <div className="absolute top-8 right-0 w-64 bg-white text-gray-900 p-4 rounded-lg shadow-2xl z-10 text-sm border border-gray-200">
              <div className="font-semibold mb-3 text-gray-900">
                Engagement Score Breakdown
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Upvotes ({upvotes})</span>
                  <span className="font-medium">
                    {Math.min(Math.round((upvotes / 500) * 35), 35)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Comments ({comments})</span>
                  <span className="font-medium">
                    {Math.min(Math.round((comments / 100) * 30), 30)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Company Relevance</span>
                  <span className="font-medium">
                    {Math.round((companyRelevance / 100) * 35)}%
                  </span>
                </div>
                <div className="border-t border-gray-200 mt-3 pt-3">
                  <div className="flex justify-between font-semibold text-green-600">
                    <span>Total Score</span>
                    <span>{engagementScore}%</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 right-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-white"></div>
            </div>
          )}
        </div>
      </div>

      {/* Post Header */}
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-600">
            {subreddit.slice(0, 3)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium hover:underline cursor-pointer">
            {subreddit}
          </span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">{author}</span>
          <span>•</span>
          <span>{timeAgo}</span>
        </div>
      </div>

      {/* Engagement Score Chip - Mobile only (below header, left-aligned) */}
      <div className="sm:hidden mb-3">
        <div className="relative inline-block">
          <button
            onClick={() => setShowTooltip(!showTooltip)}
            className={`${getScoreColor(engagementScore)} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 hover:opacity-90 transition-opacity`}
          >
            {engagementScore}% Score
            <Info className="w-3 h-3" />
          </button>

          {/* Tooltip for mobile */}
          {showTooltip && (
            <div className="absolute top-8 left-0 w-[280px] bg-white text-gray-900 p-3 rounded-lg shadow-2xl z-10 text-xs border border-gray-200">
              <div className="font-semibold mb-2 text-gray-900">
                Engagement Score Breakdown
              </div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-600">Upvotes ({upvotes})</span>
                  <span className="font-medium">
                    {Math.min(Math.round((upvotes / 500) * 35), 35)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Comments ({comments})</span>
                  <span className="font-medium">
                    {Math.min(Math.round((comments / 100) * 30), 30)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Company Relevance</span>
                  <span className="font-medium">
                    {Math.round((companyRelevance / 100) * 35)}%
                  </span>
                </div>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <div className="flex justify-between font-semibold text-green-600">
                    <span>Total Score</span>
                    <span>{engagementScore}%</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-white"></div>
            </div>
          )}
        </div>
      </div>

      {/* Post Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:pr-20">
        {title}
      </h3>

      {/* Post Content */}
      <p className="text-gray-700 mb-4 leading-relaxed">{content}</p>

      {/* Post Actions - Static, non-clickable */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
          <ArrowUp className="w-4 h-4" />
          <span className="text-sm font-medium">{upvotes}</span>
          <ArrowDown className="w-4 h-4" />
        </div>

        <div className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm font-medium">{comments}</span>
        </div>

        <div className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
          <Share2 className="w-4 h-4" />
          <span className="text-sm font-medium">Share</span>
        </div>
      </div>
    </div>
  );
}
