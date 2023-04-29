import { useState } from "react";
import Input from "../UI/Input";
import Style from "./Style.module.css";
import { fetchDataFromAPI } from "../../utils";
import config from "../../utils/config";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function GetSignUpEmail(props) {
  let [email, setEmail] = useState("");
  let [invalidEmail, setInvalid] = useState(false);
  const navigate = useNavigate();

  // let emailInvalidMessage;

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
      props.submitHandler(email);
      let endpoint,
        configurationOpt = {};
      if (config.mocking) {
        console.log("using mock server");
        endpoint = `users/`;
        configurationOpt = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        };
      } else {
        endpoint = `user/emailcheck?email=${email}`;
        configurationOpt = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        };
      }
      console.log("fetching data...");
      const response = await fetchDataFromAPI({ endpoint, configurationOpt });
      console.log("response", response);

      for (let i = 0; i < response.length; i++) {
        if (response[i].email === email) {
          navigate("/login");
          console.log("mawgod");
          return;
        } else {
          navigate("/SignUp");
          console.log("m4 mwogd");
        }
      }
    }
  }

  //     let endpoint,
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
                      <h2 className={Style["invalidEmail"]}></h2>
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
                <button>
                  <i
                    className="ri-google-fill"
                    href="https://accounts.google.com/"
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
