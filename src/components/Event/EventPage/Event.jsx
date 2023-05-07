import Header from "../../Layout/Header";
import EventHeader from "./EventHeader/EventHeader";
import EventInfo from "./EventInfo/EventInfo";
import PriceTag from "./PriceTag/PriceTag";
import Organizer from "./Organizer/Organizer";
import EventDetails from "./EventDetails/EventDetails";
import ShareEvent from "./ShareEvent/ShareEvent";
import AboutOrganizer from "./AboutOrganizer/AboutOrganizer";
import ShareButton from "../../UI/ShareButton";
import LikeButton from "./LikeButton";
import Footer from "./Footer";
import config from "../../../utils/config";
import useFetch from "../../../custom-hooks/useFetch";
import BeatLoader from "react-spinners/BeatLoader";

function Event() {
  let data;
  const event_ID = window.location.href.split("/").at(-1);

  const endpoint =
    config.mocking === "true" ? `events/${event_ID}` : `events/ID/${event_ID}/`;

  const priceEndpoint =
    config.mocking === "true" ? "" : `events/TicketsPrice/${event_ID}/`;

  const { response, isLoading } = useFetch({
    endpoint,
    configurationOpt: {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  });
  console.log(response);
  data = response[0];

  const { response: price } = useFetch({
    priceEndpoint,
    configurationOpt: {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  });
  console.log(price);

  const event = {
    id: window.location.href.split("/").at(-1),
    img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F400015689%2F248532170773%2F1%2Foriginal.20221126-024449?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C67%2C1920%2C960&s=dccc36dee7d667436cb581a66581b6b8",
    date: "Nov 3",
    title: "11:11 EGYPT STARGATE PILGRIMAGE",
    caption:
      "11:11 EGYPT STARGATE Pilgrimage Golden Universe & Temples of Light Activation. 10 Day Journey with 11:11 Ceremony at the Great Pyramid",
    price: "$532",
    organizer: "Jennifer Ashira Ra",
    organizerIcon:
      "https://th.bing.com/th/id/R.cd446aa1c31865154fd4d9404ac2c9fc?rik=EOQHelO6qj7ZEg&pid=ImgRaw&r=0",
    organizerFollowers: "614",
    location: "Egypt GOZA PLATEAU CIZA, 94100",
    dateAndtime: "November 3 · 4pm - November 12 · 12pm EET",
    duration: "8 days 20 hours",
  };
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <BeatLoader color="#d1410c" size={30} />
      </div>
    );
  } else
    return (
      <>
        <Header></Header>
        <EventHeader img={data.image} />
        <EventInfo
          date={data.ST_DATE}
          title={data.Title}
          caption={data.Summery}
        />
        <PriceTag
          price={event.price}
          event={event.id}
          img={data.image}
          title={data.Title}
        />
        <Organizer
          organizer={data.organizer}
          organizerIcon={event.organizerIcon}
          organizerFollowers={event.organizerFollowers}
        />
        <EventDetails
          dateAndtime={`${data.ST_DATE} - ${data.ST_TIME}`}
          location={data.venue_name}
          duration={`${
            Number(data.END_TIME.substring(0, 2)) -
            Number(data.ST_TIME.substring(0, 2))
          } hour`}
          ticket={event.ticket}
        />
        <EventHeader img={event.img} />
        <EventInfo
          date={event.date}
          title={event.title}
          caption={event.caption}
        />
        <PriceTag price={event.price} />
        <Organizer
          organizer={event.organizer}
          organizerIcon={event.organizerIcon}
          organizerFollowers={event.organizerFollowers}
        />
        <EventDetails
          dateAndtime={event.dateAndtime}
          location={event.location}
          duration={event.duration}
          ticket={event.ticket}
        />
        <ShareEvent />
        <AboutOrganizer
          organizerIcon={event.organizerIcon}
          organizer={data.organizer}
          organizerFollowers={event.organizerFollowers}
        />
        <ShareButton />
        <LikeButton />
        <Footer />
      </>
    );
}

export default Event;
