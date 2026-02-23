export default function ProductHeroBanner() {
  return (
    <section 
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/header-bg.png')"
      }}
    >
      <div className="container max-w-[1310px] mx-auto py-10 md:py-0 px-4 flex flex-col lg:flex-row items-center justify-between min-h-[536px]">
        {/* 左侧内容 */}
        <div className="w-full lg:w-1/2 lg:pr-16">
          {/* 品牌标签 */}
          <div className="text-center lg:text-left">
            <div 
              className="inline-block rounded-full px-3 py-1.5 text-white text-base lg:text-xl"
              style={{ background: "linear-gradient(150deg, #FF9D3A 0%, #FFA84B 100%)" }}
            >
              iDownerGo
            </div>
          </div>

          {/* 主标题 */}
          <h2 className="text-2xl lg:text-[42px] lg:leading-[50px] text-white font-bold text-center lg:text-left mt-4">
            OnlyFans Video Downloader
          </h2>

          {/* 描述 */}
          <p className="text-sm lg:text-lg lg:leading-7 text-white mt-2 lg:mt-6 text-center lg:text-left lg:pr-10">
            Download OnlyFans videos from favorite creators in 1080p quality with one-click and enjoy OnlyFans videos offline on any device!
          </p>

          {/* 下载按钮 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center lg:justify-start mt-5 md:mt-10 max-w-[496px] mx-auto lg:mx-0">
            {/* Windows 按钮 */}
            <a 
              href="/download/?product=idownergo.exe" 
              target="_blank"
              className="bg-white border-2 border-white hover:bg-transparent h-16 lg:h-17 px-1 flex text-[#0C1C29] hover:text-white justify-center items-center rounded-[14px] transition-colors"
            >
              <svg width="30" height="30" className="flex-shrink-0">
                <use href="https://idownergo.com/wp-content/themes/idownergo/assets/svg/common.svg#win"></use>
              </svg>
              <span className="flex flex-col ml-3">
                <strong className="lg:text-xl lg:leading-7">Free Download</strong>
                <p className="text-xs">For Windows 11/10</p>
              </span>
            </a>

            {/* Mac 按钮 */}
            <a 
              href="/download/?product=idownergo.dmg" 
              target="_blank"
              className="bg-transparent hover:bg-white border-2 border-white h-16 lg:h-17 px-1 flex text-white hover:text-[#0C1C29] justify-center items-center rounded-[14px] transition-colors"
            >
              <svg width="30" height="30" className="flex-shrink-0">
                <use href="https://idownergo.com/wp-content/themes/idownergo/assets/svg/common.svg#mac"></use>
              </svg>
              <span className="flex flex-col ml-3">
                <strong className="lg:text-xl lg:leading-7">Free Download</strong>
                <p className="text-xs">For macOS 10.10 or later</p>
              </span>
            </a>
          </div>

          {/* 安全提示 */}
          <div className="text-sm text-white mt-2.5 md:mt-6 flex items-center justify-center lg:justify-start">
            <img 
              width="20" 
              height="20" 
              className="mr-2" 
              src="https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/safe.svg" 
              alt="safe" 
            />
            <span className="text-white/60">100% Safe &amp; Clean</span>
          </div>
        </div>

        {/* 右侧图片 */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <picture>
            <source 
              srcSet="https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-downloader.webp" 
              type="image/webp" 
            />
            <img 
              width="617" 
              height="536" 
              src="https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-downloader.png" 
              alt="onlyfans downloader"
              className="w-full h-auto"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
