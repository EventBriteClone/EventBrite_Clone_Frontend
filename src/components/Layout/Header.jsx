import SearchBar from "./SearchBar/SearchBar";
import styles from "./header.module.css";
import MainIcon from "../Icons/MainIcon";
import { SearchProvider } from "../../context/SearchModalContext";

export default function Header() {
  return (
    <SearchProvider>
      <div className={styles.header}>
        <a className={styles["main-icon"]} href="https://eventbrite.com">
          <MainIcon></MainIcon>
        </a>
        <SearchBar />
        <div className={styles["header-links__container"]}>
          <a
            className={styles["header-links"]}
            style={{ color: "rgb(61, 100, 255)" }}
            href=""
          >
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
    </SearchProvider>
  );
}
