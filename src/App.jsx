import EventCreator from "./components/Event/EventCreator/EventCreator";
import Header from "./components/Layout/Header";
import EventCard from "./components/EventCardContainer/EventCard";
import EventCardContainer from "./components/EventCardContainer/EventCardContainer";
import Section from "./components/Layout/Section";
import React from "react";
import SignUP from "./components/Users/SignUp";
function App() {
  return <SignUP></SignUP>;
  return (
    <>
      <Header></Header>
      <Section>
        <EventCardContainer>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
        </EventCardContainer>
      </Section>
      <EventCreator />
    </>
  );
}
//=======

export default App;
