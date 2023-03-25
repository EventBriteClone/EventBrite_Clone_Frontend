// import styles from "./EventDetails.css";
export default function EventDetails() {
  return (
    <div className="event-details">
      <div className="date-and-location">
        <div className="date-time">
          <h2>When and Where</h2>
          {/* <div class="detail-icon">
          <i
            class="eds-vector-image eds-icon--small eds-vector-image--block"
            data-spec="icon"
            data-testid="icon"
            aria-hidden="true"
          >
            <svg
              id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              xml:space="preserve"
            >
              <path
                id="calendar-chunky_svg__eds-icon--calendar-chunky_base"
                d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"
              ></path>
            </svg>
          </i>
        </div> */}
          <div className="date-and-time">
            <div class="detail__icon">
              <i
                class="eds-vector-image eds-icon--small eds-vector-image--block"
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg
                  id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                  xml:space="preserve"
                >
                  <path
                    id="calendar-chunky_svg__eds-icon--calendar-chunky_base"
                    d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"
                  ></path>
                </svg>
              </i>
            </div>
            <div className="date-time-heading">
              <h3>Date and Time</h3>
              <p>
                <span class="appointment">
                  Saturday, March 25 · 5:30 - 6:30pm EET
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="location">
          <div className="date-and-time">
            <div class="detail__icon2">
              <i
                class="eds-vector-image eds-icon--small"
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24">
                  <path
                    id="map-pin-fill_svg__24_small_map_pin_fill-a"
                    d="M7 0a7 7 0 00-7 7c0 2.015 1.016 3.985 2 5.5.985 1.515 5 7.5 5 7.5s3.985-5.985 5-7.5c1.015-1.515 2-3.485 2-5.5a7 7 0 00-7-7m0 9.5c1.378 0 2.5-1.122 2.5-2.5S8.378 4.5 7 4.5A2.503 2.503 0 004.5 7c0 1.378 1.122 2.5 2.5 2.5"
                  ></path>
                  <g fill="none" fill-rule="evenodd" transform="translate(5 2)">
                    <mask
                      id="map-pin-fill_svg__24_small_map_pin_fill-b"
                      fill="#fff"
                    >
                      <use xlinkHref="#map-pin-fill_svg__24_small_map_pin_fill-a"></use>
                    </mask>
                    <use
                      fill="#45494E"
                      xlinkHref="#map-pin-fill_svg__24_small_map_pin_fill-a"
                    ></use>
                    <g mask="url(#map-pin-fill_svg__24_small_map_pin_fill-b)">
                      <path fill="#000" d="M-5-2h24v24H-5z"></path>
                    </g>
                    <mask
                      id="map-pin-fill_svg__24_small_map_pin_fill-b"
                      fill="#fff"
                    >
                      <use xlinkHref="#map-pin-fill_svg__24_small_map_pin_fill-a"></use>
                    </mask>
                    <use
                      fill="#45494E"
                      xlinkHref="#map-pin-fill_svg__24_small_map_pin_fill-a"
                    ></use>
                    <g mask="url(#map-pin-fill_svg__24_small_map_pin_fill-b)">
                      <path fill="#000" d="M-5-2h24v24H-5z"></path>
                    </g>
                  </g>
                </svg>{" "}
              </i>
            </div>
            <div className="date-time-heading">
              <h3>Location</h3>
              <p>
                <div class="address">Online</div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="refund-policy">
          <h2>Refund Policy</h2>
          <p>Contact the organizer to request a refund.</p>
          <p>Eventbrite's fee is nonrefundable.</p>
        </div>
        <div className="about-event">
          <h2>About this event</h2>
          <div className="about-icons">
            <div className="time">
              <div class="detail__icon">
                <i
                  class="eds-vector-image eds-icon--small eds-vector-image--block"
                  data-spec="icon"
                  data-testid="icon"
                  aria-hidden="true"
                >
                  <svg
                    id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xml:space="preserve"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.001 8h1.991v4h2.64v2h-4.63V8z"
                      fill="#010101"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.676 10.053A6.011 6.011 0 0012 6c-3.308 0-6 2.692-6 6a6.007 6.007 0 006.888 5.934l1.055 1.828a8 8 0 115.879-9.45l-2.146-.26zm.323 2.053a5.963 5.963 0 01-.453 2.183l1.687 1.134a7.959 7.959 0 00.76-3.075l-1.994-.242zm-1.517 3.878l1.674 1.125a8.035 8.035 0 01-2.328 1.917l-1.002-1.734a6.04 6.04 0 001.656-1.308z"
                      fill="#010101"
                    ></path>
                  </svg>
                </i>
              </div>
              <h2 className="period">1 hour</h2>
            </div>

            <div className="ticket">
              <div class="detail__icon">
                <i
                  class="eds-vector-image eds-icon--small eds-vector-image--block"
                  data-spec="icon"
                  data-testid="icon"
                  aria-hidden="true"
                >
                  <svg
                    id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xml:space="preserve"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 5.79c3.05 0 5.523 2.403 5.523 5.368h1.84C19.364 7.205 16.068 4 12 4v1.79zm-1.768 2.702c-1.744 0-1.744-2.054-1.744-2.054H5V20h3.488s0-2.055 1.744-2.055S11.976 20 11.976 20h3.488v-6.476H13.72v4.78h-.36c-.526-1.217-1.598-2.054-3.128-2.054s-2.602.837-3.128 2.055h-.36V8.133h.36c.526 1.218 1.598 2.055 3.128 2.055V8.492zm3.609 3.087c0-.988-.824-1.79-1.841-1.79V8c2.033 0 3.682 1.602 3.682 3.579H13.84z"
                      fill="#010101"
                    ></path>
                  </svg>
                </i>
              </div>
              <h2 className="ticket-info">Mobile eTicket</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="event-content">
        Whether you are a beginner, intermediate or advanced player, join our
        League. We are a community of squash enthusiasts, who love the game.Will
        be organizing games to train, excel and most important, for the love of
        the game. So, join the league! *** Please Read Carefully *** Court fee
        is EGP 100/person/hour, which apply on everyone, as this is a private
        group. Fees are paid at court before playing/. Maximum number of players
        per session is 6. Each player will play 5 games per hour. Bring your own
        racket and water.
      </div>
    </div>
  );
}
