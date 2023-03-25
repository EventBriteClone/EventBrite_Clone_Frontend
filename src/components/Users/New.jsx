import { useState } from "react";
import { Link } from "react-router-dom";
import MainIcon from "../Icons/MainIcon";

import Input from "../UI/Input";

import Style from "./Style.module.css";
const New = (props) => {
  let [email, setEmail] = useState("");
  let [invalidEmail, setInvalid] = useState(false);

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
                <form>
                  <Input
                    label="Email address"
                    input={{
                      type: "email",
                      required: true,
                      id: "email",
                      value: props.email,
                    }}
                  />
                  <Input
                    label="Confirm Email"
                    input={{
                      type: "email",
                      invalidText:
                        "Email address doesn't match. Please try again.",
                      required: true,
                      id: "confirm-email",
                    }}
                  />
                  <div className={Style["row"]}>
                    <Input
                      label="First Name"
                      input={{
                        id: "fname",
                        type: "text",
                        invalidText: "Please enter a valid first name",
                        required: true,
                      }}
                    />
                    <Input
                      label="Last Name"
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
                    input={{
                      id: "password",
                      type: "password",
                      // invalidText: "Please enter a valid last name",
                      required: true,
                    }}
                  />
                  <button className={`${Style.button}`}>Create account</button>
                </form>
              </div>
              <div className={Style["log-in"]}>
                <Link to="/">log in</Link>
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
