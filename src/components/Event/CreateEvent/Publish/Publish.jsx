import styles from "./Publish.module.css";
import EventPreview from "./EventPreview";

export default function Publish() {
  return (
    <>
      <div className={styles["main"]}>
        <h1>Publish Your Event</h1>
        <EventPreview />
        <div className={styles["publish-preview__container"]}>
          <div>
            <h2>Who can see your event?</h2>
            <div>
              <div className={styles["radio-container"]}>
                <input type="radio" name="privacy" id="public-privacy" />
                <label htmlFor="public-privacy">Public</label>
                <label htmlFor="public-privacy">
                  Shared on Eventus and search engines
                </label>
              </div>
              <div
                className="eds-radio__option"
                data-spec="radio-option-container"
              >
                <input
                  type="radio"
                  id="radio-event-privacy-type-0"
                  className="eds-radio__input"
                  name="event-privacy-type"
                  disabled=""
                  data-spec="radio-button"
                  data-automation="radio-event-privacy-type-0"
                  ariaChecked="true"
                  value="public"
                />
                <label
                  className="eds-radio__label eds-radio__delegate"
                  for="radio-event-privacy-type-0"
                  data-spec="radio-delegate"
                ></label>
                <label
                  className="eds-radio__label eds-radio__display-label"
                  for="radio-event-privacy-type-0"
                  data-spec="radio-display-label"
                  data-automation="radio-event-privacy-type-0-label"
                >
                  <div>
                    <span className="eds-text-color--grey-800">Public</span>
                    <span className="eds-text-bs eds-text-color--grey-700">
                      Shared on Eventbrite and search engines
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
