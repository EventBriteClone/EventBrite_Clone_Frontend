import styles from "./Arrow.module.css";

export default function Arrow(props) {
  const directionStyle = { ...props.style } || {};
  const { direction } = props;
  if (direction) {
    if (direction === "left") directionStyle.transform = "rotate(90deg)";
    if (direction === "up") directionStyle.transform = "rotate(180deg)";
    if (direction === "right") directionStyle.transform = "rotate(270deg)";
    if (direction === "down") directionStyle.transform = "rotate(360deg)";
  }

  return (
    <i
      style={{ display: "block", height: "48px", ...props.style }}
      data-spec="icon"
      data-testid="icon"
      aria-hidden="true"
    >
      <svg
        style={directionStyle}
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        className={styles.svg}
      >
        <path
          id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
        ></path>
      </svg>
    </i>
  );
}
