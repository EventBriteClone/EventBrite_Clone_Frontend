import styles from "./ShareEvent.module.css";

export default function ShareEvent() {
  return (
    <section
      className={styles["share-inline"]}
      aria-labelledby="share-inline-heading"
    >
      <div className={styles["l-sm-mar-bot-4"]}>
        <div className={styles["event-details__section-title"]}>
          <h2>Share with friends</h2>
        </div>
        <div className={styles["share-box-container"]}>
          <div className={styles.media}>
            <div data-spec={styles["share-box-container"]}>
              <span
                className={styles["eds-l-pad-right-1"]}
                data-spec={"facebook-share-box-container"}
              >
                <span
                  className={`${styles["eds-icon-button"]} ${styles["eds-icon-button--neutral"]}`}
                  data-spec="icon-button"
                >
                  <button
                    className={`
                      ${styles["eds-btn--button"]} ${styles["eds-btn--none"]} ${styles["eds-btn--icon-only"]}
                    `}
                    type="button"
                  >
                    <i
                      className={
                        styles[
                          "eds-vector-image eds-icon--small eds-vector-image--block"
                        ]
                      }
                      title=""
                      data-spec="icon"
                      data-testid="icon"
                    >
                      <svg viewBox="0 0 22 22">
                        <path d="M14.893 11.89L15.336 9h-2.773V7.124c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.777 1.385-3.777 3.89V9h-2.54v2.89h2.54v6.989a10.075 10.075 0 003.124 0V11.89h2.33"></path>
                      </svg>
                    </i>
                  </button>
                </span>
              </span>
              <span
                className={styles["eds-l-pad-right-1"]}
                data-spec="facebook-messenger-share-box-container"
              >
                <span
                  className={`${styles["eds-icon-button"]} ${styles["eds-icon-button--neutral"]}`}
                  data-spec="icon-button"
                >
                  <button
                    className={`
                      ${styles["eds-btn--button"]} ${styles["eds-btn--none"]} ${styles["eds-btn--icon-only"]}
                    `}
                    type="button"
                  >
                    <i
                      className={`
                          ${styles["eds-vector-image"]} ${styles["eds-icon--small"]} ${styles["eds-vector-image--block"]}
                        `}
                      title=""
                      data-spec="icon"
                      data-testid="icon"
                    >
                      <svg viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.7 14.5l5.2-5.8-4.6 2.9-2.7-2.9-5.2 5.8 4.8-2.7 2.5 2.7zM12 2c5.5 0 10 4.1 10 9.2s-4.5 9.2-10 9.2c-1 0-2.1-.1-3-.4l-3.3 2v-3.6C3.4 16.7 2 14.1 2 11.2 2 6.1 6.5 2 12 2z"
                        ></path>
                      </svg>
                    </i>
                  </button>
                </span>
              </span>
              <span
                className={styles["eds-l-pad-right-1"]}
                data-spec="linkedin-share-box-container"
              >
                <span
                  className={styles["eds-icon-button eds-icon-button--neutral"]}
                  data-spec="icon-button"
                >
                  <button
                    className={`
                      ${styles["eds-btn--button"]} ${styles["eds-btn--none"]} ${styles["eds-btn--icon-only"]}
                    `}
                    type="button"
                  >
                    <i
                      className={`
                          ${styles["eds-vector-image"]} ${styles["eds-icon--small"]} ${styles["eds-vector-image--block"]}
                      `}
                      title=""
                      data-spec="icon"
                      data-testid="icon"
                    >
                      <svg viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.3 21.5h4.3V8.7H2.3v12.8zm2.2-19C3 2.5 2 3.5 2 4.7 2 6 2.9 7 4.5 7 6 7 6.9 6 6.9 4.7c0-1.2-1-2.2-2.4-2.2zm12.8 5.9c-2.2 0-3.1.7-4.1 2.1V8.7H8.9v12.8h4.3v-7c0-.3 0-.7.1-1 .3-1 1.1-1.7 2.2-1.7s1.7.6 2 1.5c.2.7.2 1.6.2 2.1v6.1H22v-7.6c0-2.5-1.2-5.5-4.7-5.5z"
                        ></path>
                      </svg>
                    </i>
                  </button>
                </span>
              </span>
              <span
                className={styles["eds-l-pad-right-1"]}
                data-spec="twitter-share-box-container"
              >
                <span
                  className={styles["eds-icon-button eds-icon-button--neutral"]}
                  data-spec="icon-button"
                >
                  <button
                    className={`
                      ${styles["eds-btn--button"]} ${styles["eds-btn--none"]} ${styles["eds-btn--icon-only"]}
                    `}
                    type="button"
                  >
                    <i
                      className={`${styles["eds-vector-image eds-icon--small"]} ${styles["eds-vector-image--block"]}"
                        ]
                      `}
                      title=""
                      data-spec="icon"
                      data-testid="icon"
                    >
                      <svg viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M21.4 4.1s-.6.4-1.2.7c-.6.2-1.3.4-1.3.4s-2-2.3-4.9-.8c-2.9 1.5-2 4.5-2 4.5s-2.9-.2-4.9-1.2C4.9 6.5 3.4 4.6 3.4 4.6s-.9 1.4-.5 3 1.8 2.5 1.8 2.5-.4 0-.9-.2c-.5-.1-1-.4-1-.4s-.1 1.3.8 2.6S6 13.6 6 13.6l-.8.2h-.9s.2 1.1 1.4 2c1.1.8 2.3.8 2.3.8s-1.1.9-2.7 1.4c-1.6.5-3.3.3-3.3.3s6 4 12.2.3c6.2-3.7 5.7-10.7 5.7-10.7s.6-.4 1-.9l1-1.2s-.7.3-1.3.5c-.5.2-.9.2-.9.2s.6-.4.9-.9c.5-.7.8-1.5.8-1.5z"
                        ></path>
                      </svg>
                    </i>
                  </button>
                </span>
              </span>
              <span
                className={styles["eds-l-pad-right-1"]}
                data-spec="email-share-box-container"
              >
                <span
                  className={`${styles["eds-icon-button"]} ${styles["eds-icon-button--neutral"]}`}
                  data-spec="icon-button"
                >
                  <button
                    className={`
                      ${styles["eds-btn--button"]} ${styles["eds-btn--none"]} ${styles["eds-btn--icon-only"]}
                    `}
                    type="button"
                  >
                    <i
                      className={`
                        ${styles["eds-vector-image"]} ${styles["eds-icon--small"]} ${styles["eds-vector-image--block"]}
                      `}
                      title=""
                      data-spec="icon"
                      data-testid="icon"
                    >
                      <svg
                        id="mail-fill-chunky_svg__eds-icon--mail-fill-chunky_svg"
                        x="0"
                        y="0"
                        viewBox="0 0 24 24"
                        xml:space="preserve"
                      >
                        <path
                          id="mail-fill-chunky_svg__eds-icon--mail-fill-chunky_base"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 14.2L4 8.4V18h16V8.4l-8 5.8z"
                        ></path>
                        <path
                          id="mail-fill-chunky_svg__eds-icon--mail-fill-chunky_top"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.1 6l7.9 5.8L19.9 6z"
                        ></path>
                      </svg>
                    </i>
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
