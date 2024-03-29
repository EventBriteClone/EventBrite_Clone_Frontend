import styles from "./SearchBarIcon.module.css";

export default function SearchBarIcon() {
  return (
    <>
      <i
        data-spec="icon"
        className={styles["search-icon"]}
        data-testid="icon"
        aria-hidden="true"
      >
        <svg
          className={styles["search-svg"]}
          x="0"
          y="0"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            id="magnifying-glass-chunky_svg__eds-icon--magnifying-glass-chunky_base"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"
          ></path>
        </svg>
      </i>
    </>
  );
}
