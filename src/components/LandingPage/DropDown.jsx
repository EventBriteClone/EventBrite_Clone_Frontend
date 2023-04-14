import styles from "./DropDown.module.css";
import DropdownMenuOption from "./DropdownMenuOption";

function parseGovName(gov) {
  const index = gov.indexOf("(");
  if (index === -1) return gov;
  return gov.slice(0, index);
}
function parseGovValue(gov) {
  const pattern = /\((.*?)\)/g;
  const result = gov.match(pattern);
  if (result) return result[0].slice(1, -1);
  return gov;
}

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
      .filter((gov) => {
        const regex = new RegExp(props.input, "i"); // "i" flag makes the regex case-insensitive
        return regex.test(gov);
      })
      .map((gov, i) => (
        <DropdownMenuOption
          key={i}
          city={true}
          value={parseGovValue(gov)}
          icon={"clock"}
          text={parseGovName(gov)}
          onClick={props.clickHandler}
        />
      ));
  return (
    <div className={`${styles.dropdown}`}>
      <DropdownMenuOption
        onClick={props.clickHandler}
        primary={true}
        value="initialCity"
        icon="getLocation"
        text="Use my current location"
      />
      <DropdownMenuOption
        onClick={props.clickHandler}
        primary={true}
        value="online"
        icon="onlineEvents"
        text="Browse online events"
      />
      {filteredGovList}
    </div>
  );
}
