import styles from "./EventInfo.module.css";
// import LikeButton from "../../UI/LikeButton";
// import PriceTag from "./PriceTag";
export default function EventInfo() {
  return (
    <div className={styles["event-info"]}>
      <div className={styles["event-date"]}>Apr 29</div>
      <div className={styles["event-title"]}>Free UX Workshop</div>
      <div className={styles["caption"]}>Caption</div>
    </div>
  );
}
