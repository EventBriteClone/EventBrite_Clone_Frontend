import styles from "./EventCardContainer.module.css";

export default function EventCardContainer(props) {
  return (
    <div className={styles["event-card__container"]}>{props.children}</div>
  );
}
