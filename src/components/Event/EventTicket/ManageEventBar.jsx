import React, { useEffect, useState, useContext } from "react";
import styles from "./ManageEventBar.module.css";
import OptionsManageEventBar from "./OptionsManageEventBar";
import { Link } from "react-router-dom";

function ManageEventBar() {
  return (
    <>
      <div className={styles["tab-index"]}>
        <ul>
          <li className={styles["basic-info-li"]}>
            <Link to="/create-event" href="">
              <div className={styles["list-item"]} data-spec="eds-list-item">
                <span className={styles["list-item-icon-span"]}>
                  <i
                    className={styles["list-item-vector-image"]}
                    data-spec="icon"
                    data-testid="icon"
                    aria-hidden="true"
                  >
                    <svg
                      className={styles["navigation-icon"]}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 28 28"
                      xml:space="preserve"
                    >
                      <circle
                        className={styles["navigation-icon-circle"]}
                        cx="14"
                        cy="14"
                        r="14"
                      ></circle>
                      <polygon
                        data-spec="shape-check"
                        // fill-color="white"
                        className={styles["navigation-icon-circle-component"]}
                        points="28.39,20.21 22.60,26.01 20.18,23.58 19.23,24.54 22.60,27.92 29.35,21.17"
                      ></polygon>
                    </svg>
                  </i>
                </span>

                <div className={styles["basic-info-div"]}>Basic Info</div>
              </div>
            </Link>
          </li>
          <li className={styles["basic-info-li"]}>
            <Link href="">
              <div className={styles["list-item"]} data-spec="eds-list-item">
                <span className={styles["list-item-icon-span"]}>
                  <i
                    className={styles["list-item-vector-image"]}
                    data-spec="icon"
                    data-testid="icon"
                    aria-hidden="true"
                  >
                    <svg
                      className={styles["navigation-icon"]}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 28 28"
                      xml:space="preserve"
                    >
                      <circle
                        className={styles["navigation-icon-circle"]}
                        cx="14"
                        cy="14"
                        r="14"
                      ></circle>
                      <path
                        data-spec="shape-two"
                        className={
                          styles["navigation-icon-circle-two-component"]
                        }
                        d="M16.9,24.5L16.9,24.5l3.7-4.1c1-1.1,1.4-1.7,1.4-2.5c0-1-0.5-1.8-1.8-1.8c-1.5,0-1.9,1.1-1.9,2.3h-1.2 c0-1.9,0.9-3.3,3.1-3.3c2.1,0,3,1.2,3,2.8c0,1-0.4,1.7-1.4,2.7c-0.8,0.9-1.8,1.8-2.7,2.8h4.1v1.1H16.9z"
                      ></path>
                    </svg>
                  </i>
                </span>
                <div
                  className={styles["list-item-component"]}
                  data-spec="eds-list-item-contents"
                >
                  <div className={styles["basic-info-div"]}>Details</div>
                </div>
              </div>
            </Link>
          </li>
          <li className={styles["basic-info-li"]}>
            <Link href="">
              <div className={styles["list-item"]} data-spec="eds-list-item">
                <span className={styles["list-item-icon-span"]}>
                  <i
                    className={styles["list-item-vector-image"]}
                    data-spec="icon"
                    data-testid="icon"
                    aria-hidden="true"
                  >
                    <svg
                      className={styles["navigation-icon"]}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 28 28"
                      xml:space="preserve"
                    >
                      <circle
                        className={styles["navigation-icon-circle"]}
                        cx="14"
                        cy="14"
                        r="14"
                      ></circle>
                      <path
                        data-spec="shape-three"
                        className={
                          styles["navigation-icon-circle-two-component"]
                        }
                        d="M21.6,19.5c1.3,0.3,1.9,1.1,1.9,2.3c0,1.6-1,2.7-3.2,2.7c-2.5,0-3.3-1.3-3.3-3.5h1.1 c0,1.4,0.4,2.4,2.1,2.4c1.4,0,2-0.8,2-1.8c0-1.2-0.8-1.7-2.3-1.7h-0.3V19h0.3c1.5,0,2.2-0.6,2.2-1.6c0-0.9-0.6-1.6-1.8-1.6 c-1.5,0-2,0.9-2,2.1h-1.1c0-1.9,1-3,3.2-3c2,0,2.9,1.1,2.9,2.4C23.2,18.4,22.8,19.2,21.6,19.5z"
                      ></path>
                    </svg>
                  </i>
                </span>
                <div
                  className={styles["list-item-component"]}
                  data-spec="eds-list-item-contents"
                >
                  <div className={styles["basic-info-div"]}>Tickets</div>
                </div>
              </div>
            </Link>
          </li>
          <li className={styles["basic-info-li"]}>
            <Link href="">
              <div className={styles["list-item"]} data-spec="eds-list-item">
                <span className={styles["list-item-icon-span"]}>
                  <i
                    className={styles["list-item-vector-image"]}
                    data-spec="icon"
                    data-testid="icon"
                    aria-hidden="true"
                  >
                    <svg
                      className={styles["navigation-icon"]}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 28 28"
                      xml:space="preserve"
                    >
                      <circle
                        className={styles["navigation-icon-circle"]}
                        cx="14"
                        cy="14"
                        r="14"
                      ></circle>
                      <path
                        data-spec="shape-four"
                        className={
                          styles["navigation-icon-circle-two-component"]
                        }
                        d="M17.7,20.9h3.2v-5.4h0L17.7,20.9z M23.3,20.9v1h-1.3v2.3h-1.2v-2.3H16v-0.1l4-6.8h2.1v5.9H23.3z"
                      ></path>
                    </svg>
                  </i>
                </span>
                <div
                  className={styles["list-item-component"]}
                  data-spec="eds-list-item-contents"
                >
                  <div className={styles["basic-info-div"]}>Publish</div>
                </div>
              </div>
            </Link>
          </li>
          <hr className={styles["break-line"]} />
          <OptionsManageEventBar />
        </ul>
      </div>
    </>
  );
}

export default ManageEventBar;
