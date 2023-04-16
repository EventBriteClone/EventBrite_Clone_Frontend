import EventCardContainer from "../Event/EventCardContainer/EventCardContainer";
import EventCard from "../Event/EventCardContainer/EventCard";

import styles from "./TrendingCategories.module.css";
import { useContext } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import useFetch from "../../custom-hooks/useFetch";
import config from "../../utils/config";

export default function EventsInLocation(props) {
  const { city } = useContext(NavigationContext);
  let data;
  const endpoint =
    config.mocking === "true"
      ? `eventsPreview?location_like=${city}`
      : "events/ALL";
  const { response } = useFetch({ endpoint });
  if (config.mocking === "true") {
    data = response;
  } else {
    data =
      response &&
      response?.results?.map((ev) => {
        return {
          title: ev.Title,
          id: ev.id,
          image: `${config.baseURL}${ev.image.slice(1)}`,
        };
      });
  }
  const eventsList =
    data && data.map((event) => <EventCard key={event.id} event={event} />);
  return (
    <>
      <h3 className={styles.h3} style={{ paddingTop: "40px" }}>
        {city === "online" ? "Online Events" : `Events in ${city}`}
      </h3>
      <EventCardContainer>{eventsList}</EventCardContainer>
    </>
  );
}
