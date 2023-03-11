import SearchBarIcon from "./SearchBarIcon";
import SearchBarInput from "./SearchBarInput";
import styles from "./SearchBar.module.css";
export default function SearchBar() {
  return (
    <div className={styles["search-bar__container"]}>
      <button className={styles["search-bar"]}>
        <SearchBarIcon></SearchBarIcon>
        <SearchBarInput></SearchBarInput>
      </button>
    </div>
  );
}
