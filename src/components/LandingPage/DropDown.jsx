import styles from "./DropDown.module.css";
import DropdownMenuOption from "./DropdownMenuOption";
export default function DropDown(props) {
  return (
    <div className={`${styles.dropdown} ${props.hideDropDown ? "hide" : ""}`}>
      <DropdownMenuOption
        value="currentLocation"
        icon="getLocation"
        text="Use my current location"
      />
      <DropdownMenuOption
        value="Online events"
        icon="onlineEvents"
        text="Browse online events"
      />
    </div>
  );
}
