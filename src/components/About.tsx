import styles from "./About.module.scss";
import HeadingLarge from "./UI/HeadingLarge";
import HeadingSmall from "./UI/HeadingSmall";
import Photo1 from "../assets/img/nat-1-large.jpg";
import Photo2 from "../assets/img/nat-2-large.jpg";
import Photo3 from "../assets/img/nat-3-large.jpg";
import ButtonSec from "./UI/ButtonSec";
import Gallery from "./UI/Gallery";

const DUMMY_PHOTOS = [
  {
    id: "photo1",
    src: Photo1,
    alt: "Mountains nature",
  },
  {
    id: "photo2",
    src: Photo2,
    alt: "Bicycling in nature",
  },
  {
    id: "photo3",
    src: Photo3,
    alt: "Hiking in nature",
  },
];

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className="center-text">
        <HeadingLarge className="margin-bottom-large">Exciting Tours For Adventurous People</HeadingLarge>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <HeadingSmall className="margin-bottom-small">
            You're Going To Fall In Love With Nature
          </HeadingSmall>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>
          <HeadingSmall className="margin-bottom-small">
            Live adventures like you never have before
          </HeadingSmall>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </p>
          <ButtonSec>Learn More</ButtonSec>
        </div>
        <div className={styles.photos}>
          <Gallery images={DUMMY_PHOTOS} />
        </div>
      </div>
    </section>
  );
};

export default About;
