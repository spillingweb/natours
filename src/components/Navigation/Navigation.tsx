import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  return (
    <div id="navigation">
      <input type="checkbox" id="navCheck" className={styles.navCheckbox} />
      <label htmlFor="navCheck" className={styles.hamburger}>
          <span className={styles.line}>&nbsp;</span>
      </label>
      <div className={styles.navBackground}>&nbsp;</div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li>
            <a href="#about">About Natours</a>
          </li>
          <li>
            <a href="#features">Your Benefits</a>
          </li>
          <li>
            <a href="#tours">Popular Tours</a>
          </li>
          <li>
            <a href="#stories">Stories</a>
          </li>
          <li>
            <a href="#booking">Book Now</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
