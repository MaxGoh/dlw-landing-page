"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function WhyReddit() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("why-reddit-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-reddit-section" className="pt-12 pb-20 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-8">
            <span className="inline-block">Why social</span>{" "}
            <span className="inline-block">listen on</span>{" "}
            <span className="inline-flex items-center gap-2">
              <span style={{ color: "#FF5700" }}>Reddit</span>
              <Image
                src="/reddit.svg"
                alt="Reddit logo"
                width={56}
                height={56}
                className="w-12 h-12 lg:w-14 lg:h-14 inline-block bg-transparent"
              />
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-secondary/80 leading-relaxed max-w-3xl mx-auto">
            Reddit has <span className="font-bold text-primary">1.2B</span>{" "}
            monthly active users, with over{" "}
            <span className="font-bold text-primary">50M</span> posts being
            published monthly. Within these threads contains gold mines of
            conversations, insights, feedback and opportunities for engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
