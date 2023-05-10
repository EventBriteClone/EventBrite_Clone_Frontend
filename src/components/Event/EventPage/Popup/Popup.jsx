import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsXLg, BsArrowLeft } from "react-icons/bs";
import styles from "./Popup.module.css";
import { NavLink } from "react-router-dom";
import Timer from "../Timer/Timer";
import logoImg from "../../../../assets/images/eventus.png";
import swal from "sweetalert";
import config from "../../../../utils/config";
import { fetchDataFromAPI } from "../../../../utils";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Popup = ({ show, setShow, ...props }) => {
  const subTotal = props.price;

  const discount = `${subTotal[0]}` + 32;

  const fees = `${subTotal[0]}` + 50;

  const [stepOne, setStepOne] = useState(false);

  const [number, setNumber] = useState(1);

  const [subtotal, setSubTotal] = useState(subTotal);

  const [total, setTotal] = useState(
    subtotal[0] +
      Number(
        subTotal.slice(1) - Number(discount.slice(1)) + Number(fees.slice(1))
      )
  );

  const [isValid, setIsValid] = useState({
    fname: false,
    lname: false,
    email: false,
    cmail: false,
    promo: false,
  });
  const [validmail, setValidmail] = useState(false);

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    cmail: "",
    promo: "",
  });

  const stay = () => {
    setStepOne(false);
  };

  const backIcon = () => {
    setStepOne(true);
  };

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

  const handleSubmit = (event) => {
    if (data.email === data.cmail) {
      setValidmail(false);
    } else {
      setValidmail(true);
    }
    event.preventDefault();

    setShow(false);

    swal("", "Order Placed Successfully!", "success");

    // let endpoint, configurationOpt = {};
    // if (config.mocking === "true") {
    //   endpoint = "orders";
    // }
    // else {
    //   endpoint = "booking/orders"
    //   configurationOpt = {
    //     method: "POST",
    //     body: JSON.stringify({
    //       event: props.id,
    //       full_price: `${props.price}`
    //     })
    //   }
    // }
    // const response = fetchDataFromAPI({endpoint, configurationOpt})
    // console.log(response);
  };

  const checkValid = (event) => {
    const { name, value } = event.target;
    setIsValid((prevErrors) => ({
      ...prevErrors,
      [name]: value === "" ? true : false,
    }));
  };

  const handleIncrement = () => {
    if (number < 10) {
      setNumber(number + 1);
      if (props.price != "0") {
        setSubTotal(
          subtotal[0] +
            (Number(subtotal.slice(1)) + Number(props.price.slice(1)))
        );
        setTotal(
          total[0] + (Number(total.slice(1)) + Number(props.price.slice(1)))
        );
      }
    }
  };

  const handleDecrement = () => {
    if (number > 1) {
      setNumber(number - 1);
      if (props.price != "0") {
        setSubTotal(
          subtotal[0] +
            (Number(subtotal.slice(1)) - Number(props.price.slice(1)))
        );
        setTotal(
          total[0] + (Number(total.slice(1)) - Number(props.price.slice(1)))
        );
      }
    }
  };

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

                    <p>{props.price}</p>
                  </div>

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
                      <p>Subtotal</p>
                    </div>
                    <p>{subtotal}</p>
                  </div>

                  <div
                    className={`${styles["summary-item"]} ${styles["summary-subtotal"]}`}
                  >
                    <div>
                      <p>Fees</p>
                    </div>
                    <p>{fees}</p>
                  </div>

                  <div
                    className={`${styles["summary-item"]} ${styles["summary-subtotal"]}`}
                  >
                    <div>
                      <p>Discount</p>
                    </div>
                    <p>-{discount}</p>
                  </div>

                  <div
                    className={`${styles["summary-item"]} ${styles["summary-total"]}`}
                  >
                    <div>
                      <p>Total</p>
                    </div>
                    <p>{total}</p>
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
