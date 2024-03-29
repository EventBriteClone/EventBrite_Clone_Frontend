import { useContext, useState, useEffect, useRef } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import Arrow from "../Icons/Arrow";
import styles from "./LocationPopularity.module.css";
import DropDown from "./DropDown";

export default function LocationPopularity(props) {
  const ctx = useContext(NavigationContext);
  const inputRef = useRef(null);
  const [hideDropDown, setHideDropDown] = useState(true);
  const [hideInput, setHideInput] = useState(false);
  const [value, setValue] = useState("");
  const { initialCity, city, setCity, response } = ctx;
  console.log(value);
  function clickHandler(e) {
    setHideDropDown(false);
    if (city === value) {
      setValue("");
      setHideInput(true);
    }
  }
  function changeHandler(e) {
    setValue(e.target.value);
  }

  // fetch("https://event-us.me:8000").then((res) => console.log(res));

  function onDropdownOptionClick({ city, text }) {
    if (city === "initialCity") setCity(initialCity);
    else setCity(city);
    setHideDropDown(true);
    setHideInput(false);
  }

  useEffect(() => {
    if (city && !hideInput) setValue(city);
    function globalClickHandler(e) {
      if (
        !e.target.closest('[data-role="dropdownOption"]') &&
        !e.target.closest('[data-role="input"')
      ) {
        setHideDropDown(true);
        if (city && value === "") setValue(city);
      }
    }
    document.addEventListener("click", globalClickHandler);
    return () => document.removeEventListener("click", globalClickHandler);
  }, [city, value, hideInput]);
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Popular in</h1>
      <div className={styles["location-dropdown"]}>
        <Arrow direction="down" />
        <div
          className={styles["input-container"]}
          data-val={value || city || "Choose a location"}
        >
          <input
            ref={inputRef}
            onClick={clickHandler}
            onChange={changeHandler}
            value={value}
            type="text"
            className={styles.input}
            placeholder={city || "Choose a location"}
            data-role="input"
          />
          {!hideDropDown && (
            <DropDown
              input={inputRef?.current?.value}
              clickHandler={onDropdownOptionClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}
