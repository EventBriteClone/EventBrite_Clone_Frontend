import React, { useEffect, useState, useContext } from "react";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom/dist";
import { Link } from "react-router-dom";
import { CreateEventContext } from "../../../context/CreateEventContext";

function NavBar({
  changeButton,
  locationAvaliable,
  nameAvaliable,
  showErrorText,
  showLocationErrorText,
  errorVisible,
}) {
  const { createEvent } = useContext(CreateEventContext);
  const navigate = useNavigate();
  function saveAndCont(event) {
    if (
      createEvent.eventTitle &&
      (createEvent.location || createEvent.online)
    ) {
      navigate("/publish");
    } else if (!createEvent.eventTitle && locationAvaliable !== true) {
      showErrorText(true);
      showLocationErrorText(true);
      errorVisible(true);
    } else if (!createEvent.eventTitle) {
      showErrorText(true);
      errorVisible(true);
    } else if (locationAvaliable !== true && !createEvent.online) {
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
  showErrorText: PropTypes.func,
  showLocationErrorText: PropTypes.func,
  errorVisible: PropTypes.func,
};

export default NavBar;
