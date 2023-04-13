import React from "react";
import styles from "./CreateEventButton.module.css";

function CreateEventButton() {
  return (
    <div className={styles["section"]}>
      <div className={styles["Create-Event"]}>
        <div className={styles["create-event"]}>
          <h1>Create Event</h1>
        </div>
      </div>
    </div>
  );
}

export default CreateEventButton;
