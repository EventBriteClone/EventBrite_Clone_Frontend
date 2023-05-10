import styles from "./EventPreview.module.css";
import TicketIcon from "../../../Icons/TicketIcon";
import PersonIcon from "../../../Icons/PersonIcon";
import NoImageIcon from "../../../Icons/NoImageIcon";
import { useContext } from "react";
import { CreateEventContext } from "../../../../context/CreateEventContext";

export default function EventPreview() {
  const { createEvent: event } = useContext(CreateEventContext);
  return (
    <div className={styles["event-preview-card"]}>
      <article className={styles["event-preview-card__image-container"]}>
        {event.images.length ? (
          <img style={{ width: "100%" }} src={event.images[0].src}></img>
        ) : (
          <div className={styles["event-preview-card__image-placeholder"]}>
            <NoImageIcon></NoImageIcon>
          </div>
        )}
      </article>
      <aside className={styles["event-preview-card__content"]}>
        <header>
          <h3 className={styles["eds-text-bl"]}>{event.eventTitle}</h3>
        </header>
        <div className={styles["event-preview-card__sub-content"]}>
          <p>Summary: {event.summary}</p>
          <p>Description: {event.description}</p>
          <p>Start date: {event.startDate}</p>
          <p>End date: {event.endDate}</p>
          <p>{event.online ? "Online event" : event.location}</p>
          <p>
            {event.startTime} - {event.endTime}
          </p>
        </div>
      </aside>
    </div>
  );
}
