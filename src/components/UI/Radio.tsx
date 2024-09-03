import styles from "./Radio.module.scss";

const Radio: React.FC<{ name: string; id: string; labelText: string }> = ({
  name,
  id,
  labelText,
}) => {
  return (
    <div className={styles.radioGroup}>
      <input type="radio" required name={name} id={id} className={styles.radioInput} />
      <label htmlFor={id} tabIndex={0} className={styles.radioLabel}>
        <span className={styles.radioBtn}></span>
        {labelText}
      </label>
    </div>
  );
};

export default Radio;
