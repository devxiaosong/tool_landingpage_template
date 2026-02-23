export default function HowCanHelpSection() {
  return (
    <section className="bg-white">
      <div className="container max-w-[1310px] mx-auto px-4 py-10 md:py-20">
        {/* 标题 */}
        <h2 className="text-center text-2xl md:text-[2.5rem] md:leading-[3rem] font-bold text-black">
          How Can iDownerGo OnlyFans Downloader Help You?
        </h2>

        {/* 内容区域 */}
        <div className="flex flex-col lg:flex-row items-center pt-10 lg:pt-15">
          {/* 左侧文字内容 */}
          <div className="lg:w-1/2 lg:pr-[55px]">
            <h2 className="text-2xl md:text-[1.75rem] md:leading-[2.5rem] text-[#333333] text-center lg:text-left font-bold">
              <span 
                className="inline-block"
                style={{ 
                  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(78, 172, 234, 0.35) 50.01%, rgba(78, 172, 234, 0.35) 100%)"
                }}
              >
                Download OnlyFans videos
              </span> in high quality for offline viewing
            </h2>
            
            <ul className="mt-2.5 lg:mt-[30px] text-base lg:text-lg text-[#333333] space-y-2.5 md:space-y-5">
              <li className="relative pl-5 leading-7">
                <span 
                  className="absolute left-0 top-2 w-2.5 h-2.5 block bg-cover"
                  style={{ 
                    backgroundImage: "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/arrow-icon.svg')"
                  }}
                ></span>
                As the best OnlyFans downloader, iDownerGo can help you download OnlyFans videos/images in high quality for offline viewing. Besides, iDownerGo OnlyFans Downloader also supports downloading videos from OnlyFans message/chat, batch downloading from creator homepages, etc.
              </li>
              <li className="relative pl-5 leading-7">
                <span 
                  className="absolute left-0 top-2 w-2.5 h-2.5 block bg-cover"
                  style={{ 
                    backgroundImage: "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/arrow-icon.svg')"
                  }}
                ></span>
                With the help of iDownerGo OnlyFans Downloader, you can avoid losing access if a subscription expires or content is removed, and all downloads can be saved on your laptop permanently.
              </li>
            </ul>
          </div>

          {/* 右侧图片 */}
          <picture className="lg:w-1/2 mt-4 lg:mt-0 lg:pl-[55px]">
            <source 
              srcSet="https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/remove-restrictions-from-onlyfans.webp" 
              type="image/webp"
            />
            <img 
              width="586" 
              height="378" 
              src="https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/remove-restrictions-from-onlyfans.png" 
              alt="remove restrictions from onlyfans"
              className="max-w-full"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
