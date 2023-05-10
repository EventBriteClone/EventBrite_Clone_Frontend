import styles from "./PriceTag.module.css";
import Popup from "../../popup/Popup"
import { useState } from "react"

export default function PriceTag(props) {
  const [show,setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  }
  return (
    <div>
      <div className={styles["price-tag"]}>
        <div className={styles["price"]}>${props.price}</div>
        <button
          id="eventbrite-widget-modal-trigger-588359929387"
          data-testid="checkout-link"
          data-tracking-label="Tickets"
          data-heap-id="Conversion Bar - Checkout Button"
          className={`${styles["eds-btn"]} ${styles["eds-btn--button"]} ${styles["eds-btn--fill"]} ${styles["js-embed-ticket-modal-btn"]}`        }
          type="button"
          onClick={handleClick}
        >
          Get tickets
        </button>
      </div>
      {show && <Popup price={props.price} event={props.event} show={show} setShow={setShow} img={props.img} title={props.title}/>}
    </div>
  );
}
