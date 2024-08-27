import styles from "./TourCard.module.scss";
import { tourObject } from "../../dummyData";
import Button from "../UI/Button";

const TourCard: React.FC<{ tourData: tourObject }> = ({ tourData }) => {
  let backgroundStyle;

  switch (tourData.id) {
    case "tour1":
      backgroundStyle = styles.tour1;
      break;
    case "tour2":
      backgroundStyle = styles.tour2;
      break;
    case "tour3":
      backgroundStyle = styles.tour3;
  }

  return (
    <div className={`${styles.container} ${backgroundStyle}`}>
      <div className={`${styles.cardSide} ${styles.front}`}>
        <div className={styles.cardPicture}>&nbsp;</div>
        <h4 className={styles.cardTitle}>
          <span>{tourData.title}</span>
        </h4>
        <ul className={styles.featuresList}>
          <li>{tourData.days} day tours</li>
          <li>Up to {tourData.noPeople} people</li>
          <li>{tourData.noGuides} guides</li>
          <li>
            Sleep in{" "}
            {tourData.accomodation === "hotel"
              ? "cozy hotels"
              : tourData.accomodation === "tent"
              ? "provided tents"
              : tourData.accomodation}
          </li>
          <li>Difficulty: {tourData.difficulty}</li>
        </ul>
      </div>
      <div className={`${styles.cardSide} ${styles.back}`}>
        <div className={styles.price}>
          ONLY <span>${tourData.price}</span>
        </div>
        <Button color="white">Book Now!</Button>
      </div>
    </div>
  );
};

export default TourCard;
