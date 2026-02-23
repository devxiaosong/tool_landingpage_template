export default function HighlightsSection() {
  const highlights = [
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/faster-speed-icon.svg",
      title: "10X Faster Download Speed",
      description: "Support 10x download and conversion speed, and you can also adjust the speed according to your needs.",
    },
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/built-in-browser-icon.svg",
      title: "Built-in Browser",
      description: "iDownerGo comes with a built-in web browser, which allows you to browse video/audio sharing sites easily and download videos direclty within the websites.",
    },
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/private-mode-icon.svg",
      title: "Private Mode",
      description: "Private mode is designed to hide and protect your downloaded videos with password, to protect your video and audio from prying eyes and miswatching by children.",
    },
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/multi-language-icon.svg",
      title: "Multi-Language",
      description: "Program interface is available in multiple UI languages, making it accessible to users from all over the world.",
    },
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/no-ads-icon.svg",
      title: "No Watermark and ADs-free",
      description: "You can download any videos without any watermark, and no ads annoy.",
    },
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/easy-icon.svg",
      title: "Easy To Use",
      description: "Simply copy and paste the video URL link, download it quickly with 1 click.",
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-[#171627] text-white">
      <div className="container mx-auto max-w-[1310px] px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-tight">
            Check out More Highlights of iDownerGo
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 md:mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[22px]">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="py-8 md:py-10 px-5 bg-[#2D2744] rounded-[20px] flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              {/* Icon */}
              <div className="w-[62px] h-[62px]">
                <img
                  src={highlight.icon}
                  alt={highlight.title}
                  width={62}
                  height={62}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[18px] md:text-[22px] font-bold leading-8 mt-4 md:mt-5">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] md:text-[16px] leading-5 mt-2.5 text-[#CDCDCD]">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
