import React from "react";
import styles from "./EventCreator.module.css";

function EventCreator() {
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
                <i className={styles["ri-list-check"]}></i>
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
                >
                  <option value="All Events" defaultValue>
                    All events
                  </option>
                  <option value="due">Due events</option>
                  <option value="upcoming">Upcoming events</option>
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
    </>
  );
}

export default EventCreator;
