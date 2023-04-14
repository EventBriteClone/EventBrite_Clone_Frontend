import styles from "./DropDown.module.css";
import DropdownMenuOption from "./DropdownMenuOption";
export default function DropDown(props) {
  const egyptGovernorates = [
    "Ad Daqahliyah",
    "Al Bahr al Ahmar",
    "Al Buheyrah",
    "Al Fayyum",
    "Al Gharbiyah",
    "Al Iskandariyah (Alexandria)",
    "Al Isma'iliyah",
    "Al Jizah (Giza)",
    "Al Minufiyah",
    "Al Minya",
    "Al Qahirah (Cairo)",
    "Al Qalyubiyah",
    "Al Wadi al Jadid",
    "As Suways (Suez)",
    "Aswan",
    "Asyut",
    "Bani Suwayf",
    "Bur Sa'id (Port Said)",
    "Dumyat (Damietta)",
    "Janub Sina' (South Sinai)",
    "Kafr ash Shaykh",
    "Matruh",
    "Qina",
    "Shamal Sina' (North Sinai)",
    "Sohag",
  ];

  const filteredGovList =
    props.input &&
    egyptGovernorates
      .filter((gov) =>
        gov.toLocaleLowerCase().startsWith(props.input.toLocaleLowerCase())
      )
      .map((gov, i) => (
        <DropdownMenuOption
          key={i}
          city={true}
          value={gov}
          icon={"clock"}
          text={gov}
          onClick={props.clickHandler}
        />
      ));

  return (
    <div className={`${styles.dropdown}`}>
      <DropdownMenuOption
        primary={true}
        value="currentLocation"
        icon="getLocation"
        text="Use my current location"
      />
      <DropdownMenuOption
        primary={true}
        value="Online events"
        icon="onlineEvents"
        text="Browse online events"
      />
      {filteredGovList}
    </div>
  );
}
