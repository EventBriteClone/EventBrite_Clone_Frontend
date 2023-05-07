import React, { useEffect, useState, useContext } from "react";
import styles from "./StructureDrawer.module.css";
// import ManageEventBar from "./ManageEventBar";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function StructureDrawer() {
  return (
    <>
      <div className={styles.RoutingContainer}>
        <svg
          id="chevron-left-chunky_svg__eds-icon--chevron-left-chunky_svg"
          x="0"
          y="0"
          className={styles.arrow}
          viewBox="0 0 24 24"
        >
          <path
            id="chevron-left-chunky_svg__eds-icon--chevron-left-chunky_base"
            d="M13.8 7l-5 5 5 5 1.4-1.4-3.6-3.6 3.6-3.6z"
          ></path>
        </svg>
        <Link to="/my-events" className={styles.Routing} href="">
          Events
        </Link>
      </div>

      <hr className={styles["break-line"]} />
      <div>
        <h3 className={styles["h3-event-name"]}>
          <a href="">Name of Event</a>
        </h3>
        <p className={styles["paragraph-event-name"]}>
          Mon, May 29, 2023, 7:00PM
        </p>
        <div className={styles["container-name-event"]}>
          <a className={styles["preview-link"]} href="">
            <span>Preview your event</span>
            <i
              // className={styles["preview-event-icon"]}
              data-spec="icon"
              data-testid="icon"
              aria-hidden="true"
            >
              <svg className={styles["preview-event-icon"]} viewBox="0 0 24 24">
                <path
                  d="M18 18v2H4V6h7v2H6v10h10v-5h2zm1-11.586l-7.293 7.293-1.414-1.414L17.586 5H14V3h7v7h-2z"
                  fill-rule="evenodd"
                  fill-color="#3659e3"
                ></path>
              </svg>
            </i>
          </a>
        </div>
      </div>
      <hr className={styles["break-line"]} />
      <ManageEventBar />
    </>
  );
}

export default StructureDrawer;
