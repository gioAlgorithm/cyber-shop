import CardContainer from "@/components/CardContainer/CardContainer";
import MainSearch from "@/components/MainSearch/MainSearch";
import { generateSEO } from "@/lib/seo";
import { DEFAULT_LOCALE, getTranslator, isSupportedLocale } from "@/locale/i18n";
import type { Metadata } from "next";
import styles from "../page.module.scss";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const { t } = getTranslator(normalizedLocale);

  return generateSEO({
    title: t("home_title"),
    description: t("home_description"),
    locale: normalizedLocale,
    path: "",
  });
}

const LocalizedHomePage = async ({ params }: LocalePageProps) => {
  const { locale } = await params;
  const { t } = getTranslator(isSupportedLocale(locale) ? locale : undefined);

  return (
    <main className={styles.main}>
      <div className={`content-wrapper ${styles.inner}`}>
        <MainSearch />
        <h1 className={styles.vip}>{t("page_vip")}</h1>
        <CardContainer />
      </div>
    </main>
  );
};

export default LocalizedHomePage;
