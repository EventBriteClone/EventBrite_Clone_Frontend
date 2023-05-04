import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsXLg, BsArrowLeft } from "react-icons/bs";
import "./popup.css";
import { NavLink } from "react-router-dom";
import image from "../../../assets/images/side-view.jfif";
import Timer from "../timer/Timer";
import logoImg from "../../../assets/images/eventus.png";
import config from "../../../utils/config";
import { fetchDataFromAPI } from "../../../utils";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Popup = ({ show, setShow, ...props }) => {

  const Total = props.price;

  const [stepOne, setStepOne] = useState(false);

  const [number, setNumber] = useState(1);

  const [total, setTotal] = useState(Total);

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

  console.log(validmail);

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
    console.log("data", data);

    if (data.email === data.cmail) {
      setValidmail(false);
    } else {
      setValidmail(true);
    }
    event.preventDefault();
    
    setShow(false);
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
    console.log(name, value);
    setIsValid((prevErrors) => ({
      ...prevErrors,
      [name]: value === "" ? true : false,
    }));
  };


  const handleIncrement = () => {
    if (number < 10) {
      setNumber(number + 1);
      if (props.price != "0") {
      setTotal("€"+(Number(total.slice(1))+(Number(props.price.slice(1)))));
      }
    }
  };

  const handleDecrement = () => {
    if (number > 1) {
      setNumber(number - 1);
      if (props.price != "0") {
      setTotal("€"+(Number(total.slice(1))-(Number(props.price.slice(1)))));
      }
    }
  }
  return (
    <div className="model">
      <div className="model-inner">
        <BsArrowLeft className="back-icon" onClick={backIcon} />
        {stepOne ? (
          ""
        ) : (
          <BsXLg className="cross-icon" onClick={() => setShow(false)} />
        )}

        {stepOne ? (
          <div className="step-one">
            <div className="top">
              <h1>Leave Checkout?</h1>
              <p>
                Are you sure you want to leave checkout? The items you've
                selected may not be available later.
              </p>
            </div>
            <div className="bottom">
              <button className="stay" onClick={stay}>
                Stay
              </button>
              <button className="leave" onClick={() => setShow(false)}>
                Leave
              </button>
            </div>
          </div>
        ) : (
          <div className="wraper">
            <div className="left">
              <form onSubmit={handleSubmit}>
                <div className="left-top">
                  <p className="check">Checkout</p>
                  <Timer onTimerEnd={onTimerEnd} />
                </div>

                <div className="left-middle">
                  <h1>Billing Information</h1>

                  <div className="login">
                    <p>
                      <NavLink to="/">Login</NavLink> for a faster experience
                    </p>
                    <p>
                      <span>*</span> Required
                    </p>
                  </div>

                  <div className="two-fields">
                    <div className="field-container">
                      <input
                        type="text"
                        placeholder="First name"
                        required
                        className="custom-field"
                        name="fname"
                        onFocus={checkValid}
                        onBlur={checkValid}
                      />
                      {isValid.fname ? <p>First Name is required *</p> : ""}
                    </div>

                    <div className="field-container">
                      <input
                        type="text"
                        placeholder="Last name"
                        required
                        name="lname"
                        onFocus={checkValid}
                        onBlur={checkValid}
                        className="custom-field"
                      />
                      {isValid.lname ? <p>Last name is required *</p> : ""}
                    </div>
                  </div>

                  <div className="two-fields">
                    <div className="field-container">
                      <input
                        type="email"
                        placeholder="Email address"
                        required
                        className="custom-field"
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

                    <div className="field-container">
                      <input
                        type="email"
                        placeholder="Confirm email address"
                        required
                        className="custom-field"
                      />
                      {validmail ? <p>Email address doesn't match </p> : ""}
                    </div>
                  </div>

                  <div className="two-fields">
                    <div className="field-container margin-0 ">
                      <input
                        type="text"
                        placeholder="Promo code"
                        className="custom-field"
                      />
                    </div>
                  </div>
          
                    <div className="powered-by">
                      <p>Powered by </p>
                      <img src={logoImg} alt="logo" />
                    </div>
          
                </div>

                <div className="left-bottom top-button">
                  <button
                    type="submit"
                    className="order-btn"
                    onClick={handleSubmit}
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>

            <div className="right">
              <div className="right-top">
                <img src={props.img} alt="image" className="side-image" />

                <div className="summary">
                  <h4>Order Summary</h4>

                  <div className="summary-item">
                    <div>
                      <p>{number} x {props.title} </p>
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

                  <div className="number-picker">
                    <button className="minus" onClick={handleDecrement}>-</button>
                    <button className="plus" onClick={handleIncrement}>+</button>
                  </div>

                  <div className="summary-item summary-total">
                    <div>
                      <p>Total</p>
                    </div>
                    <p>{total}</p>
                  </div>

                  <div className="left-bottom bottom-button">
                    <button className="order-btn" onClick={handleSubmit}>Place Order</button>
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
