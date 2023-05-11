import { createContext, useReducer } from "react";

const initialEvent = {
  eventTitle: "",
  organizer: "",
  type: "",
  category: "",
  subcategory: "",
  location: "",
  summary: "",
  description: "",
  startDate: "2023-06-30",
  endDate: "2023-06-30",
  startTime: "7:00 PM",
  endTime: "10:00 PM",
  online: false,
  capacity: 1000,
  status: "Draft",
  images: [],
};

// type imageObject = { file: string, src: string };

const savedEvent = localStorage.getItem("event")
  ? JSON.parse(localStorage.getItem("event"))
  : null;

export const CreateEventContext = createContext(initialEvent);

export default function CreateEventContextProvider({ children }) {
  const [createEvent, setCreateEvent] = useReducer(
    createEventReducer,
    savedEvent || initialEvent
  );

  return (
    <CreateEventContext.Provider value={{ setCreateEvent, createEvent }}>
      {children}
    </CreateEventContext.Provider>
  );
}

function createEventReducer(state, payload) {
  if (payload.type === "set") {
    let newState = { ...state, ...payload.data };
    localStorage.setItem("event", JSON.stringify(newState));
    return newState;
  }
  if (payload.type === "clear") {
    localStorage.removeItem("event");
    return { ...initialEvent };
  }
}
