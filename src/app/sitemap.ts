import { buildLocalizedPath, getSiteUrl } from "@/lib/seo";
import { SUPPORTED_LOCALES } from "@/locale/i18n";
import type { MetadataRoute } from "next";

const STATIC_ROUTES = ["", "/about"];
const LAST_MODIFIED = new Date("2026-04-06T00:00:00.000Z");

const toAbsolute = (path: string): string => {
  return new URL(path, getSiteUrl()).toString();
};

const sitemap = (): MetadataRoute.Sitemap => {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of SUPPORTED_LOCALES) {
    for (const route of STATIC_ROUTES) {
      const url = toAbsolute(buildLocalizedPath(locale, route));
      entries.push({
        url,
        alternates: {
          languages: {
            en: toAbsolute(buildLocalizedPath("en", route)),
            ka: toAbsolute(buildLocalizedPath("ka-GE", route)),
          },
        },
        lastModified: LAST_MODIFIED,
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.7,
      });
    }
  }

  return entries;
};

export default sitemap;
