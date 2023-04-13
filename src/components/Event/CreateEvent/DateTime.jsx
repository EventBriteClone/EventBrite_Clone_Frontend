import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styles from "./DateTime.module.css";
import React, { useEffect, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { element } from "prop-types";

function DateTime({ onClick }) {
  const timezone = [
    {
      value: "Egypt",
      label: "(GMT+0200) Egypt Time",
    },
    {
      value: "Poland",
      label: "(GMT+0100) Poland Time",
    },
    {
      value: "France",
      label: "(GMT+0100) France Time",
    },
    {
      value: "Germany",
      label: "(GMT+0100) Germany (Berlin) Time",
    },
    {
      value: "Canada",
      label: "(GMT+0300) Canada (Glace Bay) Time",
    },
  ];
  const language = [
    {
      value: "USA",
      label: "English(US)",
    },
    {
      value: "Poland",
      label: "Swedish",
    },
    {
      value: "Spain",
      label: "Spanish(Spain)",
    },
    {
      value: "France",
      label: "French(France)",
    },
    {
      value: "Brazil",
      label: "Portuguese(Brazil)",
    },
  ];
  const timeSlots = [
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "2:00 AM",
    "2:30 AM",
    "3:00 AM",
    "3:30 AM",
    "4:00 AM",
    "4:30 AM",
    "5:00 AM",
    "5:30 AM",
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];
  // Online Event Button Hide and Show
  const [showSingleEvent, setshowSingleEvent] = useState(true);
  function handleShowSingleEvent(event) {
    const child = event.target.parentNode.childNodes[1];
    event.target.classList.remove(styles.RecurringEventButton);
    event.target.classList.add(styles.SingleEventButton);
    child.classList.remove(styles.SingleEventButton);
    child.classList.add(styles.RecurringEventButton);
    setshowSingleEvent(true);
    setshowRecurringEvent(false);
    // setShowHideSearchBar(true);
  }

  // Recurring Event Button Hide and Show
  const [showRecurringEvent, setshowRecurringEvent] = useState(false);
  function handleShowRecurringEvent(event) {
    setshowRecurringEvent(true);
    setshowSingleEvent(false);
    const child = event.target.parentNode.childNodes[0];
    event.target.classList.remove(styles.RecurringEventButton);
    event.target.classList.add(styles.SingleEventButton);
    child.classList.remove(styles.SingleEventButton);
    child.classList.add(styles.RecurringEventButton);
    // setShowHideSearchBar(true);
    // setHideSearchBar(false);
  }
  return (
    <>
      <div className={styles.containerDataTime}>
        <div className={styles.containerDateTimeCol}>
          <h1 className={styles.h1}>Date and time</h1>
          <div className={styles.pDateandTime}>
            <p className={styles.textDateTime}>
              Tell event-goers when your event starts and ends so they can make
              plans to attend.
            </p>
          </div>
          <div className={styles.DateTimeButtons}>
            <button
              onClick={handleShowSingleEvent}
              className={styles.SingleEventButton}
              // style={{ background: active ? "white" : "blue" }}
            >
              Single Event
            </button>
            <button
              type="button"
              onClick={handleShowRecurringEvent}
              className={styles.RecurringEventButton}
              // style={{ backgroundColor: active ? "black" : "white" }}
            >
              Recurring Event
            </button>
          </div>
          {showRecurringEvent && (
            <p className={styles.textDateTime2}>
              You’ll be able to set a schedule for your recurring event in the
              next step. Event details and ticket types will apply to all
              instances.
            </p>
          )}
          {showSingleEvent && (
            <p className={styles.textDateTime2}>
              Single event happens once and can last multiple days
            </p>
          )}
          <div className={styles.pickerContainer}>
            <div className={styles.StartPicker}>
              {showSingleEvent && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      label="Event Starts *"
                      defaultValue={dayjs("2023-04-30")}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              )}
              {showSingleEvent && (
                <Autocomplete
                  id="disabled-options-demo"
                  options={timeSlots}
                  defaultValue="7:00 PM"
                  sx={{
                    width: 275,
                    paddingRight: "8px",
                    height: 50,
                    verticalAlign: "top",
                    fontSize: "14px",
                    marginRight: "8px",
                    marginTop: "8px",
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Start Time" />
                  )}
                />
              )}
            </div>
            <div className={styles.EndPicker}>
              {showSingleEvent && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      label="Event Ends *"
                      defaultValue={dayjs("2023-04-30")}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              )}
              {showSingleEvent && (
                <Autocomplete
                  id="disabled-options-demo"
                  options={timeSlots}
                  defaultValue="10:00 PM"
                  sx={{
                    width: 275,
                    paddingRight: "8px",
                    height: 50,
                    verticalAlign: "top",
                    fontSize: "14px",
                    marginRight: "8px",
                    marginTop: "8px",
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="End Time" />
                  )}
                />
              )}
            </div>
          </div>
          <div className={styles.CheckboxLabel}>
            <div className={styles.CheckboxBorder}>
              {showSingleEvent && (
                <Checkbox className={styles.Checkbox}></Checkbox>
              )}
              <label className={styles.DisplayTimeLabel}>
                <span>
                  {showSingleEvent && <p>Display start time.</p>}
                  {showSingleEvent && (
                    <p className={styles.Labeltext}>
                      The start time of your event will be displayed to
                      attendees.
                    </p>
                  )}
                </span>
              </label>
            </div>
            <div className={styles.CheckboxBorder}>
              <Checkbox className={styles.Checkbox}></Checkbox>
              <label className={styles.DisplayTimeLabel}>
                <span>
                  <p>Display end time.</p>
                  <p className={styles.Labeltext}>
                    The end time of your event will be displayed to attendees.
                  </p>
                </span>
              </label>
            </div>
          </div>
          <div>
            <div className={styles.TimeZone}>
              <TextField
                id="standard-select-timezone"
                select
                label="Time Zone"
                defaultValue="Egypt"
                variant="standard"
              >
                {timezone.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={styles.Language}>
              <TextField
                id="standard-select-language"
                select
                label="Event Page Language"
                defaultValue="USA"
                variant="standard"
              >
                {language.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
DateTime.propTypes = {
  onClick: PropTypes.func,
};

export default DateTime;
