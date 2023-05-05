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
import useFetch from "../../../custom-hooks/useFetch";
import NotFound from "./NotFound/NotFound";

function Event() {
  let data;
  const id = window.location.href.split('/').at(-1)
  const endpoint = config.mocking === "true" ? `events/${id}` : `events/ID/${id}/`;
  const { response } = useFetch({ endpoint })
  console.log(response)
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

  const event =  {
    id: window.location.href.split('/').at(-1),
    img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F400015689%2F248532170773%2F1%2Foriginal.20221126-024449?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C67%2C1920%2C960&s=dccc36dee7d667436cb581a66581b6b8",
    date: "Nov 3",
    title: "11:11 EGYPT STARGATE PILGRIMAGE",
    caption: "11:11 EGYPT STARGATE Pilgrimage Golden Universe & Temples of Light Activation. 10 Day Journey with 11:11 Ceremony at the Great Pyramid",
    price: "$532",
    organizer: "Jennifer Ashira Ra",
    organizerIcon: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F145397963%2F248532170773%2F1%2Foriginal.20210824-061121?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=75%2C44%2C948%2C948&s=2116de7469bf214a01f46acd74bf44b9",
    organizerFollowers: "614",
    location: "Egypt GOZA PLATEAU CIZA, 94100",
    dateAndtime: "November 3 · 4pm - November 12 · 12pm EET",
    duration: "8 days 20 hours",
    ticket: "Mobile eTitcket"
  }
  return (
    <>
      <Header></Header>
      <EventHeader img={event.img} />
      <EventInfo date={event.date} title={event.title} caption={event.caption}/>
      <PriceTag price={event.price} event={event.id} img={event.img} title={event.title}/>
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
