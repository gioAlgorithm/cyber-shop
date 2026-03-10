"use client";

import Image from "next/image";
import useTranslation from "../hooks/useTranslation";
import styles from "./page.module.scss";

export default function Home() {
  const { t, locale, setLocale } = useTranslation();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <span>Current language: {locale}</span>
          <button type="button" onClick={() => setLocale("en")}>
            EN
          </button>
          <button type="button" onClick={() => setLocale("ka-GE")}>
            KA
          </button>
        </div>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>{t("home_title")}</h1>
          <p>{t("home_description")}</p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            {t("home_deployCta")}
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("home_docsCta")}
          </a>
        </div>
      </main>
    </div>
  );
}
