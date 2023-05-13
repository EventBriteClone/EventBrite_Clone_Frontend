import { useContext, useEffect, useState } from "react";
import styles from "./LikeButton.module.css";
import LikeIcon from "../Icons/LikeIcon";
import { PropaneSharp } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import { fetchDataFromAPI } from "../../utils";
import config from "../../utils/config";

export default function LikeButton({
  position = "relative",
  transform,
  eventId,
}) {
  const { authState } = useContext(AuthContext);
  const style = { position, transform };
  console.log(authState);
  const [liked, setLiked] = useState(false);

  async function handleLikeEvent() {
    if (config.mocking === "true" || !eventId || !authState.isAuthenticated)
      return;
    const endpoint = liked
      ? `events/unlike_event/${eventId}/`
      : `events/${eventId}/like/`;
    let configurationOpt = {
      headers: {
        Authorization: `customToken ${authState.token}`,
      },
    };
    if (liked) configurationOpt = { ...configurationOpt, method: "DELETE" };
    console.log({ configurationOpt, endpoint });
    const likeRes = await fetchDataFromAPI({
      endpoint,
      configurationOpt,
    });
    if (likeRes.status === "success") setLiked((prevState) => !prevState);
    console.log(likeRes);
  }

  useEffect(() => {
    if (config.mocking === "true" || !authState.isAuthenticated) return;
    // console.log(authState.token, "DATAA");
    const configurationOpt = {
      headers: {
        Authorization: `customToken ${authState.token}`,
      },
    };
    const endpoint = "events/liked/";
    fetchDataFromAPI({ endpoint, configurationOpt }).then((data) => {
      if (!data?.length) return;
      if (data.some((ev) => ev.ID === eventId)) setLiked(true);
    });
  }, []);
  return (
    <button
      style={style}
      onClick={handleLikeEvent}
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
