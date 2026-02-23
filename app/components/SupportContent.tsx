"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

interface FAQCategory {
  title: string;
  icon: string;
  items: FAQItem[];
}

export default function SupportContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const categories: FAQCategory[] = [
    {
      title: "Product",
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/support/product.svg",
      items: [
        {
          question: "Software cannnot working?",
          answer: "Please provide the order number and tell us the details of the product not working including error prompts and product screenshots. our technicians will help you.",
        },
        {
          question: "Software cannot download video/audio?",
          answer: (
            <ol className="list-decimal pl-5">
              <li>Make sure the network environment works normally.</li>
              <li>Check the URL you copied from online video address is right.</li>
              <li>Make sure the video is not protected and the website of this video is supported by our software.</li>
              <li>Click the menu, got to Help&gt;Open Log Folder, then it will automatically open the log file. Please compress the Log folder and send to us.</li>
            </ol>
          ),
        },
        {
          question: "How to download video/audio without converting?",
          answer: 'Please update to the latest version and choose the Downloading Tab on main interface, then select the output format as "Original Video/Original Audio" in the upper right corner.',
        },
      ],
    },
    {
      title: "License",
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/support/license.svg",
      items: [
        {
          question: "What's the difference between the trial and the full version?",
          answer: "Trial version is limited to some features. After you purchase the program, you will be provided the license code which will unlock the limitation.",
        },
        {
          question: "Can I use one license on multiple computers?",
          answer: "One license of our software can be used on one PC/Mac only. If you want to use it on multiple computers, you can purchase a Family License, which can support 2-5 Pcs/2-5 Macs. If you have commercial use, please feel free to contact us.",
        },
        {
          question: "What if I lost the license code?",
          answer: "If you lost your license code, please do not worry. you can request your original license at this page by yourself.",
        },
      ],
    },
    {
      title: "Payment & Refund",
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/support/payment.svg",
      items: [
        {
          question: "What payment method do you accept?",
          answer: "We accept Credit Card.",
        },
        {
          question: "Is it safe to purchase product via your website?",
          answer: "Yes, it is 100% secure. The Payment platform we utilize is Stripe, which are the most trusted ecommerce companies in the world. The order of your private information, such as credit card number, addresses and so on will never be disclosed without your specific permission.",
        },
        {
          question: "What is your refund policy?",
          answer: "iDownerGo offers a 30-day money back guarantee. If your software does not work properly or there are errors while running, and the problem cannot be solved within an acceptable time, we offer a 30-day money-back guarantee.",
        },
      ],
    },
    {
      title: "Other FAQ",
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/support/other.svg",
      items: [
        {
          question: "How to change the automatic subscription?",
          answer: "Please provide your order information. Once we receive it, we will modify it to manual subscription for you.",
        },
      ],
    },
  ];

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

  return (
    <section className="pt-20 bg-white">
      <div className="container mx-auto max-w-[1310px] px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Welcome to <span className="text-[#7A32FD]">Support</span> Center
        </h1>
        <p className="text-xl text-center text-gray-700 mb-20">
          Our support specialists are here to help.
        </p>

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
            placeholder="Search for keywords..."
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
          {categories.map((category, categoryIndex) => (
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
