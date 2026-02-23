"use client";

import { useState } from "react";

export default function ProductFeaturesTabSection() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 0,
      icon: "download-default-icon.svg",
      activeIcon: "download-active-icon.svg",
      title: "Download OnlyFans Video"
    },
    {
      id: 1,
      icon: "convert-default-icon.svg",
      activeIcon: "convert-active-icon.svg",
      title: "OnlyFans Video to MP4/MKV"
    },
    {
      id: 2,
      icon: "menu-default-icon.svg",
      activeIcon: "menu-active-icon.svg",
      title: "Bulk Download OnlyFans Contents"
    },
    {
      id: 3,
      icon: "subtitle-default-icon.svg",
      activeIcon: "subtitle-active-icon.svg",
      title: "Save OnlyFans Chat Videos"
    }
  ];

  const contents = [
    {
      id: 0,
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-video.png",
      imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-video.webp",
      title: "Download OnlyFans videos",
      titleHighlight: " in 1080p HD resolution",
      description: [
        "iDownerGo OnlyFans downloader offers multiple options, including 1080p, 720p, and 480p resolutions. You can download high-definition videos from OnlyFans on Windows or Mac based on your preference.",
        "Moreover, the OnlyFans Video Downloader will remove DRM protected of your subscribed or even free content and offer AAC2.0 audio track.  So you can enjoy any OnlyFans contents offline no matter where you are and whenever you want."
      ]
    },
    {
      id: 1,
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-to-mp4.png",
      imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-to-mp4.webp",
      title: "Download OnlyFans Video",
      titleHighlight: " to MP4/MKV File",
      description: [
        "By downloading OnlyFans videos in MP4 or MKV format, you can enjoy the content on computers, tablets, smartphones, media players, or even transfer it to USB drive.",
        "Whether you're at home or traveling, iDownerGo makes it easy to watch your favorite OnlyFans videos without an internet connection."
      ]
    },
    {
      id: 2,
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/bulk-download-onlyfans.png",
      imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/bulk-download-onlyfans.webp",
      title: "Download OnlyFans Videos",
      titleHighlight: "/Pitures in Bulk",
      description: [
        "iDownerGo OnlyFans Downloader offers downloads in batch mode, you do not have to download video or image from your favorite creators one by one.",
        "By open your subscribed creator homepage, this OnlyFans video downloader could detect and then list all available videos or images from the account, then one-click to download all contents automatically."
      ]
    },
    {
      id: 3,
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-chat-video.png",
      imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-chat-video.webp",
      title: "Download OnlyFans Message",
      titleHighlight: "/Chat Videos",
      description: [
        "Sometimes, your favorite creator sends picture or videos through messages/chats on OnlyFans as a bonus privately. What to do if you want to save these contents to your local devices for offline watching?",
        "iDownerGo OnlyFans Downloader will help you, it can download videos from OnlyFans chat without quality loss and download OnlyFans message videos in up to 1080p at 10X speed."
      ]
    }
  ];

  const currentContent = contents[activeTab];

  return (
    <section 
      style={{ 
        background: "linear-gradient(180deg, #4E85EA 0%, #4EACEA 100%)"
      }}
    >
      <div className="container max-w-[1310px] mx-auto px-4 py-10 md:py-20">
        {/* 标题 */}
        <h2 className="text-center text-2xl md:text-[2.5rem] md:leading-[3rem] font-bold text-white">
          Enjoy Effective OnlyFans Video Download Experience with the Best OnlyFans Downloader
        </h2>

        {/* 标签导航 */}
        <div className="mt-5 md:mt-15 overflow-hidden p-[3px]">
          <div className="flex border-b border-solid border-[rgba(255,255,255,0.2)]">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`flex-1 text-center cursor-pointer relative ${
                  activeTab === tab.id ? 'text-white font-semibold' : 'text-[#CADEF9]'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex flex-col items-center py-4 md:py-0">
                  <div 
                    className="w-10 h-10 bg-no-repeat"
                    style={{
                      backgroundImage: `url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/${
                        activeTab === tab.id ? tab.activeIcon : tab.icon
                      }')`
                    }}
                  ></div>
                  <span className="mt-1 lg:mt-3 inline-block pb-1 md:pb-6 text-sm md:text-base">
                    {tab.title}
                  </span>
                </div>
                {activeTab === tab.id && (
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
                srcSet={currentContent.imageWebp} 
                type="image/webp"
              />
              <img 
                width="586" 
                height="420" 
                src={currentContent.image} 
                alt={currentContent.title}
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
                  {currentContent.title}
                </span>
                {currentContent.titleHighlight}
              </h4>
              
              <ul className="mt-2.5 lg:mt-[30px] text-base lg:text-lg text-white space-y-2.5 md:space-y-5">
                {currentContent.description.map((text, index) => (
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
