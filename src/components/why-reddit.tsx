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
      <div className="max-w-6xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-8">
            <span className="inline-block">Grow</span>{" "}
            <span className="inline-block">your business on</span>{" "}
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
            published monthly. 8X your brand awareness by being involved in the right discussion,
            at the right time.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-4xl font-bold text-primary">
                215M
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Reddit has millions of ads-addressable visitors in the US monthly.<sup>1</sup>
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-4xl font-bold text-primary">
                +46%
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                More likely to trust brands that advertise on Reddit.<sup>2</sup>
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-4xl font-bold text-primary">
                1.7x
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Higher brand association to ensure consumers think of your brand first.<sup>3</sup>
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-4xl font-bold text-primary">
                +12%
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Brand favorability lift to improve your favor amongst consumers.<sup>4</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
