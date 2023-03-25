import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styles from "./BasicInfo.module.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
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
import FormControl from "@mui/material/FormControl";
import { red } from "@mui/material/colors";
import { KeyboardReturnSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function BasicInfo() {
  const mySelectors = {
    width: 220,
    height: 50,
    fontSize: "14rem",
    lineHeight: "22rem",
    fontWeight: 400,
    boxSizing: "border-box",
    verticalAlign: "top",
    position: "relative",
    display: "flex",
    marginBottom: "16rem",
    paddingTop: "1rem",
    flexDirection: "row",
    borderRadius: "1rem",
  };
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
  const [color, setColor] = useState("red");
  const [eventTileValue, setEventTitle] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  function eventTitleChange(event) {
    if (event.target.value.length > 25) return;
    setEventTitle(event.target.value);
    if (event.target.value.length === 0) {
      setColor("red");
      setIsRequired(true);
    } else {
      setColor("blue");
      setIsRequired(false);
    }
  }
  const [addButton, setAddButton] = useState(0);
  function addButtonClick() {
    setAddButton(addButton + 1);
  }
  const conditions = [
    ";",
    "/",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
    "=",
    "|",
    "]",
    "[",
    "}",
    "{",
    '"',
    ":",
    ";",
    "?",
    "/",
    ".",
    "<",
    ">",
    ",",
    "£",
    "¬",
  ];

  function addTagHandler(event) {
    addTagChange(event);
    addNumberText(event);
  }
  const [charLength, setCharLength] = useState(0);
  function addNumberText(event) {
    setCharLength(event.target.value.length);
  }
  const [iserror, setErrorText] = useState(false);
  const [addtag, setAddTag] = useState("");

  function addTagChange(event) {
    setAddTag(event.target.value);
    if (event.target.value.includes(conditions)) {
      setColor("red");
      setErrorText(true);
    } else {
      setColor("blue");
      setErrorText(false);
    }
  }
  const [organizervalue, setOrganizer] = useState("");
  function organizervalueChange(event) {
    setOrganizer(event.target.value);
  }
  return (
    <>
      <div className={styles.RoutingContainer}>
        <div className={styles.arrow}>
          <img src="/images/arrow.PNG"></img>
        </div>
        <Link to="/my-events" className={styles.Routing} href="">
          Events
        </Link>
      </div>
      <div className={styles.container}>
        {/* icon */}
        <div className={styles.ImageContainer}>
          <img src="/images/basicInfoIcon.PNG"></img>
          <div className={styles.mapImage}>
            <img src="/images/MapIcon.PNG"></img>
          </div>
          <div className={styles.CalenderImage}>
            <img src="/images/CalenderIcon.PNG"></img>
          </div>
        </div>
        {/* data */}
        <div className={styles.containerCol}>
          <h1 className={styles.h1}>Basic Info</h1>
          <div className={styles.pBasic}>
            <p className={styles.text}>
              Name your event and tell event-goers why they should come. Add
              details that hightlight what makes it unique.
            </p>
          </div>
          <TextField
            required
            id="outlined-required"
            className={styles.EventTitle}
            label="Event Title"
            defaultValue=""
            value={eventTileValue}
            placeholder="Be clear and descriptive."
            onChange={eventTitleChange}
            sx={{
              width: 1,
              padding: "1rem",
              marginBottom: "4rem",
              marginTop: "12rem",
              borderRadius: "2rem",
              fontWeight: 400,
              "& input": {
                fontSize: "14rem",
              },
              "& label": {
                fontSize: "12rem",
              },
              "& label.Mui-focused": {
                color: { color },
                fontSize: "12rem",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: { color },
                },
                "&.Mui-focused fieldset": {
                  borderColor: { color },
                },
              },
            }}
          />
          <div className={styles.aside}>
            {isRequired && (
              <p className={styles.letterRequired}>This is required.</p>
            )}
            <div className={styles.letterNumberBorder}>
              <aside className={styles.letterNumber}>0/75</aside>
            </div>
          </div>
          <TextField
            required
            id="outlined-required"
            className={styles.Organizer}
            label="Organizer"
            defaultValue=""
            placeholder="Tell attendees who is organizing this event."
            onChange={organizervalueChange}
            // variant="filled"
            sx={{
              width: 1,
              marginBottom: "8rem",
              fontSize: "14rem",
              lineHeight: "22rem",
              fontWeight: 400,
              borderRadius: "2rem",
              padding: "1rem",
            }}
          />
          <p className={styles.text1}>
            This profile describes a unique organizer and shows all of the
            events on one page.
            <a href="">View Organizer Info</a>
          </p>
          <div className={styles.Selectors}>
            <Select
              defaultValue="Type"
              placeholder="Type"
              // className={styles.TypeLayout}
              sx={{ ...mySelectors, marginRight: "8rem" }}
            >
              <Option value="appearance or singing">
                Appearance or Singing
              </Option>
              <Option value="attraction">Attraction</Option>
              <Option value="camp, trip, or retreat">
                Camp, Trip, or Retreat
              </Option>
              <Option value="class, training, or workshop">
                Class, Training, or Workshop
              </Option>
              <Option value="concert or performance">
                Concert or Performance
              </Option>
            </Select>

            <Select
              defaultValue="Category"
              placeholder="Category"
              sx={{ ...mySelectors, marginRight: "8rem", marginLeft: "8rem" }}
            >
              <Option value="auto, boat & air">Auto, Boat & Air</Option>
              <Option value="business & professional">
                Business & Professional
              </Option>
              <Option value="charity & causes">Charity & Causes</Option>
              <Option value="community & culture">Community & Culture</Option>
              <Option value="family & education">Family & Education</Option>
            </Select>
          </div>
          <div className={styles.TagsBorder}>
            <div className={styles.LabelTag}>Tags</div>
            <p className={styles.textTag}>
              Improve discoverability of your event by adding tags relevant to
              the subject matter.
            </p>
            <div>
              <div className={styles.AddTagDiv}>
                <TextField
                  required
                  id="outlined-required"
                  className={styles.AddTag}
                  label="Press Enter to add a tag"
                  defaultValue=""
                  placeholder="Add search keywords to your event"
                  onChange={addTagHandler}
                  // variant="filled"
                  sx={{
                    fontSize: "14rem",
                    lineHeight: "22rem",
                    fontWeight: 400,
                    paddingTop: "1rem",
                    // width: 522,
                    height: 50,
                    width: "83.3333333333%",
                    paddingRight: "8rem",
                    font: "inherit",
                    "& label.Mui-focused": {
                      color: { color },
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: { color },
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: { color },
                      },
                    },
                  }}
                />
                <button
                  className={styles.AddTagButton}
                  onClick={addButtonClick}
                >
                  Add
                </button>
                <div className={styles.addtaglimit}>
                  <aside>{addButton}/10 tags.</aside>
                  <aside className={styles.letternumber1}>
                    {charLength}/25
                  </aside>
                </div>
              </div>
            </div>
            <hr />
            <div>
              {/* <img src="/images/MapIcon.PNG"></img> */}
              <h1 className={styles.h1Location}>Location</h1>
              <p className={styles.textLocation}>
                Help people in the area discover your event and let attendees
                know where to show up.
              </p>
              <div className={styles.Buttons}>
                <button className={styles.VenueButton}>Venue</button>
                <button className={styles.OnlineEventButton}>
                  Online event
                </button>
                <button className={styles.TobeAnnounced}>
                  To be announced
                </button>
              </div>
              <div className={styles.searchVenueLocation}>
                <p className={styles.pVenue}>Venue location</p>
                <div>
                  <Paper
                    component="form"
                    sx={{
                      p: "2rem 4rem",
                      display: "flex",
                      alignItems: "center",
                      width: 564,
                      height: 50,
                      marginBottom: "20rem",
                      position: "relative",
                      fontSize: "14rem",
                      lineHeight: "22rem",
                      fontWeight: 400,
                      padding: "1rem",
                      borderRadius: "1rem",
                      border: "1rem",
                    }}
                  >
                    <IconButton
                      sx={{ p: "14rem", marginLeft: "12rem", height: "24rem" }}
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
                </div>
              </div>
            </div>
            <hr />
            <div className={styles.containerDataTime}>
              <div className={styles.containerDateTimeCol}>
                <h1 className={styles.h1}>Date and time</h1>
                <div className={styles.pDateandTime}>
                  <p className={styles.textDateTime}>
                    Tell event-goers when your event starts and ends so they can
                    make plans to attend.
                  </p>
                </div>
                <div className={styles.DateTimeButtons}>
                  <button className={styles.SingleEventButton}>
                    Single Event
                  </button>
                  <button className={styles.RecurringEventButton}>
                    Recurring Event
                  </button>
                </div>
                <p className={styles.textDateTime2}>
                  Single event happens once and can last multiple days
                </p>
                <div>
                  <div className={styles.StartPicker}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker", "DatePicker"]}>
                        <DatePicker
                          label="Event Starts *"
                          defaultValue={dayjs("2023-04-30")}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    <Autocomplete
                      id="disabled-options-demo"
                      options={timeSlots}
                      defaultValue="7:00 PM"
                      // getOptionDisabled={(option) =>
                      // option === timeSlots[0] || option === timeSlots[2]
                      // }
                      sx={{
                        width: 275,
                        paddingRight: "8rem",
                        height: 50,
                        verticalAlign: "top",
                        fontSize: "14rem",
                        marginLeft: "8rem",
                        marginTop: "8rem",
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="Start Time" />
                      )}
                    />
                  </div>
                  <div className={styles.EndPicker}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker", "DatePicker"]}>
                        <DatePicker
                          label="Event Ends *"
                          defaultValue={dayjs("2023-04-30")}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    <Autocomplete
                      id="disabled-options-demo"
                      options={timeSlots}
                      defaultValue="10:00 PM"
                      // getOptionDisabled={(option) =>
                      // option === timeSlots[0] || option === timeSlots[2]
                      // }
                      sx={{
                        width: 275,
                        paddingRight: "8rem",
                        height: 50,
                        verticalAlign: "top",
                        fontSize: "14rem",
                        marginLeft: "8rem",
                        marginTop: "8rem",
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="End Time" />
                      )}
                    />
                  </div>
                </div>
                <div className={styles.CheckboxLabel}>
                  <div className={styles.CheckboxBorder}>
                    <Checkbox className={styles.Checkbox}></Checkbox>
                    <label className={styles.DisplayTimeLabel}>
                      <span>
                        <p>Display start time.</p>
                        <p className={styles.Labeltext}>
                          The start time of your event will be displayed to
                          attendees.
                        </p>
                      </span>
                    </label>
                  </div>
                  <div className={styles.CheckboxBorder}>
                    <Checkbox className={styles.Checkbox}></Checkbox>
                    <label className={styles.DisplayTimeLabel}>
                      <span>
                        <p>Display end time.</p>
                        <p className={styles.Labeltext}>
                          The end time of your event will be displayed to
                          attendees.
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
          </div>
        </div>
      </div>
    </>
  );
}
