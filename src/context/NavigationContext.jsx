import { createContext, useEffect, useRef, useState } from "react";
import { getCurrentCity, filterMockDataByCity } from "../utils";
import config from "../utils/config";
import useFetch from "../custom-hooks/useFetch";

const navigationInitialValue = "";
export const NavigationContext = createContext(navigationInitialValue);

export default function NavigationContextProvider(props) {
  const [city, setCity] = useState("");
  const initialCity = useRef(null);
  const endpoint = config.mocking ? `eventsPreview?location_like=${city}` : "";
  const { response } = useFetch({
    endpoint,
  });
  useEffect(() => {
    getCurrentCity().then((c) => {
      setCity(c);
      initialCity.current = c;
    });
  }, []);
  return (
    <NavigationContext.Provider
      value={{
        city,
        setCity,
        response: response,
        initialCity: initialCity.current,
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
}
