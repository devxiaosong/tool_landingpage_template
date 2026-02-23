"use client";

import { useState } from "react";

export default function ArticleContent() {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <section className="p-10 md:px-20 md:pb-20 md:pt-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex xl:flex-row flex-col justify-center">
          {/* 主内容区 */}
          <div className="xl:flex-grow flex flex-col">
            <div className="post-entry-content py-10 px-6 border border-solid border-[#E6E6E6] rounded-[10px]">
              {/* 文章标题 */}
              <h1 className="text-2xl md:text-4xl leading-8 md:leading-[42px] font-bold text-center 2xl:px-14">
                How to Download Instagram Videos &amp; Reels to MP3 Audio Format: 3 Best Methods
              </h1>

              {/* 作者信息 */}
              <div className="flex justify-between md:items-center mt-10 flex-col md:flex-row">
                <div className="flex items-center mb-0">
                  <img 
                    className="rounded-full mr-2.5 w-16 h-16" 
                    src="https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg" 
                    alt="Matthew" 
                  />
                  <div className="flex flex-col justify-center mb-0">
                    <span>
                      By <a href="#" className="text-[#30A2FF] hover:underline">Matthew</a>
                    </span>
                    <span className="mt-2">
                      Last Update: November 20, 2024
                    </span>
                  </div>
                </div>
                <div className="mt-5 md:mt-0">
                  Category: <a className="text-[#30A2FF] hover:underline" href="#">Convert Music</a>
                </div>
              </div>

              {/* 文章目录 */}
              <article className="py-6 px-5 rounded-[10px] mb-5 bg-[#EAF6FF]">
                <span className="block text-[#30A2FF] font-bold text-xl">Content</span>
                <ul className="space-y-1 mt-4 mb-0">
                  <li className="flex">
                    <span className="mr-1">01</span>
                    <a href="#section1" className="text-base leading-8 text-[#1684F5] cursor-pointer hover:underline">
                      How to Download Instagram Videos &amp; Reels to MP3 Online?
                    </a>
                  </li>
                  <li className="flex mt-1">
                    <span className="mr-1">02</span>
                    <a href="#section2" className="text-base leading-8 text-[#1684F5] cursor-pointer hover:underline">
                      How to Download Instagram to MP3 from Chrome Browser?
                    </a>
                  </li>
                  <li className="flex mt-1">
                    <span className="mr-1">03</span>
                    <a href="#section3" className="text-base leading-8 text-[#1684F5] cursor-pointer hover:underline">
                      Bulk Download Instagram Music with Best Instagram to MP3 Converter
                    </a>
                  </li>
                </ul>
              </article>

              {/* 文章正文 */}
              <div className="article-content text-[#555A5D] space-y-5">
                <p>
                  Instagram has become one of the most popular platforms for sharing videos and music clips, 
                  particularly with features like Reels and Stories. Whether it&apos;s a catchy song, an interesting 
                  speech, or a music video you want to preserve, sometimes you may only want the audio.
                </p>

                <p>
                  In this guide, we&apos;ll cover three simple methods to convert Instagram videos into MP3 files: 
                  an online tool, a Chrome extension, and software for bulk downloads.
                </p>

                {/* 第一个章节 */}
                <h2 id="section1" className="text-[26px] font-semibold my-6 mt-10 py-6 px-4 border border-dashed border-[#C6C6C6] rounded-[10px] bg-[#F5F5F5] 
                  before:content-['01'] before:inline-block before:w-[57px] before:h-[38px] before:mr-2 before:pt-1.5 before:pl-3 
                  before:text-lg before:font-semibold before:text-white before:align-middle 
                  before:bg-[url('https://idownergo.com/wp-content/themes/idownergo/assets/img/single/h2-number.svg')] before:bg-cover">
                  How to Download Instagram Videos &amp; Reels to MP3 Online?
                </h2>

                <p>
                  One of the easiest ways to download Instagram audio is by using an online converter. 
                  FastVideoSave is an excellent online tool for converting Instagram videos and Reels into MP3 format.
                </p>

                <h3 className="text-[21px] font-semibold mb-2.5">
                  How to Use FastVideoSave to Convert Instagram Videos to MP3
                </h3>

                <p><strong>Step 1:</strong> Open Instagram, find the video or reel you want to download, and copy its URL.</p>
                <p><strong>Step 2:</strong> Visit the FastVideoSave website and paste the URL.</p>
                
                <div className="my-5">
                  <img 
                    className="mx-auto max-w-full" 
                    src="https://idownergo.com/wp-content/uploads/download-instagram-mp3-online-1.png" 
                    alt="download instagram mp3 online"
                  />
                </div>

                <p><strong>Step 3:</strong> Tap on the &quot;Download Audio&quot; to start the download process.</p>

                {/* Pros/Cons */}
                <div className="my-8">
                  {/* Pros Box */}
                  <div className="mb-6">
                    <div className="inline-block px-5 py-2 rounded-t-[10px] bg-[#AEF0B8]">
                      <span className="text-base font-bold leading-[26px]">Pros:</span>
                    </div>
                    <div className="p-5 rounded-b-[10px] rounded-tr-[10px] border border-[#AEF0B8] bg-[#F7FDF8]">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>You can download the audio without having to sign up or log in.</li>
                        <li>The interface is simple to use, and the conversion is fast.</li>
                        <li>You can access this tool from any browser.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Cons Box */}
                  <div>
                    <div className="inline-block px-5 py-2 rounded-t-[10px] bg-[#FFA7A7]">
                      <span className="text-base font-bold leading-[26px]">Cons:</span>
                    </div>
                    <div className="p-5 rounded-b-[10px] rounded-tr-[10px] border border-[#FFA7A7] bg-[#FFF6F6]">
                      <ul className="list-disc pl-5">
                        <li>The website may display ads, which can disrupt the user experience.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 第二个章节 */}
                <h2 id="section2" className="text-[26px] font-semibold my-6 mt-10 py-6 px-4 border border-dashed border-[#C6C6C6] rounded-[10px] bg-[#F5F5F5] 
                  before:content-['02'] before:inline-block before:w-[57px] before:h-[38px] before:mr-2 before:pt-1.5 before:pl-3 
                  before:text-lg before:font-semibold before:text-white before:align-middle 
                  before:bg-[url('https://idownergo.com/wp-content/themes/idownergo/assets/img/single/h2-number.svg')] before:bg-cover">
                  How to Download Instagram to MP3 from Chrome Browser?
                </h2>

                <p>
                  If you&apos;re a Chrome user, you can make the download process even easier by using a browser extension. 
                  IDL Helper – IG Downloader is one such tool.
                </p>

                {/* 更多内容... */}
                <div className="text-center my-10 py-8 px-5 border border-[#A5D7FF] rounded-[10px]">
                  <p className="mb-4">Want to learn more about downloading Instagram content?</p>
                  <a 
                    href="#" 
                    className="inline-block px-6 py-3 bg-[#1695F7] text-white font-bold rounded hover:bg-[#1380D9] transition-colors"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>

              {/* 作者简介 */}
              <div className="flex items-center border border-solid border-[#A3D6FF] rounded-[10px] px-5 py-10 mt-10">
                <img 
                  className="rounded-full mr-5 w-16 h-16" 
                  src="https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg" 
                  alt="Matthew" 
                />
                <div>
                  <a className="name hover:underline text-xl font-bold" href="#">Matthew</a>
                  <div className="desc mt-3">
                    A Internet technology enthusiasts, editor and content creator who spends most of her time 
                    bringing the interesting, entertaining, original and well-written articles to people.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧边栏 */}
          <div className="xl:w-[252px] xl:ml-6 relative flex-shrink-0 mt-10 xl:mt-0">
            {/* 热门文章 */}
            <article className="p-6 border border-solid border-[#E6E6E6] rounded-[10px]">
              <div className="flex items-center text-xl font-bold">
                <span className="mr-1">Popular Topics</span>
                <span>🔥</span>
              </div>
              <ul className="text-sm leading-6 space-y-2.5 list-disc pl-5 mt-2.5">
                <li><a href="#" className="cursor-pointer hover:text-[#2A6DF4]">How to Download Instagram Videos...</a></li>
                <li><a href="#" className="cursor-pointer hover:text-[#2A6DF4]">How to Download Let Me Love You Song...</a></li>
                <li><a href="#" className="cursor-pointer hover:text-[#2A6DF4]">3 Best Ways to Download BBC Sounds...</a></li>
              </ul>
            </article>

            {/* 快速导航 */}
            <article className="p-6 border border-solid border-[#E6E6E6] rounded-[10px] mt-10">
              <div className="text-xl font-bold">Quick Navigation</div>
              <ul className="text-sm leading-6 space-y-2.5 mt-2.5">
                <li>
                  <a href="#section1" className="cursor-pointer hover:text-[#2A6DF4]">
                    How to Download Instagram Videos &amp; Reels to MP3 Online?
                  </a>
                </li>
                <li>
                  <a href="#section2" className="cursor-pointer hover:text-[#2A6DF4]">
                    How to Download Instagram to MP3 from Chrome Browser?
                  </a>
                </li>
                <li>
                  <a href="#section3" className="cursor-pointer hover:text-[#2A6DF4]">
                    Bulk Download Instagram Music...
                  </a>
                </li>
              </ul>
            </article>

            {/* 下载盒子 */}
            <article className="px-6 pt-6 pb-2 rounded-[10px] mt-10 bg-[#EAF6FF]">
              <div className="flex justify-center items-center text-xl font-bold">
                <img 
                  className="mr-5 w-[46px] h-[46px]" 
                  src="https://idownergo.com/wp-content/themes/idownergo/assets/img/logo/iDownerGo.svg" 
                  alt="logo" 
                />
                <span className="text-[#AC32FF]">iDownerGo</span>
              </div>
              <div className="text-2xl font-bold mt-5 text-center">Best Video Downloader</div>
              <div className="text-center mt-3">
                <a 
                  href="#" 
                  className="inline-flex justify-center items-center text-lg text-white font-bold rounded-[10px] bg-[#AC32FF] hover:bg-[#9E1EF6] space-x-4 py-3 px-6"
                >
                  <span>🪟</span>
                  <span className="text-white text-sm leading-4 font-bold">Free Download</span>
                </a>
                <div className="mt-3">
                  <span className="cursor-pointer text-sm hover:underline">Available for Mac &gt;&gt;</span>
                </div>
              </div>
              <img 
                className="mx-auto mt-4" 
                src="https://idownergo.com/wp-content/themes/idownergo/assets/img/single/top-banner.png" 
                alt="download video"
                width="180"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
