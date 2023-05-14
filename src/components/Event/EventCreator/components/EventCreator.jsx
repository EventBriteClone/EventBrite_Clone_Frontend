import "remixicon/fonts/remixicon.css";
import AllEvents from "./AllEvents";
import HeaderTicket from "../../EventTicket/HeaderTicket";

function EventCreator() {
  return (
    <>
      <HeaderTicket></HeaderTicket>
      <AllEvents />
    </>
  );
}

export default EventCreator;
