import React, { useEffect, useState } from "react";
import styles from "./AllEvents.module.css";
import EventCard from "../../EventCardContainer/EventCard";
import "remixicon/fonts/remixicon.css";
import EventCardContainer from "../../EventCardContainer/EventCardContainer";
import { fetchDataFromAPI } from "../../../../utils";
import config from "../../../../utils/config";

function AllEvents() {
  const [data, setData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("All Events");
  // const eventsList = Array.isArray(data) && data.map();
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

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const filteredEvents =
    selectedOption === "past"
      ? pastEvents
      : selectedOption === "upcoming"
      ? upcomingEvents
      : events;

  useEffect(() => {
    let endpoint, configurationOpt;
    if (config.mocking === "true") {
      endpoint = "eventsPreview";
    } else {
      let user_id = "";
      endpoint = `eventmanagement/userevents ${user_id}`;
      configurationOpt = {
        method: "GET",
      };
    }
    fetchDataFromAPI({ endpoint, configurationOpt }).then((data) =>
      setData(data)
    );
  }, []);

  return (
    <>
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
        <EventCardContainer>
          {data &&
            Array.isArray(data) &&
            data.map((e) => <EventCard event={e} />)}
        </EventCardContainer>
      </div>
    </>
  );
}

export default AllEvents;
