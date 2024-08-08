import Logo from "../assets/img/logo-white.png";
import Button from "./UI/Button";
import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoBox}>
        <img src={Logo} alt="Natours Logo" className={classes.logo} />
      </div>
      <div className={classes.textBox}>
        <h1 className={classes.heading}>
          <span className={classes.headingMain}>Outdoors</span>
          <span className={classes.headingSub}>is where life happens</span>
        </h1>
        <Button color="white" animated>
          Discover our tours
        </Button>
      </div>
    </header>
  );
};

export default Header;
