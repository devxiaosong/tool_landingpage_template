import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "iDownerGo — Best Video Downloader for Netflix, OnlyFans & More",
    template: "%s — iDownerGo",
  },
  description:
    "iDownerGo is a professional video downloader supporting Netflix, OnlyFans, Amazon Prime, Disney+ and 10,000+ sites. Download videos in 1080p HD with one click.",
  metadataBase: new URL("https://idownergo.com"),
  openGraph: {
    siteName: "iDownerGo",
    type: "website",
    images: [
      {
        url: "https://idownergo.com/wp-content/themes/idownergo/assets/img/og-default.png",
        width: 1200,
        height: 630,
        alt: "iDownerGo Video Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://idownergo.com/wp-content/themes/idownergo/assets/img/og-default.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
