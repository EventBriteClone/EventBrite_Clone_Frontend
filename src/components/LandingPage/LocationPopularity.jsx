import { useState } from "react";
import Arrow from "../Icons/Arrow";
import styles from "./LocationPopularity.module.css";

export default function LocationPopularity(props) {
  const [location, setLocation] = useState("Al Qahirah");
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Popular in</h1>
      <div className={styles["location-dropdown"]}>
        <Arrow direction="down" />
        <div
          className={styles["input-container"]}
          data-val={
            location
              .trim()
              .split("")
              .map(() => "x")
              .join("") || "Al Qahirah"
          }
        >
          <input
            type="text"
            className={styles.input}
            placeholder={"Al Qahirah"}
            location={location}
            value={location === null ? "Al Qahirah" : location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
