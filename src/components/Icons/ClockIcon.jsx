export default function ClockIcon(props) {
  return (
    <i
      style={{ width: "24rem", height: "24rem" }}
      data-spec="icon"
      data-testid="icon"
      aria-hidden="true"
    >
      <svg
        id="clock_svg__eds-icon--clock_svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
      >
        <path
          id="clock_svg__eds-icon--clock_base"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9m0-1C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"
        ></path>
        <path
          id="clock_svg__eds-icon--clock_minute"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 12.5V5h1v7.5"
        ></path>
        <path
          id="clock_svg__eds-icon--clock_hour"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 11.5H17v1h-5.5"
        ></path>
      </svg>
    </i>
  );
}
