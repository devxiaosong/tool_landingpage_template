import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/download/", "/api/"],
      },
    ],
    sitemap: "https://idownergo.com/sitemap.xml",
  };
}
