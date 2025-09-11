"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Wand2, CalendarDays } from "lucide-react"

export function Analysis() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById("analysis-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="analysis-section" className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Purple gradient background container with rounded corners */}
        <div 
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-400 via-purple-300 to-purple-200 px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 transition-all duration-1000 transform ${
            isVisible 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-90"
          }`}
          style={{
            transformOrigin: "center center",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - placeholder for image */}
            <div className="hidden lg:block">
              {/* Placeholder for the scheduling interface image */}
            </div>

            {/* Right side - content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-purple-900 uppercase tracking-wider">
                    ANALYSIS
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  The most complete set of publishing integrations, ever
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Schedule your content to the most popular platforms including Facebook, Instagram, TikTok, LinkedIn, Threads, Bluesky, YouTube Shorts, Pinterest, Google Business, Mastodon and X.
                </p>

                <Button
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Feature list */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-purple-900 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Auto-publish your content or get a notification when it's time to post
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Wand2 className="w-5 h-5 text-purple-900 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Magically customize and repurpose your post for each platform
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CalendarDays className="w-5 h-5 text-purple-900 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    See everything you have scheduled in a calendar or queue view
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
