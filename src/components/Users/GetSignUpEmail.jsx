import { useState } from "react";
import Style from "./Style.module.css";

export default function GetSignUpEmail(props) {
  let [email, setEmail] = useState("");
  // let [invalidEmail, setInvalid] = useState(false);
  let emailMessage;
  const getInputValue = (event) => {
    // show the user input value to console
    let userValue = event.target.value;
    setEmail(userValue);
  };
  function AddEmail() {
    const validRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email) {
      emailMessage = "Please enter a valid email address";
      // setInvalid("Please enter a valid email address");
    } else if (email.match(validRegex)) {
      emailMessage = "";
      // setInvalid("");
    } else {
      emailMessage = "Invalid email";
      // setInvalid("Invalid email");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    if (emailMessage) return;
    console.log(email, "hena");
    props.submitHandler(email);
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
                    href="https://www.eventbrite.com/"
                    rel="noopener noreferrer"
                    title="Go to/ homepage"
                  >
                    eventbrite
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
                  className="form"
                >
                  <input
                    onChange={getInputValue}
                    type="email"
                    placeholder="Email address"
                    className={emailMessage ? Style["error"] : Style["input"]}
                  />
                  <div className={Style["cont"]}>
                    <div className={Style["invalidEmail"]}>
                      <h2 className={Style["invalidEmail"]}>{emailMessage}</h2>
                      <button
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
