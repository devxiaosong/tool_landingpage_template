"use client";

import { useState } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function StepsSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    {
      id: 1,
      title: "Step 1: Paste URL",
      description: "Copy and paste the video URL from the website into iDownerGo.",
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/step-1.png",
    },
    {
      id: 2,
      title: "Step 2: Choose Format",
      description: "Select your preferred video quality and format (MP4, MP3, etc.).",
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/step-2.png",
    },
    {
      id: 3,
      title: "Step 3: Download",
      description: "Click the download button and your video will be saved to your device.",
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/step-3.png",
    },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-16 md:py-24 bg-[#1a1a2e] text-white overflow-hidden">
      <div className="container mx-auto max-w-[1310px] px-4">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight">
            3 Easy Steps to Download Video
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevStep}
            className="absolute left-0 md:left-8 z-10 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg"
            aria-label="Previous step"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="flex-1 max-w-[900px] mx-auto px-16 md:px-24">
            {/* Screenshot/Image */}
            <div className="relative">
              <div className="relative border-4 border-purple-500 rounded-2xl overflow-hidden shadow-2xl bg-[#2a2a3e]">
                <img
                  src={steps[currentStep].image}
                  alt={steps[currentStep].title}
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback placeholder if image fails to load
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'%3E%3Crect fill='%232a2a3e' width='1200' height='600'/%3E%3Ctext fill='%23ffffff' font-family='Arial' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E" + steps[currentStep].title + "%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>

            {/* Step Info */}
            <div className="mt-8 text-center">
              <h3 className="text-[24px] md:text-[28px] font-bold mb-3">
                {steps[currentStep].title}
              </h3>
              <p className="text-[16px] md:text-[18px] text-gray-300 max-w-[600px] mx-auto">
                {steps[currentStep].description}
              </p>
            </div>

            {/* Indicators */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`transition-all ${
                    index === currentStep
                      ? "w-12 h-3 bg-purple-500"
                      : "w-3 h-3 bg-gray-500 hover:bg-gray-400"
                  } rounded-full`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextStep}
            className="absolute right-0 md:right-8 z-10 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg"
            aria-label="Next step"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
