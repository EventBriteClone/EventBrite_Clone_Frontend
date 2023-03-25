import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Hero from "./Hero";
import MainContent from "./MainContent";
import { useEffect, useState } from "react";
export default function LandingPage(props) {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const url = `./Events.json`;
    fetch(url, { signal })
      .then((data) => data.json())
      .then((json) => {
        setEvents(json);
      });
    return () => controller.abort();
  }, []);
  console.log(events);

  return (
    <>
      <Header />
      <Hero />
      <MainContent events={events} />
      <Footer />
    </>
  );
}
