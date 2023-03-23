import React, { useState } from "react";
import styles from "./EventCreator.module.css";
import EventCard from "../../EventCardContainer/EventCard";
import "remixicon/fonts/remixicon.css";

function EventCreator() {
  const events = [
    { date: new Date("3/3/2024") },
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
    <>
      <div className={styles["header"]}>
        <a href="https://www.eventbrite.com/organizations/home">eventbrite</a>
        <div className={styles["profile"]}>
          <div className={styles["sign-in-info"]}>
            <h2>Ma</h2>
            <h1>Muhammad Ahmad</h1>
            <i className={styles["ri-arrow-down-s-line"]}></i>
          </div>
        </div>
      </div>

      <div className={styles["section"]}>
        <div className={styles["events"]}>
          <div className={styles["event-info"]}>
            <h1>Events</h1>
          </div>
          <div className={styles["list"]}>
            <div className={styles["search"]}>
              <form action="">
                <input type="search" placeholder="Search events" />
              </form>
            </div>
            <div className={styles["list-icon"]}>
              <div className={styles["icon"]}>
                <i className="ri-list-check"></i>
              </div>
              <h1>List</h1>
            </div>
            <div className={styles["span"]}>
              <div className={styles["hr"]} />
            </div>
            <div className={styles["All-events"]}>
              <div className={styles["all-events"]}>
                <select
                  id="event-filter"
                  style={{ backgroundColor: "#3659e3", color: "#fff" }}
                  onChange={handleOptionChange}
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

            <div className={styles["span"]}>
              <div className={styles["hr"]} />
            </div>
            <div className={styles["Create-Event"]}>
              <div className={styles["create-event"]}>
                <h1>Create Event</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["section"]}>
        {filteredEvents.map((event, index) => (
          <EventCard
            key={index}
            date={event.date.toLocaleDateString("en-US")}
          />
        ))}
      </div>
    </>
  );
}

export default EventCreator;
