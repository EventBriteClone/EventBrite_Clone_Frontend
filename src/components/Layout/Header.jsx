import SearchBar from "./SearchBar/SearchBar";
import styles from "./header.module.css";
import MainIcon from "../Icons/MainIcon";

export default function Header() {
  return (
    <div className={styles.header}>
      <a className={styles["main-icon"]} href="https://eventbrite.com">
        <MainIcon></MainIcon>
      </a>
      <SearchBar />
      <div className={styles["header-links__container"]}>
        <a className={styles["header-links"]} href="">
          Organize
        </a>
        <a className={styles["header-links"]} href="">
          Help
        </a>
        <a className={styles["header-links"]} href="">
          Create an event
        </a>
        <a className={styles["header-links"]} href="">
          Log In
        </a>
        <a className={styles["header-links"]} href="">
          Sign Up
        </a>
      </div>
    </div>
  );
}
