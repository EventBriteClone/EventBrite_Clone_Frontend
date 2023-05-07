import EventCardContainer from "../Event/EventCardContainer/EventCardContainer";
import EventCard from "../Event/EventCardContainer/EventCard";
import styles from "./TrendingCategories.module.css";
import { useContext, useState } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import useFetch from "../../custom-hooks/useFetch";
import config from "../../utils/config";
import Popup from "../Event/popup/Popup";
import styled from "styled-components";
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

  const Button = styled.button`
    background-color: #f44336;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    margin: 4px 2px;
    text-decoration: none;
  `;
  const eventsList =
    data && data.map((event) => <EventCard key={event.id} event={event} />);
  return (
    <>
      <h3 className={styles.h3} style={{ paddingTop: "40px" }}>
        {city === "online" ? "Online Events" : `Events in ${city}`}
      </h3>
      <EventCardContainer>{eventsList}</EventCardContainer>

      {show && <Popup show={show} setShow={setShow} />}

      <Button onClick={() => setShow(true)}>Open Pop-up</Button>
    </>
  );
}
