import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import "./index.css";
import BasicInfo from "./Pages/BasicInfo";
import LandingPage from "./Pages/LandingPage";
import EventPage from "./Pages/EventPage";
import SignUp from "./Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/create-event",
    element: <BasicInfo />,
  },
  {
    path: "/event/:id",
    element: <EventPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
