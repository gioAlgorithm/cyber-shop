"use client";

import { IconArrowDown, IconHeart, IconPlusCircle } from "@/icons";
import useTranslation from "@/hooks/useTranslation";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={`content-wrapper ${styles.inner}`}>
        <div className={styles.left}>
          <Logo />
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
