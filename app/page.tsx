import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import ContentBlock from "./components/ContentBlock";
import FeaturesTab from "./components/FeaturesTab";
import UserGuideSection from "./components/UserGuideSection";
import PlanTable from "./components/PlanTable";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

// Hero Banner 数据
const HERO_DATA = {
  brandTag: "iDownerGo",
  title: "OnlyFans Video Downloader",
  description: "Download OnlyFans videos from favorite creators in 1080p quality with one-click and enjoy OnlyFans videos offline on any device!",
  windowsDownloadUrl: "/download/?product=idownergo.exe",
  macDownloadUrl: "/download/?product=idownergo.dmg",
  backgroundImage: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/header-bg.png",
  productImage: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-downloader.png",
  productImageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-downloader.webp",
  productImageAlt: "onlyfans downloader"
};

// Why Need Section 数据
const WHY_NEED_DATA = {
  title: "Why do you need iDownerGo OnlyFans Downloader?",
  subtitleHighlight: "OnlyFans does not natively allow",
  subtitle: "downloads",
  items: [
    "Since Onlyfans itself does not have a download function, you cannot download any videos or pictures directly from the OnlyFans platform. So, what if you want to download videos from the accounts you're subscribed to?",
    "If you want to preserve content from favorite creators in case it gets deleted or don't want to pay monthly to access the same content, you can use our iDowneGo Video Downloader to download them and keep those OnlyFans contents permanently."
  ],
  imageSrc: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-download-restrictions.png",
  imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-download-restrictions.webp",
  imageAlt: "onlyfans download restrictions",
  imagePosition: "left" as const
};

// How Can Help Section 数据
const HOW_CAN_HELP_DATA = {
  title: "How Can iDownerGo OnlyFans Downloader Help You?",
  subtitleHighlight: "Download OnlyFans videos",
  subtitle: "in high quality for offline viewing",
  items: [
    "As the best OnlyFans downloader, iDownerGo can help you download OnlyFans videos/images in high quality for offline viewing. Besides, iDownerGo OnlyFans Downloader also supports downloading videos from OnlyFans message/chat, batch downloading from creator homepages, etc.",
    "With the help of iDownerGo OnlyFans Downloader, you can avoid losing access if a subscription expires or content is removed, and all downloads can be saved on your laptop permanently."
  ],
  imageSrc: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/remove-restrictions-from-onlyfans.png",
  imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/remove-restrictions-from-onlyfans.webp",
  imageAlt: "remove restrictions from onlyfans",
  imagePosition: "right" as const
};

// Features Tab 数据
const FEATURES_TAB_DATA = {
  mainTitle: "Enjoy Effective OnlyFans Video Download Experience with the Best OnlyFans Downloader",
  autoPlayInterval: 3000, // 自动切换间隔（毫秒）
  transitionDuration: 600, // 转场动画持续时间（毫秒）
  features: [
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-default-icon.svg",
      activeIcon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-active-icon.svg",
      tabTitle: "Download OnlyFans Video",
      contentImage: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-video.png",
      contentImageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-video.webp",
      contentTitle: "Download OnlyFans videos",
      contentTitleHighlight: " in 1080p HD resolution",
      contentDescription: [
        "iDownerGo OnlyFans downloader offers multiple options, including 1080p, 720p, and 480p resolutions. You can download high-definition videos from OnlyFans on Windows or Mac based on your preference.",
        "Moreover, the OnlyFans Video Downloader will remove DRM protected of your subscribed or even free content and offer AAC2.0 audio track.  So you can enjoy any OnlyFans contents offline no matter where you are and whenever you want."
      ]
    },
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/convert-default-icon.svg",
      activeIcon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/convert-active-icon.svg",
      tabTitle: "OnlyFans Video to MP4/MKV",
      contentImage: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-to-mp4.png",
      contentImageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-to-mp4.webp",
      contentTitle: "Download OnlyFans Video",
      contentTitleHighlight: " to MP4/MKV File",
      contentDescription: [
        "By downloading OnlyFans videos in MP4 or MKV format, you can enjoy the content on computers, tablets, smartphones, media players, or even transfer it to USB drive.",
        "Whether you're at home or traveling, iDownerGo makes it easy to watch your favorite OnlyFans videos without an internet connection."
      ]
    },
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/menu-default-icon.svg",
      activeIcon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/menu-active-icon.svg",
      tabTitle: "Bulk Download OnlyFans Contents",
      contentImage: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/bulk-download-onlyfans.png",
      contentImageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/bulk-download-onlyfans.webp",
      contentTitle: "Download OnlyFans Videos",
      contentTitleHighlight: "/Pitures in Bulk",
      contentDescription: [
        "iDownerGo OnlyFans Downloader offers downloads in batch mode, you do not have to download video or image from your favorite creators one by one.",
        "By open your subscribed creator homepage, this OnlyFans video downloader could detect and then list all available videos or images from the account, then one-click to download all contents automatically."
      ]
    },
    {
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/subtitle-default-icon.svg",
      activeIcon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/subtitle-active-icon.svg",
      tabTitle: "Save OnlyFans Chat Videos",
      contentImage: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-chat-video.png",
      contentImageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/download-onlyfans-chat-video.webp",
      contentTitle: "Download OnlyFans Message",
      contentTitleHighlight: "/Chat Videos",
      contentDescription: [
        "Sometimes, your favorite creator sends picture or videos through messages/chats on OnlyFans as a bonus privately. What to do if you want to save these contents to your local devices for offline watching?",
        "iDownerGo OnlyFans Downloader will help you, it can download videos from OnlyFans chat without quality loss and download OnlyFans message videos in up to 1080p at 10X speed."
      ]
    }
  ]
};

// Secure Download Section 数据
const SECURE_DOWNLOAD_DATA = {
  subtitleHighlight: "Enjoy ad-free and 100% secure",
  subtitle: "download experience",
  items: [
    "iDownerGo OnlyFans Downloader is ad-free and 100% secure. It can operate securely without storing user data, and with a built-in OnlyFans browser, it can reduce the risk of account exposure.",
    "Plus, iDownerGo provides regular updates to enhance security and fix potential risks."
  ],
  imageSrc: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/enjoy-ad-free-onlyfans.png",
  imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/enjoy-ad-free-onlyfans.webp",
  imageAlt: "enjoy ad free onlyfans",
  imagePosition: "right" as const
};

// User Guide Section 数据
const USER_GUIDE_DATA = {
  mainTitle: "How to use iDownerGo OnlyFans Downloader?",
  windowsDownloadUrl: "/download/?product=idownergo.exe",
  macDownloadUrl: "/download/?product=idownergo.dmg",
  transitionDuration: 500, // 转场动画持续时间（毫秒）
  steps: [
    {
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/select-onlyfans-downloader.png",
      imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/select-onlyfans-downloader.webp",
      title: "Select the iDownerGo OnlyFans Downloader.",
      description: "Double click iDownerGo and then enter onlyfans.com via its built-in browser."
    },
    {
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/play-onlyfans-video.png",
      imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/play-onlyfans-video.webp",
      title: "Play OnlyFans video in iDownerGo.",
      description: "Sign in to the OnlyFans website using your subscription account, and play the video you want to download."
    },
    {
      image: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/save-onlyfans-video.png",
      imageWebp: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/save-onlyfans-video.webp",
      title: "Start to download videos on OnlyFans.",
      description: "Click on the Download button to start downloading the video being played."
    }
  ]
};

// Plan Table 数据
const PLAN_TABLE_DATA = {
  mainTitle: "Compare All Plans",
  headerSectionTitle: "Hot & Popular Features",
  plans: [
    {
      name: "Free",
      downloadUrl: "/download/?product=idownergo.dmg",
      buttonText: "Free Trial",
      isPrimary: false
    },
    {
      name: "Standard",
      downloadUrl: "/download/?product=idownergo.dmg",
      buttonText: "Free Trial",
      isPrimary: false
    },
    {
      name: "Pro",
      icon: "https://idownergo.com/wp-content/themes/idownergo/assets/img/table/pro-icon.svg",
      iconAlt: "pro icon",
      highlightColor: "#4EACEA",
      downloadUrl: "/download/?product=idownergo.dmg",
      buttonText: "Free Trial",
      isPrimary: true
    }
  ],
  features: [
    { name: "Netflix Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Amazon Prime Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Crunchyroll Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "OF Video Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Disney+ Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Hulu Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "HBO Max Downloader", isNew: true, free: null, standard: null, pro: true },
    { name: "Download videos/audio from 10000+ sites", free: "3 files", standard: true, pro: true },
    { name: "Convert music from Apple Music, Spotify, Amazon Music, Deezer and TIDAL", free: "1 file", standard: true, pro: true },
    { name: "Convert file to MP4, MP3 and orginal format", free: "1/3 length", standard: true, pro: true },
    { name: "Download playlist, album, artist and more", free: "1 file", standard: true, pro: true },
    { name: "Convert media to 20+ output formats", free: null, standard: true, pro: true, isLastInGroup: true }
  ]
};

// Testimonials Section 数据
const TESTIMONIALS_DATA = {
  mainTitle: "See Why Users Love iDownerGo OnlyFans Downloader",
  transitionDuration: 500, // 转场动画持续时间（毫秒）
  testimonials: [
    {
      quote: "As a social media marketer, definitely, this is one of the most reliable and professional tools that I have used from 2 years ago and I never separate it ever. Thanks of the professional team of iDownerGo for giving me this experience.",
      name: "Arash Ashouri",
      avatar: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/user1.svg"
    },
    {
      quote: "I'm using the app from one year now. Everything is fine and the service is just the best. If I have problem, the team is always there to help me! 10/10!",
      name: "Denis Hoshikawa",
      avatar: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/user2.svg"
    },
    {
      quote: "I purchased the iDownerGo app lifetime license and I am very satisfied. I save time recording videos and I can save the audio of my favorite songs. I recommend this app to everyone!",
      name: "Christopher Gallegos",
      avatar: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/user3.svg"
    }
  ]
};

// FAQ Section 数据
const FAQ_DATA = {
  mainTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "Q1. Does iDownerGo OnlyFans Downloader have a free trial?",
      answer: "Yes, you can have 1 free download to test the app after you install iDownerGo OnlyFans Video on your computer."
    },
    {
      question: "Q2. Can I download OnlyFans videos without a subscription to OnlyFans?",
      answer: "No, you cannot download OnlyFans videos without an active OnlyFans subscription."
    },
    {
      question: "Q3. Is it legal & safe to use iDownerGo OnlyFans Downloader?",
      answer: "Yes, iDownerGo OnlyFans Downloader is legal for only personal use, and it's secured with a built-in browser without storing use data."
    },
    {
      question: "Q4. Can I watch downloaded OnlyFans videos on other devices?",
      answer: "Yes, you can download OnlyFans videos in MP4 or MKV formats, which can be playable on most devices (phones, PCs, tablets)."
    }
  ]
};

// CTA Section 数据
const CTA_DATA = {
  backgroundImage: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/footer-bg.png",
  logo: "https://idownergo.com/wp-content/themes/idownergo/assets/img/onlyfans-downloader/onlyfans-logo.svg",
  logoAlt: "onlyfans logo",
  title: "Download Your Favorite Videos with iDownerGo OnlyFans Downloader Now!",
  windowsDownloadUrl: "/download/?product=idownergo.exe",
  macDownloadUrl: "/download/?product=idownergo.dmg"
};

export default function Home() {
  return (
    <div>
      <Header />
      
      {/* Hero Banner */}
      <HeroBanner {...HERO_DATA} />
      
      {/* Why Need Section */}
      <ContentBlock {...WHY_NEED_DATA} />
      
      {/* How Can Help Section */}
      <ContentBlock {...HOW_CAN_HELP_DATA} />
      
      {/* Features Tab Section */}
      <FeaturesTab {...FEATURES_TAB_DATA} />
      
      {/* Secure Download Section */}
      <ContentBlock {...SECURE_DOWNLOAD_DATA} />
      
      {/* User Guide Section */}
      <UserGuideSection {...USER_GUIDE_DATA} />
      
      {/* Plan Table Section */}
      <PlanTable {...PLAN_TABLE_DATA} />
      
      {/* Testimonials Section */}
      <TestimonialsSection {...TESTIMONIALS_DATA} />
      
      {/* FAQ Section */}
      <FAQSection {...FAQ_DATA} />
      
      {/* CTA Section */}
      <CTASection {...CTA_DATA} />

      <Footer />
    </div>
  );
}
