"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

export interface FAQCategory {
  title: string;
  icon: string;
  items: FAQItem[];
}

interface Props {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  searchPlaceholder?: string;
  categories: FAQCategory[];
}

export default function SupportContent({
  title = "Welcome to",
  titleHighlight = "Support",
  subtitle = "Our support specialists are here to help.",
  searchPlaceholder = "Search for keywords...",
  categories,
}: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleQuestion = (key: string) => {
    setOpenQuestion(openQuestion === key ? null : key);
  };

  const scrollToCategory = (index: number) => {
    setOpenCategory(index);
    setTimeout(() => {
      const element = document.getElementById(`category-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  // Filter categories by search query
  const filteredCategories = searchQuery.trim()
    ? categories
        .map((cat) => ({
          ...cat,
          items: cat.items.filter((item) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((cat) => cat.items.length > 0)
    : categories;

  return (
    <section className="pt-20 bg-white">
      <div className="container mx-auto max-w-[1310px] px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          {title} <span className="text-[#7A32FD]">{titleHighlight}</span>
        </h1>
        <p className="text-xl text-center text-gray-700 mb-20">{subtitle}</p>

        {/* Search Bar */}
        <div className="max-w-[742px] mx-auto flex items-center border-b-2 border-gray-600 pb-2.5 mb-20">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 ml-4 bg-transparent outline-none text-base h-7 text-gray-900"
          />
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => scrollToCategory(index)}
              className="bg-white rounded-[20px] border border-gray-200 pt-12 pb-8 cursor-pointer hover:shadow-[0_1px_4px_0_rgba(122,50,253,0.5)] transition-all"
            >
              <img
                src={category.icon}
                alt={category.title}
                className="w-[60px] h-[60px] mx-auto mb-12"
              />
              <div className="text-center text-xl font-bold text-gray-900">
                {category.title}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="pb-20">
          {filteredCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              id={`category-${categoryIndex}`}
              className="border-2 border-gray-200 rounded-lg mb-5"
            >
              {/* Category Header */}
              <div
                onClick={() => toggleCategory(categoryIndex)}
                className="flex justify-between items-center py-9 px-6 cursor-pointer"
              >
                <span className="text-xl font-bold text-gray-900">
                  {category.title}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-[#7A32FD] transition-transform ${
                    openCategory === categoryIndex ? "rotate-180" : ""
                  }`}
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>

              {/* Category Content */}
              {openCategory === categoryIndex && (
                <div className="px-10 pb-10">
                  {category.items.map((item, itemIndex) => {
                    const questionKey = `${categoryIndex}-${itemIndex}`;
                    const isOpen = openQuestion === questionKey;

                    return (
                      <div
                        key={itemIndex}
                        className={`border-2 border-[#DFD6F0] rounded-lg ${
                          itemIndex > 0 ? "mt-10" : ""
                        }`}
                      >
                        {/* Question */}
                        <div
                          onClick={() => toggleQuestion(questionKey)}
                          className="flex justify-between items-center py-7 px-5 cursor-pointer"
                        >
                          <span className="text-lg font-bold text-gray-900">
                            {item.question}
                          </span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`text-[#7A32FD] transition-transform flex-shrink-0 ml-4 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            <path d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>

                        {/* Answer */}
                        {isOpen && (
                          <div className="px-5 pb-7 -mt-5 text-gray-600 text-base">
                            <div className="mt-3">{item.answer}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
