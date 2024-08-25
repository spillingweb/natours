import styles from "./HeadingLarge.module.scss";

const HeadingLarge: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  const classes = `${styles.headingLarge} ${className ? className : ''}`

  return <h2 className={classes}>{children}</h2>;
};

export default HeadingLarge;
