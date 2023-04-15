import { useState } from "react";
import styles from "./LikeButton.module.css";

export default function LikeButton({ position = "absolute", transform }) {
  const style = { position, transform };
  const [liked, setLiked] = useState(false);
  return (
    <button
      style={style}
      onClick={() => {
        setLiked((prevState) => !prevState);
      }}
      className={`${styles["like-button"]} ${liked ? `${styles.clicked}` : ""}`}
      type="button"
    >
      <span>
        <i
          className="eds-vector-image eds-icon--small eds-vector-image--block"
          title="like"
          data-spec="icon"
          data-testid="icon"
        >
          <svg
            id="heart-chunky_svg__eds-icon--user-chunky_svg"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            className={liked ? "clicked" : ""}
          >
            <path
              id="heart-chunky_svg__eds-icon--heart-chunky_base"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z"
            ></path>
          </svg>
        </i>
      </span>
    </button>
  );
}
