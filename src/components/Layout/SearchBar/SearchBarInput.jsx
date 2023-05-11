import styles from "./SearchBarInput.module.css";
export default function SearchBarInput() {
  return (
    <input
      className={styles["search-bar__input"]}
      type="text"
      placeholder="Search events"
      id="search-bar__input"
    />
  );
}
