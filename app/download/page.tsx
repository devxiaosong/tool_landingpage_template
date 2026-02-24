import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DownloadContent from "../components/DownloadContent";

export const metadata: Metadata = {
  title: "Download iDownerGo — Free Video Downloader for Windows & Mac",
  description:
    "Download iDownerGo for Windows or Mac for free. The most powerful video downloader supporting Netflix, OnlyFans, Amazon Prime, Disney+ and 10,000+ sites.",
  alternates: {
    canonical: "https://idownergo.com/download/",
  },
  openGraph: {
    title: "Download iDownerGo — Free Video Downloader for Windows & Mac",
    description:
      "Download iDownerGo for Windows or Mac for free. Supports Netflix, OnlyFans, Amazon Prime, Disney+ and 10,000+ sites.",
    url: "https://idownergo.com/download/",
  },
};

export default function DownloadPage() {
  return (
    <div>
      <Header />
      <DownloadContent />
      <Footer />
    </div>
  );
}
