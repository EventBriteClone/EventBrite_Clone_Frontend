import React, { useEffect, useState, useContext } from "react";
import styles from "./Settings.module.css";
import Input from "../../UI/Input";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Settings() {
  const [upcomingSessionsCount, setUpcomingSessionsCount] = useState(0);
  const [upcomingSessionsValue, setUpcomingSessionsValue] = useState("");
  function upcomingSessionsValueChange(event) {
    const length = event.target.value.length;
    setUpcomingSessionsCount(length);
    if (event.target.value.length >= 2500) return;
    setUpcomingSessionsValue(event.target.value);
  }
  // function handleChangeRadioOne(event) {
  //   setCheckedOne(event.target.checked);
  //   changeButton(true);
  //   if (checkedOne === false) {
  //     changeButton(false);
  //   } else {
  //     changeButton(true);
  //   }
  // }
  // function handleChangeRadioOne(event) {
  //   setCheckedOne(event.target.checked);
  //   changeButton(true);
  //   if (checkedOne === false) {
  //     changeButton(false);
  //   } else {
  //     changeButton(true);
  //   }
  // }
  return (
    <>
      <div className={styles["ticket-settings-container"]}>
        <form>
          <div className={styles["first-settings-container"]}>
            <h3 className={styles["display-settings-h3"]}>Display settings</h3>
            <div className={styles["checkbox-container"]}>
              <label>
                <input
                  type="checkbox"
                  // checked={checkedOne}
                  // onChange={handleChangeOne}
                  className={styles["checkbox2"]}
                  fill="#3659e3"
                />
              </label>
              <label className={styles["checkbox-texts"]}>
                <span>
                  <p className={styles["checkbox-text1"]}>
                    Display number of tickets remaining.
                  </p>
                  <p className={styles["checkbox-text2"]}>
                    The number of tickets remaining will be displayed to
                    attendees.
                  </p>
                </span>
              </label>
            </div>
          </div>
        </form>
        <div className={styles["second-settings-container"]}>
          <h3 className={styles["event-type-h3"]}>Event Type</h3>
          <div>
            <label className={styles["radio1-label"]}>
              <input
                type="radio"
                name="options1"
                // value="option1"
                // checked={selectedOption === "option1"}
                // onChange={handleOptionChange}
                className={styles["radio1"]}
              />
              Ticketed Event
            </label>
            <p className={styles["event-type-radio1-text1"]}>
              The attendee will see the ticket purchase button as - Get tickets
            </p>
            <label className={styles["radio1-label"]}>
              <input
                type="radio"
                name="options2"
                // value="option1"
                // checked={selectedOption === "option1"}
                // onChange={handleOptionChange}
                className={styles["radio1"]}
              />
              Registration Event
              <p className={styles["event-type-radio1-text1"]}>
                The attendee will see the ticket purchase button as - Reserve a
                spot
              </p>
            </label>
          </div>
        </div>
        <div>
          <h3 className={styles["display-mess-after-salesEnd"]}>
            Display a message after ticket sales end
          </h3>
          <p className={styles["display-text-after-salesEnd"]}>
            You can add a message to the top of your event's listing page that
            shows up after sales have ended.
          </p>
          <form className={styles["input-upcoming-sessions"]}>
            <Input
              // label="Price *"
              type="input"
              value={upcomingSessionsValue}
              onChange={upcomingSessionsValueChange}
              input={{
                type: "input",
                required: true,
                id: "upcoming sessions",
                placeholder:
                  "E.g. Sales have ended for this event, but be sure to check out our other upcoming sessions.",
              }}
            />
          </form>
          <div className={styles["letter-num-border"]}>
            <aside className={styles["letter-num"]}>
              {upcomingSessionsCount}/2500
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
export default Settings;
