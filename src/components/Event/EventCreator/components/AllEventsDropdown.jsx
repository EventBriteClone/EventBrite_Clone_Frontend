import React, { useState } from "react";
import styles from "./AllEventsDropdown.module.css";

function AllEventsDropdown() {
  const events = [
    { date: new Date("3/4/2024") },
    { date: new Date("1/3/2006") },
    { date: new Date("12/12/2023") },
    { date: new Date("11/6/2004") },
    { date: new Date("6/20/2025") },
    { date: new Date("7/7/2005") },
  ];
  const defaultDate = new Date().toLocaleDateString("en-US");

  const pastEvents = events.filter(
    (event) => new Date(event.date) < new Date(defaultDate)
  );

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) > new Date(defaultDate)
  );

  const [selectedOption, setSelectedOption] = useState("All Events");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const filteredEvents =
    selectedOption === "past"
      ? pastEvents
      : selectedOption === "upcoming"
      ? upcomingEvents
      : events;
  return (
    <div className={styles["section"]}>
      <div className={styles["list"]}>
        <div className={styles["All-events"]}>
          <div className={styles["all-events"]}>
            <select
              id="event-filter"
              style={{ backgroundColor: "#3659e3", color: "#fff" }}
              onChange={(event) => {
                handleOptionChange(filteredEvents);
              }}
            >
              <option value="All Events" defaultValue>
                All events
              </option>
              {pastEvents.length > 0 && (
                <option key="past" value="past">
                  Past events
                </option>
              )}
              {upcomingEvents.length > 0 && (
                <option key="upcoming" value="upcoming">
                  Upcoming events
                </option>
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllEventsDropdown;
