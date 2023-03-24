import React from "react";
import Style from "./Style.module.css";
const New = (props) => {
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
                    title="Go to homepage"
                  >
                    eventbrite
                  </a>
                  <h1>
                    Create an <br /> account
                  </h1>
                </div>
              </div>
              <div className={Style["hero"]}>
                <form>
                  <div className={Style["input-group"]}>
                    <input type="email" placeholder="Email Address" required />
                  </div>
                  <div className={Style["input-group"]}>
                    <input type="email" placeholder="Confirm email" required />
                  </div>
                  <div className={Style["row"]}>
                    <div className={Style["input-group"]}>
                      <input type="text" placeholder="First Name" required />
                    </div>
                    <div className={Style["input-group"]}>
                      <input type="text" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className={Style["input-group"]}>
                    <input type="password" placeholder="Password" required />
                    <h1>Your password must be at least 8 characters</h1>
                  </div>
                  <button>Create account</button>
                </form>
              </div>
              <div className={Style["log-in"]}>
                <a href>log in</a>
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
