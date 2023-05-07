import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styles from "./Location.module.css";
import React, { useEffect, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Checkbox from "@mui/material/Checkbox";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Location({
  changeButton,
  saveButton,
  isLocationRequired,
  setIsLocationRequired,
}) {
  const LocationValues = useContext(LocationContext);
  const [showHideSearchBar, setShowHideSearchBar] = useState(false);
  const [HideSearchBar, setHideSearchBar] = useState(true);
  const [showVenue, setshowVenue] = useState(true);
  const [showOnlineEvent, setshowOnlineEvent] = useState(false);
  const [showToBeAnnounced, setshowToBeAnnounced] = useState(false);
  const [isVenueOpen, setIsVenueOpen] = useState(true);
  const [isOnlineEventOpen, setIsOnlineEventOpen] = useState(false);
  // const [showOnlineEvent, setshowOnlineEvent] = useState(false);
  // const [showHideSearchBar, setShowHideSearchBar] = useState(false);
  // const [isVenueOpen, setIsVenueOpen] = useState(true);
  // const [showVenue, setshowVenue] = useState(true);
  // const [HideSearchBar, setHideSearchBar] = useState(true);
  const [isToBeAnnouncedOpen, setIsToBeAnnouncedOpen] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  // const [isLocationRequired, setIsLocationRequired] = useState(false);
  function locationValueChange(event) {
    setLocationValue(event.target.value);
    if (event.target.value.length === 0) {
      setIsLocationRequired(true);
      saveButton(false);
    } else {
      setIsLocationRequired(false);
      saveButton(true);
      changeButton(true);
    }
  }
  // const [showToBeAnnounced, setshowToBeAnnounced] = useState(false);

  function handleShowVenue(event) {
    saveButton(false);
    if (
      isVenueOpen === true &&
      isOnlineEventOpen === false &&
      isToBeAnnouncedOpen === false
    ) {
      changeButton(true);
      setshowVenue(true);
      setshowOnlineEvent(false);
      if (HideSearchBar) {
        setShowHideSearchBar(false);
      }
    } else {
      changeButton(true);
      setshowVenue(true);
      setshowOnlineEvent(false);
      if (HideSearchBar) {
        setShowHideSearchBar(false);
      }
      const child1 = event.target.parentNode.childNodes[1];
      const child2 = event.target.parentNode.childNodes[2];
      event.target.classList.remove(styles.OnlineEventButton);
      event.target.classList.add(styles.VenueButton);
      if (isOnlineEventOpen === true) {
        child1.classList.remove(styles.VenueButton);
        child1.classList.add(styles.OnlineEventButton);
      } else if (isToBeAnnouncedOpen === true) {
        child2.classList.remove(styles.VenueButton);
        child2.classList.add(styles.TobeAnnounced);
      }
      setIsVenueOpen(true);
      setIsOnlineEventOpen(false);
      setIsToBeAnnouncedOpen(false);
    }
  }
  // Online Event Button Hide and Show
  function handleShowOnlineEvent(event) {
    saveButton(true);
    if (
      isVenueOpen === false &&
      isOnlineEventOpen === true &&
      isToBeAnnouncedOpen === false
    ) {
      setshowVenue(false);
      setshowOnlineEvent(true);
      setShowHideSearchBar(true);
      changeButton(true);
    } else {
      setshowVenue(false);
      setshowOnlineEvent(true);
      setShowHideSearchBar(true);
      changeButton(true);
      const child1 = event.target.parentNode.childNodes[0];
      const child2 = event.target.parentNode.childNodes[2];
      event.target.classList.remove(styles.OnlineEventButton);
      event.target.classList.add(styles.VenueButton);
      if (isVenueOpen === true) {
        child1.classList.remove(styles.VenueButton);
        child1.classList.add(styles.OnlineEventButton);
      } else if (isToBeAnnouncedOpen === true) {
        child2.classList.remove(styles.VenueButton);
        child2.classList.add(styles.TobeAnnounced);
      }
      setIsVenueOpen(false);
      setIsOnlineEventOpen(true);
      setIsToBeAnnouncedOpen(false);
    }
  }

  // Online Event Button Hide and Show
  function handleShowToBeAnnounced(event) {
    saveButton(true);

    if (
      isVenueOpen === false &&
      isOnlineEventOpen === false &&
      isToBeAnnouncedOpen === true
    ) {
      setshowVenue(false);
      setshowOnlineEvent(false);
      setshowToBeAnnounced(true);
      setShowHideSearchBar(true);
      changeButton(true);
    } else {
      setshowVenue(false);
      setshowOnlineEvent(false);
      setShowHideSearchBar(true);
      setshowToBeAnnounced(true);
      changeButton(true);
      const child1 = event.target.parentNode.childNodes[0];
      const child2 = event.target.parentNode.childNodes[1];
      event.target.classList.remove(styles.TobeAnnounced);
      event.target.classList.add(styles.VenueButton);
      if (isVenueOpen === true) {
        child1.classList.remove(styles.VenueButton);
        child1.classList.add(styles.OnlineEventButton);
      } else if (isOnlineEventOpen === true) {
        child2.classList.remove(styles.VenueButton);
        child2.classList.add(styles.OnlineEventButton);
      }
      setIsVenueOpen(false);
      setIsOnlineEventOpen(false);
      setIsToBeAnnouncedOpen(true);
    }
  }

  return (
    <>
      <div>
        <h1 className={styles.h1Location}>Location</h1>
        <p className={styles.textLocation}>
          Help people in the area discover your event and let attendees know
          where to show up.
        </p>
        <div className={styles.Buttons}>
          <button onClick={handleShowVenue} className={styles.VenueButton}>
            Venue
          </button>
          <button
            onClick={handleShowOnlineEvent}
            className={styles.OnlineEventButton}
          >
            Online event
          </button>
          <button
            onClick={handleShowToBeAnnounced}
            className={styles.TobeAnnounced}
          >
            To be announced
          </button>
        </div>
        <div className={styles.searchVenueLocation}>
          {showOnlineEvent && (
            <p className={styles.pVenue}>
              Online events have unique event pages where you can add links to
              livestreams and more
            </p>
          )}
          {showVenue && <p className={styles.pVenue}>Venue location</p>}
          <div>
            {showVenue && (
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: 50,
                  marginBottom: "20px",
                  position: "relative",
                  fontSize: "14px",
                  lineHeight: "22px",
                  fontWeight: 400,
                  padding: "1px",
                  borderRadius: "1px",
                  border: "1px",
                }}
              >
                <IconButton
                  sx={{ p: "14px", marginLeft: "12px", height: "24px" }}
                  aria-label="menu"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search for a venue or address."
                  onChange={locationValueChange}
                  value={locationValue}

                  // inputProps={{ 'aria-label': 'search google maps' }}
                />
              </Paper>
            )}
            <div className={styles.aside}>
              {isLocationRequired && (
                <p className={styles.letterRequired}>Location is required.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Location.propTypes = {
  changeButton: PropTypes.func,
  saveButton: PropTypes.func,
  isLocationRequired: PropTypes.bool,
  setIsLocationRequired: PropTypes.func,
};

export default Location;
