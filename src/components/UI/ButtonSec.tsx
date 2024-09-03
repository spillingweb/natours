import styles from "./ButtonSec.module.scss";

const ButtonSec: React.FC<{ children: string; href?: string }> = ({
  children,
  href="#",
}) => {
  return (
    <a href={href} className={styles.secondaryButton}>
      {children} &rarr;
    </a>
  );
};

export default ButtonSec;
