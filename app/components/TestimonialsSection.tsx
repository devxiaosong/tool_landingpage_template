"use client";

import { useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  mainTitle: string;
  testimonials: Testimonial[];
  quotationMarksIcon?: string;
  quotationMarksAlt?: string;
  ratingIcon?: string;
  ratingAlt?: string;
  arrowIcon?: string;
  arrowAlt?: string;
  backgroundColor?: string;
  defaultSlide?: number;
}

export default function TestimonialsSection({
  mainTitle,
  testimonials,
  quotationMarksIcon = "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/quotation-marks-icon.svg",
  quotationMarksAlt = "quotation marks icon",
  ratingIcon = "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/five-star.svg",
  ratingAlt = "five star",
  arrowIcon = "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/white-arrow.svg",
  arrowAlt = "arrow",
  backgroundColor = "linear-gradient(180deg, #F4FCFF 0%, #F5FBFF 100%)",
  defaultSlide = 0
}: TestimonialsSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      className="py-10 md:py-20"
      style={{ background: backgroundColor }}
    >
      <div className="container max-w-[1310px] mx-auto px-4">
        {/* 标题和导航 */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h2 className="font-bold text-[1.5rem]/[2rem] lg:text-[2.5rem]/[3rem] text-black lg:flex-1 text-center lg:text-left">
            {mainTitle}
          </h2>

          {/* 导航箭头 */}
          <div className="lg:flex-1 flex items-center justify-end mt-5 lg:mt-0">
            <button 
              onClick={handlePrev}
              className="w-[60px] h-[60px] mr-2.5 lg:mr-5 cursor-pointer bg-contain bg-no-repeat"
              style={{ backgroundImage: `url('${arrowIcon}')` }}
              aria-label={`Previous ${arrowAlt}`}
            />
            <button 
              onClick={handleNext}
              className="w-[60px] h-[60px] ml-2.5 lg:ml-5 cursor-pointer bg-contain bg-no-repeat transform rotate-180"
              style={{ backgroundImage: `url('${arrowIcon}')` }}
              aria-label={`Next ${arrowAlt}`}
            />
          </div>
        </div>

        {/* 评价卡片轮播 */}
        <div className="mt-5 lg:mt-15 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="min-w-full lg:min-w-[calc(50%-20px)] lg:max-w-[calc(50%-20px)] lg:mr-10 px-2"
              >
                <div className="bg-white shadow-[0px_1px_6px_0px_rgba(166,196,216,0.5)] rounded-[20px] py-5 lg:py-7.5 px-6 lg:px-10 h-full flex flex-col justify-between">
                  {/* 评价内容 */}
                  <div>
                    <img 
                      width="60" 
                      height="60" 
                      src={quotationMarksIcon} 
                      alt={quotationMarksAlt}
                    />
                    <p className="mt-3 lg:mt-5 lg:text-lg text-[#292929]">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* 用户信息 */}
                  <div className="mt-5 lg:mt-7.5 border-t border-[#D8D8D8] pt-5 lg:pt-7.5 flex items-center">
                    <img 
                      width="54" 
                      height="54" 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                    />
                    <div className="ml-3 lg:ml-5">
                      <p className="lg:text-lg text-[#292929] lg:mb-2">
                        {testimonial.name}
                      </p>
                      <img 
                        width="168" 
                        height="24" 
                        src={ratingIcon} 
                        alt={ratingAlt}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 移动端指示器（可选） */}
        <div className="flex justify-center mt-5 lg:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full mx-1 transition-all ${
                currentSlide === index ? "bg-[#4EACEA] w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
