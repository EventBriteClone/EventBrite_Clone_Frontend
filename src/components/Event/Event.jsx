import Header from "./components/Layout/Header";
import EventCard from "./components/EventCardContainer/EventCard";
import EventCardContainer from "./components/EventCardContainer/EventCardContainer";
import Section from "./components/Layout/Section";
import EventHeader from "./components/Event/EventHeader";
import EventInfo from "./components/Event/EventInfo";
import PriceTag from "./components/Event/PriceTag";
import Organizer from "./components/Event/Organizer";
import EventDetails from "./components/Event/EventDetails";
import ShareEvent from "./components/Event/ShareEvent";
import AboutOrganizer from "./components/Event/AboutOrganizer";
import ShareButton from "./components/UI/ShareButton";
function Event() {
  return (
    <>
      <Header></Header>
      <EventHeader />
      <EventInfo />
      <PriceTag />
      <Organizer />
      <EventDetails/>
      <ShareEvent/>
      <AboutOrganizer/>
      <ShareButton/>
    </>
  );
}

export default Event;