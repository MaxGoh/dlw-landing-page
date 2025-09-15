"use client";

import { useState, useEffect } from "react";
import { Send, Bot } from "lucide-react";

interface RedditReplyProps {
  isVisible?: boolean;
  autoStart?: boolean;
  onComplete?: () => void;
}

export function RedditReply({
  isVisible = true,
  autoStart = true,
  onComplete
}: RedditReplyProps) {
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showReply, setShowReply] = useState(false);

  const fullResponse = `That's a great observation! I've been working with B2B companies on this exact challenge.

What we've found is that authentic engagement in these communities is key - not just monitoring, but actually contributing value. We built a lightweight tool that helps track industry conversations across Reddit while suggesting genuinely helpful responses based on your expertise.

The real magic is in understanding context and timing. Would love to hear more about your specific use case - what industry subreddits have you found most valuable?`;

  useEffect(() => {
    if (autoStart && isVisible) {
      // Show reply box with animation
      const showTimer = setTimeout(() => {
        setShowReply(true);
      }, 500);

      // Start typing after reply box slides in
      const startTimer = setTimeout(() => {
        setIsTyping(true);
      }, 1200);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(startTimer);
      };
    }
  }, [autoStart, isVisible]);

  useEffect(() => {
    if (isTyping && typedText.length < fullResponse.length) {
      const typingSpeed = Math.random() * 30 + 20; // Variable typing speed for more natural effect
      const timer = setTimeout(() => {
        setTypedText(fullResponse.slice(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else if (typedText.length === fullResponse.length && isTyping) {
      setIsTyping(false);
      setIsComplete(true);
      setShowCursor(false);
      if (onComplete) {
        onComplete();
      }
    }
  }, [typedText, isTyping, fullResponse, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (isTyping || !isComplete) {
      const cursorTimer = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => clearInterval(cursorTimer);
    }
  }, [isTyping, isComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`mt-4 transition-all duration-700 ease-out transform ${showReply
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95"
        }`}
      style={{
        transitionDelay: showReply ? "0ms" : "0ms",
      }}
    >
      <div className={`bg-white rounded-lg border shadow-sm overflow-hidden transition-all duration-500 ${isTyping
          ? "border-blue-300 shadow-lg shadow-blue-100/50"
          : isComplete
            ? "border-green-300 shadow-md shadow-green-100/30"
            : "border-gray-200"
        }`}>
        {/* Reply Header */}
        <div className={`px-4 py-3 border-b transition-all duration-500 ${isTyping
            ? "bg-gradient-to-r from-blue-50 to-sky-50 border-blue-200"
            : isComplete
              ? "bg-gradient-to-r from-green-50 to-blue-50 border-green-200"
              : "bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200"
          }`}>
          <div className="flex items-center gap-2">
            <Bot className={`w-4 h-4 transition-all duration-300 ${isTyping ? "text-blue-600" : isComplete ? "text-green-600" : "text-gray-600"
              }`} />
            {isTyping && (
              <span className="text-xs text-blue-600 ml-auto flex items-center gap-1">
                <span className="inline-block w-1 h-1 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="inline-block w-1 h-1 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="inline-block w-1 h-1 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                <span>Drafting response</span>
              </span>
            )}
            {isComplete && (
              <span className="text-xs text-green-600 ml-auto animate-fade-in flex items-center gap-1">
                <svg className="w-4 h-4 animate-scale-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ready to send
              </span>
            )}
          </div>
        </div>

        {/* Reply Text Area */}
        <div className="p-4">
          <div className="min-h-[120px] text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
            {typedText}
            {(isTyping || (!isComplete && showCursor)) && (
              <span className="inline-block w-0.5 h-4 bg-blue-600 ml-0.5 animate-pulse" />
            )}
          </div>
        </div>

        {/* Reply Actions */}
        <div className={`px-4 py-3 border-t flex items-center justify-between transition-all duration-500 ${isComplete
            ? "bg-gradient-to-r from-green-50 to-blue-50 border-green-200"
            : "bg-gray-50 border-gray-200"
          }`}>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {isTyping && (
              <span className="animate-pulse">AI analyzing context...</span>
            )}
            {isComplete && (
              <span className="text-green-600 font-medium animate-fade-in">
                ✨ Personalized response ready
              </span>
            )}
            {!isTyping && !isComplete && (
              <span>Personalized based on your company profile</span>
            )}
          </div>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all transform ${isComplete
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-700"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            disabled={!isComplete}
          >
            <Send className={`transition-transform ${isComplete ? "animate-slide-right" : ""} w-3 h-3`} />
            Post Reply
          </button>
        </div>
      </div>
    </div>
  );
}