export default function SecureDownloadSection() {
  return (
    <section 
      style={{ 
        background: "linear-gradient(180deg, #F4FCFF 0%, #F5FBFF 100%)"
      }}
    >
      <div className="container max-w-[1310px] mx-auto px-4 pb-10 md:pb-22">
        <div className="flex flex-col lg:flex-row items-center pt-10 lg:pt-17">
          {/* 左侧文字内容 */}
          <div className="lg:w-1/2 lg:pr-[55px]">
            <h2 className="text-2xl md:text-[1.75rem] md:leading-[2.5rem] text-[#333333] text-center lg:text-left font-bold">
              <span 
                className="inline-block"
                style={{ 
                  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(78, 172, 234, 0.35) 50.01%, rgba(78, 172, 234, 0.35) 100%)"
                }}
              >
                Enjoy ad-free and 100% secure
              </span> download experience
            </h2>
            
            <ul className="mt-2.5 lg:mt-[30px] text-base lg:text-lg text-[#333333] space-y-2.5">
              <li className="relative pl-5 leading-7">
                <span 
                  className="absolute left-0 top-2 w-2.5 h-2.5 block bg-cover"
                  style={{ 
                    backgroundImage: "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/arrow-icon.svg')"
                  }}
                ></span>
                iDownerGo OnlyFans Downloader is ad-free and 100% secure. It can operate securely without storing user data, and with a built-in OnlyFans browser, it can reduce the risk of account exposure.
              </li>
              <li className="relative pl-5 leading-7">
                <span 
                  className="absolute left-0 top-2 w-2.5 h-2.5 block bg-cover"
                  style={{ 
                    backgroundImage: "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/arrow-icon.svg')"
                  }}
                ></span>
                Plus, iDownerGo provides regular updates to enhance security and fix potential risks.
              </li>
            </ul>
          </div>

          {/* 右侧图片 */}
          <picture className="lg:w-1/2 mt-4 lg:mt-0 lg:pl-[55px]">
            <source 
              srcSet="https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/enjoy-ad-free-onlyfans.webp" 
              type="image/webp"
            />
            <img 
              width="586" 
              height="378" 
              src="https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/enjoy-ad-free-onlyfans.png" 
              alt="enjoy ad free onlyfans"
              className="max-w-full"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
