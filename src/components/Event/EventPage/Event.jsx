import Header from "../../Layout/Header";
import EventHeader from "./EventHeader";
import EventInfo from "./EventInfo";
import PriceTag from "./PriceTag";
import Organizer from "./Organizer";
import EventDetails from "./EventDetails";
import ShareEvent from "./ShareEvent";
import AboutOrganizer from "./AboutOrganizer";
import ShareButton from "../../UI/ShareButton";
import LikeButton from "./LikeButton"

function Event() {
  const event = {
    img: "https://syndicode.com/wp-content/uploads/2017/10/UX-vs-UI-e1507292179406.png",
    date: "Nov 15",
    title: "UI/UX Workshop",
    caption: "Professional UI/UX Workshop",
    price: "€549 – €699",
    organizer: "Google",
    organizerIcon: "https://th.bing.com/th/id/OIP.T6F6Vja5ue4BhRs81wWlywHaHa?pid=ImgDet&rs=1",
    organizerFollowers: "10M",
    location: "Online",
    dateAndtime: "Saturday, November 15 · 5:30 - 6:30pm EET",
    duration: "4 Hours",
    ticket: "Mobile eTitcket"
  }
  return (
    <>
      <Header></Header>
      <EventHeader img={event.img} />
      <EventInfo date={event.date} title={event.title} caption={event.caption}/>
      <PriceTag price={event.price}/>
      <Organizer organizer={event.organizer} organizerIcon={event.organizerIcon} organizerFollowers={event.organizerFollowers}/>
      <EventDetails dateAndtime={event.dateAndtime} location={event.location} duration={event.duration} ticket={event.ticket}/>
      <ShareEvent />
      <AboutOrganizer organizer={event.organizer} organizerFollowers={event.organizerFollowers}/>
      <ShareButton />
      <LikeButton />
    </>
  );
}

export default Event;
