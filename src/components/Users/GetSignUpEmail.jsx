import { useState, useEffect } from "react";
import Input from "../UI/Input";
import Style from "./Style.module.css";
import { fetchDataFromAPI } from "../../utils";
import config from "../../utils/config";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  ConnectingAirportsOutlined,
  NavigationRounded,
} from "@mui/icons-material";

export default function GetSignUpEmail(props) {
  const [user, setUser] = useState([]);
  let [email, setEmail] = useState("");
  let [invalidEmail, setInvalid] = useState(false);

  const navigate = useNavigate();
  const google = useGoogleLogin({
    onSuccess: (codeResponse) => googleLoginSuccess(codeResponse, navigate),
    onError: (error) => console.log("Login Failed:", error),
  });

  const getInputValue = (event) => {
    // show the user input value to console
    let userValue = event.target.value;
    setEmail(userValue);
  };

  function AddEmail() {
    const validRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email) {
      // emailInvalidMessage = "Please enter a valid email address";
      setInvalid("Field required");

      // setInvalid("Please enter a valid email address");
    } else if (email.match(validRegex)) {
      // emailInvalidMessage = "";
      setInvalid("");
    } else {
      // emailInvalidMessage = "Invalid email";
      setInvalid("Invalid email");
    }
  }

  async function submitHandler(e) {
    e.preventDefault();

    if (invalidEmail) return;
    else {
      // console.log("email", email);

      let endpoint,
        configurationOpt = {};
      if (config.mocking === "true") {
        // console.log("using mock server");
        endpoint = `user/emailcheck/${email}`;
        configurationOpt = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        };
      } else {
        endpoint = `user/emailcheck/${encodeURIComponent(email)}/`;
        configurationOpt = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        };
      }
      try {
        const res = await fetch(
          `https://event-us.me:8000/user/emailcheck/${encodeURIComponent(
            email
          )}/`,
          configurationOpt
        );
        const response = await res.json();
        // console.log("response", response);

        if (response.email_exists == true) {
          // console.log("mawgod");

          navigate("/login");
        } else {
          props.submitHandler(email, false);
        }
      } catch (error) {
        console.error(error);
        return { error };
      }
    }
  }
  // }
  // let endpoint
  //       configurationOpt = {};
  //     if (config.mocking) {
  //       console.log("using mock server");
  //       endpoint = `users/`;
  //       configurationOpt = {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //         timeout: 10000,
  //       };
  //     } else {
  //       endpoint = `user/emailcheck?email=${email}`;
  //       configurationOpt = {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //         timeout: 10000,
  //       };
  //     }
  //     console.log("fetching data...");
  //     const response = await fetchDataFromAPI({ endpoint, configurationOpt });
  //     console.log("response", response);
  //     if (response === true) {
  //       navigate("/login");
  //       setAuthData(email);
  //     } else {
  //       navigate("/SignUp");
  //     }
  //   }
  // }
  // // async function checkEmail(email) {
  // //   const endpoint = `u=${email}`;

  //   // try {
  //   //   const response = await fetch(endpoint, {
  //   //     method: "GET",
  //   //     headers: { "Content-Type": "application/json" },
  //   //   });

  //   //   const data = await response.json();
  //   //   console.log(data);
  //   //   return data;
  //   // } catch (error) {
  //   //   console.error(error);
  //   // }
  // }
  return (
    <>
      <div className={Style["main"]}>
        <div className={Style["container"]}>
          <div className={Style["first-container"]}>
            <div className={Style["block1"]}>
              <div className={Style["main-text"]}>
                <div className={Style["text"]}>
                  <a
                    href="https://www.eventbrite.com/"
                    rel="noopener noreferrer"
                    title="Go to/ homepage"
                  >
                    eventus
                  </a>
                  <h1 className={Style["h1"]}>
                    Create an <br /> account
                  </h1>
                </div>
              </div>
              <div className={Style["email"]}>
                <form
                  onSubmit={submitHandler}
                  //   method="post"
                  //   action="#"
                  className={Style["form"]}
                >
                  <Input
                    requiredAst={true}
                    label="Email Address"
                    invalidText={"Please enter a valid email address"}
                    //\ invalid={false}
                    onChange={getInputValue}
                    invalid={invalidEmail ? true : false}
                    input={{
                      id: "email",
                      required: true,
                    }}
                  />
                  {/* <input
                    onChange={getInputValue}
                    type="email"
                    placeholder="Email address"
                    className={
                      emailInvalidMessage ? Style["error"] : Style["input"]
                    }
                  /> */}
                  <div className={Style["cont"]}>
                    <div className={Style["invalidEmail"]}>
                      {/* <h2 className={Style["invalidEmail"]}></h2> */}
                      <button
                        id="getEmail-button"
                        type="submit"
                        className={`${Style["cont"]} ${Style["button"]}`}
                        onClick={AddEmail}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className={Style["or"]}>
                <h3>or</h3>
              </div>
              <div className={Style["cont2"]}>
                <button onClick={() => google()}>
                  <i
                    className="ri-google-fill"
                    // href="https://accounts.google.com/"
                    title="Go to google account"
                  ></i>
                  Sign in with Google
                </button>
              </div>

              <div className={Style["others-sign-in"]}>
                <p>Other sign up methods</p>
                <a
                  className="ri-facebook-circle-fill"
                  href="https://www.facebook.com/"
                  title="Go to Facebook"
                ></a>
              </div>
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
}

async function googleLoginSuccess(googleData, navigate) {
  try {
    // console.log(googleData);
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleData.access_token}`,
      {
        headers: {
          Authorization: `${googleData.token_type} ${googleData.access_token}`,
          Accept: "application/json",
        },
      }
    );

    const json = await response.json();
    // console.log(json);

    const { email } = json;

    let endpoint = "user/signup/";
    // console.log(email);
    const postData = await fetchDataFromAPI({
      endpoint,
      configurationOpt: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email + +"5" + "M",
          first_name: "mario",
          last_name: "mario",
          password: email + "5" + "M",
        }),
      },
    });
    // console.log(postData);
    if (postData) {
      navigate("/login");
    }
  } catch (error) {
    console.error(error);
  }
}
