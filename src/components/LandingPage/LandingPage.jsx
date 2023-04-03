import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Hero from "./Hero";
import MainContent from "./MainContent";

import NavigationContextProvider from "../../context/NavigationContext";

import { useState } from "react";

export default function LandingPage(props) {
  const [events, setEvents] = useState(null);
  // useContext()
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   const url = `./Events.json`;
  //   fetch(url, { signal })
  //     .then((data) => data.json())
  //     .then((json) => {
  //       setEvents(json);
  //     });
  //   return () => controller.abort();
  // }, []);

  return (
    <NavigationContextProvider>
      <Header />
      <Hero />
      <MainContent events={events} />
      <Footer />
    </NavigationContextProvider>
  );
}
