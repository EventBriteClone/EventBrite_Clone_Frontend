import Style from "./Style.module.css";
import React from "react";

export default function SignUP() {
  let [email, setEmail] = React.useState("");
  let [invalidEmail, setInvalid] = React.useState(false);

  const getInputValue = (event) => {
    // show the user input value to console
    let userValue = event.target.value;
    setEmail(userValue);
  };
  function AddEmail() {
    const validRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email) {
      setInvalid("Field required");
    } else if (email.match(validRegex)) {
      setInvalid("");
    } else {
      setInvalid("Invalid email");
    }
  }

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" />
      <link rel="stylesheet" href="Style.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      ></link>
      <title>Eventbrite</title>
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
                <form action="#">
                  <input
                    onChange={getInputValue}
                    type="email"
                    placeholder="Email address"
                    className={invalidEmail ? Style["error"] : Style["input"]}
                  />
                </form>
              </div>
              <div className={Style["cont"]}>
                <div className={Style["invalidEmail"]}>
                  <h2 className={Style["invalidEmail"]}>{invalidEmail}</h2>

                  <button className={Style["cont "]} onClick={AddEmail}>
                    Continue
                  </button>
                </div>
              </div>
              <div className={Style["or"]}>
                <h3>or</h3>
              </div>
              <div className={Style["cont2"]}>
                <button>
                  {/* <a
                  className="ri-google-fill"
                  href="https://accounts.google.com/"
                  title="Go to google account"
                ></a> */}
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
    </div>
  );
}
