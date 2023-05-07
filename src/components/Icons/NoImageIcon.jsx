export default function NoImageIcon() {
  return (
    <i
      style={{ width: "48px", height: "48px" }}
      data-spec="icon"
      data-testid="icon"
      aria-hidden="true"
    >
      <svg
        id="photo_svg__eds-icon--photo_svg"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
      >
        <path
          id="photo_svg__eds-icon--photo_base"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 20h20V4H2v16zm1-1h18V5H3v14z"
        ></path>
        <path
          id="photo_svg__eds-icon--photo_sun"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 7C15.1 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5S19 10.9 19 9.5 17.9 7 16.5 7zm0 4c-.8 0-1.5-.7-1.5-1.5S15.7 8 16.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
        ></path>
        <path
          id="photo_svg__eds-icon--photo_mountain"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 13l-.7.8-3.5-3.8-6.4 7H19.1l-3.6-4zm-8.3 3l4.1-4.4 2.7 3 .7.8.7-.8 1.4 1.5H7.2z"
        ></path>
      </svg>
    </i>
  );
}
