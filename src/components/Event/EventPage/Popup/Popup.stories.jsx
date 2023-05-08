import Popup from "./Popup"
import Timer from "../Timer/Timer"
import styles from "./Popup.module.css"
import logoImg from "../../../../assets/images/eventus.png"

export default {
    title: "Components/Event Page/Booking/Popup",
    component: Popup
}

export const Primary = () => {
    <div className={styles["model"]}>
    <div className={styles["model-inner"]}>

        <div className={styles["step-one"]}>
          <div className={styles["top"]}>
            <h1>Leave Checkout?</h1>
            <p>
              Are you sure you want to leave checkout? The items you've
              selected may not be available later.
            </p>
          </div>
          <div className={styles["bottom"]}>
            <button className={styles["stay"]}>
              Stay
            </button>
            <button className={styles["leave"]} onClick={() => setShow(false)}>
              Leave
            </button>
          </div>
        </div>
        <div className={styles["wraper"]}>
          <div className={styles["left"]}>
            <form>
              <div className={styles["left-top"]}>
                <p className={styles["check"]}>Checkout</p>
                <Timer/>
              </div>

              <div className={styles["left-middle"]}>
                <h1>Billing Information</h1>

                <div className={styles["login"]}>
                  <p>
                    <span>*</span> Required
                  </p>
                </div>

                <div className={styles["two-fields"]}>
                  <div className={styles["field-container"]}>
                    <input
                      type="text"
                      placeholder="First name"
                      required
                      className={styles["custom-field"]}
                      name="fname"
                    />
                  </div>

                  <div className={styles["field-container"]}>
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                      name="lname"
                      className={styles["custom-field"]}
                    />
                  </div>
                </div>

                <div className={styles["two-fields"]}>
                  <div className={styles["field-container"]}>
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      className={styles["custom-field"]}
                      name="email"
                    />
                  </div>

                  <div className={styles["field-container"]}>
                    <input
                      type="email"
                      placeholder="Confirm email address"
                      required
                      className={styles["custom-field"]}
                    />
                  </div>
                </div>

                <div className={styles["two-fields"]}>
                  <div className={styles["field-container margin-0"]}>
                    <input
                      type="text"
                      placeholder="Promo code"
                      className={styles["custom-field"]}
                    />
                  </div>
                </div>
        
                  <div className={styles["powered-by"]}>
                    <p>Powered by </p>
                    <img src={logoImg} alt="logo" />
                  </div>
        
              </div>

              <div className={`${styles["left-bottom"]} ${styles["top-button"]}`}>
                <button
                  type="submit"
                  className={styles["order-btn"]}
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>

          <div className={styles["right"]}>
            <div className={styles["right-top"]}>
              <div className={styles["summary"]}>
                <h4>Order Summary</h4>

                {/* <div className="summary-item">
                  <div>
                    <p>Delivery</p>
                    <p>
                      <span>1 x eticker</span>{" "}
                    </p>
                  </div>
                  <p>{props.price}</p>
                    </div> */}

                <div className={styles["number-picker"]}>
                  <button className={styles["minus"]}>-</button>
                  <button className={styles["plus"]}>+</button>
                </div>

                <div className={`${styles["summary-item"]} ${styles["summary-total"]}`}>
                  <div>
                    <p>Total</p>
                  </div>
                </div>

                <div className={`${styles["left-bottom"]} ${styles["bottom-button"]}`}>
                  <button className={styles["order-btn"]}>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
}