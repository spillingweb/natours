import HeadingSmall from "../UI/HeadingSmall";
import styles from "./UserStory.module.scss";

const UserStory: React.FC<{
  title: string;
  name: string;
  text: string;
  image: string;
  alt: string;
}> = ({ title, name, text, image, alt }) => {
  return (
    <div className={styles.storyContainer}>
      <figure className={styles.imgContainer}>
        <img src={image} alt={alt} className={styles.image} />
        <figcaption className={styles.name}>{name}</figcaption>
      </figure>
      <div className={styles.textContainer}>
        <HeadingSmall className="margin-bottom-small">{title}</HeadingSmall>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default UserStory;
