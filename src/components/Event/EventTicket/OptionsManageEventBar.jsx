import React, { useEffect, useState, useContext } from "react";
import styles from "./OptionsManageEventBar.module.css";

import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
export default function OptionsManageEventBar(props) {
  const authContext = useContext(AuthContext);
  const [ctx, setCtx] = useState(authContext);
  const [ticket, setticket] = useState("");
  const [quantity_sold, setquantity] = useState("");
  const [capacity, setcapacity] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  console.log("ctx", ctx);

  const handleButtonClick = async (e) => {
    setCtx(authContext);
    if (ctx.authState.isAuthenticated == false) {
      console.log("na fe else");
      navigate("/login");
    } else {
      await submitHandler(e);
    }

    // three(ctx, e, navigate);
    // two(ctx, e, navigate);
  };
  async function submitHandler(e) {
    // console.log("2btdena");
    e.preventDefault();

    console.log("2btdena");

    let endpoint,
      configurationOpt = {};

    console.log("using mock server");
    endpoint = `dashboard/eventmanagement/sold-tickets/${1536}/ticket-classes/ `;
    configurationOpt = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `CustomToken ${token}`,
        //  Authorization: `CustomToken  ${ctx.authState.token}`,
      },
      timeout: 10000,
    };
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
              <Link to={`/Dashboard/${id}`} />
              <div className={styles["dashboard-list-item-name"]}>
                <button onClick={handleButtonClick}>Dashboard</button>
              </div>
              <Link />
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
                      xmlSpace="preserve"
                    >
                      <path
                        id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                        fillRule="evenodd"
                        clipRule="evenodd"
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
                      xmlSpace="preserve"
                    >
                      <path
                        id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                        fillRule="evenodd"
                        clipRule="evenodd"
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
                      xmlSpace="preserve"
                    >
                      <path
                        id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                        fillRule="evenodd"
                        clipRule="evenodd"
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
