import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsXLg, BsArrowLeft } from "react-icons/bs";
import "./popup.css";
import { NavLink } from "react-router-dom";
import image from "../../../assets/images/side-view.jfif";
import Timer from "../timer/Timer";
import logoImg from "../../../assets/images/logo.png";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Popup = ({show,setShow}) => {
  const [stepOne, setStepOne] = useState(false);


  
  const [isValid, setIsValid] = useState({
    fname: false,
    lname: false,
    email: false,
    cmail:false,
    
  });
  const [validmail, setValidmail] = useState(false);
  

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    cmail:"",
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
  }

 
  

  
const handleSubmit = (event) => {
  console.log("data",data);
   
  if(data.email === data.cmail){
    setValidmail(false);
  }else{
    setValidmail(true);
  }
event.preventDefault(); 

}

const checkValid = (event) => {
  const { name, value } = event.target;
  console.log(name, value);
  setIsValid((prevErrors) => ({
    ...prevErrors,
    [name]: value === "" ? true : false,
  }));
}

 
  return (
    <div className="model">
      <div className="model-inner">
        <BsArrowLeft className="back-icon" onClick={backIcon} />
        {stepOne ? "" : <BsXLg className="cross-icon" onClick={()=>setShow(false)} />}

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
              <button className="leave" onClick={()=>setShow(false)}>
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
                <Timer onTimerEnd={onTimerEnd}/>
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
                      {isValid.email ? <p>Please enter a valid email address *</p> : ""}
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

                  <div className="checkbox margin-top-4">
                    <input
                      type="checkbox"
                      id="one"
                      className="check"
                      defaultChecked
                    />
                    <label htmlFor="one">
                      Keep me updated on more events and news from this event
                      organizer.
                    </label>
                  </div>
                  <div className="checkbox  ">
                    <input
                      type="checkbox"
                      id="two"
                      className="check"
                      defaultChecked
                    />
                    <label htmlFor="two">
                      Send me emails about the best events happening nearby or
                      online.
                    </label>
                  </div>

                  <div className="paypal margin-top-4">
                    <h1>Pay with</h1>

                    <h3 className="margin-top-2">PayPal</h3>
                    <p className="paypal-para">
                      Select 'Place Order' to pay with PayPal. You can check out
                      as a guest or with your PayPal account. Return to this
                      page when you're finished.
                    </p>

                    <div className="checkbox margin-top-2 ">
                      <input type="checkbox" id="five" className="check" />
                      <label htmlFor="five">
                        I accept the <NavLink to="/">Eventbrite Terms of Service</NavLink>
                      </label>
                    </div>

                    <div className="powered-by">
                      <p>Powered by </p>
                      <img src={logoImg} alt="logo" />

                       
                    </div>
                  </div>
                </div>

                <div className="left-bottom top-button">
                  <button type="submit" className="order-btn">Place Order</button>
                </div>
              </form>
            </div>

            <div className="right">
              <div className="right-top">
                <img src={image} alt="image" className="side-image" />

                <div className="summary">
                  <h4>Order Summary</h4>

                  <div className="summary-item">
                    <div>
                      <p>1 x Work in Sweden - Visa </p>
                    </div>

                    <p>$19.92</p>
                  </div>

                  <div className="summary-item">
                    <div>
                      <p>Delivery</p>
                      <p><span>1 x eticker</span> </p>
                    </div>
                    <p>$19.92</p>
                  </div>

                  <div className="summary-item summary-total">
                    <div>
                      <p>Delivery</p>
                       
                    </div>
                    <p>$19.92</p>
                  </div>

                  <div className="left-bottom bottom-button">
                  <button className="order-btn">Place Order</button>
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
