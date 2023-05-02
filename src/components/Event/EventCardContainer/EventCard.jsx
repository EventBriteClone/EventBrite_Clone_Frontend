import styles from "./EventCard.module.css";
import LikeButton from "../../UI/LikeButton";
import PersonIcon from "../../Icons/PersonIcon";
import { Link } from "react-router-dom";

export default function EventCard(props) {
  const { event } = props;
  return (
    <div
      className={`${styles["event-card__response"]} event__card`}
      data-testid="event-card"
    >
      <article className={styles["event-card__container"]}>
        <aside>
          <Link to={`/event/${event.id}`}>
            <img
              loading="lazy"
              src={
                event.image ||
                "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F440854699%2F140533847643%2F1%2Foriginal.20230207-112359?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C72%2C1228%2C614&s=a4be3f3cf640cd2791d10eb04df87581"
              }
              alt="Title"
              style={{ width: "512", height: "256" }}
            />
          </Link>
        </aside>
        <main>
          <LikeButton position="absolute" />
          <div>
            <Link to={`/event/${event.id}}`}>
              <h3 className={`${styles["event-card__title"]} truncate-text`}>
                {event?.title || "Title"}
              </h3>
            </Link>
            <p className={`${styles["event-card__time"]} truncate-text`}>
              {event?.startDate || props.startDate || "Tomorrow at 9PM"}
            </p>
          </div>
          <div className={styles["event-card__secondary-info"]}>
            <p className=" truncate-text">
              {event?.location || "City • City, City Full"}
            </p>
            <p>{event?.price || "Free"}</p>
          </div>
          <div className={styles["event-card__organizer-info"]}>
            <p className="truncate-text">{event?.organizer || "Organizer"}</p>
            <p className={styles["event-card__followers"]}>
              <PersonIcon />
              {event?.followersNum || "600"} followers
            </p>
          </div>
        </main>
      </article>
    </div>
  );
}
