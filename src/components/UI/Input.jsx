import { useRef } from "react";
import styles from "./Input.module.css";

export default function Input(props) {
  const inputRef = useRef(null);
  const charLengthRef = useRef(0);
  function handleOnChange(e) {
    const inputValue = e.target.value;
    if (props.charLength) {
      const newInputValue =
        inputValue.length <= props.charLength
          ? inputValue
          : inputValue.slice(0, props.charLength);
      inputRef.current.value = newInputValue;
      charLengthRef.current.textContent = newInputValue.length;
    }
    if (props.onChange) props.onChange(e);
  }
  const invalidClass = props.invalid ? `${styles.invalid}` : "";

  return (
    <div>
      <div
        style={props.style}
        className={`${styles["input-effect"]} ${invalidClass}`}
      >
        <label className={styles.label} htmlFor={props.input.id}>
          {props.label}
          {props.input.required && props.requiredAst && (
            <span className={styles.asterisk}> *</span>
          )}
        </label>
        <input
          className={styles["input"]}
          onChange={handleOnChange}
          ref={inputRef}
          {...props.input}
        />
      </div>
      <div className={styles["feedback-container"]}>
        <p className={styles["invalid-text"]}>
          {props.invalid && props.invalidText && props.invalidText}
        </p>
        <p>
          {props.charLength && (
            <>
              <span ref={charLengthRef}>{0}</span>
              <span>/{props.charLength}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
