import styles from "./HeaderTicket.module.css";
import MainIcon from "../../Icons/MainIcon";
import { SearchProvider } from "../../../context/SearchModalContext";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <SearchProvider>
      <div className={styles["header-ticket"]}>
        <Link className={styles["main-icon"]} to="/">
          <MainIcon></MainIcon>
        </Link>
        <div className={styles["header-ticket-links__container"]}>
          <Link
            className={styles["header-ticket-links"]}
            // style={{ color: "rgb(61, 100, 255)" }}
            // to="/create-event"
          >
            Preview Your Event
          </Link>
          <a className={styles["header-ticket-links"]} href="#">
            Publish
          </a>
          <Link className={styles["header-ticket-links"]} to="#">
            More
          </Link>
        </div>
        <div className={styles["profile-ticket"]}>
          <div className={styles["sign-in-info-ticket"]}>
            <h2>SE</h2>
            <h1>Shaimaa Eid</h1>
            <i className={styles["ri-arrow-down-s-line"]}></i>
          </div>
        </div>
      </div>
      <hr className={styles["break-line"]} />
    </SearchProvider>
  );
}
