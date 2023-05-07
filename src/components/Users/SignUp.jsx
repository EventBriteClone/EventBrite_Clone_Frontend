import { useState } from "react";
import GetSignUpEmail from "./GetSignUpEmail";
import New from "./New";
import Login from "./Login";

export default function SignUp(props) {
  const [email, setEmail] = useState(null);
  // const [login, setLogin] = useState(false);

  function onSubmitHandler(email) {
    setEmail(email);
    console.log("emailfromuser", email);

    // setLogin(shouldLogin);
    // console.log("shouldlogin", shouldLogin);
  }

  return (
    <>
      {!email && <GetSignUpEmail submitHandler={onSubmitHandler} />}
      {email && <New email={email} />}
    </>
  );
}
