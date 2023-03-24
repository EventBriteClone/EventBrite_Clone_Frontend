import EventCreator from "./components/Event/EventCreator/EventCreator";
import Header from "./components/Layout/Header";

function App() {
  return <SignUP></SignUP>;
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
