import React, { useEffect, useState, useContext } from "react";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";

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
        <button className={styles.saveButtom}>Save & Continue</button>
      </div>
    </>
  );
}
NavBar.propTypes = {
  changeButton: PropTypes.func,
};

export default NavBar;
