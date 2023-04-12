export default function GetLocationIcon(props) {
  return (
    <i
      style={{ width: "24px", height: "24px" }}
      data-spec="icon"
      data-testid="icon"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24">
        <g
          id="crosshair_svg__Crosshair"
          stroke="none"
          strokeWidth="1"
          fillRule="evenodd"
        >
          <path
            d="M11 18.93A7.005 7.005 0 015.07 13H3v-2h2.07A7.005 7.005 0 0111 5.07V3h2v2.07A7.005 7.005 0 0118.93 11H21v2h-2.07A7.005 7.005 0 0113 18.93V21h-2v-2.07zM12 17a5 5 0 100-10 5 5 0 000 10zm0-3a2 2 0 110-4 2 2 0 010 4z"
            id="crosshair_svg__crosshair"
            fill="#3d64ff"
          ></path>
        </g>
      </svg>
    </i>
  );
}
