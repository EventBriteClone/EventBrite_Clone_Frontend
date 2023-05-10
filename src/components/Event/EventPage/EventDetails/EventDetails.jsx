import styles from "./EventDetails.module.css";
export default function EventDetails(props) {
  return (
    <div className={styles["event-details"]}>
      <div className={styles["date-and-location"]}>
        <div className={styles["date-time"]}>
          <h2 className={styles["h2"]}>When and Where</h2>
          {/* <div class="detail-icon">
          <i
            class="eds-vector-image eds-icon--small eds-vector-image--block"
            data-spec="icon"
            data-testid="icon"
            aria-hidden="true"
          >
            <svg
              id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
            >
              <path
                id="calendar-chunky_svg__eds-icon--calendar-chunky_base"
                d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"
              ></path>
            </svg>
          </i>
        </div> */}
          <div className={styles["date-and-time"]}>
            <div class={styles["detail__icon"]}>
              <i
                class={`${styles["eds-vector-image"]} ${styles["eds-icon--small"]} ${styles["eds-vector-image--block"]}`}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg
                  id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                >
                  <path
                    id="calendar-chunky_svg__eds-icon--calendar-chunky_base"
                    d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"
                  ></path>
                </svg>
              </i>
            </div>
            <div className={styles["date-time-heading"]}>
              <h3>Date and Time</h3>
              <p className={styles["p"]}>
                <span class={styles["appointment"]}>{props.dateAndtime}</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles["location"]}>
          <div className={styles["date-and-time"]}>
            <div class={styles["detail__icon"]}>
              <i
                class={`${styles["eds-vector-image"]} ${styles["eds-icon--small"]}`}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                {/* <svg viewBox="0 0 24 24">
                  <path
                    d="M12 0C8.134 0 5 3.134 5 7c0 3.237 2.246 6.474 4.916 10.292 1.125 1.567 2.404 3.331 3.284 5.026.88-1.695 2.16-6.459 2.284-6.026C16.754 13.474 19 10.237 19 7c0-3.866-3.134-7-7-7zm0 4a3 3 0 11-.001 6.001A3 3 0 0112 4z"
                    fill="#0124d9"
                  />
                  <path
                    d="M12 2a5 5 0 110 10 5 5 0 010-10zm0 8a3 3 0 100-6 3 3 0 000 6z"
                    fill="#fff"
                  />
                </svg> */}
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 0C8.134 0 5 3.134 5 7c0 3.237 2.246 6.474 4.3 10.292 1.125 1.567 2.404 3.331 3.284 5.026.88-1.695 3.16-6.459 3.0-6.026C16.754 13.474 19 9.237 19 7c0-3.866-3.134-7-7-7zm0 4a3 3 0 11-.001 6.001A3 3 0 0112 4z"
                    fill="#000"
                  />
                  <path
                    d="M12 2a5 5 0 110 10 5 5 0 010-10zm0 8a3 3 0 100-6 3 3 0 000 6z"
                    fill="#fff"
                  />
                </svg>
              </i>
            </div>
            <div className={styles["date-time-heading"]}>
              <h3>Location</h3>
              <p className={styles["p"]}>
                <div class="address">{props.location}</div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["about"]}>
        <div className={styles["refund-policy"]}>
          <h2 className={styles["h2"]}>Refund Policy</h2>
          <p className={styles["p"]}>
            Contact the organizer to request a refund.
          </p>
        </div>
        <div className={styles["about-event"]}>
          <h2 className={styles["h2"]}>About this event</h2>
          <div className={styles["about-icons"]}>
            <div className={styles["time"]}>
              <div class={styles["detail__icon"]}>
                <i
                  class={`${styles["eds-vector-image"]} ${styles["eds-icon--small eds-vector-image--block"]}`}
                  data-spec="icon"
                  data-testid="icon"
                  aria-hidden="true"
                >
                  <svg
                    id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.001 8h1.991v4h2.64v2h-4.63V8z"
                      fill="#010101"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.676 10.053A6.011 6.011 0 0012 6c-3.308 0-6 2.692-6 6a6.007 6.007 0 006.888 5.934l1.055 1.828a8 8 0 115.879-9.45l-2.146-.26zm.323 2.053a5.963 5.963 0 01-.453 2.183l1.687 1.134a7.959 7.959 0 00.76-3.075l-1.994-.242zm-1.517 3.878l1.674 1.125a8.035 8.035 0 01-2.328 1.917l-1.002-1.734a6.04 6.04 0 001.656-1.308z"
                      fill="#010101"
                    ></path>
                  </svg>
                </i>
              </div>
              <div className={styles["period"]}>{props.duration}</div>
            </div>

            <div className={styles["ticket"]}>
              <div class={styles["detail__icon"]}>
                <i
                  class={`${styles["eds-vector-image"]} ${styles["eds-icon--small"]} ${styles["eds-vector-image--block"]}`}
                  data-spec="icon"
                  data-testid="icon"
                  aria-hidden="true"
                >
                  <svg
                    id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 5.79c3.05 0 5.523 2.403 5.523 5.368h1.84C19.364 7.205 16.068 4 12 4v1.79zm-1.768 2.702c-1.744 0-1.744-2.054-1.744-2.054H5V20h3.488s0-2.055 1.744-2.055S11.976 20 11.976 20h3.488v-6.476H13.72v4.78h-.36c-.526-1.217-1.598-2.054-3.128-2.054s-2.602.837-3.128 2.055h-.36V8.133h.36c.526 1.218 1.598 2.055 3.128 2.055V8.492zm3.609 3.087c0-.988-.824-1.79-1.841-1.79V8c2.033 0 3.682 1.602 3.682 3.579H13.84z"
                      fill="#010101"
                    ></path>
                  </svg>
                </i>
              </div>
              <div className={styles["period"]}>{props.ticket}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["event-content"]}>
        Whether you are a beginner, intermediate or advanced player, join our
        League. We are a community of squash enthusiasts, who love the game.Will
        be organizing games to train, excel and most important, for the love of
        the game. So, join the league! *** Please Read Carefully *** Court fee
        is EGP 100/person/hour, which apply on everyone, as this is a private
        group. Fees are paid at court before playing/. Maximum number of players
        per session is 6. Each player will play 5 games per hour. Bring your own
        racket and water.
      </div>
    </div>
  );
}
