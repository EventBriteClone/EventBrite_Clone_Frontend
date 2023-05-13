import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../custom-hooks/useFetch";
import Footer from "../EventPage/Footer";
import EventCardContainer from "../EventCardContainer/EventCardContainer";
import Header from "../../Layout/Header";
import EventCard from "../EventCardContainer/EventCard";
import { parseEventDataFromAPI } from "../../LandingPage/EventsInLocation";

export default function LikedEvents() {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  if (!authState.isAuthenticated) return navigate("/login");
  const endpoint = "events/liked/";

  const { response } = useFetch({
    endpoint,
    configurationOpt: {
      headers: {
        authorization: `customToken ${authState.token}`,
      },
    },
    notMockingCallback: parseEventDataFromAPI,
  });
  console.log(response);
  const eventsList = response?.length ? (
    response.map((event) => {
      let newEvent = {
        ...event,
        image: `${event.image ? `https://event-us.me:8000${event.image}` : ""}`,
      };
      return <EventCard key={newEvent.id} event={newEvent} />;
    })
  ) : (
    <h3>No liked events yet</h3>
  );

  return (
    <>
      <Header />
      <div style={{ padding: "0 100px", marginTop: "50px" }}>
        <EventCardContainer>{eventsList}</EventCardContainer>
      </div>
      <Footer />
    </>
  );
}
