import styles from "./EventPreview.module.css";
import TicketIcon from "../../../Icons/TicketIcon";
import PersonIcon from "../../../Icons/PersonIcon";
import NoImageIcon from "../../../Icons/NoImageIcon";

export default function EventPreview({ eventImage }) {
  return (
    <div className={styles["event-preview-card"]}>
      <article className={styles["event-preview-card__image-container"]}>
        {eventImage ? (
          <img src="#"></img>
        ) : (
          <div className={styles["event-preview-card__image-placeholder"]}>
            <NoImageIcon></NoImageIcon>
          </div>
        )}
      </article>
      <aside className={styles["event-preview-card__content"]}>
        <header>
          <h3 className={styles["eds-text-bl"]}>Title</h3>
        </header>
        <div className={styles["event-preview-card__sub-content"]}>
          <p>Date</p>
          <p>Online Event</p>
          <div className={styles["event-preview-card__ticket-summary"]}>
            <div className={styles["flex"]}>
              <TicketIcon height={"24px"} width={"24px"}></TicketIcon>
              <span>5</span>
            </div>
            <div className={styles["flex"]}>
              <PersonIcon height={"24px"} width={"24px"}></PersonIcon>
              <span>100</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
