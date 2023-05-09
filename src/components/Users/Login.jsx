import React, { useContext, useState, useEffect } from "react";
import Style from "./Style.module.css";
import { fetchDataFromAPI } from "../../utils";
import config from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import MainIcon from "../Icons/MainIcon";
import Input from "../UI/Input";

import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
const Login = (props) => {
  const navigate = useNavigate();
  const [showNoAccount, setShowNoAccount] = useState(false);
  const [exit, setexit] = useState(false);
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgetemail, setforgetEmail] = useState("");
  const [invalidforgetemail, setinvalidforgetEmail] = useState(false);

  let [invalidEmail, setInvalid] = React.useState(false);

  const [invalidpassword, setInvalidpassword] = useState(false);
  const { setAuthData } = useContext(AuthContext);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (props.email) {
      setEmail(props.email);
    }
  };
  const google = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    const setUser = async () => {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      );

      const json = await response.json();
      console.log(json);

      const {
        email: Email,
        given_name: firstname,
        family_name: lastname,
        id,
      } = json;
      let endpoint = "user/login/";

      const postData = await fetch(
        `${"https://event-us.me:8000/"}${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: Email,
            password: Email,
          }),
        }
      );

      const data = await postData.json();
      console.log(data);
      if (data.success) {
        navigate("/");
      }
    };
    setUser();
  }, [user]);
  const handleExitClick = () => {
    setexit(false);
  };
  const forget = () => {
    setexit(true);
  };
  const handleforgetemailChange = (event) => {
    setforgetEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const validateEmail = () => {
    const validRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var passwordRegex = /^(?=.*\d)(?=(.*\W))(?=.*[a-zA-Z])(?!.*\s).{8,20}$/;
    // perform email validation here

    if (email.match(validRegex)) {
      console.log(email);

      setInvalid(false);

      console.log("d5lt");
      console.log("email m4 valid");
    } else {
      setInvalid(true);
    }
    if (password.match(passwordRegex) == null) {
      setInvalidpassword(true);
      console.log("error");
    } else {
      setInvalidpassword(false);
    }
  };
  async function submitforget() {
    const validRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (forgetemail.match(validRegex) == null || !forgetemail) {
      setinvalidforgetEmail(true);

      console.log("d5lt");
      return;
    } else {
      setinvalidforgetEmail(false);
      console.log("forgetemail", forgetemail);
      let endpoint = "user/reset-password/",
        configurationOpt = {};

      configurationOpt = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_email: forgetemail,
        }),
        timeout: 10000,
      };
      console.log("fetching data...");
      try {
        const res = await fetch(
          `${"https://event-us.me:8000/"}${endpoint}`,
          configurationOpt
        );
        console.log(res);
        const response = await res.json();
        console.log("response", response);

        if (
          response.email != undefined ||
          response.userId != undefined ||
          response.token != undefined
        ) {
          if (config.mocking) {
            setShowNoAccount(false);
            setAuthData(response);
            navigate("/");
          } else {
            if (response.length) {
              console.log("api");
              setAuthData(response);
              navigate("/");
            }
          }
        } else if (response.error) {
          console.log("na hna");
          setShowNoAccount(true);
        }
      } catch (error) {
        console.log("2lmfrod tt8ir");
        console.log(error);

        setShowNoAccount(true);
        return;
      }
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (invalidEmail || invalidpassword) {
      return;
    } else {
      console.log(email, password);
      let endpoint,
        configurationOpt = {};
      if (config.mocking === "true") {
        endpoint = `users?email=${email}&password=${password}`;
        console.log("2zay");
      } else {
        endpoint = "user/login/";
        configurationOpt = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          timeout: 10000,
        };
        console.log("fetching data...");
        try {
          const res = await fetch(
            `${"https://event-us.me:8000/"}${endpoint}`,
            configurationOpt
          );
          console.log(res);
          const response = await res.json();
          console.log("response", response);

          if (config.mocking) {
            setShowNoAccount(false);
            setAuthData(response);
            navigate("/");
            // } else {
            //   if (response.length) {
            //     console.log("api");
            //     setAuthData(response);
            //     navigate("/");
          }
        } catch (error) {
          console.log("2lmfrod tt8ir");

          setShowNoAccount(true);
          return;
        }
      }
    }
  }

  // else {

  // }

  // const response = await fetchDataFromAPI({ endpoint, configurationOpt });
  // console.log(response);
  // if (response.error) {
  // } else {
  //   if (config.mocking) {
  //     if (response.length) {
  //       setAuthData(response[0]);
  //       navigate("/");
  //     }
  //   } else {
  //     setAuthData(response);
  //     navigate("/");
  //   }
  // }

  return (
    <>
      <div>
        {exit && (
          <div className={Style["PopUpContainer"]}>
            <div className={Style["PopUp"]}>
              <div className={Style["popup-exit"]}>
                <button onClick={handleExitClick}>
                  <i class="ri-close-fill"></i>
                </button>
              </div>
              <div className={Style["popup-icon"]}>
                <i class="ri-mail-line"></i>
              </div>
              <div className={Style["popup-text"]}>
                <h1>
                  Where should we send your <br />
                  login link?
                </h1>
                <p>For your security, the link expires in 15 minutes.</p>
              </div>
              <div className={Style["popup-input"]}>
                <Input
                  label="Email address"
                  invalid={invalidforgetemail ? true : false}
                  invalidText={
                    invalidforgetemail ? "Please enter a valid email" : ""
                  }
                  onChange={handleforgetemailChange}
                  input={{
                    type: "email",
                    required: true,
                    id: "email",
                  }}
                />
              </div>

              <div className={Style["popup-button"]}>
                <button onClick={submitforget}>
                  <p>Send login link</p>
                </button>
              </div>
              <div className={Style["popup-button2"]}>
                <button onClick={handleExitClick}>
                  <p>Back to Log In</p>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={Style["main"]}>
        <div className={Style["container"]}>
          <div className={Style["first-container"]}>
            <div className={Style["block1"]}>
              <div className={Style["main-text"]}>
                <div className={Style["text"]}>
                  <Link to="/">
                    <MainIcon />
                  </Link>
                  <h1 className={Style["h1"]}>Log in</h1>
                </div>
              </div>
              <div>
                {showNoAccount && (
                  <div className={Style["no-account"]}>
                    <div className={Style["title"]}>
                      <p>There is no account associated with the email.</p>
                      <a href="#">Create account</a>
                    </div>
                  </div>
                )}
              </div>

              <div className={Style["email"]}>
                <form onSubmit={submitHandler}>
                  <Input
                    label="Email address"
                    invalid={invalidEmail ? true : false}
                    invalidText={
                      invalidEmail ? "Please enter a valid email" : ""
                    }
                    onChange={handleEmailChange}
                    input={{
                      type: "email",
                      required: true,
                      id: "email",
                      value: email,
                    }}
                  />
                </form>
                <form onSubmit={submitHandler}>
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
                      required: true,
                    }}
                  />
                </form>
              </div>

              <div className={Style["cont"]}>
                <form onSubmit={submitHandler}>
                  <button onClick={validateEmail} id="login-button">
                    Log in
                  </button>
                </form>
              </div>
              <div className={Style["or"]}>
                <h3>OR</h3>
              </div>
              <div className={Style["cont2"]}>
                <button onClick={forget}>
                  {/* <i className="ri-google-fill" /> */}
                  Email me a login link
                </button>
              </div>
              <div className={Style["cont2"]}>
                <button onClick={() => google()}>
                  <i className="ri-google-fill" />
                  Sign in with Google
                </button>
              </div>
              <div className={Style["others-sign-in"]}>
                <p>Other login methods</p>
                <a
                  className="ri-facebook-circle-fill"
                  href="https://www.facebook.com/"
                  title="Go to Facebook"
                ></a>
              </div>
              <a href="/signup">Sign up</a>
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
