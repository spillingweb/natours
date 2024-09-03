import styles from "./Input.module.scss";

const Input: React.FC<{
  type: string;
  placeholder: string;
  id: string;
  label: string;
}> = ({ type, placeholder, id, label }) => {
  return (
    <>
      <input
        required
        type={type}
        placeholder={placeholder}
        className={styles.inputElement}
        id={id}
      />
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
    </>
  );
};

export default Input;
