import { useContext, useState, useRef } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import Arrow from "../Icons/Arrow";
import styles from "./LocationPopularity.module.css";
import useFetch from "../../custom-hooks/useFetch";

export default function LocationPopularity(props) {
  const ctx = useContext(NavigationContext);
  const [location, setLocation] = useState("");
  const { city, setCity, response } = ctx;
  // console.log(response);
  // const cityRef = useRef(null);
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Popular in</h1>
      <div className={styles["location-dropdown"]}>
        <Arrow direction="down" />
        <div
          className={styles["input-container"]}
          data-val={city || "Choose a location"}
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

export function loader(params) {
  const fetchState = useFetch(city, "eventsPreview");
  console.log(params);
  return fetchState;
}
