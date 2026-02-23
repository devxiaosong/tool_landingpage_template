export default function WhyNeedSection() {
  return (
    <section 
      style={{ 
        background: "linear-gradient(180deg, #F4FCFF 0%, #F5FBFF 100%)"
      }}
    >
      <div className="container max-w-[1310px] mx-auto px-4 py-10 md:py-20">
        {/* 标题 */}
        <h2 className="text-center text-2xl md:text-[2.5rem] md:leading-[3rem] font-bold text-black">
          Why do you need iDownerGo OnlyFans Downloader?
        </h2>

        {/* 内容区域 */}
        <div className="flex flex-col-reverse lg:flex-row items-center pt-10 lg:pt-15">
          {/* 左侧图片 */}
          <picture className="lg:w-1/2 mt-4 lg:mt-0 lg:pr-[55px]">
            <source 
              srcSet="https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-download-restrictions.webp" 
              type="image/webp"
            />
            <img 
              width="586" 
              height="376" 
              src="https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-download-restrictions.png" 
              alt="onlyfans download restrictions"
              className="max-w-full"
            />
          </picture>

          {/* 右侧文字内容 */}
          <div className="lg:w-1/2 lg:pl-[55px]">
            <h2 className="text-2xl md:text-[1.75rem] md:leading-[2.5rem] text-[#333333] text-center lg:text-left font-bold">
              <span 
                className="inline-block"
                style={{ 
                  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(78, 172, 234, 0.35) 50.01%, rgba(78, 172, 234, 0.35) 100%)"
                }}
              >
                OnlyFans does not natively allow
              </span> downloads
            </h2>
            
            <ul className="mt-2.5 lg:mt-[30px] text-base lg:text-lg text-[#333333] space-y-2.5 md:space-y-5">
              <li className="relative pl-5 leading-7">
                <span 
                  className="absolute left-0 top-2 w-2.5 h-2.5 block bg-cover"
                  style={{ 
                    backgroundImage: "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/arrow-icon.svg')"
                  }}
                ></span>
                Since Onlyfans itself does not have a download function, you cannot download any videos or pictures directly from the OnlyFans platform. So, what if you want to download videos from the accounts you're subscribed to?
              </li>
              <li className="relative pl-5 leading-7">
                <span 
                  className="absolute left-0 top-2 w-2.5 h-2.5 block bg-cover"
                  style={{ 
                    backgroundImage: "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/arrow-icon.svg')"
                  }}
                ></span>
                If you want to preserve content from favorite creators in case it gets deleted or don't want to pay monthly to access the same content, you can use our iDowneGo Video Downloader to download them and keep those OnlyFans contents permanently.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
