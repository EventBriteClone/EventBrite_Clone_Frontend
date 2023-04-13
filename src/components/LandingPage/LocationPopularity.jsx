import { useContext, useState, useEffect } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import Arrow from "../Icons/Arrow";
import styles from "./LocationPopularity.module.css";
import useFetch from "../../custom-hooks/useFetch";
import DropdownMenuOption from "./DropdownMenuOption";
import DropDown from "./DropDown";

export default function LocationPopularity(props) {
  const ctx = useContext(NavigationContext);
  const [hideDropDown, setHideDropDown] = useState(true);
  const { city, setCity, response } = ctx;
  function clickHandler(e) {
    setHideDropDown(false);
  }
  function changeHandler(e) {}

  useEffect(() => {
    function globalClickHandler(e) {
      if (
        !e.target.closest('[data-role="dropdownOption"]') &&
        !e.target.closest('[data-role="input"')
      ) {
        setHideDropDown(true);
      }
    }
    document.addEventListener("click", globalClickHandler);
    return () => document.removeEventListener("click", globalClickHandler);
  }, []);
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
            onClick={clickHandler}
            onChange={changeHandler}
            value={city}
            type="text"
            className={styles.input}
            placeholder={"Choose a location"}
            data-role="input"
          />
          <DropDown hideDropDown={hideDropDown} />
        </div>
      </div>
    </div>
  );
}
