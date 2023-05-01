import React, { useState } from 'react';
import styles from "./PriceTag.module.css";
import Popup from "../../popup/Popup";

export default function PriceTag(props) {
  const [popupOpen, setPopupOpen] = useState(false);

  if (props.buttonClass === "") {
    props.buttonClass = `${styles["eds-btn"]} ${styles["eds-btn--button"]} ${styles["eds-btn--fill"]} ${styles["js-embed-ticket-modal-btn"]}`
  }

  return (
    <div>
      <div className={styles["price-tag"]}>
        <div className={styles["price"]}>{props.price}</div>
        <button
          id="eventbrite-widget-modal-trigger-588359929387"
          data-testid="checkout-link"
          data-tracking-label="Tickets"
          data-heap-id="Conversion Bar - Checkout Button"
          className={props.buttonClass}
          type="button"
          onClick={() => setPopupOpen(true)}
        >
          Get tickets
        </button>
      </div>
      {popupOpen && <Popup price={props.price} event={props.id}/>}
    </div>
  );
}
