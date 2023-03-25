import styles from "./TrendingCategories.module.css";

export default function TrendingCategories(props) {
  return (
    <div>
      <h3 className={styles.h3}>Check out trending categories</h3>
      <div className={styles.grid}>
        <div className={styles.category}>
          <aside>
            <i
              className="eds-vector-image eds-icon--small eds-vector-image--ui-orange"
              data-spec="icon"
              data-testid="icon"
              aria-hidden="true"
            >
              <svg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve">
                <path
                  id="music-note_svg__eds-icon--music-note_base"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                ></path>
              </svg>
            </i>
          </aside>
          <div data-title>Music</div>
        </div>
        <div className={styles.category}>
          <aside>
            <i
              className="eds-vector-image eds-icon--small eds-vector-image--ui-orange"
              data-spec="icon"
              data-testid="icon"
              aria-hidden="true"
            >
              <svg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve">
                <path
                  id="music-note_svg__eds-icon--music-note_base"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                ></path>
              </svg>
            </i>
          </aside>
          <div data-title>Health</div>
        </div>
        <div className={styles.category}>
          <aside>
            <i
              className="eds-vector-image eds-icon--small eds-vector-image--ui-orange"
              data-spec="icon"
              data-testid="icon"
              aria-hidden="true"
            >
              <svg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve">
                <path
                  id="music-note_svg__eds-icon--music-note_base"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                ></path>
              </svg>
            </i>
          </aside>
          <div data-title>Holiday</div>
        </div>
        <div className={styles.category}>
          <aside>
            <i
              className="eds-vector-image eds-icon--small eds-vector-image--ui-orange"
              data-spec="icon"
              data-testid="icon"
              aria-hidden="true"
            >
              <svg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve">
                <path
                  id="music-note_svg__eds-icon--music-note_base"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                ></path>
              </svg>
            </i>
          </aside>
          <div data-title>Hobbies</div>
        </div>
        <div className={styles.category}>
          <aside>
            <i
              className="eds-vector-image eds-icon--small eds-vector-image--ui-orange"
              data-spec="icon"
              data-testid="icon"
              aria-hidden="true"
            >
              <svg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve">
                <path
                  id="music-note_svg__eds-icon--music-note_base"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                ></path>
              </svg>
            </i>
          </aside>
          <div data-title>Business</div>
        </div>
        <div className={styles.category}>
          <aside>
            <i
              className="eds-vector-image eds-icon--small eds-vector-image--ui-orange"
              data-spec="icon"
              data-testid="icon"
              aria-hidden="true"
            >
              <svg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve">
                <path
                  id="music-note_svg__eds-icon--music-note_base"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                ></path>
              </svg>
            </i>
          </aside>
          <div data-title>Arts</div>
        </div>
        <div className={styles.category}>
          <aside>
            <i
              className="eds-vector-image eds-icon--small eds-vector-image--ui-orange"
              data-spec="icon"
              data-testid="icon"
              aria-hidden="true"
            >
              <svg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve">
                <path
                  id="music-note_svg__eds-icon--music-note_base"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                ></path>
              </svg>
            </i>
          </aside>
          <div data-title>Food & Drink</div>
        </div>
        <div className={styles.category}>
          <aside>
            <i
              className="eds-vector-image eds-icon--small eds-vector-image--ui-orange"
              data-spec="icon"
              data-testid="icon"
              aria-hidden="true"
            >
              <svg x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve">
                <path
                  id="music-note_svg__eds-icon--music-note_base"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 2L8 5.5v11.3c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V9.5l11-3v7.2c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2zM6 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8.5V6.2l11-3v2.3l-11 3zm9 9.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                ></path>
              </svg>
            </i>
          </aside>
          <div data-title>Sports & Fitness</div>
        </div>
      </div>
    </div>
  );
}
