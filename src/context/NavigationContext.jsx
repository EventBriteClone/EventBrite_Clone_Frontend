import { createContext, useEffect, useState } from "react";
import getCurrentCity from "../utils";

const navigationInitialValue = "";
export const NavigationContext = createContext(navigationInitialValue);

export default function NavigationContextProvider(props) {
  const [city, setCity] = useState("");
  useEffect(() => {
    getCurrentCity().then((c) => setCity(c));
  }, []);

  return (
    <NavigationContext.Provider value={{ city, setCity }}>
      {props.children}
    </NavigationContext.Provider>
  );
}
