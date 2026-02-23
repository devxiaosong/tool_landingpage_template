export default function HeroSection() {
  return (
    <section className="text-white overflow-hidden relative bg-gradient-to-br from-purple-50 to-orange-50">
      {/* Decorative blur circle */}
      <div className="absolute top-[-175px] right-[-95px] w-[242px] h-[312px] bg-orange-200 rounded-full blur-[37px] hidden xl:block"></div>
      
      <div className="container mx-auto max-w-[1310px] px-4 pt-8 md:pt-12 flex flex-col lg:flex-row min-h-[628px]">
        {/* Left Content */}
        <div className="w-full lg:w-3/4 xl:w-1/2 relative z-10 pb-10 md:pb-12 pt-8 lg:pt-0">
          {/* Badge */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-orange-400 text-white text-sm md:text-base py-2.5 px-10 rounded-lg max-w-[290px]">
              #1 Streaming Video & Music Solution
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-[20px] leading-[24px] md:text-[32px] md:leading-[36px] xl:text-[42px] xl:leading-[48px] text-[#333333] font-bold mt-4 md:mt-3.5 text-center lg:text-left max-w-[608px] mx-auto lg:mx-0">
            All-in-one Video Downloader to Save Any Video and Music from 10,000+ Sites
          </h1>

          {/* Feature List */}
          <div className="mt-5 md:mt-8 max-w-[488px] mx-auto lg:mx-0">
            <ul className="space-y-2.5 text-[#333333] text-sm md:text-base">
              <li className="flex items-start lg:items-center">
                <svg className="w-4 h-4 mr-2.5 mt-0.5 lg:mt-0 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#AC32FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download videos, music and playlists in any format you like.
              </li>
              <li className="flex items-start lg:items-center">
                <svg className="w-4 h-4 mr-2.5 mt-0.5 lg:mt-0 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#AC32FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download live stream videos in real time.
              </li>
              <li className="flex items-start lg:items-center">
                <svg className="w-4 h-4 mr-2.5 mt-0.5 lg:mt-0 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#AC32FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Save videos in HD/4K Ultra HD, or 8K videos without quality loss.
              </li>
              <li className="flex items-start lg:items-center">
                <svg className="w-4 h-4 mr-2.5 mt-0.5 lg:mt-0 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#AC32FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Extract audio from video and save in MP3 in one click.
              </li>
            </ul>
          </div>

          {/* Download Button */}
          <div className="mt-8 md:mt-8">
            <div className="flex justify-center lg:justify-start">
              <a
                href="/download"
                className="h-[66px] px-4 flex bg-[#AC32FF] hover:bg-[#9E1EF6] text-white justify-center items-center rounded-[10px] transition-colors max-w-[256px]"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                  <path d="M16 22L10 16L11.4 14.55L15 18.15V8H17V18.15L20.6 14.55L22 16L16 22Z" fill="currentColor"/>
                  <path d="M26 24H6V26H26V24Z" fill="currentColor"/>
                </svg>
                <span className="flex flex-col ml-2">
                  <b className="text-base md:text-2xl leading-6">Free Download</b>
                  <span className="text-xs md:text-sm mt-1 leading-[14px]">For macOS 10.12 or later</span>
                </span>
              </a>
            </div>
          </div>

          {/* Available For */}
          <div className="flex items-center space-x-4 mt-4 justify-center lg:justify-start text-[#333333]">
            <span className="text-sm md:text-base">Available For:</span>
            <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-40">
              <path d="M3 12L7 8V11H13V13H7V16L3 12Z" fill="currentColor"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#AC32FF]">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block z-10 lg:w-1/4 xl:w-1/2">
          <img
            src="/api/placeholder/665/500"
            alt="Video Downloader Banner"
            className="w-full h-auto max-w-[665px]"
          />
        </div>
      </div>
    </section>
  );
}
