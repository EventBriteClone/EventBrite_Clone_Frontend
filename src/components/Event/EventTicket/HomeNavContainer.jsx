import React, { useEffect, useState, useContext } from "react";
import styles from "./HomeNavContainer.module.css";
// import TodayIcon from "@mui/icons-material/Today";
// import { BsFillCalendarDateFill } from "react-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HomeNavConatiner() {
  return (
    <div className={styles["creator-left-nav-container"]}>
      <div className={styles["side-bar"]}>
        <div className={styles["side-bar-items"]}>
          <aside className={styles.Icons}>
            {/* Home */}
            <div className={styles["home-icon-container"]}>
              <i
                className={styles["home-icon"]}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={styles["home-icon-display-default"]}
                >
                  <path
                    d="M17.4999 9.74385V19.501H12.4999V14.0011V13.5011H11.9999H7.97441H7.47227L7.47441 14.0032L7.49782 19.501H2.5V9.74385L9.99994 3.83948L17.4999 9.74385Z"
                    fill="#F8F7FA"
                    stroke="#6F7287"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0001 0L0 8.19574L0.619495 8.98123L10.0001 1.49999L19.2804 8.98123L20 8.19524L10.0001 0Z"
                    fill="#6F7287"
                  ></path>
                </svg>
              </i>
            </div>
            <div className={styles["home-left-navdescription-container"]}>
              <div
                className={
                  styles["home-left-button-click-navdescription-container"]
                }
              >
                Home
              </div>
            </div>
            {/* Calender */}
            {/* <div>
            <BsFillCalendarDateFill />
          </div> */}
            {/* Orders */}
            <div className={styles["order-icon-container"]}>
              <i
                className={styles["order-icon"]}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg
                  className={styles["order-icon-default"]}
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 2v1h2v19l2.67-1.524L9.338 22l2.67-1.524L14.664 22l2.664-1.524L19.983 22 20 3H22V2H2zm3 1h14v17.282l-1.671-.959-2.665 1.524-2.655-1.524-2.671 1.526-2.67-1.526L5 20.282V3zm11 11H8v1h8v-1zm0-3H8v1h8v-1zm0-3H8v1h8V8z"
                    fill="#6F7287"
                  ></path>
                  <path fill="#EEEDF2" d="M5 3h14v2H5z"></path>
                </svg>
              </i>
            </div>
            {/* Marketing */}
            <div className={styles["marketing-icon-container"]}>
              <i
                className={styles["marketing-icon"]}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg
                  className={styles["marketing-icon-default-display"]}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9.5h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v-5z"
                    fill="#EEEDF2"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.003 14.12V9.88c1 .005 1.993.953 1.993 2.12 0 1.165-.993 2.114-1.993 2.118zm-1 4.565l-9-4.428v-4.64l9-4.355v13.423zM4.003 14h3v-4h-3v4zm16.993-2c0-1.717-1.493-3.115-2.993-3.12V3h-1v1.148L7.003 9h-4v6h2v3h1v-3h1.234l9.766 4.803V21h1v-5.88c1.5-.005 2.993-1.402 2.993-3.12z"
                    fill="#6F7287"
                  ></path>
                  <path fill="#EEEDF2" d="M4 10h3v4H4z"></path>
                </svg>
              </i>
            </div>
            {/* Reports */}
            <div className={styles["reports-icon-container"]}>
              <i
                className={styles["reports-icon"]}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg
                  className={styles["reports-icon-display-default"]}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 22h5v-1h-1V2h-4v19h-3V6h-4v15H7V10H3v11H2v1h15zM13 7h-2v14h2V7zm5-4h2v18h-2V3zM6 11H4v10h2V11z"
                    fill="#6F7287"
                  ></path>
                  <path fill="#EEEDF2" d="M11 7h2v14h-2z"></path>
                </svg>
              </i>
            </div>
            {/* Finance */}
            <div className={styles["finance-icon-container"]}>
              <i
                className={styles["finance-icon"]}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg
                  className={styles["finance-icon-display-default"]}
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.53 10.639h1.176v6.817H5.529v-6.817Z"
                    fill="#EEEDF2"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.353 9.503h3.53v9.089h-3.53v-9.09Zm2.353 1.136H5.529v6.817h1.177v-6.817Z"
                    fill="#6F7287"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 17.456h20V22H2v-4.544Zm1.176 1.136v2.272h17.648v-2.272H3.176Z"
                    fill="#6F7287"
                  ></path>
                  <path
                    d="M11.412 10.639h1.177v6.817h-1.177v-6.817Z"
                    fill="#EEEDF2"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.235 9.503h3.53v9.089h-3.53v-9.09Zm2.353 1.136h-1.176v6.817h1.176v-6.817Z"
                    fill="#6F7287"
                  ></path>
                  <path
                    d="M17.294 10.639h1.176v6.817h-1.176v-6.817Z"
                    fill="#EEEDF2"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.118 9.503h3.53v9.089h-3.53v-9.09Zm2.353 1.136h-1.177v6.817h1.177v-6.817Z"
                    fill="#6F7287"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 6.507 12 2l10 4.507v4.132H2V6.507Zm10-3.253L3.176 7.23v2.273h17.648V7.23L12 3.254Z"
                    fill="#6F7287"
                  ></path>
                </svg>
              </i>
            </div>
            {/* Organization Settings */}
            <div className={styles["organization-settings-container"]}>
              <i
                className={styles["organization-settings"]}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg
                  className={styles["organization-settings-display-default"]}
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="3.557" fill="#EEEDF2"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm2-13h-4v2.262a7.95 7.95 0 0 0-2.058.852l-1.599-1.6-2.829 2.829 1.6 1.6A7.95 7.95 0 0 0 4.262 10H2v4h2.262a7.95 7.95 0 0 0 .852 2.058l-1.6 1.599 2.829 2.828 1.6-1.599a7.95 7.95 0 0 0 2.057.852V22h4v-2.262a7.95 7.95 0 0 0 2.058-.852l1.599 1.6 2.828-2.829-1.599-1.6A7.95 7.95 0 0 0 19.738 14H22v-4h-2.262a7.95 7.95 0 0 0-.852-2.058l1.6-1.599-2.829-2.829-1.6 1.6A7.95 7.95 0 0 0 14 4.262V2Zm-2 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4Zm1-13v2.037l.75.194a6.95 6.95 0 0 1 1.799.744l.668.394.548-.548.892-.892 1.414 1.414-.892.893-.548.548.394.667c.33.56.581 1.165.745 1.798l.193.751H21v2h-2.037l-.194.75a6.95 6.95 0 0 1-.744 1.799l-.394.668.548.548.892.892-1.414 1.414-.892-.892-.549-.548-.667.394a6.95 6.95 0 0 1-1.798.745l-.751.193V21h-2v-2.037l-.75-.194a6.95 6.95 0 0 1-1.799-.744l-.668-.394-.548.548-.892.892-1.414-1.414.892-.892.548-.549-.394-.667a6.95 6.95 0 0 1-.744-1.798L5.037 13H3v-2h2.037l.194-.75a6.95 6.95 0 0 1 .744-1.799l.394-.668-.548-.548-.892-.892 1.414-1.414.893.892.548.548.667-.394a6.95 6.95 0 0 1 1.798-.744L11 5.037V3h2Z"
                    fill="#6F7287"
                  ></path>
                </svg>
              </i>
            </div>
            {/* App Marketplace */}
            <div className={styles["app-marketplace-container"]}>
              <i
                className={styles["app-marketplace"]}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={styles["app-marketplace-display-default"]}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 20h6v-6H4v6zm1-5h4v4H5v-4zm-1-5h6V4H4v6zm1-5h4v4H5V5zm9 5h6V4h-6v6zm1-5h4v4h-4V5zm-1 15h6v-6h-6v6zm1-5h4v4h-4v-4z"
                    fill="#6F7287"
                  ></path>
                  <path fill="#EEEDF2" d="M15 5h4v4h-4zM5 15h4v4H5z"></path>
                </svg>
              </i>
            </div>
            {/* Help Center */}
            <div className={styles["help-center-container"]}>
              <i
                className={styles["help-center"]}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles["help-center-display-default"]}
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="#EEEDF2"
                    stroke-width="2"
                  ></circle>
                  <circle cx="12" cy="12" r="9.5" stroke="#6F7287"></circle>
                  <path
                    d="M9 10.22c0-.969.274-1.746.822-2.333.547-.591 1.3-.887 2.255-.887.885 0 1.592.253 2.122.76.534.501.801 1.144.801 1.928 0 .475-.099.86-.296 1.156-.193.296-.586.73-1.179 1.304-.43.417-.711.77-.841 1.062-.126.286-.19.712-.19 1.277h-1.198c0-.641.077-1.156.23-1.546.152-.394.486-.845 1.003-1.35l.538-.532c.162-.152.292-.311.39-.477.18-.291.27-.594.27-.907 0-.44-.132-.82-.397-1.143-.26-.322-.694-.484-1.3-.484-.75 0-1.268.278-1.555.834-.162.309-.254.755-.276 1.337H9Z"
                    fill="#6F7287"
                  ></path>
                  <circle
                    cx="11.841"
                    cy="16.218"
                    r="0.691"
                    fill="#6F7287"
                  ></circle>
                </svg>
              </i>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default HomeNavConatiner;
