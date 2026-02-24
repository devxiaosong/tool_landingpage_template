"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const translations = {
  en: {
    slogan: "Make your life better",
    resources: "Resources",
    tutorials: "How-to Tutorials",
    tutorialsHref: "/how-to/",
    userGuide: "User Guide",
    userGuideHref: "/blog",
    retrieveLicense: "Retrieve License",
    retrieveLicenseHref: "/retrieve-license/",
    support: "Support",
    supportCenter: "Support Center",
    supportCenterHref: "/support/",
    aboutUs: "About Us",
    aboutUsHref: "/about-us/",
    contactUs: "Contact Us",
    contactUsHref: "/contact-us/",
    language: "Language",
    statement: "Statement",
    licenseAgreement: "License Agreement",
    termsOfUse: "Terms of Use",
    privacyPolicy: "Privacy Policy",
    refundPolicy: "Refund Policy",
    cookies: "Cookies",
    shippingPolicy: "Shipping Policy",
    copyright: "Copyright © 2026 iDownerGo Studio. All rights reserved.",
  },
  de: {
    slogan: "Mach dein Leben besser",
    resources: "Ressourcen",
    tutorials: "Anleitungen",
    tutorialsHref: "/how-to/",
    userGuide: "Benutzerhandbuch",
    userGuideHref: "/blog",
    retrieveLicense: "Lizenz abrufen",
    retrieveLicenseHref: "/retrieve-license/",
    support: "Support",
    supportCenter: "Support-Center",
    supportCenterHref: "/de/support/",
    aboutUs: "Über uns",
    aboutUsHref: "/about-us/",
    contactUs: "Kontakt",
    contactUsHref: "/contact-us/",
    language: "Sprache",
    statement: "Erklärung",
    licenseAgreement: "Lizenzvertrag",
    termsOfUse: "Nutzungsbedingungen",
    privacyPolicy: "Datenschutz",
    refundPolicy: "Rückerstattung",
    cookies: "Cookies",
    shippingPolicy: "Versandrichtlinie",
    copyright: "Copyright © 2026 iDownerGo Studio. Alle Rechte vorbehalten.",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const isGerman = pathname.startsWith("/de");
  const t = isGerman ? translations.de : translations.en;
  const currentLanguage = isGerman ? "Deutsch" : "English";

  // Detect if currently on a support page
  const isOnSupport =
    pathname === "/support" ||
    pathname === "/de/support" ||
    pathname.startsWith("/de/support/");

  const handleLanguageSelect = (code: string) => {
    setIsLanguageOpen(false);
    if (code === "en") {
      router.push(isOnSupport ? "/support" : "/");
    } else if (code === "de") {
      router.push(isOnSupport ? "/de/support" : "/de");
    }
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
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
              <h2 className="text-[30px] font-bold text-white mt-2">
                iDownerGo
              </h2>
            </a>
            <p
              className="text-lg md:text-2xl text-white mt-3 md:mt-3"
              style={{ fontFamily: "'Hurricane', cursive" }}
            >
              {t.slogan}
            </p>
          </div>

          {/* Resources */}
          <div className="w-1/2 lg:w-1/4 relative z-10 lg:text-center">
            <dl className="inline-block text-left">
              <dt className="text-xl text-white font-bold pb-2.5">
                {t.resources}
              </dt>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href={t.tutorialsHref} className="hover:underline">
                  {t.tutorials}
                </a>
              </dd>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href={t.userGuideHref} className="hover:underline">
                  {t.userGuide}
                </a>
              </dd>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href={t.retrieveLicenseHref} className="hover:underline">
                  {t.retrieveLicense}
                </a>
              </dd>
            </dl>
          </div>

          {/* Support */}
          <div className="w-1/2 lg:w-1/4 relative z-10 lg:text-center">
            <dl className="inline-block text-left">
              <dt className="text-xl text-white font-bold pb-2.5">
                {t.support}
              </dt>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href={t.supportCenterHref} className="hover:underline">
                  {t.supportCenter}
                </a>
              </dd>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href={t.aboutUsHref} className="hover:underline">
                  {t.aboutUs}
                </a>
              </dd>
              <dd className="text-sm text-white opacity-70 mt-2.5">
                <a href={t.contactUsHref} className="hover:underline">
                  {t.contactUs}
                </a>
              </dd>
            </dl>
          </div>

          {/* Language Selector */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-start lg:items-center mt-8 lg:mt-0">
            <div>
              <h3 className="text-xl text-white font-bold mb-5">{t.language}</h3>
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
                    <div className="bg-white rounded-[10px] py-2.5 shadow-lg">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.code)}
                          className={`flex items-center gap-2.5 px-3 py-1.5 hover:bg-gray-200 cursor-pointer w-full text-left text-sm ${
                            currentLanguage === lang.name
                              ? "text-[#2A6DF4] font-semibold"
                              : "text-[#061230]"
                          }`}
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
              {t.statement}
            </a>
            <span className="mx-2">|</span>
            <a href="/license-agreement/" className="hover:underline">
              {t.licenseAgreement}
            </a>
            <span className="mx-2">|</span>
            <a href="/terms-of-use/" className="hover:underline">
              {t.termsOfUse}
            </a>
            <span className="mx-2">|</span>
            <a href="/privacy-policy/" className="hover:underline">
              {t.privacyPolicy}
            </a>
            <span className="mx-2">|</span>
            <a href="/refund-policy/" className="hover:underline">
              {t.refundPolicy}
            </a>
            <span className="mx-2">|</span>
            <a href="/cookies/" className="hover:underline">
              {t.cookies}
            </a>
            <span className="mx-2">|</span>
            <a href="/shipping-policy/" className="hover:underline">
              {t.shippingPolicy}
            </a>
          </div>
        </div>
        <p className="text-sm text-white opacity-70 text-center mt-5">
          {t.copyright}
        </p>
      </div>
    </footer>
  );
}
