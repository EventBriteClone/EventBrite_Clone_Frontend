import EventCardContainer from "../Event/EventCardContainer/EventCardContainer";
import EventCard from "../Event/EventCardContainer/EventCard";
import styles from "./TrendingCategories.module.css";
import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import useFetch from "../../custom-hooks/useFetch";
import config from "../../utils/config";
// import styled from "styled-components";
import { fetchDataFromAPI, parseDateFromAPI } from "../../utils";
export default function EventsInLocation(props) {
  const [events, setEvents] = useState(null);
  const { city } = useContext(NavigationContext);
  console.log(city);

  let endpoint =
    config.mocking === "true"
      ? `eventsPreview?location_like=${city}`
      : `events/venue/${city.toLowerCase()}/`;

  if (city === "online" && config.mocking !== "true") {
    endpoint = "events/online/";
  }
  const { response } = useFetch({
    endpoint,
    callback: parseEventDataFromAPI,
  });
  const eventsList =
    response?.length || events?.length ? (
      (events || response).map((event) => (
        <EventCard key={event.id} event={event} />
      ))
    ) : (
      <h3>No Events found in {city}</h3>
    );

  return (
    <div style={{ marginBottom: "20px" }}>
      {city && (
        <h3 className={styles.h3} style={{ paddingTop: "40px" }}>
          {city === "online" ? "Online Events" : `Events in ${city}`}
        </h3>
      )}
      <EventCardContainer key="1">{eventsList}</EventCardContainer>
    </div>
  );
}
export function parseEventDataFromAPI(response) {
  console.log(response);
  if (!response || !response?.length) return null;
  let parsedEvents = [];
  const events = response;
  console.log(response);
  for (const ev of events) {
    console.log(ev);
    parsedEvents = [
      ...parsedEvents,
      {
        title: ev.Title,
        id: ev.ID,
        image: ev.image,
        organizer: ev.organizer,
        location: ev.venue_name,
        startDate: parseDateFromAPI(ev.ST_DATE),
        startTime: ev.ST_TIME,
        endTime: ev.END_TIME,
      },
    ];
  }
  return parsedEvents;
}
