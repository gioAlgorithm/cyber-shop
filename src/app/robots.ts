import { getSiteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    host: getSiteUrl(),
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
};

export default robots;
