import Logo from "../../assets/img/logo-white.png";
import Button from "../UI/Button";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src={Logo} alt="Natours Logo" className={styles.logo} />
      </div>
      <div className={styles.textBox}>
        <h1 className={styles.heading}>
          <span className={styles.headingMain}>Outdoors</span>
          <span className={styles.headingSub}>is where life happens</span>
        </h1>
        <Button color="white" animated>
          Discover our tours
        </Button>
      </div>
    </header>
  );
};

export default Header;
