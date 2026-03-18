"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { IconLeftLongArrow, IconSearch } from "@/icons";
import { useRef, useState } from "react";
import styles from "./Search.module.scss";

export default function Search() {
  const [showSearch, setShowSearch] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(menuRef, () => setShowSearch(false), showSearch);

  return (
    <>
      <div className={styles.search} onClick={() => setShowSearch(true)}>
        <IconSearch />
      </div>
      <div className={`${styles.responsiveSearch} ${showSearch ? styles.show : ""}`} ref={menuRef}>
        <button className={styles.close} onClick={() => setShowSearch(false)}>
          <IconLeftLongArrow />
        </button>
        <div className={styles.innerSearch}>
          <input type="text" placeholder="მოძებნე სასურველი ბიზნესი..." />
          <button className={styles.searchButton}>
            <IconSearch />
          </button>
        </div>
      </div>
    </>
  );
}
