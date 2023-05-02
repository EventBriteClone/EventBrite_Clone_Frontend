import { createContext, useEffect, useRef, useState } from "react";
import { getCurrentCity, filterMockDataByCity } from "../utils";
import config from "../utils/config";
import useFetch from "../custom-hooks/useFetch";

const navigationInitialValue = "";
export const NavigationContext = createContext(navigationInitialValue);

export default function NavigationContextProvider(props) {
  const [city, setCity] = useState("");
  const initialCity = useRef(null);

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
        initialCity: initialCity.current,
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
}
