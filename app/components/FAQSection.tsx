"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Q1. Does iDownerGo OnlyFans Downloader have a free trial?",
      answer: "Yes, you can have 1 free download to test the app after you install iDownerGo OnlyFans Video on your computer."
    },
    {
      question: "Q2. Can I download OnlyFans videos without a subscription to OnlyFans?",
      answer: "No, you cannot download OnlyFans videos without an active OnlyFans subscription."
    },
    {
      question: "Q3. Is it legal & safe to use iDownerGo OnlyFans Downloader?",
      answer: "Yes, iDownerGo OnlyFans Downloader is legal for only personal use, and it's secured with a built-in browser without storing use data."
    },
    {
      question: "Q4. Can I watch downloaded OnlyFans videos on other devices?",
      answer: "Yes, you can download OnlyFans videos in MP4 or MKV formats, which can be playable on most devices (phones, PCs, tablets)."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section>
      <div className="container max-w-[1310px] mx-auto px-4 py-10 md:py-20">
        {/* 标题 */}
        <h2 className="text-center text-[1.5rem]/[1.75rem] lg:text-[2.5rem]/[3rem] font-bold text-black">
          Frequently Asked Questions
        </h2>

        {/* FAQ 列表 */}
        <div className="space-y-4 mt-8 lg:mt-15">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#F9F9F9] rounded-[10px]"
            >
              {/* 问题标题 */}
              <div 
                className="p-5 flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span 
                  className={`lg:text-lg font-bold ${
                    openIndex === index ? "text-[#4EACEA]" : "text-[#333333]"
                  }`}
                >
                  {faq.question}
                </span>
                
                {/* 展开/折叠图标 */}
                <div 
                  className={`ml-2.5 w-5 h-5 bg-no-repeat bg-center bg-contain transition-transform ${
                    openIndex === index ? "rotate-0" : "rotate-0"
                  }`}
                  style={{
                    backgroundImage: openIndex === index
                      ? "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/close-icon.svg')"
                      : "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/expand-icon.svg')"
                  }}
                />
              </div>

              {/* 答案内容 */}
              {openIndex === index && (
                <div className="px-8 pb-6 -mt-2 relative z-1 text-[#292929] text-sm lg:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
