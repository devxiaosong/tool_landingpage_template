"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const translations = {
  en: {
    guide: "Guide",
    guideHref: "/guide",
    support: "Support",
    supportHref: "/support",
    download: "DOWNLOAD",
  },
  de: {
    guide: "Leitfaden",
    guideHref: "/guide",
    support: "Support",
    supportHref: "/de/support",
    download: "HERUNTERLADEN",
  },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isGerman = pathname.startsWith("/de");
  const t = isGerman ? translations.de : translations.en;

  return (
    <header className="sticky top-0 left-0 z-50 bg-white shadow-md">
      <div className="container mx-auto max-w-[1310px] px-4 h-16 md:h-21 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center cursor-pointer">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center relative z-10">
            <span className="text-white text-xl font-bold">↓</span>
          </div>
          <span className="ml-2 text-sm md:text-[22px] font-bold text-[#333333]">
            iDownerGo
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden h-10 w-8 flex flex-col justify-center items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="hamburger-menu">
            <div className="w-[30px] h-[3px] bg-[#FA930D] rounded transition-all duration-200"></div>
            <div className="w-[30px] h-[3px] bg-[#FA930D] rounded transition-all duration-200 mt-[7.5px]"></div>
            <div className="w-[30px] h-[3px] bg-[#FA930D] rounded transition-all duration-200 mt-[7.5px]"></div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } xl:flex flex-col xl:flex-row items-start xl:items-center absolute xl:static top-16 md:top-21 left-0 w-full xl:w-auto bg-white xl:bg-transparent border-t xl:border-0 z-[99999] xl:z-0`}
        >
          {/* Guide */}
          <div className="border-b xl:border-0 w-full xl:w-auto xl:mr-12">
            <a
              href={t.guideHref}
              className="block text-lg font-medium pl-8 xl:pl-0 py-5 xl:py-0 text-[#333333] hover:text-[#FA930D] transition-colors"
            >
              {t.guide}
            </a>
          </div>

          {/* Support */}
          <div className="border-b xl:border-0 w-full xl:w-auto xl:mr-12">
            <a
              href={t.supportHref}
              className="block text-lg font-medium pl-8 xl:pl-0 py-5 xl:py-0 text-[#333333] hover:text-[#FA930D] transition-colors"
            >
              {t.support}
            </a>
          </div>

          {/* Download Button */}
          <div className="border-b xl:border-0 w-full xl:w-auto xl:mr-12">
            <div className="py-4 pl-8 xl:pl-0">
              <a
                href="/download"
                className="flex items-center w-fit text-sm font-bold rounded-md px-4 py-2.5 ml-2.5 xl:ml-0 text-white bg-[#AC32FF] hover:bg-[#9E1EF6] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6"
                >
                  <path
                    d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16Z"
                    fill="currentColor"
                  />
                  <path d="M20 18H4V20H20V18Z" fill="currentColor" />
                </svg>
                <span className="ml-2">{t.download}</span>
              </a>
            </div>
          </div>

          {/* Search Icon */}
          <div className="xl:flex items-center py-5 xl:py-0 border-b xl:border-0 w-full xl:w-auto pl-8 xl:pl-0">
            <button className="cursor-pointer text-[#666666] hover:text-[#333333] transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="w-5 h-5"
              >
                <path
                  d="M18.2335355,16.6021705 L13.5347446,11.9148681 C15.8466472,8.75651369 15.3371055,4.35066534 12.3653381,1.80337376 C9.39357068,-0.74391782 4.96162182,-0.573736514 2.19394265,2.19394265 C-0.573736514,4.96162182 -0.74391782,9.39357068 1.80337376,12.3653381 C4.35066534,15.3371055 8.75651369,15.8466472 11.9148681,13.5347446 L16.6021705,18.2335355 C16.8935858,18.5249508 17.3183328,18.6387615 17.7164135,18.5320961 C18.1144942,18.4254307 18.4254307,18.1144942 18.5320961,17.7164135 C18.6387615,17.3183328 18.5249508,16.8935858 18.2335355,16.6021705 L18.2335355,16.6021705 Z M7.51477787,12.6845967 C4.65956579,12.6845967 2.34495908,10.3699899 2.34495908,7.51477787 C2.34495908,4.65956579 4.65956579,2.34495908 7.51477787,2.34495908 C10.3699899,2.34495908 12.6845967,4.65956579 12.6845967,7.51477787 C12.6845967,10.3699899 10.3699899,12.6845967 7.51477787,12.6845967 Z"
                  fill="currentColor"
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
