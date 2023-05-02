import { useState } from "react";
import styles from "./LikeButton.module.css";
import LikeIcon from "../Icons/LikeIcon";

export default function LikeButton({ position = "relative", transform }) {
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
      id="like-button"
    >
      <span>
        <LikeIcon liked={liked} />
      </span>
    </button>
  );
}
