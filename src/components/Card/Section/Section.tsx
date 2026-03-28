import styles from "./Section.module.scss";

type SectionProps = {
  title: string;
  name: string;
};

const Section = ({ title, name }: SectionProps) => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <h4>{name}</h4>
    </div>
  );
};

export default Section;
