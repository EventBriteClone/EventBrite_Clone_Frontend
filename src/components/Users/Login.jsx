import React from "react";
import Style from "./Style.module.css";
import { useState } from "react";
import { Password } from "@mui/icons-material";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          User: email,
          login: password,
        }),
      });
      const resJson = await res.json();
      if (res.status === 200) {
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
                    href="https://www.eventbrite.com/"
                    rel="noopener noreferrer"
                    title="Go to homepage"
                  >
                    eventus
                  </a>
                  <h1>Log in</h1>
                </div>
              </div>

              <div className={Style["email"]}>
                <form
                  onSubmit={submitHandler}
                  //   method="post"
                  //   action="#"
                >
                  <input
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </form>
                <form action="#">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </form>
              </div>
              <div className={Style["cont"]}>
                <button>Log in</button>
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
