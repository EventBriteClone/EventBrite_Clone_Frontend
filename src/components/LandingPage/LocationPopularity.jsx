import { useContext, useState } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import Arrow from "../Icons/Arrow";
import styles from "./LocationPopularity.module.css";

export default function LocationPopularity(props) {
  const ctx = useContext(NavigationContext);
  const [location, setLocation] = useState("");
  const { city, setCity } = ctx;
  console.log(setCity);
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
            placeholder={"Choose a location"}
            value={city}
            onChange={(e) => setLocation(e.target.value)}
          />
          {/* {ctx ? ctx : "nwjdkdncmndcsjknmcwdcbnjk"} */}
        </div>
      </div>
    </div>
  );
}
