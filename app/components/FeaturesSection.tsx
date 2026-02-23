"use client";

import { useState } from "react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  points: string[];
  image: string;
  buttonText: string;
}

const features: Feature[] = [
  {
    id: 0,
    title: "Download Any Videos Up to 8K Resolutions",
    description: "Download HD Video",
    icon: "🎬",
    points: [
      "Download 1080p videos online from 10,000+ pupular streaming sites easily.",
      "Save any videos in various resolutions, like 720p HD, 1080p FHD, and even 4K/8K UHD.",
      "Download private videos from Facebook, Instagram, Vimeo, YouTube, etc.",
    ],
    image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/download-hd-video.png",
    buttonText: "Free Download",
  },
  {
    id: 1,
    title: "Unlock Your Music Freedom with This Music Converter",
    description: "Download HQ Music",
    icon: "🎵",
    points: [
      "Supports music downloading from multiple streaming music platforms, including Spotify, Apple Music, Tidal, Deezer, SoundCloud, etc.",
      "Download songs, albums, playlists, podcasts, audiobooks, radio up to 320kbps.",
      "Retain ID3 tags information, including title, artists, Track ID, and album artwork.",
    ],
    image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/download-hq-music.png",
    buttonText: "Free Download",
  },
  {
    id: 2,
    title: "Enjoy More Visual and Audio Experience",
    description: "Download Playlists",
    icon: "📋",
    points: [
      "Support downloading playlists from YouTube, Bilibili, Dailymotion, etc.",
      "Download playlists, channels, albums, artists and more to your computer, save you lots of time.",
      "Bulk download multiple videos at the same time with one click.",
    ],
    image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/download-playlists.png",
    buttonText: "Free Download",
  },
  {
    id: 3,
    title: "Enjoy Video and Music on Multiple Devices",
    description: "Convert Any Video",
    icon: "🔄",
    points: [
      "Convert videos to any desired video format, like MP4, MOV, AVI, MKV, etc.",
      "Save your favorite music in MP3, AAC, M4A and more, so you can play the songs on any devices.",
      "Supports getting audio from Facebook, Dailymotion, YouTube, Vimeo, Bilibili, TikTok, or any other video website you like.",
    ],
    image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/convert-any-video.png",
    buttonText: "Free Download",
  },
  {
    id: 4,
    title: "Download Live Stream Videos in Real Time",
    description: "Download Livestream",
    icon: "📡",
    points: [
      "Download livestream videos from Twitch, Vimeo, YouTube, Facebook, TikTok, Stripchat and other well-known websites.",
      "Save live streams in real time so you can play them offline at any time you want without lags or buffering issues.",
    ],
    image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/download-livestream.png",
    buttonText: "Free Download",
  },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto max-w-[1310px] px-4">
        {/* Section Title */}
        <h2 className="text-[1.25rem] md:text-[1.75rem] xl:text-[2.5rem] font-bold text-center text-[#333333] leading-tight">
          The Best HD Video Downloader and Music Converter
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:flex mt-12 xl:mt-15">
          {/* Left Content Box */}
          <div className="flex-[2] bg-[#EFEDFF] rounded-[20px] pl-10 pt-10 relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute top-[-175px] right-[-95px] w-[242px] h-[312px] bg-pink-200 rounded-full blur-[37px] opacity-60"></div>

            <h3 className="text-[2.1875rem] leading-[2.5rem] font-bold text-[#333333] max-w-[535px] relative z-10">
              <span className="bg-gradient-to-b from-transparent from-50% to-pink-300 to-50% bg-clip-text">
                {features[activeFeature].title.split(" ").slice(0, 3).join(" ")}
              </span>{" "}
              {features[activeFeature].title.split(" ").slice(3).join(" ")}
            </h3>

            <div className="flex mt-5 justify-between pr-10">
              <div className="flex-1 text-[1.125rem] leading-[1.75rem]">
                <ul>
                  {features[activeFeature].points.map((point, idx) => (
                    <li key={idx} className={`flex items-baseline ${idx > 0 ? "mt-2.5" : ""}`}>
                      <span className="mr-2.5 text-purple-600 text-xs flex-shrink-0">▶</span>
                      <p className="text-[#333333]">{point}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 mb-10">
                  <button className="h-[4.125rem] px-6 flex bg-[#AC32FF] hover:bg-[#9E1EF6] text-white justify-center items-center rounded-[10px] transition-colors">
                    <svg className="w-8 h-8 mr-2" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M26 2H6C3.79 2 2 3.79 2 6v20c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm-11 22l-7-5 7-5v10zm9 0l-7-5 7-5v10z" />
                    </svg>
                    <span className="font-bold text-[1.5rem] leading-[1.5rem]">
                      {features[activeFeature].buttonText}
                    </span>
                  </button>
                </div>
              </div>

              {/* Feature Image */}
              <div className="flex items-end">
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].description}
                  width="440"
                  className="-mb-8 max-w-[440px]"
                />
              </div>
            </div>
          </div>

          {/* Vertical Progress Bar */}
          <div className="flex flex-col justify-between mx-7 h-[470px]">
            {features.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 rounded-lg transition-all ${
                  idx === activeFeature
                    ? "h-[94px] bg-[#AC32FF]"
                    : "h-[94px] bg-[#F2CFFF]"
                }`}
              ></div>
            ))}
          </div>

          {/* Right Navigation Buttons */}
          <div className="flex-1">
            {features.map((feature, idx) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(idx)}
                className={`w-[22rem] p-4 text-[1.375rem] leading-[2rem] flex items-center cursor-pointer rounded-[10px] transition-all ${
                  idx > 0 ? "mt-[1.875rem]" : ""
                } ${
                  idx === activeFeature
                    ? "bg-white text-[#AC32FF]"
                    : "bg-transparent text-[#333333] hover:bg-[#F6EAFF]"
                }`}
              >
                <span className={`text-2xl mr-2.5 ${idx === activeFeature ? "text-[#AC32FF]" : ""}`}>
                  {feature.icon}
                </span>
                <p className="font-bold">{feature.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden mt-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-lg bg-white shadow-md p-5 md:p-8 mt-5"
            >
              <h3 className="text-center mb-5 font-bold">{feature.title}</h3>
              <img
                src={feature.image}
                alt={feature.description}
                width="440"
                className="mx-auto max-w-full"
              />
              <ul className="mt-5 text-[0.875rem] leading-[1.25rem]">
                {feature.points.map((point, idx) => (
                  <li key={idx} className={`flex items-baseline ${idx > 0 ? "mt-2" : ""}`}>
                    <span className="mr-2.5 text-purple-600 text-xs flex-shrink-0">▶</span>
                    <p className="text-[#333333]">{point}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <button className="h-14 px-4 w-full flex bg-[#AC32FF] hover:bg-[#9E1EF6] text-white justify-center items-center rounded-[10px] transition-colors">
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M26 2H6C3.79 2 2 3.79 2 6v20c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm-11 22l-7-5 7-5v10zm9 0l-7-5 7-5v10z" />
                  </svg>
                  <span className="font-bold">{feature.buttonText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
