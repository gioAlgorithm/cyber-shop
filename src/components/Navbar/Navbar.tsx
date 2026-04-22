import { IconArrowDown, IconHeart, IconPlusCircle } from "@/icons";
import { getTranslator, type SupportedLocale } from "@/locale/i18n";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.scss";

type NavbarProps = {
  locale: SupportedLocale;
};

const Navbar = ({ locale }: NavbarProps) => {
  const { t } = getTranslator(locale);

  return (
    <div className={styles.container}>
      <div className={`content-wrapper ${styles.inner}`}>
        <div className={styles.left}>
          <Logo locale={locale} />
          <div className={styles.allCategory}>
            <h4>{t("nav_categories")}</h4>
            <IconArrowDown />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.addButton}>
            <IconPlusCircle />
            <h4>{t("nav_add")}</h4>
          </div>
          <LanguageDropdown />
          <Search />
          <div className={styles.favorite} aria-label={t("nav_favorites_aria")}>
            <IconHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
