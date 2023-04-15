export default function PlusIcon({ color }) {
  return (
    <i
      style={{ width: "24rem", fill: color }}
      data-spec="icon"
      data-testid="icon"
      aria-hidden="true"
    >
      <svg
        id="plus-chunky_svg__eds-icon--plus-chunky_svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
      >
        <path
          id="plus-chunky_svg__eds-icon--plus-chunky_base"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z"
        ></path>
      </svg>
    </i>
  );
}
