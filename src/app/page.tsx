"use client";

import CardContainer from "@/components/CardContainer/CardContainer";
import MainSearch from "@/components/MainSearch/MainSearch";
import useTranslation from "@/hooks/useTranslation";
import styles from "./page.module.scss";

const Home = () => {
  const { t } = useTranslation();

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

export default Home;
