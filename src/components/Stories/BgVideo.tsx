import styles from "./BgVideo.module.scss";

type videoType = {
  src: string;
  type: string;
};

const BgVideo: React.FC<{ videoArray: videoType[] }> = ({ videoArray }) => {
  return (
    <video autoPlay loop muted className={styles.backgroundVideo}>
      {videoArray.map((video) => (
        <source key={video.src} src={video.src} type={video.type} />
      ))}
      Your browser is not supported!
    </video>
  );
};

export default BgVideo;
