import styles from "./Footer.module.scss";
import LogoSmall1x from "../../assets/img/logo-green-small-1x.png";
import LogoSmall2x from "../../assets/img/logo-green-small-2x.png";
import LogoBig1x from "../../assets/img/logo-green-1x.png";
import LogoBig2x from "../../assets/img/logo-green-2x.png";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={`${styles.logoContainer} margin-bottom-large`}>
        <picture>
          <source
            srcSet={`${LogoSmall1x} 1x, ${LogoSmall2x} 2x`}
            media="(max-width: 37.5em) "
          />
          <img
            srcSet={`${LogoBig1x} 1x, ${LogoBig2x} 2x`}
            alt="Natours Logo Green"
            className={styles.logo}
            src={LogoBig2x}
          />
        </picture>
      </div>
      <div className={styles.info}>
        <div className={styles.infoSection}>
          <ul className={styles.footerNav}>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
        <div className={styles.infoSection}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            libero maxime facilis omnis vero magnam nam animi saepe cum dolorem
            ex fuga accusamus commodi modi sit, error a temporibus deserunt.
            Dicta perspiciatis, culpa est eveniet, necessitatibus recusandae ut
            delectus, aut labore rem atque dolorem illo minima debitis sit
            suscipit optio. Animi velit fuga totam explicabo doloribus
            voluptates optio sequi sed?
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
