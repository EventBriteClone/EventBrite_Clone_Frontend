import styles from "./Organizer.module.css";

export default function Organizer(props) {
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
              <span class={styles["organizer-followers"]}>{props.organizerFollowers}</span>{" "}
              <span style={{ color: "#6f7287" }}>followers</span>
            </div>
          </div>
        </div>
      </div>
      <div class={styles["organizer-follow"]}>
        <button
          class={`${styles["eds-btn eds-btn--button"]} ${styles["eds-btn--follow"]} ${styles["follow-button-listing-page"]}`}
          type="button"
        >
          Follow
        </button>
      </div>
    </section>
  );
}
