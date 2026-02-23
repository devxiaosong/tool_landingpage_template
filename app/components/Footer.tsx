"use client";

import { useState } from "react";

export default function Footer() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ko", name: "한국인", flag: "🇰🇷" },
    { code: "zh-cn", name: "中文简体", flag: "🇨🇳" },
    { code: "zh-tw", name: "繁體中文", flag: "🇹🇼" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  return (
    <footer className="bg-black text-white pt-12 md:pt-15">
      <div className="container mx-auto max-w-[1310px] px-4 pb-12 md:pb-12.5">
        <div className="flex flex-wrap">
          {/* Logo & Slogan */}
          <div className="w-full md:w-1/2 lg:w-1/4 relative z-10 flex flex-col items-start md:items-center mb-8 lg:mb-0">
            <img
              src="https://idownergo.com/wp-content/themes/idownergo/assets/img/logo/iDownerGo.svg"
              alt="iDownerGo"
              className="w-15 h-15"
            />
            <a href="/">
              <h2 className="text-[30px] font-bold text-white mt-2">iDownerGo</h2>
            </a>
            <p
              className="text-lg md:text-2xl text-white mt-3 md:mt-3"
              style={{ fontFamily: "'Hurricane', cursive" }}
            >
              Make your life better
            </p>
          </div>

          {/* Resources */}
          <div className="w-1/2 lg:w-1/4 relative z-10 lg:text-center">
            <dl className="inline-block text-left">
              <dt className="text-xl text-white font-bold pb-2.5">Resources</dt>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href="/how-to/" className="hover:underline">
                  How-to Tutorials
                </a>
              </dd>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href="/blog" className="hover:underline">
                  User Guide
                </a>
              </dd>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href="/retrieve-license/" className="hover:underline">
                  Retrieve License
                </a>
              </dd>
            </dl>
          </div>

          {/* Support */}
          <div className="w-1/2 lg:w-1/4 relative z-10 lg:text-center">
            <dl className="inline-block text-left">
              <dt className="text-xl text-white font-bold pb-2.5">Support</dt>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href="/support/" className="hover:underline">
                  Support Center
                </a>
              </dd>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href="/about-us/" className="hover:underline">
                  About Us
                </a>
              </dd>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href="/contact-us/" className="hover:underline">
                  Contact Us
                </a>
              </dd>
            </dl>
          </div>

          {/* Language Selector */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-start lg:items-center mt-8 lg:mt-0">
            <div>
              <h3 className="text-xl text-white font-bold mb-5">Language</h3>
              <div className="relative inline-block">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="relative flex items-center w-40 md:w-55 h-9.5 bg-white/40 rounded-[18px] cursor-pointer px-5 text-white"
                >
                  <span className="text-base">{currentLanguage}</span>
                  <svg
                    className={`absolute right-5 w-4 h-4 transition-transform ${
                      isLanguageOpen ? "rotate-180" : ""
                    }`}
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.996,9.69308475 L2.15274576,3.84983051 C1.72020339,3.41728814 1.02813559,3.41728814 0.59559322,3.84983051 C0.163050847,4.28237288 0.163050847,4.97444068 0.59559322,5.40698305 L7.06013559,11.8715254 C7.09945763,11.9344407 7.14664407,11.9894915 7.20169492,12.0445424 C7.42189831,12.2647458 7.70501695,12.3748475 7.996,12.3669831 C8.27911864,12.3669831 8.57010169,12.2647458 8.79030508,12.0445424 C8.84535593,11.9894915 8.89254237,11.9344407 8.93186441,11.8715254 L15.3964068,5.40698305 C15.6087458,5.19464407 15.7188475,4.91152542 15.7188475,4.62840678 C15.7188475,4.34528814 15.6087458,4.06216949 15.3964068,3.84983051 C14.9638644,3.41728814 14.2717966,3.41728814 13.8392542,3.84983051 L7.996,9.69308475 Z" />
                  </svg>
                </button>

                {/* Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-10">
                    <div className="bg-white rounded-[10px] py-2.5 shadow-lg max-h-[300px] overflow-y-auto">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLanguage(lang.name);
                            setIsLanguageOpen(false);
                          }}
                          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-gray-200 cursor-pointer w-full text-left text-sm text-[#061230]"
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-white opacity-20" />

      {/* Bottom Section */}
      <div className="container mx-auto max-w-[1310px] px-4 py-7.5 md:pt-5 md:pb-3">
        <div className="flex text-sm text-white opacity-70 flex-wrap justify-center">
          <div className="flex flex-wrap justify-center">
            <a href="/statement/" className="hover:underline">
              Statement
            </a>
            <span className="mx-2">|</span>
            <a href="/license-agreement/" className="hover:underline">
              License Agreement
            </a>
            <span className="mx-2">|</span>
            <a href="/terms-of-use/" className="hover:underline">
              Terms of Use
            </a>
            <span className="mx-2">|</span>
            <a href="/privacy-policy/" className="hover:underline">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="/refund-policy/" className="hover:underline">
              Refund Policy
            </a>
            <span className="mx-2">|</span>
            <a href="/cookies/" className="hover:underline">
              Cookies
            </a>
            <span className="mx-2">|</span>
            <a href="/shipping-policy/" className="hover:underline">
              Shipping Policy
            </a>
          </div>
        </div>
        <p className="text-sm text-white opacity-70 text-center mt-5">
          Copyright © 2026 iDownerGo Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
