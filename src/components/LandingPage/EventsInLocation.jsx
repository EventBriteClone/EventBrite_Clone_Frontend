import EventCardContainer from "../Event/EventCardContainer/EventCardContainer";
import EventCard from "../Event/EventCardContainer/EventCard";

import styles from "./TrendingCategories.module.css";

export default function EventsInLocation(props) {
  return (
    <>
      <h3 className={styles.h3} style={{ paddingTop: "40px" }}>
        Events in {props.location || "Al Qahirah"}
      </h3>
      <EventCardContainer>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </EventCardContainer>
    </>
  );
}
