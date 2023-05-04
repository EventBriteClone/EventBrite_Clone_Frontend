import React, { useState } from 'react';
import styles from "./PriceTag.module.css";
import Popup from "../../popup/Popup";
import { Link } from "react-router-dom"

export default function PriceTag(props) {
  const [show,setShow]=useState(false);
  const price = props.price;
  const image = props.img;
  return (
    <div>
      <div className={styles["price-tag"]}>
        <div className={styles["price"]}>{props.price}</div>
        <button
          id="eventbrite-widget-modal-trigger-588359929387"
          data-testid="checkout-link"
          data-tracking-label="Tickets"
          data-heap-id="Conversion Bar - Checkout Button"
          className={ `${styles["eds-btn"]} ${styles["eds-btn--button"]} ${styles["eds-btn--fill"]} ${styles["js-embed-ticket-modal-btn"]}`        }
          onClick={() => setShow(true)}
        >
          Get Tickets
        </button>
      </div>
      {show && <Popup price={price} event={props.id} show={show} setShow={setShow} img={image} title={props.title}/>}
    </div>
  );
}
