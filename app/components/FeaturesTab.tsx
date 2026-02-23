"use client";

import { useState } from "react";

interface FeatureTab {
  icon: string;
  activeIcon: string;
  tabTitle: string;
  contentImage: string;
  contentImageWebp: string;
  contentTitle: string;
  contentTitleHighlight: string;
  contentDescription: string[];
}

interface FeaturesTabProps {
  mainTitle: string;
  features: FeatureTab[];
  defaultActiveTab?: number;
}

export default function FeaturesTab({
  mainTitle,
  features,
  defaultActiveTab = 0
}: FeaturesTabProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const currentFeature = features[activeTab];

  return (
    <section 
      style={{ 
        background: "linear-gradient(180deg, #4E85EA 0%, #4EACEA 100%)"
      }}
    >
      <div className="container max-w-[1310px] mx-auto px-4 py-10 md:py-20">
        {/* 标题 */}
        <h2 className="text-center text-2xl md:text-[2.5rem] md:leading-[3rem] font-bold text-white">
          {mainTitle}
        </h2>

        {/* 标签导航 */}
        <div className="mt-5 md:mt-15 overflow-hidden p-[3px]">
          <div className="flex border-b border-solid border-[rgba(255,255,255,0.2)]">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex-1 text-center cursor-pointer relative ${
                  activeTab === index ? 'text-white font-semibold' : 'text-[#CADEF9]'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex flex-col items-center py-4 md:py-0">
                  <div 
                    className="w-10 h-10 bg-no-repeat"
                    style={{
                      backgroundImage: `url('${
                        activeTab === index ? feature.activeIcon : feature.icon
                      }')`
                    }}
                  ></div>
                  <span className="mt-1 lg:mt-3 inline-block pb-1 md:pb-6 text-sm md:text-base">
                    {feature.tabTitle}
                  </span>
                </div>
                {activeTab === index && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-white rounded"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 内容区域 */}
        <div className="mt-6 overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            {/* 左侧图片 */}
            <picture className="lg:w-1/2 mt-5 lg:mt-0 px-4 lg:px-0 lg:pr-[55px]">
              <source 
                srcSet={currentFeature.contentImageWebp} 
                type="image/webp"
              />
              <img 
                width="586" 
                height="420" 
                src={currentFeature.contentImage} 
                alt={currentFeature.contentTitle}
                className="max-w-full"
              />
            </picture>

            {/* 右侧文字内容 */}
            <div className="lg:w-1/2 mt-5 lg:mt-0 lg:pl-[55px]">
              <h4 className="text-center lg:text-left text-2xl md:text-[1.75rem] md:leading-[2.5rem] font-bold text-white">
                <span 
                  className="inline-block"
                  style={{ 
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgb(78, 220, 255) 50.01%, rgb(78, 220, 255) 100%)"
                  }}
                >
                  {currentFeature.contentTitle}
                </span>
                {currentFeature.contentTitleHighlight}
              </h4>
              
              <ul className="mt-2.5 lg:mt-[30px] text-base lg:text-lg text-white space-y-2.5 md:space-y-5">
                {currentFeature.contentDescription.map((text, index) => (
                  <li key={index} className="relative pl-5 leading-7">
                    <span 
                      className="absolute left-0 top-2 w-2.5 h-2.5 block bg-cover"
                      style={{ 
                        backgroundImage: "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/arrow-icon-1.svg')"
                      }}
                    ></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
