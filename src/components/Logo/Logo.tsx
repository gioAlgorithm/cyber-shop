import { getTranslator, type SupportedLocale } from "@/locale/i18n";
import Link from "next/link";
import styles from "./Logo.module.scss";

type LogoProps = {
  locale: SupportedLocale;
};

const Logo = ({ locale }: LogoProps) => {
  const { t } = getTranslator(locale);

  return (
    <Link className={styles.logo} href={`/${locale}`}>
      {t("logo_brand")}
    </Link>
  );
};

export default Logo;
