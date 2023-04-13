import { useState } from "react";
import Input from "../UI/Input";
import Style from "./Style.module.css";

export default function GetSignUpEmail(props) {
  let [email, setEmail] = useState("");
  // let [invalidEmail, setInvalid] = useState(false);
  let emailInvalidMessage;
  const getInputValue = (event) => {
    // show the user input value to console
    let userValue = event.target.value;
    setEmail(userValue);
  };
  function AddEmail() {
    const validRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email) {
      emailInvalidMessage = "Please enter a valid email address";
      // setInvalid("Please enter a valid email address");
    } else if (email.match(validRegex)) {
      emailInvalidMessage = "";
      // setInvalid("");
    } else {
      emailInvalidMessage = "Invalid email";
      // setInvalid("Invalid email");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    if (emailInvalidMessage) return;
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
                  <Input
                    requiredAst={true}
                    label="Email Address"
                    // invalidText={"Please enter a valid email address"}
                    invalid={true}
                    onChange={getInputValue}
                    className={
                      emailInvalidMessage ? Style["error"] : Style["input"]
                    }
                    input={{
                      id: "email",
                      required: true,
                    }}
                  />
                  <div className={Style["cont"]}>
                    <div className={Style["invalidEmail"]}>
                      <h2 className={Style["invalidEmail"]}>
                        {emailInvalidMessage}
                      </h2>
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
