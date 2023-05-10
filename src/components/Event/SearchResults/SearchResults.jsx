import React from "react";
import Header from "../../Layout/Header";
import useFetch from "../../../custom-hooks/useFetch";
import { useParams } from "react-router-dom";
import EventCardContainer from "../EventCardContainer/EventCardContainer";
import EventCard from "../EventCardContainer/EventCard";
import "./SearchResults.css";
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
          {response.map((r) => {
            return <EventCard key={r.ID} event={r}></EventCard>;
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
