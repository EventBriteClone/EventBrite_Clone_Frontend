import styles from "./EventInfo.module.css";
// import LikeButton from "../../UI/LikeButton";
// import PriceTag from "./PriceTag";
export default function EventInfo(props) {
  return (
    <div className={styles["event-info"]}>
      <div className={styles["event-date"]}>{props.date}</div>
      <div className={styles["event-title"]}>{props.title}</div>
      <div className={styles["caption"]}>{props.caption}</div>
    </div>
  );
}
