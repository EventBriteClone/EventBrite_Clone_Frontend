import React, { useState } from "react";
import styles from "./EventCreator.module.css";
import EventCard from "../../EventCardContainer/EventCard";
import "remixicon/fonts/remixicon.css";
import EventCardContainer from "../../EventCardContainer/EventCardContainer";
import EventHeader from "./Eventheader";
import AllEvents from "./AllEvents";

function EventCreator() {
  return (
    <>
      <EventHeader />
      <AllEvents />
    </>
  );
}

export default EventCreator;
