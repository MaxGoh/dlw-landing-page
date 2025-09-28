"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { trackLinkClick } from "@/lib/analytics";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does Do Less Work find relevant Reddit conversations?",
    answer:
      "Our AI analyzes millions of Reddit posts daily, identifying conversations where users discuss problems your product solves. We use advanced natural language processing to understand context and intent, not just keywords.",
  },
  {
    question: "Will my responses look automated or spammy?",
    answer:
      "No. Our AI helps craft authentic, helpful responses that follow Reddit's culture and etiquette. Every response is customized to the specific conversation and provides genuine value before any subtle product mention.",
  },
  {
    question: "Which subreddits does Do Less Work monitor?",
    answer:
      "We automatically discover relevant subreddits based on your product and target audience. Our system continuously expands coverage as it learns where your potential customers engage most.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most users see their first qualified leads within 48 hours of setup. Building authentic relationships on Reddit is a long-term strategy, with compound benefits growing over 1-3 months.",
  },
  {
    question: "Can I customize the AI responses?",
    answer:
      "Yes, you have full control. You can set tone guidelines, approve responses before posting, or write your own. Our AI learns from your edits to better match your brand voice over time.",
  },
  {
    question: "Is this compliant with Reddit's terms of service?",
    answer:
      "Absolutely. We follow Reddit's guidelines by focusing on authentic engagement and value-first interactions. We never spam, vote manipulate, or violate any platform rules.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Do Less Work
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScNv4caC6PJxIahcUqA8hlCqFRnBoLW9uLLvEo7LG2kdramRg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-semibold hover:underline"
            onClick={() => trackLinkClick("schedule_call", "faq", true)}
          >
            Schedule a call with us
          </a>
        </div>
      </div>
    </section>
  );
}
