import Header from "../../Layout/Header";
import EventHeader from "./EventHeader";
import EventInfo from "./EventInfo";
import PriceTag from "./PriceTag";
import Organizer from "./Organizer";
import EventDetails from "./EventDetails";
import ShareEvent from "./ShareEvent";
import AboutOrganizer from "./AboutOrganizer";
import ShareButton from "../../UI/ShareButton";
function Event() {
  return (
    <>
      <Header></Header>
      <EventHeader />
      <EventInfo />
      <PriceTag />
      <Organizer />
      <EventDetails />
      <ShareEvent />
      <AboutOrganizer />
      <ShareButton />
    </>
  );
}

export default Event;
