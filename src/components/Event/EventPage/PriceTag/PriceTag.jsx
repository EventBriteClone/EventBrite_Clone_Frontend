import styles from "./PriceTag.module.css";
import Popup from "../../popup/Popup";
import { useState } from "react";

export default function PriceTag(props) {
  const creator = props.user;
  const [show, setShow] = useState(false);
  const eventid = props.event;
  const handleClick = () => {
    setShow(true);
  };
  if (creator) {
    return (
      <div className={styles["price-tag"]}>
        <a
          href={`/dashboard/${eventid}`}
          style={{
            display: "block",
            width: "312px",
            height: "44px",
            backgroundColor: "#0f1ee0",
            textAlign: "center",
            lineHeight: "44px",
            fontSize: "16px",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
            marginLeft: "25px",
            marginTop: "25px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0d1bc9")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0f1ee0")}
        >
          Dashboard
        </a>

        <a
          href={"/manage-attendees"}
          style={{
            display: "block",
            width: "312px",
            height: "44px",
            backgroundColor: "#8e8e8e",
            textAlign: "center",
            lineHeight: "44px",
            fontSize: "16px",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
            marginLeft: "25px",
            marginTop: "20px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#7a7a7a")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#8e8e8e")}
        >
          Manage Attendees
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles["price-tag"]}>
          <div className={styles["price"]}>${props.price}</div>
          <button
            id="eventbrite-widget-modal-trigger-588359929387"
            data-testid="checkout-link"
            data-tracking-label="Tickets"
            data-heap-id="Conversion Bar - Checkout Button"
            className={`${styles["eds-btn"]} ${styles["eds-btn--button"]} ${styles["eds-btn--fill"]} ${styles["js-embed-ticket-modal-btn"]}`}
            type="button"
            onClick={handleClick}
          >
            Get tickets
          </button>
        </div>
        {show && (
          <Popup
            price={props.price}
            event={props.event}
            show={show}
            setShow={setShow}
            img={props.img}
            title={props.title}
          />
        )}
      </div>
    );
  }
}
