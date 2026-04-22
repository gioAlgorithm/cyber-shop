import { generateSEO } from "@/lib/seo";
import { DEFAULT_LOCALE, getTranslator, isSupportedLocale } from "@/locale/i18n";
import type { Metadata } from "next";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const { t } = getTranslator(normalizedLocale);

  return generateSEO({
    title: t("about_title"),
    description: t("about_description"),
    locale: normalizedLocale,
    path: "/about",
  });
}

const AboutPage = async ({ params }: AboutPageProps) => {
  const { locale } = await params;
  const normalizedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const { t } = getTranslator(normalizedLocale);

  return (
    <main className="content-wrapper" style={{ paddingTop: "96px", paddingBottom: "64px" }}>
      <h1>{t("about_heading")}</h1>
      <p style={{ marginTop: "16px", maxWidth: "760px", lineHeight: "1.6" }}>{t("about_body")}</p>
    </main>
  );
};

export default AboutPage;
