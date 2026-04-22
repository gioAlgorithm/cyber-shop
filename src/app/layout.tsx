import { getSiteUrl } from "@/lib/seo";
import { DEFAULT_LOCALE, LOCALE_HTML_LANG, isSupportedLocale } from "@/locale/i18n";
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "../fonts.scss";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Sell-Site",
    template: "%s | Sell-Site",
  },
  description: "Sell-Site marketplace",
  applicationName: "Sell-Site",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestLocale = (await headers()).get("x-locale") ?? DEFAULT_LOCALE;
  const htmlLang = isSupportedLocale(requestLocale)
    ? LOCALE_HTML_LANG[requestLocale]
    : LOCALE_HTML_LANG[DEFAULT_LOCALE];

  return (
    <html lang={htmlLang}>
      <body>{children}</body>
    </html>
  );
}
