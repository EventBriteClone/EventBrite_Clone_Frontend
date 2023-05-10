import React, { useEffect, useState, useContext } from "react";
import styles from "./OptionsManageEventBar.module.css";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function OptionsManageEventBar(props) {
  async function submitHandler(e) {
    console.log("2btdena");
    e.preventDefault();
    let endpoint,
      configurationOpt = {};

    console.log("using mock server");
    endpoint = `dashboard/eventmanagement/sold-tickets/${1536}/ticket-classes/ `;
    configurationOpt = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      timeout: 10000,
    };

    try {
      const res = await fetch(
        await fetch(
          `${"https://event-us.me:8000/"}${endpoint}`,
          configurationOpt
        )
      );
      const response = await res.json();
      console.log("responseeee", response);

      //     if (response.email_exists == true) {
      //       console.log("mawgod");

      //       navigate("/login");
      //     } else {
      //       props.submitHandler();
      //     }
    } catch (error) {
      console.error(error);
      return { error };
    }
  }

  return (
    <>
      <li>
        <a
          data-automation="coyote-navigation-link-dashboard"
          href=""
          data-spec="anchor-list-item"
          className={styles["dashboard-list-item-a"]}
        >
          <div
            className={styles["dashboard-list-item-align-middle"]}
            data-spec="eds-list-item"
          >
            <div
              className={styles["dashboard-list-item-contents"]}
              data-spec="eds-list-item-contents"
            >
              <Link to="/Dashboard/:id" href="">
                <div className={styles["dashboard-list-item-name"]}>
                  <button onClick={submitHandler}>Dashboard</button>
                </div>
              </Link>
            </div>
          </div>
        </a>
      </li>
      <li>
        <button
          name="order_options"
          data-automation="modify_order"
          data-spec="expand-list-item"
          className={styles["list-item-a"]}
          type="button"
        >
          <div
            className={styles["order-options-item-align-middle"]}
            data-spec="eds-list-item"
          >
            <div
              className={styles["order-options-item-contents"]}
              data-spec="eds-list-item-contents"
            >
              <div className={styles["order-options-nav-item"]}>
                Order Options
                <div className={styles["order-options-symbol-item"]}>
                  <i
                    className={styles["order-options-small-icon"]}
                    data-spec="icon"
                    data-testid="icon"
                    aria-hidden="true"
                  >
                    <svg
                      id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_svg"
                      x="0"
                      y="0"
                      viewBox="0 0 24 24"
                      xml:space="preserve"
                    >
                      <path
                        id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
                      ></path>
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </button>
      </li>
      <li>
        <button
          name="invite_promote"
          data-automation="invite_promote"
          data-spec="expand-list-item"
          className={styles["list-item-a"]}
          type="button"
        >
          <div
            className={styles["market-list-item-align-middle"]}
            data-spec="eds-list-item"
          >
            <div
              className={styles["market-list-item-contents"]}
              data-spec="eds-list-item-contents"
            >
              <div className={styles["market-list-nav-item"]}>
                Marketing
                <div className={styles["market-list-item-symbol"]}>
                  <i
                    className={styles["market-list-small-icon-item"]}
                    data-spec="icon"
                    data-testid="icon"
                    aria-hidden="true"
                  >
                    <svg
                      id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_svg"
                      x="0"
                      y="0"
                      viewBox="0 0 24 24"
                      xml:space="preserve"
                    >
                      <path
                        id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
                      ></path>
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </button>
      </li>
      <li>
        <button
          name="manage_attendees"
          data-automation="manage_attendees"
          data-spec="expand-list-item"
          className={styles["list-item-a"]}
          type="button"
        >
          <div
            className={styles["manage-attendees-list-item-align-middle"]}
            data-spec="eds-list-item"
          >
            <div
              className={styles["manage-attendees-list-item-contents"]}
              data-spec="eds-list-item-contents"
            >
              <div className={styles["manage-attendees-list-nav-item"]}>
                Manage Attendees
                <div className={styles["manage-attendees-symbol-item"]}>
                  <i
                    className={styles["manage-attendees-small-icon-item"]}
                    data-spec="icon"
                    data-testid="icon"
                    aria-hidden="true"
                  >
                    <svg
                      id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_svg"
                      x="0"
                      y="0"
                      viewBox="0 0 24 24"
                      xml:space="preserve"
                    >
                      <path
                        id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
                      ></path>
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </button>
      </li>
      <hr className={styles["break-line"]} />
    </>
  );
}

export default OptionsManageEventBar;
