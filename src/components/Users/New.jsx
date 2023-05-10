import { Link, useNavigate } from "react-router-dom";

import React, { useContext, useState, useEffect } from "react";
import Style from "./Style.module.css";
import { fetchDataFromAPI } from "../../utils";
import config from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";

import MainIcon from "../Icons/MainIcon";

import Input from "../UI/Input";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const New = (props) => {
  const navigate = useNavigate();
  // const { setAuthData } = useContext(AuthContext);
  const [user, setUser] = useState([]);
  let [invalidconfirmemail, setInvalidConfirmemail] = useState(false);
  const [invalidemail, setInvalidemail] = useState(false);
  const [invalidFirstname, setInvalidFirstname] = useState(false);
  const [invalidLastname, setInvalidLastname] = useState(false);
  const [invalidpassword, setInvalidpassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const { setAuthData } = useContext(AuthContext);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(confirmEmail);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // console.log("email", email);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // console.log(password);
  };
  const handleFirstnameChange = (event) => {
    setFirstName(event.target.value);
    // console.log(firstName);
  };
  const handleLastnameChange = (event) => {
    setLastName(event.target.value);
    // console.log(lastName);
  };
  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
    // console.log(confirmEmail);
  };
  const google = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  // const getInputValue = (event) => {
  //   // show the user input value to console
  //   let userValue = event.target.value;
  //   setEmail(userValue);
  // };

  const validateEmail = () => {
    var nameRegex = /^[a-zA-Z\-]+$/;
    const validRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var passwordRegex = /^(?=.*\d)(?=(.*\W))(?=.*[a-zA-Z])(?!.*\s).{8,20}$/;
    // perform email validation here
    // console.log("email", email);
    // console.log("props.email", props.email);
    if (props.email) {
      setInvalidemail(false);
    } else {
      setInvalidemail(true);
    }

    if (!confirmEmail || confirmEmail != props.email) {
      setInvalidConfirmemail(true);
    } else {
      setInvalidConfirmemail(false);
    }

    // if (!confirmEmail) {
    //   setInvalidConfirmemail(true);
    // } else {
    //   setInvalidConfirmemail(false);
    // }

    if (firstName.match(nameRegex) == null) {
      setInvalidFirstname(true);
    } else {
      setInvalidFirstname(false);
    }
    if (lastName.match(nameRegex) == null) {
      setInvalidLastname(true);
    } else {
      setInvalidLastname(false);
    }
    if (!password || password.match(passwordRegex) == null) {
      setInvalidpassword(true);
    } else {
      setInvalidpassword(false);
      // console.log("sa7 ya ba4a");
    }
  };

  async function submitHandler(e) {
    e.preventDefault();
    if (
      invalidemail ||
      invalidconfirmemail ||
      invalidFirstname ||
      invalidLastname ||
      invalidpassword
    )
      return;

    let endpoint,
      configurationOpt = {};
    if (config.mocking === "true") {
      endpoint = "user/";
      // console.log("using mock server");

      configurationOpt = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: props.email,
          first_name: firstName,
          last_name: lastName,
          password: password,
        }),
        timeout: 10000,
      };
    } else {
      let endpoint,
        configurationOpt = {};
      if (config.mocking === "false") {
        endpoint = "user/signup/";
        // console.log("using mock server");

        configurationOpt = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: props.email,
            first_name: firstName,
            last_name: lastName,
            password: password,
          }),
          timeout: 10000,
        };
      } else {
        endpoint = "user/users/";
        console.log("using mock server");

        configurationOpt = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: props.email,
            first_name: firstName,
            last_name: lastName,
            password: password,
          }),
          timeout: 10000,
        };
      }
      // console.log("fetching data...");
      try {
        const res = await fetch(
          `${"https://event-us.me:8000/"}${endpoint}`,
          configurationOpt
        );
        const response = await res.json();
        // console.log("response", response);
        setAuthData(response);
        navigate("/login");
      } catch (error) {
        console.error(error);
        alert("you already signed up");

        navigate("/login");
        return { error };
      }
      const response = await res.json();
      // console.log("response", response);
      setAuthData(response);
      // navigate("/login");
    }

    // console.log("fetching data...");
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
                    invalid={invalidemail ? true : false}
                    invalidText={
                      invalidemail ? "please enter valid email." : ""
                    }
                    input={{
                      type: "email",
                      required: true,
                      invalidText: "please enter valid email.",
                      id: "email",
                      value: props.email,
                    }}
                  />
                  <Input
                    label="Confirm Email"
                    onChange={handleConfirmEmailChange}
                    invalid={invalidconfirmemail ? true : false}
                    invalidText={
                      invalidconfirmemail
                        ? "Email address doesn't match. Please try again."
                        : ""
                    }
                    // invalid={setInvalidConfirmemail ? Style["error"] : Style["input"]}
                    // style={{
                    //   border: setInvalidConfirmemail ? "1px solid #ccc" : "1px solid red",
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
                      invalidText={
                        invalidFirstname
                          ? "Please enter a valid first name"
                          : ""
                      }
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
                      invalidText={
                        invalidLastname ? "Please enter a valid last name" : ""
                      }
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
                    invalidText={
                      invalidpassword ? "Please enter a valid password" : ""
                    }
                    input={{
                      id: "password",
                      type: "password",
                      invalidText: "Please enter a valid password",
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
                <Link to="/login">log in</Link>
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
