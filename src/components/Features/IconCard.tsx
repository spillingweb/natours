import HeadingSmall from "../UI/HeadingSmall";
import styles from "./IconCard.module.scss";
import { cardObject } from "../../dummyData";

const IconCard: React.FC<{cardData: cardObject}> = ({ cardData }) => {
  return (
    <div className={styles.cardContainer}>
      <i className={`icon-basic-${cardData.icon}`}></i>
      <div className="margin-bottom-small">
        <HeadingSmall>{cardData.title}</HeadingSmall>
      </div>
      <p>{cardData.text}</p>
    </div>
  );
};

export default IconCard;
