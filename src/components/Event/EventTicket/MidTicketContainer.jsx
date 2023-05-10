import React, { useEffect, useState, useContext } from "react";
import styles from "./MidTicketContainer.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MidTicketContainer({ showDrawerButton, createSectionButton }) {
  return (
    <>
      <div>
        <div className={styles["ticket-logo-container"]}>
          <span className={styles["span-ticket"]}>
            <div className={styles["icon-background"]}>
              <i
                className={styles["vector-image-size"]}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg viewBox="0 0 144 144">
                  <g fill="none" fillRule="evenodd">
                    <g>
                      <path d="M0 0h144v144H0z"></path>
                      <path
                        d="M27 84v-.6c0-4.5 4.05-8.25 8.85-8.25 4.95 0 9.15 4.2 9.15 8.55v.3h3V42h42c.6 4.35 4.2 7.5 8.85 7.5 4.65 0 8.25-3.15 8.85-7.5h7.8v51h-7.8c-.6-4.35-4.2-7.5-8.85-7.5-4.65 0-8.25 3.15-8.85 7.5H35.85c-4.95 0-8.7-3-8.85-9z"
                        fill="#D2D6DF"
                        fillRule="nonzero"
                      ></path>
                      <path
                        fill="#363A43"
                        fillRule="nonzero"
                        d="M81 103h6v3h-6zM99 103h6v3h-6zM107 103h6v3h-6zM72 103h6v3h-6zM90 103h6v3h-6zM63 103h6v3h-6zM54 102.9h6v3h-6zM45 102.9h6v3h-6zM36 102.9h6v3h-6zM36 94h3v6h-3zM110 94h3v6h-3z"
                      ></path>
                      <path
                        d="M24 84.45c0 6.6 5.25 11.7 11.85 11.7H93v-1.5c0-3.45 2.55-6 6-6s6 2.55 6 6v1.5h13.5v-57H105v1.5c0 3.45-2.55 6-6 6s-6-2.55-6-6v-1.5H47.7c-1.05-5.7-5.85-9.9-11.7-9.9-6.75 0-12 5.4-12 12.15v43.05zM45 41.4v35.4c-3-2.7-5.55-4.35-9.15-4.35-3.6 0-7.35 1.65-8.85 4.05V41.25c0-5.1 3.9-9.15 9-9.15s9 4.2 9 9.3zM27 84v-.6c0-4.5 4.05-8.25 8.85-8.25 4.95 0 9.15 4.2 9.15 8.55v.3h3V42h42c.6 4.35 4.2 7.5 8.85 7.5 4.65 0 8.25-3.15 8.85-7.5h7.8v51h-7.8c-.6-4.35-4.2-7.5-8.85-7.5-4.65 0-8.25 3.15-8.85 7.5H35.85c-4.95 0-8.7-3-8.85-9z"
                        fill="#363A43"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M45 41.4v35.4c-3-2.7-5.55-4.35-9.15-4.35-3.6 0-7.35 1.65-8.85 4.05V41.25c0-5.1 3.9-9.15 9-9.15s9 4.2 9 9.3z"
                        fill="#FFF"
                        fillRule="nonzero"
                      ></path>
                      <path
                        fill="#363A43"
                        fillRule="nonzero"
                        d="M97.35 70.8h3v3h-3zM97.35 64.8h3v3h-3zM97.35 76.8h3v3h-3zM97.35 58.8h3v3h-3zM97.35 52.8h3v3h-3z"
                      ></path>
                      <path
                        fill="#3A3A3A"
                        fillRule="nonzero"
                        d="M54 58.8h37.5v3H54zM54 64.8h15v3H54z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </i>
            </div>
          </span>
        </div>
        <h1 className={styles["ticket-h1"]}>Let's create tickets</h1>
        <p className={styles["paragraph-ticket"]}>
          Create a section if you want to sell multiple ticket types that share
          the same inventory. i.e. Floor, Mezzanine.
        </p>
        <div className={styles["buttons-contariner"]}>
          <button
            onClick={() => createSectionButton(true)}
            className={styles["create-section-button"]}
          >
            Create a section
          </button>
          <button
            className={styles["add-tickets-button"]}
            onClick={() => showDrawerButton(true)}
          >
            Add tickets
          </button>
        </div>
      </div>
    </>
  );
}
MidTicketContainer.propTypes = {
  showDrawerButton: PropTypes.func,
};

MidTicketContainer.propTypes = {
  createSectionButton: PropTypes.func,
};
export default MidTicketContainer;
