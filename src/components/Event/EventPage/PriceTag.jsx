import styles from "./PriceTag.css";
import LikeButton from "../../UI/LikeButton";
export default function PriceTag({ event }) {
  return (
    <div>
      <LikeButton eventId={event} />
      <div className="price-tag">
        <div className="price">€549 – €699</div>
        <button
          id="eventbrite-widget-modal-trigger-588359929387"
          data-testid="checkout-link"
          data-tracking-label="Tickets"
          data-heap-id="Conversion Bar - Checkout Button"
          className="eds-btn eds-btn--button eds-btn--fill js-embed-ticket-modal-btn"
          type="button"
        >
          Get tickets
        </button>
      </div>
    </div>
  );
}
