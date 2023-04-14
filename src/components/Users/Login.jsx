import React from "react";
import Style from "./Style.module.css";
import { fetchDataFromAPI } from "../../utils";
import config from "../../utils/config";

import { useState } from "react";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  async function submitHandler(e) {
    // console.log(email, password);
    e.preventDefault();

    let endpoint,
      configurationOpt = {};
    if (config.mocking === "true") {
      // endpoint = users? email= "admin@gmail.com"&
      // password="adminadmin"
      endpoint = "users?email=admin@gmail.com & password=adminadmin";
    } else {
      endpoint = "user/login";
      configurationOpt = {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };
    }
    const response = fetchDataFromAPI({ endpoint, configurationOpt });
    // console.log("response", response);
    if (response.error) {
    } else {
      // setAuthData(response);
    }
  }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
      <link rel="stylesheet" href="Style.css" />
      <title>Eventbrite</title>
      <div className={Style["main"]}>
        <div className={Style["container"]}>
          <div className={Style["first-container"]}>
            <div className={Style["block1"]}>
              <div className={Style["main-text"]}>
                <div className={Style["text"]}>
                  <a
                    href="https://event-us.me:8000/"
                    rel="noopener noreferrer"
                    title="Go to homepage"
                  >
                    eventus
                  </a>
                  <h1 className={Style["h1"]}>Log in</h1>
                </div>
              </div>
              <div className={Style["email"]}>
                <form onSubmit={submitHandler}>
                  <input
                    className={Style["input"]}
                    type="email"
                    placeholder="Email address"
                    onChange={handleEmailChange}
                  />
                </form>
                <form onSubmit={submitHandler}>
                  <input
                    className={Style["input"]}
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                  />
                </form>
              </div>

              <div className={Style["cont"]}>
                <form onSubmit={submitHandler}>
                  <button>Log in</button>
                </form>
              </div>
              <div className={Style["or"]}>
                <h3>OR</h3>
              </div>
              <div className={Style["cont2"]}>
                <button>
                  <i class="ri-google-fill" />
                  Sign in with Google
                </button>
              </div>
              <div className={Style["others-sign-in"]}>
                <p>Other login methods</p>
                <i class="ri-facebook-circle-fill" />
              </div>
              <a href="#">Sign up</a>
            </div>
          </div>
          <div className={Style["sec-container"]}>
            <div className={Style["image"]}></div>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
};
export default Login;
