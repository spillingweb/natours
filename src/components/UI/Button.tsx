import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  element: "button" | "anchor";
  color: string;
  href?: string;
  animated?: boolean;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const colorClass = props.color === "white" ? styles.white : styles.green;
  const animatedClass = props.animated ? styles.animated : "";

  const className = `${styles.btn} ${colorClass} ${animatedClass}`;

  if (props.element === "button") {
    return <button className={className}>{props.children}</button>;
  }

  return <a href={props.href} className={className}>{props.children}</a>;

};

export default Button;
