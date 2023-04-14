import { createContext, useEffect, useState } from "react";
import { getCurrentCity, filterMockDataByCity } from "../utils";
import config from "../utils/config";
import useFetch from "../custom-hooks/useFetch";

const navigationInitialValue = "";
export const NavigationContext = createContext(navigationInitialValue);

export default function NavigationContextProvider(props) {
  const [city, setCity] = useState("");
  const endpoint = config.mocking ? "eventsPreview" : "";
  const { response } = useFetch({
    endpoint,
  });
  let filteredResponse;
  if (city && response && config.mocking) {
    filteredResponse = filterMockDataByCity(response, city);
  }
  console.log("hena,NavigationContext", city);
  useEffect(() => {
    console.log("hena", city);
    getCurrentCity().then((c) => {
      setCity(c);
    });
  }, []);
  return (
    <NavigationContext.Provider
      value={{ city, setCity, response: filteredResponse || response }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
}
