import styles from "./ShareButton.module.css";

export default function ShareButton() {
  return (
    <button className={styles["share-button"]} type="button">
      <span>
        <i
          className="eds-vector-image eds-icon--small eds-vector-image--block"
          title="Share Event"
          data-spec="icon"
          data-testid="icon"
        >
          <svg
            id="heart-chunky_svg__eds-icon--user-chunky_svg"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
          >
            <path
              id="share-ios-chunky_svg__eds-icon--share-ios-chunky_base"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 16v2H6v-2H4v4h16v-4z"
            ></path>
            <path
              id="share-ios-chunky_svg__eds-icon--share-ios-chunky_arrow"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4L7 9l1.4 1.4L11 7.8V16h2V7.8l2.6 2.6L17 9l-5-5z"
            ></path>
          </svg>
        </i>
      </span>
    </button>
  );
}
