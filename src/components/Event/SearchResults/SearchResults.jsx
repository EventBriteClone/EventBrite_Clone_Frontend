import React from "react";
import Header from "../../Layout/Header";
import useFetch from "../../../custom-hooks/useFetch";
import { useParams } from "react-router-dom";
import EventCardContainer from "../EventCardContainer/EventCardContainer";
import EventCard from "../EventCardContainer/EventCard";
import "./SearchResults.css";
import { parseDateFromAPI } from "../../../utils";
import config from "../../../utils/config";
function SearchResults() {
  const params = useParams();
  const endpoint = `events/search/${params.key}`;
  const { response } = useFetch({
    endpoint,
    configurationOpt: {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  });
  return (
    <>
      <Header />

      {response?.length ? (
        <EventCardContainer>
          {response.map((ev) => {
            const data = {
              title: ev.Title,
              id: ev.ID,
              image: ev.image,
              organizer: ev.organizer,
              location: ev.venue_name,
              startDate: parseDateFromAPI(ev.ST_DATE),
              startTime: ev.ST_TIME,
              endTime: ev.END_TIME,
            };

            return <EventCard key={data.id} event={data}></EventCard>;
          })}
        </EventCardContainer>
      ) : !response ? (
        <div className="empty">loading...</div>
      ) : (
        <div className="empty">No Events Found</div>
      )}
    </>
  );
}

export default SearchResults;
