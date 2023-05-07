import styles from "./SubmitCard.module.css";
export default function SubmitCard({ onClick }) {
  return (
    <div className={styles["submit-card__container"]}>
      <button onClick={onClick}>Publish Event</button>
    </div>
  );
}
