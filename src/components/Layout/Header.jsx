import SearchBar from "./SearchBar/SearchBar";
import styles from "./header.module.css";
import MainIcon from "../Icons/MainIcon";
import { SearchProvider } from "../../context/SearchModalContext";
import { Link, useNavigation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import PlusIcon from "../Icons/PlusIcon";
import LikeIcon from "../Icons/LikeIcon";
import TicketIcon from "../Icons/TicketIcon";
import PersonIcon from "../Icons/PersonIcon";
import Arrow from "../Icons/Arrow";

export default function Header() {
  const { authState, removeAuthData } = useContext(AuthContext);
  const { isAuthenticated } = authState;

  const HeaderLinks = isAuthenticated ? (
    <AuthHeaderLinks email={authState.email} logoutHandler={removeAuthData} />
  ) : (
    <UnAuthHeaderLinks />
  );

  return (
    <SearchProvider>
      <div className={styles.header}>
        <Link className={styles["main-icon"]} to="/">
          <MainIcon />
        </Link>
        <SearchBar />
        <div
          data-auth={isAuthenticated}
          className={styles["header-links__container"]}
        >
          {HeaderLinks}
        </div>
      </div>
    </SearchProvider>
  );
}

function UnAuthHeaderLinks() {
  return (
    <>
      <Link
        className={styles["header-links"]}
        style={{ color: "rgb(61, 100, 255)" }}
        to="/create-event"
        id="create-event"
      >
        Create an event
      </Link>
      <Link className={styles["header-links"]} id="login" to="/login">
        Log In
      </Link>
      <Link className={styles["header-links"]} id="signup" to="/signup">
        Sign Up
      </Link>
    </>
  );
}

function AuthHeaderLinks(props) {
  return (
    <>
      <Link
        className={styles["header-links"]}
        style={{ color: "rgb(61, 100, 255)" }}
        to="/create-event"
        id="create-event"
      >
        <PlusIcon color="rgb(61, 100, 255)" />
        <span>Create an event</span>
      </Link>
      <Link id="likes" className={styles["header-links"]} to="/likes">
        <LikeIcon />
        <span>Likes</span>
      </Link>
      <Link id="tickets" className={styles["header-links"]} to="#">
        <TicketIcon />
        <span>Tickets</span>
      </Link>
      <EmailDisplay
        id="display-email-landpage"
        email={props.email}
        logoutHandler={props.logoutHandler}
      />
    </>
  );
}

function EmailDisplay(props) {
  const navigate = useNavigation();
  const [showNavLinks, setShowNavLinks] = useState(false);
  function handleMouseEnter() {
    setShowNavLinks(true);
  }
  function handleMouseLeave() {
    setShowNavLinks(false);
  }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id="email-display-header"
      className={`${styles["email-display"]} ${styles["header-links"]}`}
    >
      <span className={styles["person-icon__container"]}>
        <PersonIcon />
      </span>
      <span>{props.email}</span>
      <Arrow
        style={{ fill: "#c2c2cc", width: "24rem", height: "24rem" }}
        direction="down"
      />
      {showNavLinks && (
        <div className={styles.navLinks}>
          <ul>
            <li>Browse events</li>
            <li>
              <Link id="my-events" to="my-events">
                Manage my events
              </Link>
            </li>
            <li id="tickets">Tickets</li>
            <li id="likes">Liked</li>
            <li
              id="logout"
              onClick={() => {
                props.logoutHandler();
                navigate("/");
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
