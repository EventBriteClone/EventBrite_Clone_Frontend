import styles from "./Organizer.module.css";

export default function Organizer() {
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
              xlinkHref="https://th.bing.com/th/id/OIP.pojdgurvupTdsabLJIaZ1wAAAA?pid=ImgDet&rs=1"
              href="https://th.bing.com/th/id/OIP.pojdgurvupTdsabLJIaZ1wAAAA?pid=ImgDet&rs=1"
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
              Cloudflight GmbH
            </strong>
          </div>
          <div class={styles["organizer-stats"]}>
            <div class={styles["followers-count"]}>
              <span class={styles["organizer-followers"]}>208</span>{" "}
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
