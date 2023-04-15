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
import PropTypes, { func } from "prop-types";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { element } from "prop-types";

function DateTime({ changeButton }) {
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
  const [isSingleEventOpen, setIsSingleEventOpen] = useState(true);
  function handleShowSingleEvent(event) {
    if (isSingleEventOpen === true && isRecurringEventOpen === false) {
      setshowSingleEvent(true);
      changeButton(true);
      setshowRecurringEvent(false);
    } else {
      setshowSingleEvent(true);
      changeButton(true);
      setshowRecurringEvent(false);
      const child = event.target.parentNode.childNodes[1];
      event.target.classList.remove(styles.RecurringEventButton);
      event.target.classList.add(styles.SingleEventButton);
      child.classList.remove(styles.SingleEventButton);
      child.classList.add(styles.RecurringEventButton);
      setIsSingleEventOpen(true);
      setRecurringEventOpen(false);
    }
  }

  // Recurring Event Button Hide and Show
  const [isRecurringEventOpen, setRecurringEventOpen] = useState(false);
  const [showRecurringEvent, setshowRecurringEvent] = useState(false);
  function handleShowRecurringEvent(event) {
    if (isRecurringEventOpen === true && isSingleEventOpen === false) {
      setshowRecurringEvent(true);
      setshowSingleEvent(false);
      changeButton(true);
    } else {
      setshowRecurringEvent(true);
      setshowSingleEvent(false);
      changeButton(true);
      const child = event.target.parentNode.childNodes[0];
      event.target.classList.remove(styles.RecurringEventButton);
      event.target.classList.add(styles.SingleEventButton);
      child.classList.remove(styles.SingleEventButton);
      child.classList.add(styles.RecurringEventButton);
      setIsSingleEventOpen(false);
      setRecurringEventOpen(true);
    }
  }
  const [checkedOne, setCheckedOne] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(true);
  function handleChangeOne(event) {
    setCheckedOne(event.target.checked);
    changeButton(true);
    if (checkedOne === false) {
      changeButton(false);
    } else {
      changeButton(true);
    }
  }

  function handleChangeTwo(event) {
    setCheckedTwo(event.target.checked);
    changeButton(true);
    if (checkedTwo === false) {
      changeButton(false);
    } else {
      changeButton(true);
    }
  }

  const [showStartEventNav, setshowStartEventav] = useState(false);
  function startEventChange(event) {
    setshowStartEventav(true);
    changeButton(true);
  }
  const [showEndEventNav, setshowEndEventav] = useState(false);
  function endEventChange(event) {
    setshowEndEventav(true);
    changeButton(true);
  }
  const [timeStart, setTimeStart] = useState(false);
  function timeStartChange(event) {
    setTimeStart(true);
    changeButton(true);
  }
  const [timeEnd, setTimeEnd] = useState(false);
  function timeEndChange(event) {
    setTimeEnd(true);
    changeButton(true);
  }
  const [showLanguage, setShowLanguage] = useState(false);
  function languageChange(event) {
    setShowLanguage(true);
    changeButton(true);
  }
  const [timeZone, setTimeZone] = useState(false);
  function timeZoneChange(event) {
    setTimeZone(true);
    changeButton(true);
  }
  // function startEventChange(event) {}
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
            >
              Single Event
            </button>
            <button
              type="button"
              onClick={handleShowRecurringEvent}
              className={styles.RecurringEventButton}
              aria-label="RecurringEventButton"
            >
              Recurring Event
            </button>
          </div>
          {showRecurringEvent && (
            <p className={styles.textDateTime2}>
              You will be able to set a schedule for your recurring event in the
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
                      onChange={startEventChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              )}
              {showSingleEvent && (
                <Autocomplete
                  id="disabled-options-demo"
                  options={timeSlots}
                  defaultValue="7:00 PM"
                  onChange={timeStartChange}
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
                      onChange={endEventChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              )}
              {showSingleEvent && (
                <Autocomplete
                  id="disabled-options-demo"
                  options={timeSlots}
                  defaultValue="10:00 PM"
                  onChange={timeEndChange}
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
                <Checkbox
                  checked={checkedOne}
                  onChange={handleChangeOne}
                  inputProps={{ "aria-label": "timeStart" }}
                  className={styles.Checkbox}
                ></Checkbox>
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
              <Checkbox
                // defaultChecked
                checked={checkedTwo}
                onChange={handleChangeTwo}
                inputProps={{ "aria-label": "timeEnd" }}
                // aria-label="timeEnd"
                className={styles.Checkbox}
              ></Checkbox>
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
                onChange={timeZoneChange}
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
                onChange={languageChange}
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
  changeButton: PropTypes.func,
};

export default DateTime;
