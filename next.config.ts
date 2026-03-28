/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    locales: ["ka-GE", "en"],
    defaultLocale: "ka-GE",
    localeDetection: false,
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config: any) {
    const rules = config.module?.rules || [];

    const fileLoaderRule = rules.find((rule: any) => {
      if (rule && typeof rule === "object" && "test" in rule) {
        const testRegex = rule.test as RegExp;
        return testRegex?.test?.(".svg");
      }
      return false;
    });

    if (fileLoaderRule && typeof fileLoaderRule === "object") {
      rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] },
          use: ["@svgr/webpack"],
        },
      );

      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
