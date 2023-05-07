import styles from "./ManageAttendees.module.css";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";

function ManageAttendees() {
  const [color, setColor] = useState("red");
  const [eventTileValue, setEventTitle] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={styles["h1"]}>
        <h1>Manage Atendees</h1>
      </div>

      <div className={styles["containerEventTitle"]}>
        <TextField
          required
          id="outlined-required"
          className={styles["EventTitle"]}
          label="Email Address"
          defaultValue=""
          value={eventTileValue}
          placeholder="Be clear."
          sx={{
            padding: "1px",
            marginBottom: "4px",
            marginTop: "12px",
            borderRadius: "2px",
            fontWeight: 400,
            "& input": {
              fontSize: "14px",
            },
            "& label": {
              fontSize: "12px",
            },
            "& label.Mui-focused": {
              color: { color },
              fontSize: "12px",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: { color },
              },
              "&.Mui-focused fieldset": {
                borderColor: { color },
              },
            },
          }}
        />
        <div className={styles["aside"]}>
          {isRequired && (
            <p className={styles["letterRequired"]}>This is required.</p>
          )}
          <div className={styles["letterNumberBorder"]}>
            <aside className={styles["letterNumber"]}>{count}/75</aside>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.AddTagButton}>Add</button>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.AddTagButton}>Save</button>
      </div>
    </>
  );
}

export default ManageAttendees;
