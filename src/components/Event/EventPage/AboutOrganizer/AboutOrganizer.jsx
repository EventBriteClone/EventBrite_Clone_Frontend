import styles from "./AboutOrganizer.module.css";
import { useState } from "react"

export default function AboutOrganizer(props) {

  const [followed, setFollowed] = useState(false);

  const handleClick = () => {
    setFollowed(!followed);
  };

  return (
    <div className={styles["about-organizer"]}>
      <h2>About the organizer</h2>
      <div className={styles["about-org"]}>
        <div class={styles["descriptive-organizer-info__avatar"]}>
          <svg
            class={`${styles["eds-avatar__background"]} ${styles["eds-avatar__background--has-border"]}`}
            height="80"
            width="80"
            data-spec="spec-avatar"
          >
            <image
              xlink:href={props.organizerIcon}
              href={props.organizerIcon}
              height="80"
              width="80"
              preserveAspectRatio="xMidYMin slice"
            ></image>
          </svg>
        </div>
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
          className={`${styles["eds-btn"]} ${styles["eds-btn--button"]} ${styles["eds-btn--follow"]} ${styles["follow-button-listing-page"]}`}
          type="button"
          onClick={handleClick}
          style={{
            backgroundColor: followed ? "#4560b0" : "#3659e3",
            color: followed ? "#fff" : "#fff",
          }}
        >
          {followed ? "Followed!" : "Follow"}
        </button>
          </div>
        </div>
      </div>
    </div>
  );
}
