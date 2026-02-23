export default function CTADownloadSection() {
  return (
    <section 
      className="py-10 md:py-15"
      style={{
        backgroundImage: "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/footer-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container max-w-[1310px] mx-auto px-4 relative z-[1]">
        <div 
          className="rounded-[20px] md:rounded-[40px] p-8 md:p-[50px] flex flex-col items-center"
          style={{ 
            background: "linear-gradient(180deg, #4E85EA 0%, #4EACEA 100%)"
          }}
        >
          {/* Logo图标 */}
          <img 
            width="84" 
            height="84" 
            src="https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-logo.svg" 
            alt="onlyfans logo"
            className="w-[84px] h-[84px]"
          />
          
          {/* 标题 */}
          <h4 className="text-white text-center text-lg md:text-2xl md:leading-[34px] font-bold mt-4 md:mt-6 max-w-[740px] mx-auto">
            Download Your Favorite Videos with iDownerGo OnlyFans Downloader Now!
          </h4>
          
          {/* 下载按钮组 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-5 md:mt-[30px] w-full max-w-[496px]">
            {/* Windows 下载按钮 */}
            <a 
              href="/download/?product=idownergo.exe" 
              target="_blank"
              className="bg-white border border-white hover:bg-transparent h-16 lg:h-[68px] px-1 flex text-[#0C1C29] hover:text-white justify-center items-center rounded-[14px] transition-colors"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
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
              className="bg-transparent hover:bg-white border border-white h-16 lg:h-[68px] px-1 flex text-white hover:text-[#0C1C29] justify-center items-center rounded-[14px] transition-colors"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
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
      </div>
    </section>
  );
}
