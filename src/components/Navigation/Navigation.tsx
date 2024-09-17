import { useState } from "react";
import styles from "./Navigation.module.scss";

type NavLink = {
  href: string;
  text: string;
};

const NAVLINKS: NavLink[] = [
  {
    href: "#about",
    text: "About Natours",
  },
  {
    href: "#features",
    text: "Your benefits",
  },
  {
    href: "#tours",
    text: "Popular Tours",
  },
  {
    href: "#stories",
    text: "Stories",
  },
  {
    href: "#booking",
    text: "Booking",
  },
];

const Navigation: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  function toggleHamburgerMenu() {
    setNavOpen((prev) => !prev);
  }

  const navClass = navOpen ? styles.navOpen : "";

  return (
    <div id="navigation" className={navClass}>
      <div
        tabIndex={0}
        className={styles.hamburger}
        onClick={toggleHamburgerMenu}
      >
        <span className={styles.line}>&nbsp;</span>
      </div>
      <div className={styles.navBackground}>&nbsp;</div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {NAVLINKS.map((navLink) => (
            <li key={navLink.href} onClick={toggleHamburgerMenu}>
              <a href={navLink.href}>{navLink.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
