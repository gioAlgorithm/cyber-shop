"use client";

import { IconArrowDown, IconHeart, IconPlusCircle } from "@/icons";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <div className={styles.container}>
    <div className={`content-wrapper ${styles.inner}`}>
      <div className={styles.left}>
        <Logo />
        <div className={styles.allCategory}>
          <h4>კატეგორიები</h4>
          <IconArrowDown />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.addButton}>
          <IconPlusCircle />
          <h4>დამატება</h4>
        </div>
        <Search />
        <div className={styles.favorite}>
          <IconHeart />
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
