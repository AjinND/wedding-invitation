"use client";

import React, { useEffect, useState } from "react";
import FinalSection from "./components/FinalSection";
import ReceptionSection from "./components/ReceptionSection";
import BigDaySection from "./components/BigDaySection";
import PhotoSection from "./components/PhotoSection";
import StorySection from "./components/StorySection";

// Hero Component with Names and Date
const HeroSection = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/main_page_background.png')", // Replace with your background image path
      }}
    >
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant-garamond-regular text-[#8B4513] mb-4">
          ANNS DAVIS
        </h1>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#8B4513] font-gistesy italic mb-4">
          weds
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant-garamond-regular text-[#8B4513] mb-16">
          DENCY LAZER
        </h1>
        <div className="space-y-2 font-cormorant-garamond-regular text-[#8B4513]">
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl italic">May 26, 2025</p>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl italic">
            St. Mary&apos;s Church, Peramangalam
          </p>
        </div>
      </div>
    </div>
  );
};

// Countdown Component
const CountdownTimer = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = () => {
    const difference = new Date("2025-05-26").getTime() - new Date().getTime();
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Don't render anything until after client-side hydration
  if (!mounted) {
    return (
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4"
        style={{
          backgroundImage: "url('/countdown_background.png')",
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-gistesy text-[#E6A19A] mb-16">
          Countdown Starts
        </h2>
        <div className="grid grid-cols-2 gap-8 max-w-4xl sm:flex sm:flex-wrap sm:justify-center">
          {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
            <div
              key={label}
              className="relative flex items-center justify-center"
              style={{
                backgroundImage: "url('/border.png')",
              }}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: "url('/border.png')",
                }}>
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-gistesy text-[#C4A484]">
                      00
                    </div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl font-gistesy text-[#C4A484]">
                      {label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: "url('/countdown_background.png')",
      }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-gistesy text-[#E6A19A] mb-16">
        Countdown Starts
      </h2>
      <div className="grid grid-cols-2 gap-8 max-w-4xl sm:flex sm:flex-wrap sm:justify-center">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="relative flex items-center justify-center"
            style={{
              backgroundImage: "url('/border.png')",
            }}
          >
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: "url('/border.png')",
              }}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-gistesy text-[#C4A484]">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl font-gistesy text-[#C4A484]">
                    {label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// Main Page Component
const WeddingPage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <PhotoSection />
      <CountdownTimer />
      <StorySection />
      <BigDaySection />
      <ReceptionSection />
      <FinalSection />
    </div>
  );
};

export default WeddingPage;
