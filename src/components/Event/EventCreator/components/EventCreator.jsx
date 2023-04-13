import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
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
