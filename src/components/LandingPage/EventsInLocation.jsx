import EventCardContainer from "../Event/EventCardContainer/EventCardContainer";
import EventCard from "../Event/EventCardContainer/EventCard";

import styles from "./TrendingCategories.module.css";
import { useContext } from "react";
import { NavigationContext } from "../../context/NavigationContext";

export default function EventsInLocation(props) {
  const ctx = useContext(NavigationContext);
  const eventsList =
    ctx.response &&
    ctx.response.map((event) => (
      <EventCard key={(Math.random() * 100000).toFixed(0)} event={event} />
    ));
  return (
    <>
      <h3 className={styles.h3} style={{ paddingTop: "40px" }}>
        {ctx.city === "online" ? "Online Events" : `Events in ${ctx.city}`}
      </h3>
      <EventCardContainer>{eventsList}</EventCardContainer>
    </>
  );
}
