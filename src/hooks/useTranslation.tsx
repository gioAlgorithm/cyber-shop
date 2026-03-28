"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import en from "../locale/en";
import ka from "../locale/ka";
import { TranslateData } from "../locale/translate.interface";

// Define the translation keys type based on the en object
type TranslationKeys = keyof typeof en;

interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
  isLoaded: boolean;
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<string>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load locale from localStorage on mount
    const saved = localStorage.getItem("locale");
    if (saved && (saved === "en" || saved === "ka-GE")) {
      setLocale(saved);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // Persist locale
      localStorage.setItem("locale", locale);

      // Reflect locale on the <html> element for styling (fonts, etc.)
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-locale", locale);
        document.documentElement.lang = locale === "ka-GE" ? "ka" : "en";
      }
    }
  }, [locale, isLoaded]);

  // Don't render children until locale is loaded from localStorage
  if (!isLoaded) {
    return null;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isLoaded }}>
      {children}
    </LocaleContext.Provider>
  );
};

const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
};

const getWordByLocale = (key: TranslationKeys, locale?: string): string | undefined => {
  switch (locale) {
    case "en":
      return en[key];
    case "ka-GE":
      return ka[key];
    default:
      return undefined;
  }
};

const getDataByLocale = <T,>(data: TranslateData<T>, locale?: string): T | undefined => {
  switch (locale) {
    case "en":
      return data.en;
    case "ka-GE":
      return data.ka;
    default:
      return undefined;
  }
};

const useTranslation = () => {
  const { locale, setLocale } = useLocale();

  const t = (key: TranslationKeys): string => {
    const word = getWordByLocale(key, locale) ?? getWordByLocale(key, "en");
    if (!word) {
      console.warn(`No translation found for key '${key}' in locale '${locale}'`);
      return key;
    }
    return word;
  };

  const tData = <T,>(data: TranslateData<T>): T | undefined => {
    return getDataByLocale(data, locale) ?? getDataByLocale(data, "en");
  };

  return { locale, t, tData, setLocale };
};

export default useTranslation;
