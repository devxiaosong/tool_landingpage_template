"use client";

import { useState } from "react";

export default function HowToUseGuideSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/select-onlyfans-downloader.png",
      imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/select-onlyfans-downloader.webp",
      title: "Select the iDownerGo OnlyFans Downloader.",
      description: "Double click iDownerGo and then enter onlyfans.com via its built-in browser."
    },
    {
      id: 1,
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/play-onlyfans-video.png",
      imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/play-onlyfans-video.webp",
      title: "Play OnlyFans video in iDownerGo.",
      description: "Sign in to the OnlyFans website using your subscription account, and play the video you want to download."
    },
    {
      id: 2,
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/save-onlyfans-video.png",
      imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/save-onlyfans-video.webp",
      title: "Start to download videos on OnlyFans.",
      description: "Click on the Download button to start downloading the video being played."
    }
  ];

  return (
    <section className="bg-white">
      <div className="container max-w-[1310px] mx-auto px-4 py-10 lg:py-20">
        {/* 标题 */}
        <h2 className="text-center text-2xl md:text-[2.5rem] md:leading-[3rem] font-bold text-black">
          How to use iDownerGo OnlyFans Downloader?
        </h2>

        {/* 内容区域 */}
        <div className="flex flex-col lg:flex-row items-center mt-5 lg:mt-12.5">
          {/* 左侧图片轮播 */}
          <div className="w-full lg:flex-1 overflow-hidden">
            <div className="w-full">
              <picture 
                className="rounded-[20px] lg:rounded-[30px] px-4 lg:px-8 pt-6 lg:pt-15 block"
                style={{ 
                  background: "linear-gradient(180deg, #F4FCFF 0%, #F5FBFF 100%)"
                }}
              >
                <source 
                  srcSet={steps[activeStep].imageWebp} 
                  type="image/webp"
                />
                <img 
                  width="762" 
                  height="527" 
                  className="rounded-[20px] lg:rounded-[30px] border-4 lg:border-8 border-[#4EACEA] w-full" 
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title}
                />
              </picture>
            </div>
          </div>

          {/* 右侧步骤说明 */}
          <div className="w-full lg:w-[26.75rem] lg:ml-10 mt-5 lg:mt-0">
            <div className="p-1 overflow-hidden">
              <div className="flex flex-col">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`lg:flex-1 cursor-pointer rounded-2xl transition-all ${
                      activeStep === index 
                        ? 'border border-[#4EACEA] shadow-[0_1px_7px_0_rgba(77,116,188,0.42)]' 
                        : 'border border-transparent'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="p-2.5 lg:p-5">
                      <h6 className="text-lg lg:text-2xl lg:leading-[2.125rem] font-semibold">
                        <span className="text-[#4EACEA]">Step{index + 1}:</span> {step.title}
                      </h6>
                      <p className="mt-1 lg:mt-2.5 text-[#292929] text-sm lg:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 下载按钮组 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-5 md:mt-10 w-full max-w-[496px] mx-auto">
          {/* Windows 下载按钮 */}
          <a 
            href="/download/?product=idownergo.exe" 
            target="_blank"
            className="bg-[#4EACEA] border-2 border-[#4EACEA] hover:bg-transparent h-16 lg:h-[68px] px-1 flex text-white hover:text-[#4EACEA] justify-center items-center rounded-[14px] transition-colors"
          >
            <svg width="30" height="30" className="overflow-hidden">
              <use href="https://idownergo.com/wp-content/themes/idownergo/assets/svg/common.svg#win"></use>
            </svg>
            <span className="flex flex-col ml-3">
              <b className="text-base lg:text-xl lg:leading-[26px]">Free Download</b>
            </span>
          </a>
          
          {/* Mac 下载按钮 */}
          <a 
            href="/download/?product=idownergo.dmg" 
            target="_blank"
            className="bg-transparent border-2 border-[#4EACEA] hover:bg-[#4EACEA] h-16 lg:h-[68px] px-1 flex text-[#4EACEA] hover:text-white justify-center items-center rounded-[14px] transition-colors"
          >
            <svg width="30" height="30" className="overflow-hidden">
              <use href="https://idownergo.com/wp-content/themes/idownergo/assets/svg/common.svg#mac"></use>
            </svg>
            <span className="flex flex-col ml-3">
              <b className="text-base lg:text-xl lg:leading-[26px]">Free Download</b>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
