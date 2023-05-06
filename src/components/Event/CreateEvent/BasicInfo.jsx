import React, { useEffect, useState, useContext } from "react";
import BasicInfoComponents from "./BasicInfoComponents";
import Location from "./Location";
import DateTime from "./DateTime";
import styles from "./BasicInfo.module.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import ErrorMessage from "./ErrorMessage";
import {
  LocationContext,
  LocationValues,
  BasicInfoContext,
  BasicInfoValues,
} from "../../../context/CreateEventContext";

import {
  BasicInfoContextProvider,
  DateTimeContextProvider,
} from "../../../context/CreateEventContext";

// export const useContext = React.createContext();
function BasicInfo() {
  useEffect(() => {
    const [html] = document.getElementsByTagName("html");
    html.style.fontSize = "100%";
    return () => (html.style.fontSize = "6.25%");
  }, []);
  /// show and hide search bar
  const [showHideSearchBar, setShowHideSearchBar] = useState(false);
  const [HideSearchBar, setHideSearchBar] = useState(true);

  // Venue Button Hide
  const [showVenue, setshowVenue] = useState(true);
  function handleShowVenue(event) {
    setshowVenue(true);
    setshowOnlineEvent(false);
    if (HideSearchBar) {
      setShowHideSearchBar(false);
    }
  }
  // Online Event Button Hide and Show
  const [showOnlineEvent, setshowOnlineEvent] = useState(false);
  function handleShowOnlineEvent(event) {
    setshowVenue(false);
    setshowOnlineEvent(true);
    setShowHideSearchBar(true);
  }
  // Online Event Button Hide and Show
  const [showToBeAnnounced, setshowToBeAnnounced] = useState(false);
  function handleShowToBeAnnounced(event) {
    setshowVenue(false);
    setshowOnlineEvent(false);
    setShowHideSearchBar(true);
  }
  // Online Event Button Hide and Show
  const [showSingleEvent, setshowSingleEvent] = useState(true);
  function handleShowSingleEvent(event) {
    setshowSingleEvent(true);
    setshowRecurringEvent(false);
    setShowHideSearchBar(true);
  }
  // Recurring Event Button Hide and Show
  const [showRecurringEvent, setshowRecurringEvent] = useState(false);
  function handleShowRecurringEvent(event) {
    setshowRecurringEvent(true);
    setshowSingleEvent(false);
    setShowHideSearchBar(true);
    setHideSearchBar(false);
  }
  const [isVisible, setIsVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [eventNameAvaliable, setEventNameAvaliable] = useState(false);
  const [locationAvaliable, setLocationAvaliavle] = useState(false);
  const [isRequiredName, setIsRequiredName] = useState(false);
  const [isLocationRequired, setIsLocationRequired] = useState(false);

  return (
    <>
      {isErrorVisible && <ErrorMessage />}
      <div className={styles.mainContainer}>
        <div className={styles.RoutingContainer}>
          <svg
            id="chevron-left-chunky_svg__eds-icon--chevron-left-chunky_svg"
            x="0"
            y="0"
            className={styles.arrow}
            viewBox="0 0 24 24"
          >
            <path
              id="chevron-left-chunky_svg__eds-icon--chevron-left-chunky_base"
              d="M13.8 7l-5 5 5 5 1.4-1.4-3.6-3.6 3.6-3.6z"
            ></path>
          </svg>
          <Link to="/my-events" className={styles.Routing} href="">
            Events
          </Link>
        </div>
        <div className={styles.container}>
          {/* icon */}
          <div className={styles.ImageContainer}>
            <div className={styles.basicInfoImg}>
              <svg
                id="title-edit_svg__eds-icon--title-edit_svg"
                x="0"
                y="0"
                viewBox="0 0 24 24"
              >
                <path
                  id="title-edit_svg__eds-icon--title-edit_base"
                  d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z"
                ></path>
                <g id="title-edit_svg__eds-icon--title-edit_lines">
                  <path d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z"></path>
                </g>
              </svg>
            </div>
            <div className={styles.mapImage}>
              <svg
                id="map_svg__eds-icon--map_svg"
                x="0"
                y="0"
                viewBox="0 0 24 24"
              >
                <path d="M20 3c-1.1 0-2 .9-2 2H2v16h17.8c1.1 0 2.1-.9 2.1-2V5c.1-1.1-.8-2-1.9-2zm-.2 17H3V6h15v13h1c0-.6.4-1 1-1 .5 0 .9.4 1 .9-.1.6-.6 1.1-1.2 1.1zm1.2-2.7c-.3-.2-.6-.3-1-.3s-.7.1-1 .3V5c0-.6.4-1 1-1s1 .4 1 1v12.3z"></path>
                <path
                  id="map_svg__eds-icon--map_cross"
                  d="M8.8 12.7l.7-.7-1.1-1 1.1-1-.7-.7-1.1 1-1-1-.7.7 1 1-1 1 .7.7 1-1z"
                ></path>
                <path
                  id="map_svg__eds-icon--map_dash_3_"
                  d="M12 10h2v1h-2z"
                ></path>
                <path
                  id="map_svg__eds-icon--map_dash_2_"
                  d="M15 12h1v2h-1z"
                ></path>
                <path
                  id="map_svg__eds-icon--map_dash_1_"
                  d="M12 15h2v1h-2z"
                ></path>
                <path id="map_svg__eds-icon--map_dash" d="M8 15h2v1H8z"></path>
              </svg>
            </div>
            <div className={styles.CalenderImage}>
              <svg
                id="calendar_svg__eds-icon--calendar_svg"
                x="0"
                y="0"
                viewBox="0 0 24 24"
              >
                <path
                  id="calendar_svg__eds-icon--calendar_base"
                  d="M17 4V2h-1v2H8V2H7v2H2v18h20V4h-5zm4 17H3V9h18v12zM3 8V5h4v1h1V5h8v1h1V5h4v3H3z"
                ></path>
                <g id="calendar_svg__eds-icon--calendar_squares">
                  <path d="M15 16h2v2h-2zM11 16h2v2h-2zM7 16h2v2H7zM15 12h2v2h-2zM11 12h2v2h-2zM7 12h2v2H7z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className={styles.containerCol}>
            <BasicInfoContextProvider>
              <BasicInfoComponents
                changeButton={(value) => setIsVisible(value)}
                saveButton={(value) => setEventNameAvaliable(value)}
                setIsRequired={(value) => setIsRequiredName(value)}
                isRequired={isRequiredName}
              />
            </BasicInfoContextProvider>
            <hr />
            <LocationContext.Provider value={LocationValues}>
              <Location
                changeButton={(value) => setIsVisible(value)}
                saveButton={(value) => setLocationAvaliavle(value)}
                isLocationRequired={isLocationRequired}
                setIsLocationRequired={(value) => setIsLocationRequired(value)}
              />
            </LocationContext.Provider>
            <hr />
            <DateTimeContextProvider>
              <DateTime changeButton={(value) => setIsVisible(value)} />
            </DateTimeContextProvider>
          </div>
          {isVisible && (
            <NavBar
              changeButton={(value) => setIsVisible(value)}
              nameAvaliable={eventNameAvaliable}
              locationAvaliable={locationAvaliable}
              showErrorText={(value) => setIsRequiredName(value)}
              showLocationErrorText={(value) => setIsLocationRequired(value)}
              errorVisible={(value) => setIsErrorVisible(value)}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default BasicInfo;
