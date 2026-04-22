import { SUPPORTED_LOCALES, type SupportedLocale } from "@/locale/i18n";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const DEFAULT_OG_IMAGE = "/og/default.png";

const toAbsoluteUrl = (path: string): string => {
  return new URL(path || "/", SITE_URL).toString();
};

const normalizePath = (path: string): string => {
  if (!path || path === "/") {
    return "";
  }
  return path.startsWith("/") ? path : `/${path}`;
};

export const buildLocalizedPath = (locale: SupportedLocale, path: string): string => {
  const normalizedPath = normalizePath(path);
  return `/${locale}${normalizedPath}`;
};

type GenerateSeoParams = {
  title: string;
  description: string;
  locale: SupportedLocale;
  path?: string;
  imagePath?: string;
  shouldIndex?: boolean;
};

export const generateSEO = ({
  title,
  description,
  locale,
  path = "",
  imagePath = DEFAULT_OG_IMAGE,
  shouldIndex = true,
}: GenerateSeoParams): Metadata => {
  const canonicalPath = buildLocalizedPath(locale, path);
  const canonical = toAbsoluteUrl(canonicalPath);
  const imageUrl = toAbsoluteUrl(imagePath);

  const languageAlternates = Object.fromEntries(
    SUPPORTED_LOCALES.map((supportedLocale) => [
      supportedLocale === "ka-GE" ? "ka" : supportedLocale,
      buildLocalizedPath(supportedLocale, path),
    ]),
  );

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languageAlternates,
        "x-default": "/",
      },
    },
    robots: {
      index: shouldIndex,
      follow: shouldIndex,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: locale === "ka-GE" ? "ka_GE" : "en_US",
      type: "website",
      siteName: "Sell-Site",
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
};

export const getSiteUrl = (): string => SITE_URL;
