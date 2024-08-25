import styles from "./ButtonSec.module.scss";

const ButtonSec: React.FC<{ children: string }> = ({ children }) => {
  return <a href="#" className={styles.secondaryButton}>{children} &rarr;</a>;
};

export default ButtonSec;