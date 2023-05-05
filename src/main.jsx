import React from "react";
import NavigationContextProvider from "./context/NavigationContext";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
// import App from "./App";
import "./index.css";
import BasicInfo from "./Pages/BasicInfo";
import LandingPage from "./Pages/LandingPage";
import EventPage from "./Pages/EventPage";
import SignUp from "./Pages/Signup";
import EventCreator from "./Pages/CreatorEvent";
import EventTicket from "./Pages/EventTicket";
import configuration from "./utils/config";
import New from "./Pages/New";
import Login from "./Pages/Login";
import AuthContextProvider from "./context/AuthContext";
import NotFound from "./components/Event/EventPage/NotFound/NotFound";
import Popup from "./components/Event/EventPage/Popup/Popup";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavigationContextProvider>
        <LandingPage />
      </NavigationContextProvider>
    ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/New",
    element: <New />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-event",
    element: <BasicInfo />,
  },
  {
    path: "/event/:id",
    element: <EventPage />,
  },
  {
    path: "*",
    element: <NotFound/>
  },
  {
    path: "/my-events",
    element: <EventCreator />,
  },
  {
    path: "/event-ticket",
    element: <EventTicket />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
