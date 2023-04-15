import styles from "./AboutOrganizer.module.css";

export default function AboutOrganizer(props) {
  return (
    <div className={styles["about-organizer"]}>
      <h2>About the organizer</h2>
      <div className={styles["about-org"]}>
        <div className={styles["organized-by"]}>
          <p>Organized by</p>
        </div>
        <div className={styles["organizer"]}>
          <h2>{props.organizer}</h2>
        </div>
        <div className={styles["followers-number"]}>
          <h3>{props.organizerFollowers}</h3>
        </div>
        <span className={styles["fol"]}>Followers</span>

        <div className={styles["reach"]}>
          <div className={styles["contact-btn"]}>
            <button
              class={`${styles["eds-btn"]} ${styles["eds-btn--button"]} ${styles["eds-btn--contact"]} ${styles["contact-button-listing-page"]}`}
              type="button"
            >
              Contact
            </button>
          </div>
          <div className={styles["follow-btn"]}>
            <button
              class={`${styles["eds-btn"]} ${styles["eds-btn--button"]} ${styles["eds-btn--follow"]} ${styles["follow-button-listing-page"]}`}
              type="button"
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
