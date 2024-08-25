import HeadingSmall from "./HeadingSmall";
import styles from "./IconCard.module.scss";

type CardProps = {
  icon: string;
  title: string;
  text: string;
};

const IconCard: React.FC<CardProps> = ({ icon, title, text }) => {
  return (
    <div className={styles.cardContainer}>
      <i className={`icon-basic-${icon}`}></i>
      <div className="margin-bottom-small">
        <HeadingSmall>{title}</HeadingSmall>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default IconCard;
