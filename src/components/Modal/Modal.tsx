import styles from "./Modal.module.scss";
import HeadingLarge from "../UI/HeadingLarge";
import HeadingSmall from "../UI/HeadingSmall";
import Button from "../UI/Button";

const Modal: React.FC = () => {
  return (
    <div className={styles.modal} id="modal">
      <div className={styles.modalContainer}>
        <div className={styles.imgGallery}>
          <div className={styles.img1}>&nbsp;</div>
          <div className={styles.img2}>&nbsp;</div>
        </div>
        <div className={styles.modalContent}>
          <a href="#tours" className={styles.modalClose}>&times;</a>
          <HeadingLarge className="margin-bottom-small">
            Start Booking Now
          </HeadingLarge>
          <HeadingSmall className="margin-bottom-small">
            Important &ndash; Please read these terms and conditions first
          </HeadingSmall>
          <p className="margin-bottom-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            molestias unde ducimus incidunt sequi nesciunt, repudiandae, beatae
            officiis, aut voluptate est dolor ab animi eos voluptatum maxime
            consectetur inventore repellat? Exercitationem quia tempora illum
            accusamus a vel fugiat eos, nemo repellendus rerum reprehenderit,
            commodi maiores at enim voluptate unde. Id ducimus animi reiciendis
            esse, assumenda eaque voluptatibus commodi earum aliquid. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure
            nihil deleniti, alias, ea corporis itaque numquam saepe aperiam sit
            esse expedita delectus dignissimos dolores sed ratione porro ducimus
            possimus.
          </p>
          <form className={styles.submitButton}>
            <Button color="green" element="button">
              Book Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
