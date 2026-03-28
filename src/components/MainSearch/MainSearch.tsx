"use client";

import { IconSearch } from "@/icons";
import useTranslation from "@/hooks/useTranslation";
import styles from "./MainSearch.module.scss";

const MainSearch = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("main_search_title")}</h1>

      <div className={styles.searchHolder}>
        <div className={styles.search}>
          <input type="text" placeholder={t("main_search_placeholder")} />
          <button
            type="button"
            className={styles.responsiveButton}
            aria-label={t("main_search_aria_short")}
          >
            <IconSearch />
          </button>
        </div>
        <button type="button" className={styles.searchButton}>
          <IconSearch />
          <h3>{t("main_search_button")}</h3>
        </button>
      </div>
    </div>
  );
};

export default MainSearch;
