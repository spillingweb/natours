import HeadingLarge from "../UI/HeadingLarge";
import styles from "./Stories.module.scss";
import { BG_VIDEOS } from "../../dummyData";
import { DUMMY_STORIES } from "../../dummyData";
import UserStory from "./UserStory";
import ButtonSec from "../UI/ButtonSec";
import BgVideo from "./BgVideo";



const Stories: React.FC = () => {
  return (
    <section id="stories" className={styles.stories}>
      <BgVideo videoArray={BG_VIDEOS} />
      <div className="center-text">
        <HeadingLarge className="margin-bottom-large">
          We Make People Genuinely Happy
        </HeadingLarge>
      </div>
      <div className={`${styles.userStories} margin-bottom-large`}>
        {DUMMY_STORIES.map((story) => (
          <UserStory
            key={story.name}
            title={story.title}
            name={story.name}
            image={story.image.src}
            alt={story.image.alt}
            text={story.text}
          />
        ))}
      </div>
      <div className="center-text">
        <ButtonSec>Read all stories</ButtonSec>
      </div>
    </section>
  );
};
export default Stories;
