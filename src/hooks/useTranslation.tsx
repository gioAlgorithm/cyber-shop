"use client";

import {
  DEFAULT_LOCALE,
  getTranslator,
  isSupportedLocale,
  type SupportedLocale,
} from "@/locale/i18n";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

const replacePathLocale = (
  pathname: string,
  currentLocale: SupportedLocale,
  nextLocale: SupportedLocale,
): string => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (segments[0] === currentLocale) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }

  return `/${nextLocale}/${segments.join("/")}`;
};

const useTranslation = () => {
  const params = useParams<{ locale?: string }>();
  const pathname = usePathname();
  const router = useRouter();
  const routeLocale = params?.locale;
  const locale: SupportedLocale =
    routeLocale && isSupportedLocale(routeLocale) ? routeLocale : DEFAULT_LOCALE;

  const translator = useMemo(() => getTranslator(locale), [locale]);

  const setLocale = (nextLocale: string) => {
    if (!isSupportedLocale(nextLocale) || nextLocale === locale) {
      return;
    }

    const nextPath = replacePathLocale(pathname, locale, nextLocale);
    router.replace(nextPath, { scroll: false });
  };

  return { ...translator, setLocale };
};

export default useTranslation;
