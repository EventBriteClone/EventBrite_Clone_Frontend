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
    } else if (!password) {
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
  //     const formdata = new FormData();
  // formdata.append("email", props.email);
  // formdata.append("first_name", firstName);
  // formdata.append("last_name", lastName);
  // formdata.append("password", password);

  // const requestOptions = {
  //   method: 'POST',
  //   body: formdata,
  //   headers: {
  //     'Accept': 'application/json',
  //   },
  //   redirect: 'follow'
  // };

  // console.log("fetching data...");
  // const response = await fetch("https://event-us.me:8000/user/signup/", requestOptions);
  // const data = await response.json();
  // console.log("response", data);

  // if (data.error) {
  //   // handle error
  //   return;
  // } else {
  //   navigate("/login");
  //   setAuthData(data);
  // }

  async function submitHandler(e) {
    e.preventDefault();
    if (
      invalidEmail ||
      invalidFirstname ||
      invalidLastname ||
      invalidpassword
    ) {
      return;
    } else {
      let endpoint,
        configurationOpt = {};
      if (config.mocking) {
        console.log("using mock server");
        endpoint = `users`;
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
        endpoint = "user/signup/";
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
      console.log("fetching data...");
      const response = await fetchDataFromAPI({ endpoint, configurationOpt });
      console.log("response", response);
      if (response.error) {
        // handle error
        return;
      } else {
        navigate("/login");
        if (config.mocking) {
          if (response) {
            console.log("ro7 ya 7omar");
            navigate("/login");
            setAuthData(response[0]);
            // con;
            // navigate("/login");
          }
        } else {
          setAuthData(response);
          navigate("/login");
        }
      }
    }
  }
  // const config = {
  //   baseURL: "https://event-us.me:8000/",
  //   mocking: false,
  // };

  // async function submitHandler(e) {
  //   e.preventDefault();
  //   if (
  //     invalidEmail ||
  //     invalidFirstname ||
  //     invalidLastname ||
  //     invalidpassword
  //   ) {
  //     return;
  //   } else {
  //     let endpoint,
  //       configurationOpt = {};
  //     if (config.mocking) {
  //       console.log("using mock server");
  //       endpoint = `users`;
  //       configurationOpt = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           email: props.email,
  //           first_name: firstName,
  //           last_name: lastName,
  //           password: password,
  //         }),
  //         timeout: 10000,
  //       };
  //     } else {
  //       endpoint = "user/signup/";
  //       configurationOpt = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           email: props.email,
  //           first_name: firstName,
  //           last_name: lastName,
  //           password: password,
  //         }),
  //         timeout: 10000,
  //       };
  //     }
  //     console.log("fetching data...");
  //     const response = await fetchDataFromAPI({ endpoint, configurationOpt });
  //     console.log("response", response);
  //     if (response.error) {
  //       // handle error
  //       return;
  //     } else {
  //       navigate("/login");
  //       setAuthData(response);
  //       navigate("/login");
  //     }
  //   }
  // }

  // async function fetchDataFromAPI({ endpoint, configurationOpt = {} }) {
  //   try {
  //     configurationOpt = {
  //       ...configurationOpt,
  //     };
  //     const res = await fetch(`${config.baseURL}${endpoint}`, configurationOpt);
  //     const data = await res.json();
  //     return data;
  //   } catch (error) {
  //     // console.error(error);
  //     return { error };
  //   }
  // }
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
