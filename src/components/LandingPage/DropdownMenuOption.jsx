import ClockIcon from "../Icons/ClockIcon";
import GetLocationIcon from "../Icons/GetLocationIcon";
import OnlineEventsIcon from "../Icons/OnlineEventsIcon";
import styles from "./DropdownMenuOptions.module.css";

export default function DropdownMenuOptions(props) {
  let icon;
  if (props.icon === "getLocation") {
    icon = <GetLocationIcon />;
  }
  if (props.icon === "onlineEvents") {
    icon = <OnlineEventsIcon />;
  }
  if (props.icon === "clock") {
    icon = <ClockIcon />;
  }
  function clickHandler() {
    console.log(props.value);
    props.onClick(props.value);
  }
  return (
    <div
      onClick={clickHandler}
      data-role="dropdownOption"
      className={`${styles["dropdown-option"]} flex ${
        props.primary ? "primary" : ""
      }`}
    >
      {icon}
      <div className={styles["dropdown-option__info"]}>
        <p>{props.text}</p>
        {props.city && <span>Egypt</span>}
      </div>
    </div>
  );
}
