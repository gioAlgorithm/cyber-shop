"use client";

import Image from "next/image";
import { IconEye, IconHeart, IconLocation } from "@/icons";
import { useFormatNumberWithSpaces } from "@/hooks/useFormatNumberWithSpaces";
import useTranslation from "@/hooks/useTranslation";
import type { CardProps } from "./card.interface";
import Section from "./Section/Section";
import styles from "./Card.module.scss";

const Card = ({
  image,
  name,
  description,
  location,
  type,
  industry,
  monetization,
  siteAge,
  netProfit,
  price,
  link,
  category,
}: CardProps) => {
  const formatNumberWithSpaces = useFormatNumberWithSpaces();
  const { t } = useTranslation();

  const imageAlt = `${name} — ${t("card_image_alt")}`;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            priority
            width={300}
            height={270}
            alt={imageAlt}
          />
        </div>
        <div className={styles.middleHolder}>
          <h1 className={styles.title}>{name}</h1>

          <div className={styles.categoryHolder}>
            <div className={styles.category}>{category}</div>
            <div className={styles.location}>
              <IconLocation />
              <h4>{location}</h4>
            </div>
          </div>

          <p className={styles.description}>{description}</p>

          <div className={styles.sectionHolder}>
            <Section title={t("card_type")} name={type} />
            <Section title={t("card_industry")} name={industry} />
            <Section title={t("card_monetization")} name={monetization} />
            <Section
              title={t("card_age")}
              name={`${siteAge} ${t("card_years_suffix")}`}
            />
            <Section
              title={t("card_revenue")}
              name={`$ ${formatNumberWithSpaces(netProfit)}`}
            />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.priceHolder}>
          <h3 className={styles.priceTitle}>{t("card_price")}</h3>
          <h1 className={styles.price}>
            USD ${formatNumberWithSpaces(price)}
          </h1>
        </div>
        <div className={styles.buttonHolder}>
          <button type="button" className={styles.favoriteButton}>
            <IconHeart />
            <h3>{t("card_favorite")}</h3>
          </button>
          {link ? (
            <a
              href={link}
              className={styles.viewButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconEye />
              <h3>{t("card_view")}</h3>
            </a>
          ) : (
            <button type="button" className={styles.viewButton}>
              <IconEye />
              <h3>{t("card_view")}</h3>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
