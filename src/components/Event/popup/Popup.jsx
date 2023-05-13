import React, { useState, useEffect } from "react";
import { BsXLg, BsArrowLeft } from "react-icons/bs";
import styles from "./Popup.module.css";
import { NavLink } from "react-router-dom";
import Timer from "../timer/Timer";
import logoImg from "../../../assets/images/eventus.png";
import config from "../../../utils/config";
import { fetchDataFromAPI } from "../../../utils";
import Cookies from "js-cookie";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
// import swal from "sweetalert";

const Popup = ({ show, setShow, ...props }) => {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  const is_Authenticated = ctx.authState.isAuthenticated;
  console.log(is_Authenticated);
  const user_token = JSON.parse(Cookies.get("authData")).token;
  // console.log(user_token);

  const subTotal = props.price;

  // let ticket_id = Math.floor(Math.random() * 100000000);

  while (!is_Authenticated) {
    return (
        <div className={styles["unauthorized"]}>You need to log in!</div>
    );
  }

  const [stepOne, setStepOne] = useState(false);

  const [number, setNumber] = useState(1);

  const [subtotal, setSubTotal] = useState(subTotal);

  const [isValid, setIsValid] = useState({
    fname: false,
    lname: false,
    email: false,
    cmail: false,
    promo: false,
  });
  const [validmail, setValidmail] = useState(false);

  // const [data, setData] = useState({
  //   fname: "",
  //   lname: "",
  //   email: "",
  //   cmail: "",
  //   promo: "",
  // });

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [cmail, setCmail] = useState("");
  const [promo, setPromo] = useState("");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `CustomToken ${user_token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discounted, setDiscount] = useState(0);

  useEffect(() => {
    if (promo === "ismail") {
      fetch(
        `https://event-us.me:8000/booking/events/${props.event}/promocode/?promocode=ziad`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result);
          setDiscountPercentage(data.discount["Discountـpercentage"] / 100);
          setDiscount(discountPercentage * props.price);
          // console.log(discounted);
          // console.log(discountPercentage);
        })
        .catch((error) => console.log("error", error));
    } else {
      setDiscountPercentage(0);
    }
  }, [promo]);

  // console.log(discountPercentage);

  let initTotal;
  if (props.price) {
    initTotal = initTotal = props.price - discounted;
    // console.log(initTotal);
  } else {
    initTotal = 0;
  }

  const [total, setTotal] = useState(initTotal);

  // if (results && Object.keys(results).length > 0) {
  //   const firstPropertyName = Object.keys(results)[];
  //   promo = results[firstPropertyName];
  //   console.log(promo);
  // }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const stay = () => {
    setStepOne(false);
  };

  const backIcon = () => {
    setStepOne(true);
  };

  // console.log(validmail);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    //   setIsValid((prevErrors) => ({
    //     ...prevErrors,
    //     [name]: value === "" ? true : false,
    //   }));
  };

  const onTimerEnd = () => {
    setShow(false);
  };

  /**
   * Handles form submission for placing an order.
   * @async
   * @function
   * @param {Object} event - The event object.
   * @returns {Promise<void>} Promise object representing the completion of this function.
   */
  async function handleSubmit(event) {
    event.preventDefault();

    if (
      fname &&
      lname &&
      email &&
      cmail &&
      isValidEmail(email) &&
      is_Authenticated
    ) {
      const endpoint =
        config.mocking === "true" ? "" : `booking/event/${props.event}/orders/`;
      const requestData = {
        order_items: [
          {
            ticket_class_id: 65161799,
            quantity: number,
          },
        ],
        promocode: promo,
      };

      const configurationOpt = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "CustomToken 0742e574b81a729c36e8cb536301d876f28ea1d2aa2663de3b573f33bdc46bc4",
        },
        body: JSON.stringify(requestData),
      };

      /**
       * Fetches data from the API and returns a Promise that resolves with the response.
       * @function
       * @param {Object} options - The options object.
       * @param {string} options.endpoint - The API endpoint to fetch data from.
       * @param {Object} options.configurationOpt - The configuration options for the fetch request.
       * @returns {Promise<Object>} Promise object representing the response of the fetch request.
       */
      const response = await fetchDataFromAPI({ endpoint, configurationOpt });

      console.log(response);

      setShow(false);
    }
  }

  const checkValid = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setIsValid((prevErrors) => ({
      ...prevErrors,
      [name]: value === "" ? true : false,
    }));
  };

  /**

Handles incrementing the number of tickets selected and updating the subtotal and total accordingly.
@returns {void}
*/
  const handleIncrement = () => {
    if (number < 10) {
      setNumber(number + 1);
      if (props.price !== "0") {
        setSubTotal(subtotal + props.price);
        // console.log(discountPercentage);
        setDiscount(discountPercentage * subtotal);
      }
    }
  };

  /**

Decrements the quantity of items in the cart and updates the subtotal and total cost
@function
@name handleDecrement
@returns {void}
*/
  const handleDecrement = () => {
    if (number > 1) {
      setNumber(number - 1);
      if (props.price != "0") {
        setSubTotal(subtotal - props.price);
        setDiscount(subtotal * discountPercentage);
        setTotal(subtotal - subtotal * discountPercentage);
      }
    }
  };

  // useEffect(()=>{
  //   setTotal(subtotal-discounted);
  // },[subtotal,discounted])

  return (
    <div className={styles["model"]}>
      <div className={styles["model-inner"]}>
        <BsArrowLeft className={styles["back-icon"]} onClick={backIcon} />
        {stepOne ? (
          ""
        ) : (
          <BsXLg
            className={styles["cross-icon"]}
            onClick={() => setShow(false)}
          />
        )}

        {stepOne ? (
          <div className={styles["step-one"]}>
            <div className={styles["top"]}>
              <h1>Leave Checkout?</h1>
              <p>
                Are you sure you want to leave checkout? The items you've
                selected may not be available later.
              </p>
            </div>
            <div className={styles["bottom"]}>
              <button className={styles["stay"]} onClick={stay}>
                Stay
              </button>
              <button
                className={styles["leave"]}
                onClick={() => setShow(false)}
              >
                Leave
              </button>
            </div>
          </div>
        ) : (
          <div className={styles["wraper"]}>
            <div className={styles["left"]}>
              <form onSubmit={handleSubmit}>
                <div className={styles["left-top"]}>
                  <p className={styles["check"]}>Checkout</p>
                  <Timer onTimerEnd={onTimerEnd} />
                </div>

                <div className={styles["left-middle"]}>
                  <h1>Billing Information</h1>

                  <div className={styles["login"]}>
                    <p>
                      <NavLink to="/">Login</NavLink> for a faster experience
                    </p>
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
                        onFocus={checkValid}
                        onBlur={checkValid}
                        onChange={(event) => {
                          setFname(event.target.value);
                        }}
                      />
                      {isValid.fname ? <p>First Name is required *</p> : ""}
                    </div>

                    <div className={styles["field-container"]}>
                      <input
                        type="text"
                        placeholder="Last name"
                        required
                        name="lname"
                        onFocus={checkValid}
                        onBlur={checkValid}
                        className={styles["custom-field"]}
                        onChange={(event) => {
                          setLname(event.target.value);
                        }}
                      />
                      {isValid.lname ? <p>Last name is required *</p> : ""}
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
                        onFocus={checkValid}
                        onBlur={checkValid}
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                      {isValid.email ? (
                        <p>Please enter a valid email address *</p>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className={styles["field-container"]}>
                      <input
                        type="email"
                        placeholder="Confirm email address"
                        required
                        className={styles["custom-field"]}
                        onChange={(event) => {
                          setCmail(event.target.value);
                        }}
                      />
                      {validmail ? <p>Email address doesn't match </p> : ""}
                    </div>
                  </div>

                  <div className={styles["two-fields"]}>
                    <div className={styles["field-container margin-0"]}>
                      <input
                        type="text"
                        placeholder="Promo code"
                        className={styles["custom-field"]}
                        onChange={(event) => {
                          setPromo(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className={styles["powered-by"]}>
                    <p>Powered by </p>
                    <img src={logoImg} alt="logo" />
                  </div>
                </div>

                <div
                  className={`${styles["left-bottom"]} ${styles["top-button"]}`}
                >
                  <button
                    type="submit"
                    className={styles["order-btn"]}
                    onClick={handleSubmit}
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>

            <div className={styles["right"]}>
              <div className={styles["right-top"]}>
                <img
                  src={props.img}
                  alt="image"
                  className={styles["side-image"]}
                />

                <div className={styles["summary"]}>
                  <h4>Order Summary</h4>

                  <div className={styles["summary-item"]}>
                    <div>
                      <p>
                        {number} x {props.title}{" "}
                      </p>
                    </div>

                    <p>${props.price}</p>
                  </div>

                  <div className={styles["number-picker"]}>
                    <button
                      className={styles["minus"]}
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <button
                      className={styles["plus"]}
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>

                  <div
                    className={`${styles["summary-item"]} ${styles["summary-subtotal"]}`}
                  >
                    <div>
                      <p>Delivery</p>
                      <p>
                        <span>{number} x eticket</span>{" "}
                      </p>
                    </div>
                    <p>$0</p>
                  </div>

                  <div
                    className={`${styles["summary-item"]} ${styles["summary-subtotal"]}`}
                  >
                    <div>
                      <p>Subtotal</p>
                    </div>
                    <p>${subtotal}</p>
                  </div>

                  <div
                    className={`${styles["summary-item"]} ${styles["summary-subtotal"]}`}
                  >
                    <div>
                      <p>Discount</p>
                    </div>
                    <p>-${discountPercentage * subtotal}</p>
                  </div>

                  <div
                    className={`${styles["summary-item"]} ${styles["summary-total"]}`}
                  >
                    <div>
                      <p>Total</p>
                    </div>
                    <p>${subtotal - subtotal * discountPercentage}</p>
                  </div>

                  <div
                    className={`${styles["left-bottom"]} ${styles["bottom-button"]}`}
                  >
                    <button
                      className={styles["order-btn"]}
                      onClick={handleSubmit}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
