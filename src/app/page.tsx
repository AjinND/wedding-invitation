"use client";

import React, { useEffect, useState, memo } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import PhotoSection from "./components/PhotoSection";

// Hero Component with Names and Date
const HeroSection = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4">
      {/* Background image with Next.js Image component */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/main_page_background.png"
          alt="Wedding background"
          fill
          priority
          sizes="100vw"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          className="object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="max-w-2xl w-full text-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant-garamond-regular text-[#8B4513] mb-4">
          ANNS DAVIS
        </h1>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#8B4513] font-gistesy italic mb-4">
          weds
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant-garamond-regular text-[#8B4513] mb-16">
          DENCY LAZAR
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

// Memoized countdown item to prevent unnecessary re-renders
const CountdownItem = memo(({ label, value }: { label: string; value?: number }) => (
  <div
    className="relative flex items-center justify-center"
    style={{
      height: "11.5rem",
      width: "11.5rem",
    }}
  >
    <div
      className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/border.png')",
        height: "11.5rem",
        width: "11.5rem",
      }}
    >
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full flex items-center justify-center">
        <div className="text-center" style={{fontWeight: "bold"}}>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-gistesy text-[#C4A484]">
            {value !== undefined ? String(value).padStart(2, "0") : "00"}
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl font-gistesy text-[#C4A484]">
            {label}
          </div>
        </div>
      </div>
    </div>
  </div>
));

CountdownItem.displayName = 'CountdownItem';

const CountdownTimer = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = () => {
    // Set the target date to May 26th, 2025 at 11:30 AM
    const targetDate = new Date("2025-05-26T11:30:00");
    const now = new Date();
    
    // Calculate difference in milliseconds
    const difference = targetDate.getTime() - now.getTime();
    
    // If the target date has passed or reached, return all zeros
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    
    // Otherwise calculate remaining time
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
    
    // Update every second, but only if component is mounted
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // If all values are 0, clear the interval to stop the countdown
      if (Object.values(newTimeLeft).every(value => value === 0)) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Prepare countdown items
  const countdownItems = [
    { label: "Days", value: mounted ? timeLeft.days : undefined },
    { label: "Hours", value: mounted ? timeLeft.hours : undefined },
    { label: "Minutes", value: mounted ? timeLeft.minutes : undefined },
    { label: "Seconds", value: mounted ? timeLeft.seconds : undefined },
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: "url('/countdown_background.png')",
      }}
    >
      <h2 className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-gistesy text-[#E6A19A] mb-16">
        Countdown Starts
      </h2>
      <div className="grid grid-cols-2 gap-8 max-w-4xl sm:flex sm:flex-wrap sm:justify-center">
        {countdownItems.map(({ label, value }) => (
          <CountdownItem key={label} label={label} value={value} />
        ))}
      </div>
    </div>
  );
};


// Main Page Component with lazy loading for below-the-fold sections

// Dynamically import components that are below the fold
const DynamicCoupleDetailsSection = dynamic(() => import('./components/CoupleDetailsSection'), {
  loading: () => <div className="min-h-screen w-full bg-[#FDF8F5] flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 h-96 w-full max-w-4xl rounded"></div>
  </div>
});

const DynamicStorySection = dynamic(() => import('./components/StorySection'), {
  loading: () => <div className="min-h-screen w-full bg-[#FDF8F5]"></div>
});

const DynamicBigDaySection = dynamic(() => import('./components/BigDaySection'), {
  loading: () => <div className="min-h-screen w-full bg-[#FDF8F5]"></div>
});

const DynamicReceptionSection = dynamic(() => import('./components/ReceptionSection'), {
  loading: () => <div className="min-h-screen w-full bg-[#FDF8F5]"></div>
});

const DynamicFinalSection = dynamic(() => import('./components/FinalSection'), {
  loading: () => <div className="min-h-screen w-full bg-[#FDF8F5]"></div>
});

const WeddingPage = () => {
  return (
    <div className="w-full">
      {/* Critical above-the-fold content loaded immediately */}
      <HeroSection />
      <PhotoSection />
      <CountdownTimer />
      
      {/* Below-the-fold content loaded lazily */}
      <DynamicCoupleDetailsSection />
      <DynamicStorySection />
      <DynamicBigDaySection />
      <DynamicReceptionSection />
      <DynamicFinalSection />
    </div>
  );
};

export default WeddingPage;
