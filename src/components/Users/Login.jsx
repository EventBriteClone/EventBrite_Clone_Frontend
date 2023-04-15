import React, { useContext, useState } from "react";
import Style from "./Style.module.css";
import { fetchDataFromAPI } from "../../utils";
import config from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthData } = useContext(AuthContext);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  async function submitHandler(e) {
    e.preventDefault();
    console.log(email, password);
    let endpoint,
      configurationOpt = {};
    if (config.mocking === "true") {
      endpoint = `users?email=${email}&password=${password}`;
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
    const response = await fetchDataFromAPI({ endpoint, configurationOpt });
    console.log(response);
    if (response.error) {
    } else {
      if (config.mocking) {
        if (response.length) {
          setAuthData(response[0]);
          navigate("/");
        }
      } else {
        setAuthData(response);
        navigate("/");
      }
    }
  }
  return (
    <>
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
                  <i className="ri-google-fill" />
                  Sign in with Google
                </button>
              </div>
              <div className={Style["others-sign-in"]}>
                <p>Other login methods</p>
                <i className="ri-facebook-circle-fill" />
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
