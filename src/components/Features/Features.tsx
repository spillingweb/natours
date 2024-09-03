import styles from "./Features.module.scss";
import IconCard from "./IconCard";
import { DUMMY_CARDS } from "../../dummyData";

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.featureCards}>
        {DUMMY_CARDS.map((card) => (
          <IconCard key={card.id} cardData={card} />
        ))}
      </div>
    </section>
  );
};

export default Features;
