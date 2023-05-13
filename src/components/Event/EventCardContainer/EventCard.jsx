import styles from "./EventCard.module.css";
import LikeButton from "../../UI/LikeButton";
import PersonIcon from "../../Icons/PersonIcon";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "../../../utils/config";
import { fetchDataFromAPI } from "../../../utils";

export default function EventCard(props) {
  const [price, setPrice] = useState("Free");
  console.log(props.event);
  useEffect(() => {
    if (config.mocking === "false") {
      getEventsTicketPrice(props.event.id).then((p) => setPrice(p));
    }
  }, []);
  // const { event } = props;
  const {
    event = {
      id: "",
      title: "",
      startDate: "",
      location: "",
      price: "",
      organizer: "",
      followersNum: "",
    },
  } = props;
  return (
    <div
      className={`${styles["event-card__response"]} event__card`}
      data-testid="event-card"
    >
      <article className={styles["event-card__container"]}>
        <aside>
          <Link to={`/event/${event.id}`}>
            {event.image ? (
              <img
                loading="lazy"
                src={event.image}
                alt="Title"
                style={{ width: "512", height: "256" }}
              />
            ) : (
              <div className={styles.imgPlaceHolder}></div>
            )}
          </Link>
        </aside>
        <main>
          <LikeButton eventId={event.id} position="absolute" />
          <div>
            <Link to={`/event/${event.id}`}>
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
            <p>{price}</p>
          </div>
          <div className={styles["event-card__organizer-info"]}>
            <p className="truncate-text">{event?.organizer || "Organizer"}</p>
            <p className={styles["event-card__followers"]}>
              {`${event.startTime} - ${event.endTime}`}
            </p>
          </div>
        </main>
      </article>
    </div>
  );
}

function getEventsTicketPrice(id) {
  return new Promise(async (resolve) => {
    const priceData = await fetchDataFromAPI({
      endpoint: `events/TicketsPrice/${id}/`,
    });
    const { ticket_price: price } = priceData;
    resolve(price ? `${price} $` : "Free");
  });
}
