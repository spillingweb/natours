import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  color: string;
  animated: boolean;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const colorClass = props.color === "white" ? styles.white : styles.green;
  const animatedClass = props.animated ? styles.animated : '';

  return (
    <a
      href="#"
      className={`${styles.btn} ${colorClass} ${animatedClass}`}
    >
      {props.children}
    </a>
  );
};

export default Button;
