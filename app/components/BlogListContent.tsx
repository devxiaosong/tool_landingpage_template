"use client";

import { useState } from "react";

export default function BlogListContent() {
  const [showMore, setShowMore] = useState(false);

  const downloaders = [
    { name: "Netflix Downloader", link: "/netflix-video-downloader/" },
    { name: "Hulu Downloader", link: "/hulu-downloader/" },
    { name: "Disney Plus Downloader", link: "/disney-plus-downloader/" },
    { name: "OnlyFans Downloader", link: "/onlyfans-downloader/" },
    { name: "U-NEXT Downloader", link: "/unext-downloader/" },
    { name: "Crunchyroll Downloader", link: "/crunchyroll-downloader/" }
  ];

  const moreDownloaders = [
    { name: "Amazon Downloader", link: "/amazon-downloader/" },
    { name: "HBO Max Downloader", link: "/hbo-max-downloader/" },
    { name: "Paramount Plus Downloader", link: "/paramount-plus-downloader/" },
    { name: "Apple TV Downloader", link: "/apple-tv-plus-downloader/" }
  ];

  const topics = [
    { name: "Review", link: "/how-to/review/", active: false },
    { name: "Netflix Tips", link: "/how-to/netflix-tips/", active: false },
    { name: "Download Video", link: "/how-to/download-video/", active: false },
    { name: "Video Tips", link: "/how-to/video-tips/", active: false },
    { name: "Convert Video", link: "/how-to/convert-video/", active: true },
    { name: "Convert Music", link: "/how-to/convert-music/", active: false },
    { name: "Music Tips", link: "/how-to/music-tips/", active: false },
    { name: "Guide", link: "/how-to/guide/", active: false }
  ];

  const articles = [
    {
      title: "8 Best Ways to Convert MP4 to MOV Format Easily on Windows & Mac",
      excerpt: "Ever tried to work with a video in MOV format, only to realize you're stuck with an MP4? Yeah, it's annoying. Whatever the reason, MOV files are popular for a reason: they look good and play nicely with a lot of programs. Whether it's for editing in Final Cut Pro, sharing on Apple devices, or …",
      link: "/convert-video/mp4-to-mov/",
      author: "Matthew",
      date: "February 5, 2026",
      avatar: "https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg"
    },
    {
      title: "4 Best YouTube to AAC Converters | Top Picks for 2025",
      excerpt: "When you found a lovely music source from YouTube, you may want to convert YouTube videos to AAC audio. As AAC format is well-known for its high sound quality and smaller file size. In this article, we'll explore the best tools to convert YouTube to AAC in 2025, focusing on both online converters and a …",
      link: "/convert-video/youtube-to-aac/",
      author: "Matthew",
      date: "December 12, 2024",
      avatar: "https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg"
    },
    {
      title: "Top 2 Best Ways to Download Calimove Video for Free",
      excerpt: "Calimove is a popular platform offering various online courses, tutorials, and videos, perfect for learning new skills or exploring fitness challenges. Sometimes, you might want to download these videos for offline use, especially if you need them in places with limited internet access. In this guide, we'll show you two easy ways to download Calimove …",
      link: "/convert-video/download-calimove-video/",
      author: "Matthew",
      date: "November 30, 2024",
      avatar: "https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg"
    },
    {
      title: "6 Best Tools to Convert YouTube to WAV Format for Free",
      excerpt: "Are you looking for the best way to convert YouTube videos to WAV format? You're not alone! Introduction WAV files are perfect for high-quality audio, making them a favorite form of audio files for music lovers, podcasters, and audio editors. Luckily, there are free tools, including YouTube to WAV converters, that make this process quick …",
      link: "/convert-video/youtube-to-wav/",
      author: "Matthew",
      date: "November 19, 2024",
      avatar: "https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg"
    },
    {
      title: "3 Best Ways to Download Bigo Live Video Without Watermark for Free",
      excerpt: "Bigo Live is a widely popular live-streaming platform that enables users to share talents, experiences, and everyday moments with a global audience. However, while the platform itself doesn't offer a native download feature, users often look for ways to save or record these streams for offline viewing. Thankfully, there are secure, reliable methods available to …",
      link: "/convert-video/download-bigo-video/",
      author: "Matthew",
      date: "November 11, 2024",
      avatar: "https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg"
    },
    {
      title: "How to Download Periscope Live Stream and Archive for Free",
      excerpt: "Periscope was a well-known platform for live streaming, enabling users to broadcast and view real-time video content. Launched in 2015, it quickly gained popularity for its user-friendly interface and interactive features, allowing viewers to engage with broadcasters through comments and hearts. Despite the app's discontinuation in March 2021, many users still want to save their …",
      link: "/convert-video/download-periscope-video/",
      author: "Matthew",
      date: "November 8, 2024",
      avatar: "https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg"
    },
    {
      title: "3 Best Ways to Download TwitCasting Live Streams and VODs for Free",
      excerpt: "TwitCasting has gained popularity as a live streaming platform, allowing users to broadcast and enjoy live streams on various topics. However, TwitCasting lacks a built-in option to download its live streams or VODs, making it challenging for users who want offline access to their favorite streams. Fortunately, there are several reliable tools available for downloading …",
      link: "/convert-video/download-twitcasting-video/",
      author: "Matthew",
      date: "November 6, 2024",
      avatar: "https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg"
    },
    {
      title: "How to Download Kick VODs and Clips on Computer/Mobile",
      excerpt: "Kick is a popular platform among people who enjoy live streaming, such as Twitch. It has managed to build a significant audience base due to its versatility. However, if you are interested in saving your favorite moments of streamers or downloading the VODs, you cannot do it without a reliable third-party software, extension, or online …",
      link: "/convert-video/download-kick-video/",
      author: "Matthew",
      date: "November 4, 2024",
      avatar: "https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg"
    },
    {
      title: "4 Best Ways to Download Udemy Videos on PC/Mac for Free",
      excerpt: "Udemy is a popular online learning platform with a wide range of courses. However, having access to the internet isn't always guaranteed, and sometimes, you may want to download Udemy videos to your computer or mobile device for offline viewing. This article will guide you through the best ways to download Udemy videos on a …",
      link: "/convert-video/download-udemy-video/",
      author: "Matthew",
      date: "November 2, 2024",
      avatar: "https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg"
    },
    {
      title: "2 Best Ways to Download Kajabi Videos Easily & Quickly",
      excerpt: "The Kajabi video player is pretty terrible and has limited functionality such as not allowing you to rewind and forward a video. I'm looking for a way to download the videos so I can watch in a video player on my computer A user on Reddit asked this question, if you also have the same …",
      link: "/convert-video/download-kajabi-video/",
      author: "Matthew",
      date: "October 25, 2024",
      avatar: "https://idownergo.com/wp-content/uploads/微信截图_20240911142921-150x150.jpg"
    }
  ];

  return (
    <section className="py-10 md:py-20 px-10 md:px-20 md:pt-10">
      <div className="container mx-auto max-w-[1310px]">
        {/* Downloader List */}
        <div className="flex items-start mb-10">
          <img 
            width="38" 
            height="38" 
            src="https://idownergo.com/wp-content/themes/idownergo/assets/img/blog/download.svg" 
            alt="download"
            className="mr-4"
          />

          <div className="relative pb-8 mb-8 mt-1.5 flex-1">
            <button 
              onClick={() => setShowMore(!showMore)}
              className="text-[#3D6CEC] hover:underline absolute right-0 bottom-0"
            >
              {showMore ? 'Show Less >>' : 'Show More <<'}
            </button>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 w-full pl-8 text-sm">
              {downloaders.map((downloader, index) => (
                <a 
                  key={index}
                  href={downloader.link} 
                  className="text-black hover:text-[#3D6CEC] hover:underline"
                >
                  {downloader.name}
                </a>
              ))}
            </div>

            {showMore && (
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 w-full pl-8 text-sm mt-5">
                {moreDownloaders.map((downloader, index) => (
                  <a 
                    key={index}
                    href={downloader.link} 
                    className="text-black hover:text-[#3D6CEC] hover:underline"
                  >
                    {downloader.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="px-10 pb-10 border shadow-md sticky top-16 rounded-[10px] overflow-hidden">
              <div className="text-2xl font-semibold bg-[#2A6DF4] -mx-10 text-white flex justify-center items-center py-5 space-x-3">
                <img 
                  width="36" 
                  height="36" 
                  src="https://idownergo.com/wp-content/themes/idownergo/assets/img/blog/product.svg" 
                  alt="product"
                />
                <span>All Topics</span>
              </div>
              <ul className="text-center mt-8 space-y-3">
                {topics.map((topic, index) => (
                  <li 
                    key={index}
                    className={`text-lg hover:text-[#2A6DF4] ${topic.active ? 'text-[#2A6DF4]' : ''}`}
                  >
                    <a href={topic.link}>{topic.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Article List */}
          <div className="lg:col-span-3">
            {articles.map((article, index) => (
              <article 
                key={index}
                className="shadow-md mb-4 md:mb-6 p-5 md:p-8"
              >
                <a 
                  className="block mb-3 text-lg md:text-2xl font-semibold hover:text-[#1684F5]" 
                  href={article.link}
                >
                  {article.title}
                </a>

                <div className="mb-3 text-[#555a5d]">
                  <p>
                    {article.excerpt}{' '}
                    <a href={article.link} className="text-[#1684F5]">
                      read more
                    </a>
                  </p>
                </div>

                <div className="flex items-center text-[#555a5d]">
                  <img 
                    className="w-8 rounded-full mr-2" 
                    src={article.avatar} 
                    alt={article.author}
                  />
                  <a className="hover:text-[#1684F5]" href="/author/matthew/">
                    {article.author}
                  </a>
                  <p className="ml-3">{article.date}</p>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <nav className="navigation pagination" aria-label="Pagination">
              <div className="nav-links text-lg">
                <span className="page-numbers current font-bold text-[#1695F7]">1</span>
                <a className="page-numbers hover:text-[#333333]" href="/how-to/convert-video/page/2/">
                  2
                </a>
                <a className="next page-numbers hover:text-[#333333]" href="/how-to/convert-video/page/2/">
                  &gt;
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
