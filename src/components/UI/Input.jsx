import styles from "./Input.module.css";

export default function Input(props) {
  const invalidClass = props.invalid ? `${styles.invalid}` : "";
  return (
    <>
      <div
        style={props.style}
        className={`${styles["input-container"]} ${invalidClass}`}
      >
        <label className={styles.label} htmlFor={props.input.id}>
          {props.label}
          <span className={styles.asterisk}> *</span>
        </label>
        <input className={styles["input"]} {...props.input} type="text" />
        {props.invalidText && props.invalid && (
          <p className={styles["invalid-text"]}>{props.invalidText}</p>
        )}
      </div>
    </>
  );
}
