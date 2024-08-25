import styles from "./Features.module.scss";
import IconCard from "./UI/IconCard";

const DUMMY_CARDS = [
  {
    id: "card1",
    icon: "world",
    title: "Explore The World",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
  {
    id: "card2",
    icon: "compass",
    title: "Meet Nature",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
  {
    id: "card3",
    icon: "map",
    title: "Find Your Way",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
  {
    id: "card4",
    icon: "heart",
    title: "Live a Healthier Life",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
];

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className={styles.featureCards}>
        {DUMMY_CARDS.map((card) => (
          <IconCard key={card.id} icon={card.icon} title={card.title} text={card.text} />
        ))}
      </div>
    </section>
  );
};

export default Features;
