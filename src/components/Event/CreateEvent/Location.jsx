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

function Location({ changeButton }) {
  const [showHideSearchBar, setShowHideSearchBar] = useState(false);
  const [HideSearchBar, setHideSearchBar] = useState(true);

  // Venue Button Hide and -_`
  const [showVenue, setshowVenue] = useState(true);
  function handleShowVenue(event) {
    setshowVenue(true);
    setshowOnlineEvent(false);
    if (HideSearchBar) {
      setShowHideSearchBar(false);
    }
    changeButton(true);
    const child = event.target.parentNode.childNodes[1];
    event.target.classList.remove(styles.OnlineEventButton);
    event.target.classList.add(styles.VenueButton);
    child.classList.remove(styles.VenueButton);
    child.classList.add(styles.OnlineEventButton);
  }
  // Online Event Button Hide and Show
  const [showOnlineEvent, setshowOnlineEvent] = useState(false);
  function handleShowOnlineEvent(event) {
    setshowVenue(false);
    setshowOnlineEvent(true);
    setShowHideSearchBar(true);
    changeButton(true);
    const child = event.target.parentNode.childNodes[0];
    event.target.classList.remove(styles.OnlineEventButton);
    event.target.classList.add(styles.VenueButton);
    child.classList.remove(styles.VenueButton);
    child.classList.add(styles.OnlineEventButton);
  }
  // Online Event Button Hide and Show
  const [showToBeAnnounced, setshowToBeAnnounced] = useState(false);
  function handleShowToBeAnnounced(event) {
    setshowVenue(false);
    setshowOnlineEvent(false);
    setShowHideSearchBar(true);
    changeButton(true);
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
                  // inputProps={{ 'aria-label': 'search google maps' }}
                />
              </Paper>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
Location.propTypes = {
  changeButton: PropTypes.func,
};

export default Location;
