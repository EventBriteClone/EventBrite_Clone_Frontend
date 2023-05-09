import styles from "./ManageAttendees.module.css";
import React, { useEffect, useState } from "react";
import config from "../../../utils/config";
import { fetchDataFromAPI } from "../../../utils";

function ManageAttendees() {
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [searchEmail, setSearchEmail] = useState("");
  const [data, setData] = useState(null);
  const [color, setColor] = useState("red");
  const [ticketType, setTicketType] = useState("Regular");

  const handleTicketTypeChange = (event) => {
    setTicketType(event.target.textContent);
  };

  const handleSaveClick = () => {
    console.log(`Selected ticket type: ${ticketType}`);
    console.log(`Selected color: ${color}`);
  };

  useEffect(() => {
    let endpoint, configurationOpt;
    if (config.mocking === "true") {
      endpoint = "eventsPreview";
    } else {
      endpoint = `user/emailcheck/${searchEmail}/`;
      configurationOpt = {
        method: "GET",
        headers: { "content-type": "application/json" },
      };
    }

    fetchDataFromAPI({ endpoint, configurationOpt })
      .then((data) => {
        console.log("Fetch succeeded:", data);
        setData(data);
      })
      .catch((error) => {
        console.log("Fetch failed:", error);
      });
  }, [searchEmail]);

  const handleCheckClick = (event) => {
    event.preventDefault();
    if (data) {
      const property = Object.keys(data)[0];
      const fetchedEmail = data[property];
      if (fetchedEmail == true) {
        console.log("True");
        setColor("green");
      } else {
        console.log("Enter another Email");
        setColor("red");
      }
    }
  };

  const handleTicketTypeClick = (ticketType) => {
    setSelectedTicketType(ticketType);
  };

  const isRegularSelected = selectedTicketType === "Regular";
  const isVipSelected = selectedTicketType === "Vip";

  return (
    <>
      <div className={styles["h1"]}>
        <h1>Manage Attendees</h1>
      </div>
      <div className={styles["list"]}>
        <div className={styles["search"]}>
          <form>
            <input
              type="search"
              placeholder="Email Address"
              value={searchEmail}
              onChange={(event) => setSearchEmail(event.target.value)}
            />
          </form>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.AddTagButton} onClick={handleCheckClick}>
            Check
          </button>
        </div>
      </div>

      <div>
        <h1 className={styles.h1Location}>Ticket Type</h1>
        <div className={styles.Buttons}>
          <button
            className={`${styles.VenueButton} ${
              ticketType === "Regular" ? styles.SelectedButton : ""
            }`}
            onClick={handleTicketTypeChange}
          >
            Regular
          </button>
          <button
            className={`${styles.OnlineEventButton} ${
              ticketType === "VIP" ? styles.SelectedButton : ""
            }`}
            onClick={handleTicketTypeChange}
          >
            VIP
          </button>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.AddTagButton}
          onClick={handleSaveClick}
          disabled={color === "red"}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default ManageAttendees;
