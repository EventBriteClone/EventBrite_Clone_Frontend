import SignUp from "./components/Users/SignUp";
import BasicInfo from "./components/Event/BasicInfo";
import Input from "./components/UI/Input";
function App() {
  return (
    <>
      <SignUp></SignUp>
      <Input
        invalid={false}
        input={{ id: "test", required: true, placeholder: "Testing" }}
        label="Test"
        invalidText="Please enter Testing"
      ></Input>
      {/* <BasicInfo></BasicInfo> */}
    </>
  );
}

export default App;
