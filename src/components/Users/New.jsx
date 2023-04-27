import { Link, useNavigate } from "react-router-dom";

import React, { useContext, useState } from "react";
import Style from "./Style.module.css";
import { fetchDataFromAPI } from "../../utils";
import config from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";

import MainIcon from "../Icons/MainIcon";

import Input from "../UI/Input";

const New = (props) => {
  const navigate = useNavigate();
  let [invalidEmail, setInvalidConfirmemail] = useState(false);
  const [invalidFirstname, setInvalidFirstname] = useState(false);
  const [invalidLastname, setInvalidLastname] = useState(false);
  const [invalidpassword, setInvalidpassword] = useState(false);
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(confirmEmail);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };
  const handleFirstnameChange = (event) => {
    setFirstName(event.target.value);
    console.log(firstName);
  };
  const handleLastnameChange = (event) => {
    setLastName(event.target.value);
    console.log(lastName);
  };
  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
    console.log(confirmEmail);
  };

  // const getInputValue = (event) => {
  //   // show the user input value to console
  //   let userValue = event.target.value;
  //   setEmail(userValue);
  // };

  const validateEmail = () => {
    var nameRegex = /^[a-zA-Z\-]+$/;
    var passwordRegex = /^(?=.*\d)(?=(.*\W))(?=.*[a-zA-Z])(?!.*\s).{8,20}$/;
    // perform email validation here
    if (props.email !== confirmEmail) {
      setInvalidConfirmemail(true);

      alert("Email and Confirm Email do not match");

      console.log("d5lt");
    } else if (firstName.match(nameRegex) == null) {
      alert("please enter correct first name");
      setInvalidFirstname(true);
    } else if (lastName.match(nameRegex) == null) {
      alert("please enter correct last name");
      setInvalidLastname(true);
    } else if (!password.match(passwordRegex)) {
      setInvalidpassword(true);
      alert("Please enter valid password");
    } else {
      setInvalidConfirmemail(false);
      setInvalidFirstname(false);
      setInvalidLastname(false);
      setInvalidpassword(false);
      console.log("sa7 ya ba4a");
    }
  };
  async function submitHandler(e) {
    e.preventDefault();
    if (invalidEmail || invalidFirstname || invalidLastname || invalidpassword)
      return;
    else {
      let endpoint,
        configurationOpt = {};
      if (config.mocking === "true") {
        endpoint = `users?email=${email}&password=${password}&first_name=${firstName}&last_name=${lastName}`;
      } else {
        endpoint = "user/signup/";
        configurationOpt = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            first_name: firstName,
            last_name: lastName,
            password: password,
          }),
        };
      }
      const response = await fetchDataFromAPI({ endpoint, configurationOpt });
      console.log("response", response.user);
      if (response.error) {
      } else {
        if (config.mocking) {
          if (response.length) {
            setAuthData(response[0]);
            navigate("/login");
          }
        } else {
          setAuthData(response);
          navigate("/login");
        }
      }
    }
  }
  return (
    <div>
      <div className={Style["main"]}>
        <div className={Style["container"]}>
          <div className={Style["first-container"]}>
            <div className={Style["block1"]}>
              <div className={Style["main-text"]}>
                <div className={Style["text"]}>
                  <Link to="/" title="Go to homepage">
                    <MainIcon
                      style={{
                        padding: 0,
                        maxWidth: "120px",
                        maxHeight: "22px",
                        width: "100%",
                      }}
                    />
                  </Link>
                  <h1 className={`${Style.h1}`}>
                    Create an <br /> account
                  </h1>
                </div>
              </div>
              <div className={Style["hero"]}>
                <form onSubmit={submitHandler}>
                  <Input
                    label="Email address"
                    onChange={handleEmailChange}
                    input={{
                      type: "email",
                      required: true,
                      id: "email",
                      value: props.email,
                    }}
                  />
                  <Input
                    label="Confirm Email"
                    onChange={handleConfirmEmailChange}
                    invalid={invalidEmail ? true : false}
                    // invalid={invalidEmail ? Style["error"] : Style["input"]}
                    // style={{
                    //   border: invalidEmail ? "1px solid #ccc" : "1px solid red",
                    // }}
                    input={{
                      type: "email",
                      invalidText:
                        "Email address doesn't match. Please try again.",

                      required: false,
                      id: "confirm-email",
                    }}
                  />
                  <div className={Style["row"]}>
                    <Input
                      label="First Name"
                      onChange={handleFirstnameChange}
                      invalid={invalidFirstname ? true : false}
                      input={{
                        id: "fname",
                        type: "text",
                        invalidText: "Please enter a valid first name",
                        required: true,
                      }}
                    />
                    <Input
                      label="Last Name"
                      onChange={handleLastnameChange}
                      invalid={invalidLastname ? true : false}
                      input={{
                        id: "lname",
                        type: "text",
                        invalidText: "Please enter a valid last name",
                        required: true,
                      }}
                    />
                  </div>
                  <Input
                    label="Password"
                    onChange={handlePasswordChange}
                    invalid={invalidpassword ? true : false}
                    input={{
                      id: "password",
                      type: "password",
                      required: true,
                    }}
                  />
                  <button
                    onClick={validateEmail}
                    id="signup-button"
                    className={`${Style.button}`}
                  >
                    Create account
                  </button>
                </form>
              </div>
              <div className={Style["log-in"]}>
                <Link to="/">log in</Link>
              </div>
            </div>
          </div>
          <div className={Style["sec-container"]}>
            <div className={Style["image"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New;
