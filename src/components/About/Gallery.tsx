import styles from "./Gallery.module.scss";
import { photoObject } from "../../dummyData";

const Gallery: React.FC<{ images: photoObject[] }> = ({ images }) => {
  return (
    <div className={styles.composition}>
      {images.map((image, index) => {
        let imageStyle = "";

        switch (index) {
          case 0:
            imageStyle = styles.image1;
            break;
          case 1:
            imageStyle = styles.image2;
            break;
          case 2:
            imageStyle = styles.image3;
            break;
          default:
            imageStyle = "";
        }

        return (
          <img
            key={image.id}
            className={`${styles.galleryImage} ${imageStyle}`}
            src={image.src}
            alt={image.alt}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
