import dayjs, { Dayjs } from "dayjs";
import { createContext, useState, useContext, useReducer } from "react";

export const LocationValues = { VenueLocation: "VenueLocation" };
export const LocationContext = createContext(LocationValues);

export const BasicInfoValues = "";
export const BasicInfoContext = createContext();

export function BasicInfoContextProvider(props) {
  const [eventTitleContext, setEventTitleContext] = useState("");
  const [organizerContext, setOrganizerContext] = useState("");

  return (
    <BasicInfoContext.Provider
      value={{
        eventTitleContext,
        setEventTitleContext,
        organizerContext,
        setOrganizerContext,
      }}
    >
      {props.children}
    </BasicInfoContext.Provider>
  );
}
export const DateTimeContext = createContext();
export function DateTimeContextProvider(props) {
  const [startDateContext, setStartDateContext] = useState("");
  const [endDateContext, setEndDateContext] = useState("");
  const [startTimeContext, setStartTimeContext] = useState("");
  const [endTimeContext, setEndTimeContext] = useState("");
  const [languageContext, setLanguageContext] = useState("");
  const [timeZoneContext, setTimeZoneContext] = useState("");
  return (
    <DateTimeContext.Provider
      value={{
        startDateContext,
        setStartDateContext,
        endDateContext,
        setEndDateContext,
        startTimeContext,
        setStartTimeContext,
        endTimeContext,
        setEndTimeContext,
        languageContext,
        setLanguageContext,
        timeZoneContext,
        setTimeZoneContext,
      }}
    >
      {props.children}
    </DateTimeContext.Provider>
  );
}
// const initObject = { orgName: "", startDate: "" };
// const context = createContext(initObject);
// component return context
// export function CreateEventProvider({ children }) {}
