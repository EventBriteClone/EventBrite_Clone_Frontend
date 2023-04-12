import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Hero from "./Hero";
import MainContent from "./MainContent";

import { NavigationContext } from "../../context/NavigationContext";

import { Suspense, useContext, useState } from "react";

export default function LandingPage(props) {
  const [events, setEvents] = useState(null);
  const ctx = useContext(NavigationContext);
  console.log(ctx);
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
    <>
      <Header />
      <Hero />
      <Suspense>
        <MainContent events={events} />
      </Suspense>
      <Footer />
    </>
  );
}
