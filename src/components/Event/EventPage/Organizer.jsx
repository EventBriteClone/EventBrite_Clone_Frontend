import styles from "./Organizer.css";

export default function Organizer() {
  return (
    <section className="organizer-container">
      <div className="organizer-profile">
        <div className="organizer-avatar">
          <svg
            class="eds-avatar__background eds-avatar__background--has-border"
            height="56"
            width="56"
            data-spec="spec-avatar"
          >
            <image
              xlinkHref="https://th.bing.com/th/id/OIP.pojdgurvupTdsabLJIaZ1wAAAA?pid=ImgDet&rs=1"
              href="https://th.bing.com/th/id/OIP.pojdgurvupTdsabLJIaZ1wAAAA?pid=ImgDet&rs=1"
              height="56"
              width="56"
              preserveAspectRatio="xMidYMin slice"
            ></image>
          </svg>
        </div>

        <div className="simplified-organizer-info__details">
          <div class="simplified-organizer-info__name-by">
            By{" "}
            <strong class="simplified-organizer-info__name-link">
              Cloudflight GmbH
            </strong>
          </div>
          <div class="organizer-stats">
            <div class="followers-count">
              <span class="organizer-followers">208</span>{" "}
              <span style={{ color: "#6f7287" }}>followers</span>
            </div>
          </div>
        </div>
      </div>
      <div class="organizer-follow">
        <button
          class="eds-btn eds-btn--button eds-btn--follow follow-button-listing-page"
          type="button"
        >
          Follow
        </button>
      </div>
    </section>
  );
}
