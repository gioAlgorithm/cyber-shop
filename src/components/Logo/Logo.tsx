"use client";

import Link from "next/link";
import useTranslation from "@/hooks/useTranslation";
import styles from "./Logo.module.scss";

const Logo = () => {
  const { t } = useTranslation();

  return (
    <Link className={styles.logo} href="/">
      {t("logo_brand")}
    </Link>
  );
};

export default Logo;
