import React, { useEffect, useState, useContext } from "react";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavBar({ changeButton }) {
  return (
    <>
      <div className={styles.navbar}>
        <button
          className={styles.discardButtom}
          onClick={() => changeButton(false)}
        >
          Discard
        </button>
        <Link to="/event-ticket" href="">
          <button className={styles.saveButtom}>Save & Continue</button>
        </Link>
      </div>
    </>
  );
}
NavBar.propTypes = {
  changeButton: PropTypes.func,
};

export default NavBar;
