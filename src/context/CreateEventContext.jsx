import { createContext, useContext, useReducer } from "react";
const initObject = { orgName: "", startDate: "" };
const context = createContext(initObject);
// component return context
export function CreateEventProvider({ children }) {}
