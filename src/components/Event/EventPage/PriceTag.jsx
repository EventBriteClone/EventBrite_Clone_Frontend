import styles from "./PriceTag.module.css";
import LikeButton from "../../UI/LikeButton";
export default function PriceTag() {
  return (
    <div>
      <LikeButton />
      <div className={styles["price-tag"]}>
        <div className={styles["price"]}>€549 – €699</div>
        <button
          id="eventbrite-widget-modal-trigger-588359929387"
          data-testid="checkout-link"
          data-tracking-label="Tickets"
          data-heap-id="Conversion Bar - Checkout Button"
          className={`${styles["eds-btn"]} ${styles["eds-btn--button"]} ${styles["eds-btn--fill"]} ${styles["js-embed-ticket-modal-btn"]}`}
          type="button"
        >
          Get tickets
        </button>
      </div>
    </div>
  );
}
