import useFetch from "../../custom-hooks/useFetch";
import EventCard from "../Event/EventCardContainer/EventCard";
import EventCardContainer from "../Event/EventCardContainer/EventCardContainer";
import { parseEventDataFromAPI } from "./EventsInLocation";

export default function CategoryResults({ category }) {
  const { response } = useFetch({
    endpoint: `events/category/${category}/`,
    notMockingCallback: parseEventDataFromAPI,
  });
  const eventsList = response?.length ? (
    response.map((event) => <EventCard key={event.id} event={event} />)
  ) : (
    <h3>No Events found</h3>
  );

  return <EventCardContainer>{eventsList}</EventCardContainer>;
  console.log(response);
}
