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
import configuration from "./utils/config";
import New from "./Pages/New";
import Login from "./Pages/Login";
import AuthContextProvider from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ManageAttendees from "./Pages/ManageAttendees";
import EventTicket from "./Pages/EventTicket";
import Publish from "./components/Event/CreateEvent/Publish/Publish";
import NotFound from "../src/components/Event/EventPage/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard";
import { SearchResultsPage } from "./Pages/SearchResultsPage";
import CreateEventContextProvider from "./context/CreateEventContext";

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
    element: (
      <CreateEventContextProvider>
        <BasicInfo />
      </CreateEventContextProvider>
    ),
  },
  {
    path: "/event/:id",
    element: <EventPage />,
  },
  {
    path: "/event/:id",
    element: <EventPage />,
  },
  {
    path: "/my-events",
    element: <EventCreator />,
  },
  {
    path: "/manage-attendees",
    element: <ManageAttendees />,
  },
  {
    path: "/event-ticket",
    element: <EventTicket />,
  },
  {
    path: "/Dashboard/:id",
    element: <Dashboard />,
  },
  {
    path: "/publish",
    element: (
      <CreateEventContextProvider>
        <Publish />
      </CreateEventContextProvider>
    ),
  },
  {
    path: "/search/:key",
    element: <SearchResultsPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GoogleOAuthProvider clientId="749417144932-40bn9j748fbhp5tciuuhd5ehhr8e5gfd.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
