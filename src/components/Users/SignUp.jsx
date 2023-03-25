import GetSignUpEmail from "./GetSignUpEmail";
import New from "./New";

export default function SignUp(props) {
  let email;
  function onSubmitHandler(emailFromUser) {
    email = emailFromUser;
  }
  return (
    <>
      {!email && <GetSignUpEmail submitHandler={onSubmitHandler} />}
      {email && <New email={email} />}
    </>
  );
}
