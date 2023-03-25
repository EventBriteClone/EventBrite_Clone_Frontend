import { useState } from "react";
import GetSignUpEmail from "./GetSignUpEmail";
import New from "./New";

export default function SignUp(props) {
  const [email, setEmail] = useState(null);
  function onSubmitHandler(emailFromUser) {
    console.log("bara", emailFromUser);
    setEmail(emailFromUser);
    console.log("email", email);
  }
  return (
    <>
      {!email && <GetSignUpEmail submitHandler={onSubmitHandler} />}
      {email && <New email={email} />}
    </>
  );
}
