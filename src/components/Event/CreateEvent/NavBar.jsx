import React, { useEffect, useState, useContext } from "react";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";

function NavBar({ changeButton }) {
  // const [showHideSearchBar, setShowHideSearchBar] = useState(false);
  // const [HideSearchBar, setHideSearchBar] = useState(true);

  // // Venue Button Hide and -_`
  // const [showVenue, setshowVenue] = useState(true);
  // function handleShowVenue(event) {
  //   setshowVenue(true);
  //   setshowOnlineEvent(false);
  //   if (HideSearchBar) {
  //     setShowHideSearchBar(false);
  //   }
  // }
  // // Online Event Button Hide and Show
  // const [showOnlineEvent, setshowOnlineEvent] = useState(false);
  // function handleShowOnlineEvent(event) {
  //   setshowVenue(false);
  //   setshowOnlineEvent(true);
  //   setShowHideSearchBar(true);
  // }
  // // Online Event Button Hide and Show
  // const [showToBeAnnounced, setshowToBeAnnounced] = useState(false);
  // function handleShowToBeAnnounced(event) {
  //   setshowVenue(false);
  //   setshowOnlineEvent(false);
  //   setShowHideSearchBar(true);
  // }

  return (
    <>
      <div className={styles.navbar}>
        <button
          className={styles.discardButtom}
          onClick={() => changeButton(false)}
        >
          Discard
        </button>
        <button className={styles.saveButtom}>Save & Continue</button>
      </div>
    </>
  );
}
NavBar.propTypes = {
  changeButton: PropTypes.func,
};

export default NavBar;
