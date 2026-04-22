import Navbar from "@/components/Navbar/Navbar";
import { SUPPORTED_LOCALES, isSupportedLocale, type SupportedLocale } from "@/locale/i18n";
import { notFound } from "next/navigation";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const normalizedLocale = locale as SupportedLocale;

  return (
    <>
      <Navbar locale={normalizedLocale} />
      {children}
    </>
  );
};

export default LocaleLayout;
