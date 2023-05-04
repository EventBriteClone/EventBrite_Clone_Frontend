import styles from "./Organizer.module.css";
import { useState } from "react"

export default function Organizer(props) {
  const [followed, setFollowed] = useState(false);

  const handleClick = () => {
    setFollowed(!followed);
  };
  
  return (
    <section className={styles["organizer-container"]}>
      <div className={styles["organizer-profile"]}>
        <div className={styles["organizer-avatar"]}>
          <svg
            class={`${styles["eds-avatar__background"]} ${styles["eds-avatar__background--has-border"]}`}
            height="56"
            width="56"
            data-spec="spec-avatar"
          >
            <image
              xlinkHref={props.organizerIcon}
              href={props.organizerIcon}
              height="56"
              width="56"
              preserveAspectRatio="xMidYMin slice"
            ></image>
          </svg>
        </div>

        <div className={styles["simplified-organizer-info__details"]}>
          <div class={styles["simplified-organizer-info__name-by"]}>
            By{" "}
            <strong class={styles["simplified-organizer-info__name-link"]}>
              {props.organizer}
            </strong>
          </div>
          <div class={styles["organizer-stats"]}>
            <div class={styles["followers-count"]}>
              <span class={styles["organizer-followers"]}>
                {props.organizerFollowers}
              </span>{" "}
              <span style={{ color: "#6f7287" }}>followers</span>
            </div>
          </div>
        </div>
      </div>
      <div class={styles["organizer-follow"]}>
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
    </section>
  );
}
