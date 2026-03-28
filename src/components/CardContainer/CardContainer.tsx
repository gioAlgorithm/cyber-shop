import Card from "@/components/Card/Card";
import { data } from "@/data";
import styles from "./CardContainer.module.scss";

const CardContainer = () => {
  return (
    <div className={styles.root}>
      {data.map((product) => {
        return <Card key={product.id} {...product} />;
      })}
    </div>
  );
};

export default CardContainer;
