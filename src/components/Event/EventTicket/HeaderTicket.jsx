import styles from "./HeaderTicket.module.css";
import MainIcon from "../../Icons/MainIcon";
import { SearchProvider } from "../../../context/SearchModalContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function HeaderTicket() {
  //Hi Shaimaa,
  //I have written this comment to indicate to you that we are going to receive the name of the user from the authContext instead of writing it statically.
  //The backend don't send the name of the user yet, but they are working on it
  //They are going to send the name and the initials also
  const ctx = useContext(AuthContext);
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
          <Link className={styles["header-ticket-links"]} to="/publish">
            Publish
          </Link>
          <Link className={styles["header-ticket-links"]} to="#">
            More
          </Link>
        </div>
        <div className={styles["profile-ticket"]}>
          <div className={styles["sign-in-info-ticket"]}>
            <h2 className={styles["name-shortcut"]}>SE</h2>
            <h1>Shaimaa Eid</h1>
            <i className={styles["ri-arrow-down-s-line"]}></i>
          </div>
        </div>
      </div>
      <hr className={styles["break-line"]} />
    </SearchProvider>
  );
}
