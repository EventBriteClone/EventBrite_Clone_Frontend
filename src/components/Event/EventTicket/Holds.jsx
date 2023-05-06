import React, { useEffect, useState, useContext } from "react";
import styles from "./Holds.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Holds() {
  return (
    <>
      <div className={styles["holds-container"]}>
        <div className={styles["add-ons-logo-container"]}>
          <span className={styles["span-add-ons"]}>
            <div className={styles["icon-holds-background"]}>
              <i data-spec="icon" data-testid="icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className={styles["holds-image"]}
                  width="96"
                  height="93"
                  xml:space="preserve"
                  version="1.1"
                  viewBox="0 0 96 93"
                >
                  <image
                    width="96"
                    height="93"
                    xlink:href="data:image/png;base64,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"
                  />
                </svg>
              </i>
            </div>
          </span>
        </div>
        <h1 className={styles["holds-h1"]}>No holds yet</h1>
        <p className={styles["paragraph-holds"]}>
          To create hold tickets, first
          <a className={styles["set-event-capacity"]} href="">
            set event capacity
          </a>
        </p>
      </div>
    </>
  );
}
export default Holds;
