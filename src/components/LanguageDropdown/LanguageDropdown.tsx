"use client";

import { IconArrowDown } from "@/icons";
import useOutsideClick from "@/hooks/useOutsideClick";
import useTranslation from "@/hooks/useTranslation";
import { useCallback, useRef, useState } from "react";
import styles from "./LanguageDropdown.module.scss";

const LanguageDropdown = () => {
  const { locale, setLocale, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options = [
    { code: "en" as const, label: t("lang_name_en") },
    { code: "ka-GE" as const, label: t("lang_name_ka") },
  ] as const;

  const close = useCallback(() => {
    setOpen(false);
  }, []);
  useOutsideClick(ref, close, open);

  const current = options.find((o) => o.code === locale) ?? options[0];

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => {
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("lang_select_aria")}
      >
        <span className={styles.triggerLabel}>{current.label}</span>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}>
          <IconArrowDown />
        </span>
      </button>
      {open ? (
        <ul className={styles.menu} role="listbox">
          {options.map((opt) => {
            return (
              <li key={opt.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={opt.code === locale}
                  className={`${styles.option} ${opt.code === locale ? styles.optionActive : ""}`}
                  onClick={() => {
                    setLocale(opt.code);
                    close();
                  }}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default LanguageDropdown;
