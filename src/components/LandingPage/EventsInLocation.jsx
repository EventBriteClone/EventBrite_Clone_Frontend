import EventCardContainer from "../Event/EventCardContainer/EventCardContainer";
import EventCard from "../Event/EventCardContainer/EventCard";

import styles from "./TrendingCategories.module.css";

export default function EventsInLocation(props) {
  const eventsList =
    props.events &&
    props.events.map((event) => (
      <EventCard key={(Math.random() * 100000).toFixed(0)} event={event} />
    ));
  return (
    <>
      <h3 className={styles.h3} style={{ paddingTop: "40px" }}>
        Events in {props.location || "Al Qahirah"}
      </h3>
      <EventCardContainer>{eventsList}</EventCardContainer>
    </>
  );
}
