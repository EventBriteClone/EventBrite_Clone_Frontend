import styles from "./EventCard.module.css";
import LikeButton from "../../UI/LikeButton";
import PersonIcon from "../../Icons/PersonIcon";
import { Link } from "react-router-dom";

export default function EventCard(props) {
  return (
    <div className={styles["event-card__response"]}>
      <article className={styles["event-card__container"]}>
        <aside>
          <Link to="/event/1">
            <img
              loading="lazy"
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F440854699%2F140533847643%2F1%2Foriginal.20230207-112359?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C72%2C1228%2C614&s=a4be3f3cf640cd2791d10eb04df87581"
              alt="Title"
              style={{ width: "512", height: "256" }}
            />
          </Link>
        </aside>
        <main>
          <LikeButton></LikeButton>
          <div>
            <Link to="/event/1">
              <h3 className={`${styles["event-card__title"]} truncate-text`}>
                Title
              </h3>
            </Link>
            <p className={`${styles["event-card__time"]} truncate-text`}>
              {props.date}
            </p>
          </div>
          <div className={styles["event-card__secondary-info"]}>
            <p className=" truncate-text">City • City, City Full</p>
            <p>Free</p>
          </div>
          <div className={styles["event-card__organizer-info"]}>
            <p className="truncate-text">Organizer</p>
            <p className={styles["event-card__followers"]}>
              <PersonIcon />
              600 followers
            </p>
          </div>
        </main>
      </article>
    </div>
  );
}
