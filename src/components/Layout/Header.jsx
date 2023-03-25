import SearchBar from "./SearchBar/SearchBar";
import styles from "./header.module.css";
import MainIcon from "../Icons/MainIcon";
import { SearchProvider } from "../../context/SearchModalContext";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <SearchProvider>
      <div className={styles.header}>
        <Link className={styles["main-icon"]} to="/">
          <MainIcon></MainIcon>
        </Link>
        <SearchBar />
        <div className={styles["header-links__container"]}>
          <Link
            className={styles["header-links"]}
            style={{ color: "rgb(61, 100, 255)" }}
            to="/create-event"
          >
            Create an event
          </Link>
          <a className={styles["header-links"]} href="#">
            Log In
          </a>
          <Link className={styles["header-links"]} to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </SearchProvider>
  );
}
