import { PropsWithChildren } from "react";
import classes from "./Button.module.scss";

type ButtonProps = {
  color: string;
  animated: boolean;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const colorClass = props.color === "white" ? classes.white : classes.green;
  const animatedClass = props.animated ? classes.animated : '';

  return (
    <a
      href="#"
      className={`${classes.btn} ${colorClass} ${animatedClass}`}
    >
      {props.children}
    </a>
  );
};

export default Button;
