import React, { useEffect, useState, useContext } from "react";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";
import { useNavigation } from "react-router-dom/dist";
import { Link } from "react-router-dom";

function NavBar({
  changeButton,
  locationAvaliable,
  nameAvaliable,
  showErrorText,
  showLocationErrorText,
  errorVisible,
}) {
  function saveAndCont(event) {
    if (nameAvaliable === true && locationAvaliable === true) {
      window.location.href = "/event-ticket";
    } else if (nameAvaliable != true && locationAvaliable != true) {
      showErrorText(true);
      showLocationErrorText(true);
      errorVisible(true);
    } else if (nameAvaliable != true) {
      showErrorText(true);
      errorVisible(true);
    } else if (locationAvaliable != true) {
      showLocationErrorText(true);
      errorVisible(true);
    }
  }
  return (
    <>
      <div className={styles.navbar}>
        <button
          className={styles.discardButtom}
          onClick={() => changeButton(false)}
        >
          Discard
        </button>
        <Link to="" href="">
          <button className={styles.saveButtom} onClick={saveAndCont}>
            Save & Continue
          </button>
        </Link>
      </div>
    </>
  );
}
NavBar.propTypes = {
  changeButton: PropTypes.func,
  nameAvaliable: PropTypes.bool,
  locationAvaliable: PropTypes.bool,
  showErrorText: PropTypes.bool,
  showLocationErrorText: PropTypes.bool,
  errorVisible: PropTypes.func,
};

export default NavBar;
