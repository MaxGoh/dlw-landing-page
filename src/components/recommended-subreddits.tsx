"use client"

import { Headphones, ChevronRight } from "lucide-react"

interface SubredditData {
  name: string
  members: string
  description: string
  matchPercentage: number
}

export function RecommendedSubreddits() {
  const subreddits: SubredditData[] = [
    {
      name: "r/marketing",
      members: "2.1M members",
      description: "High discussion about lead generation tools",
      matchPercentage: 94,
    },
    {
      name: "r/entrepreneur",
      members: "1.8M members",
      description: "Active conversations about business growth",
      matchPercentage: 89,
    },
    {
      name: "r/sales",
      members: "890K members",
      description: "Frequent mentions of prospecting challenges",
      matchPercentage: 87,
    },
    {
      name: "r/startups",
      members: "1.2M members",
      description: "Regular discussions about customer acquisition",
      matchPercentage: 82,
    },
  ]

  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return "bg-blue-500 text-white"
    return "bg-gray-800 text-white"
  }

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Recommended Subreddits</h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Top communities where your customers are active
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {subreddits.map((subreddit) => (
            <div
              key={subreddit.name}
              className="border-b border-gray-100 last:border-0 pb-3 sm:pb-4 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1 space-y-1 sm:space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{subreddit.name}</h4>
                    <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full inline-block self-start sm:self-auto">
                      {subreddit.members}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{subreddit.description}</p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 sm:ml-4">
                  <div
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium ${getMatchColor(
                      subreddit.matchPercentage
                    )}`}
                  >
                    {subreddit.matchPercentage}% match
                  </div>
                  <button
                    className="p-1.5 sm:p-2 rounded-lg transition-colors group hover:bg-gray-50"
                    aria-label={`View ${subreddit.name}`}
                  >
                    <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-hover:text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}