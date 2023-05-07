import styles from "./PriceTag.module.css";
export default function PriceTag(props) {
  if (props.buttonClass === "")
  {
  props.buttonClass =`${styles["eds-btn"]} ${styles["eds-btn--button"]} ${styles["eds-btn--fill"]} ${styles["js-embed-ticket-modal-btn"]}`
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
        >
          Get tickets
        </button>
      </div>
      {show && <Popup price={price} event={props.event} show={show} setShow={setShow} img={image} title={props.title}/>}
    </div>
  );
}
