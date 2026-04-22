import en from "./en";
import ka from "./ka";
import type { TranslateData } from "./translate.interface";

export const SUPPORTED_LOCALES = ["en", "ka-GE"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: SupportedLocale = "ka-GE";
export const LOCALE_HTML_LANG: Record<SupportedLocale, string> = {
  en: "en",
  "ka-GE": "ka",
};

type TranslationKeys = keyof typeof en;

export const LOCALE_LABEL_KEY: Record<SupportedLocale, TranslationKeys> = {
  en: "lang_name_en",
  "ka-GE": "lang_name_ka",
};

const LOCALE_DICTIONARIES: Record<SupportedLocale, Record<TranslationKeys, string>> = {
  en,
  "ka-GE": ka,
};

const TRANSLATE_DATA_KEY_BY_LOCALE: Record<SupportedLocale, keyof TranslateData<unknown>> = {
  en: "en",
  "ka-GE": "ka",
};

export const isSupportedLocale = (locale: string): locale is SupportedLocale => {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
};

export const normalizeLocale = (locale?: string): SupportedLocale => {
  if (locale && isSupportedLocale(locale)) {
    return locale;
  }
  return DEFAULT_LOCALE;
};

export const getTranslator = (locale?: string) => {
  const resolvedLocale = normalizeLocale(locale);

  const t = (key: TranslationKeys): string => {
    return LOCALE_DICTIONARIES[resolvedLocale][key] ?? en[key] ?? key;
  };

  const tData = <T>(data: TranslateData<T>): T => {
    const dataKey = TRANSLATE_DATA_KEY_BY_LOCALE[resolvedLocale] as keyof TranslateData<T>;
    return data[dataKey] ?? data.en;
  };

  return { locale: resolvedLocale, t, tData };
};

export type { TranslationKeys };
