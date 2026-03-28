"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import useTranslation from "@/hooks/useTranslation";
import { IconLeftLongArrow, IconSearch } from "@/icons";
import { useRef, useState } from "react";
import styles from "./Search.module.scss";

const Search = () => {
  const { t } = useTranslation();
  const [showSearch, setShowSearch] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(
    menuRef,
    () => {
      setShowSearch(false);
    },
    showSearch,
  );

  return (
    <>
      <div
        className={styles.search}
        onClick={() => {
          setShowSearch(true);
        }}
      >
        <IconSearch />
      </div>
      <div
        className={`${styles.responsiveSearch} ${showSearch ? styles.show : ""}`}
        ref={menuRef}
      >
        <button
          type="button"
          className={styles.close}
          onClick={() => {
            setShowSearch(false);
          }}
        >
          <IconLeftLongArrow />
        </button>
        <div className={styles.innerSearch}>
          <input type="text" placeholder={t("navbar_search_placeholder")} />
          <button type="button" className={styles.searchButton}>
            <IconSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
