import { useContext, useState, useRef } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import Arrow from "../Icons/Arrow";
import styles from "./LocationPopularity.module.css";
import useFetch from "../../custom-hooks/useFetch";

export default function LocationPopularity(props) {
  const ctx = useContext(NavigationContext);
  const { city, setCity, response } = ctx;
  console.log(response);
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
          />
        </div>
      </div>
    </div>
  );
}
