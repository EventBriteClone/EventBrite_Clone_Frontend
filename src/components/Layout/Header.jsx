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
  console.log(authState);

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
      >
        Create an event
      </Link>
      <Link className={styles["header-links"]} to="/login">
        Log In
      </Link>
      <Link className={styles["header-links"]} to="/signup">
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
      >
        <PlusIcon color="rgb(61, 100, 255)" />
        <span>Create an event</span>
      </Link>
      <Link className={styles["header-links"]} to="/login">
        <LikeIcon />
        <span>Likes</span>
      </Link>
      <Link className={styles["header-links"]} to="/signup">
        <TicketIcon />
        <span>Tickets</span>
      </Link>
      <EmailDisplay email={props.email} logoutHandler={props.logoutHandler} />
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
              <Link to="my-events">Manage my events</Link>
            </li>
            <li>Tickets</li>
            <li>Liked</li>
            <li
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
