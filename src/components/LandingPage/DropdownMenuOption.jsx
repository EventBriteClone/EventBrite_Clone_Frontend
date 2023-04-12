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
  return (
    <div
      data-role="dropdownOption"
      className={`${styles["dropdown-option"]} flex`}
    >
      {icon}
      <p>{props.text}</p>
    </div>
  );
}
