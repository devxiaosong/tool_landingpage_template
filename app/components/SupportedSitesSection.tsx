export default function SupportedSitesSection() {
  const leftPlatforms = [
    { name: "YouTube", icon: "https://img.icons8.com/color/48/youtube-play.png", position: "top-0 left-20" },
    { name: "Facebook", icon: "https://img.icons8.com/color/48/facebook-new.png", position: "top-20 left-0" },
    { name: "Instagram", icon: "https://img.icons8.com/fluency/48/instagram-new.png", position: "top-40 left-12" },
    { name: "Telegram", icon: "https://img.icons8.com/color/48/telegram-app.png", position: "top-60 left-4" },
    { name: "Twitch", icon: "https://img.icons8.com/color/48/twitch--v1.png", position: "top-80 left-16" },
    { name: "Bilibili", icon: "https://img.icons8.com/color/48/bilibili.png", position: "bottom-24 left-8" },
  ];

  const topPlatforms = [
    { name: "OK.RU", icon: "https://img.icons8.com/color/48/ok-ru.png", position: "top-8 left-1/4" },
    { name: "Dailymotion", icon: "https://img.icons8.com/color/48/dailymotion.png", position: "top-16 left-1/3" },
    { name: "TikTok", icon: "https://img.icons8.com/color/48/tiktok.png", position: "top-4 right-1/3" },
    { name: "Niconico", icon: "https://img.icons8.com/color/48/niconico.png", position: "top-20 right-1/4" },
  ];

  const bottomPlatforms = [
    { name: "Vimeo", icon: "https://img.icons8.com/color/48/vimeo.png", position: "bottom-12 left-1/4" },
    { name: "Twitter", icon: "https://img.icons8.com/color/48/twitter.png", position: "bottom-0 left-1/3" },
  ];

  const rightPlatforms = [
    { name: "Spotify", icon: "https://img.icons8.com/color/48/spotify.png", position: "top-4 right-24" },
    { name: "Amazon Music", icon: "https://img.icons8.com/color/48/amazon-music.png", position: "top-12 right-8" },
    { name: "Apple Music", icon: "https://img.icons8.com/color/48/apple-music.png", position: "top-32 right-20" },
    { name: "Deezer", icon: "https://img.icons8.com/color/48/deezer.png", position: "top-48 right-4" },
    { name: "Tidal", icon: "https://img.icons8.com/color/48/tidal.png", position: "top-64 right-16" },
    { name: "SoundCloud", icon: "https://img.icons8.com/color/48/soundcloud.png", position: "top-80 right-0" },
    { name: "Bandcamp", icon: "https://img.icons8.com/color/48/bandcamp.png", position: "bottom-32 right-12" },
    { name: "Last.fm", icon: "https://img.icons8.com/color/48/lastfm.png", position: "bottom-16 right-24" },
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto max-w-[1310px] px-4">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[1.25rem] md:text-[1.75rem] xl:text-[2.5rem] font-bold text-[#333333] leading-tight">
            Download Any Video From Any Website
          </h2>
          <p className="mt-2.5 md:mt-5 text-[0.875rem] leading-[1.25rem] md:text-[1.125rem] md:leading-[1.625rem] text-[#666666] mx-auto max-w-4xl">
            iDownerGo Video Downloader is a cross-platform app that lets you save high-quality videos from Facebook, Instagram, Dailymotion, TikTok, Bandcamp, and other websites in seconds. It works faster than any free online video downloader — just a click, and you can enjoy content anytime, anywhere.
          </p>
        </div>

        {/* Link */}
        <a
          href="#"
          className="text-[#AC32FF] hover:text-[#9E1EF6] text-base md:text-[1.25rem] text-center mt-2.5 md:mt-10 block transition-colors"
        >
          <span className="hover:underline">Check More Supported Sites&gt;&gt;</span>
        </a>

        {/* Main Image with Platform Logos */}
        <div className="mt-5 md:mt-8 relative">
          {/* Desktop Layout with Floating Logos */}
          <div className="hidden lg:block relative h-[521px]">
            {/* Center Main Image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[600px] h-[400px] bg-gradient-to-br from-purple-200 via-purple-100 to-white rounded-2xl shadow-2xl p-6 border-4 border-purple-300">
                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">iDownerGo</span>
                </div>
              </div>
            </div>

            {/* Left Platform Logos */}
            {leftPlatforms.map((platform, idx) => (
              <div
                key={`left-${idx}`}
                className={`absolute ${platform.position} flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow z-20`}
              >
                <img src={platform.icon} alt={platform.name} width="24" height="24" />
                <span className="text-sm font-medium text-[#333333]">{platform.name}</span>
              </div>
            ))}

            {/* Top Platform Logos */}
            {topPlatforms.map((platform, idx) => (
              <div
                key={`top-${idx}`}
                className={`absolute ${platform.position} flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow z-20`}
              >
                <img src={platform.icon} alt={platform.name} width="24" height="24" />
                <span className="text-sm font-medium text-[#333333]">{platform.name}</span>
              </div>
            ))}

            {/* Bottom Platform Logos */}
            {bottomPlatforms.map((platform, idx) => (
              <div
                key={`bottom-${idx}`}
                className={`absolute ${platform.position} flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow z-20`}
              >
                <img src={platform.icon} alt={platform.name} width="24" height="24" />
                <span className="text-sm font-medium text-[#333333]">{platform.name}</span>
              </div>
            ))}

            {/* Right Platform Logos */}
            {rightPlatforms.map((platform, idx) => (
              <div
                key={`right-${idx}`}
                className={`absolute ${platform.position} flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow z-20`}
              >
                <img src={platform.icon} alt={platform.name} width="24" height="24" />
                <span className="text-sm font-medium text-[#333333]">{platform.name}</span>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Layout - Simple Image */}
          <div className="lg:hidden">
            <img
              src="https://idownergo.com/wp-content/themes/idownergo/assets/img/index/logo-computer.png"
              alt="supported sites"
              width="100%"
              height="auto"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
