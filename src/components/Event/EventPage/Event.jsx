import Header from "../../Layout/Header";
import EventHeader from "./EventHeader/EventHeader";
import EventInfo from "./EventInfo/EventInfo";
import PriceTag from "./PriceTag/PriceTag";
import Organizer from "./Organizer/Organizer";
import EventDetails from "./EventDetails/EventDetails";
import ShareEvent from "./ShareEvent/ShareEvent";
import AboutOrganizer from "./AboutOrganizer/AboutOrganizer";
import ShareButton from "../../UI/ShareButton";
import LikeButton from "./LikeButton"
import Footer from "./Footer"
import config from "../../../utils/config";

function Event() {
  let data;
  const endpoint = config.mocking === "true" ? `events/ID/${event_ID}` : `events/${id}`;
  const { response } = useFetch({ endpoint })
  if (config.mocking === "true"){
    data = response;
  }
  else {
    data = response && response?.results?.map((ev) => {
      return {
        id: ev.id,
        title: ev.Title,
        img: ev.image,
        organizer: ev.organizer,
        location: ev.venue_name,
        caption: ev.summery,
        date: ev.ST_DATE,
        dateAndtime: `${ev.ST_DATE} ${ev.ST_TIME}`,
        duration: `${Number(Number(ev.END_TIME)-Number(ev.ST_TIME))} Hours`
      }
    })
  }

  const event = data && {
    id: "1",
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
      <PriceTag price={event.price} event={event.id}/>
      <Organizer organizer={event.organizer} organizerIcon={event.organizerIcon} organizerFollowers={event.organizerFollowers}/>
      <EventDetails dateAndtime={event.dateAndtime} location={event.location} duration={event.duration} ticket={event.ticket}/>
      <ShareEvent />
      <AboutOrganizer organizerIcon={event.organizerIcon} organizer={event.organizer} organizerFollowers={event.organizerFollowers}/>
      <ShareButton />
      <LikeButton />
      <Footer/>
    </>
  );
}

export default Event;
