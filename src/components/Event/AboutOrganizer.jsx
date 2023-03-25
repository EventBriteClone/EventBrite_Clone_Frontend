import styles from "./AboutOrganizer.css";

export default function AboutOrganizer() {
  return (
    <div className="about-organizer">
      <h2>About the organizer</h2>
      <div className="about-org">
      <div className="organized-by">
        <p>Organized by</p>
      </div>
      <div className="organizer">
        <h2>Organizer Name</h2>
      </div>
      <div className="followers-number">
        <h3>78</h3>
      </div>
      <span className="fol">Followers</span>

      <div className="reach">

      <div className="contact-btn">
        <button
          class="eds-btn eds-btn--button eds-btn--contact contact-button-listing-page"
          type="button"
        >
          Contact
        </button>
        </div>
        <div className="follow-btn">
        <button
          class="eds-btn eds-btn--button eds-btn--follow follow-button-listing-page"
          type="button"
        >
          Follow
        </button>
        </div>
      </div>
      </div>
    </div>
  );
}