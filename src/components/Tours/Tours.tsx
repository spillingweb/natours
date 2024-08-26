import HeadingLarge from "../UI/HeadingLarge";
import styles from "./Tours.module.scss";
import TourCard from "./TourCard";
import { DUMMY_TOURS } from "../../tours";
import Button from "../UI/Button";

const Tours: React.FC = () => {
  return (
    <section className={`${styles.tours} center-text`}>
      <HeadingLarge className="margin-bottom-large">
        Most Popular Tours
      </HeadingLarge>

      <div className={`${styles.tourCards} margin-bottom-large`}>
        {DUMMY_TOURS.map((tour) => (
          <TourCard key={tour.id} tourData={tour} />
        ))}
      </div>
      <Button color="green">Discover all Tours</Button>
    </section>
  );
};

export default Tours;
