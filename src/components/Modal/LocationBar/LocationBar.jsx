import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./LocationBar.module.css";

function LocationBar() {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleBackClick = () => {
    // handle back button click
  };

  const handleSearchClick = () => {
    // handle search button click
  };

  return (
    <div className={styles["location-bar-container"]}>
      <FaMapMarkerAlt
        className={styles["location-icon"]}
        onClick={handleSearchClick}
      />
      <div className={styles["location-input-wrapper"]}>
        <input
          type="text"
          placeholder="Choose a location"
          className={styles["location-input"]}
          value={query}
          onChange={handleQueryChange}
        />
      </div>
    </div>
  );
}

export default LocationBar;
