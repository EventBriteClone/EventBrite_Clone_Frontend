import styles from "./BasicInfoComponents.module.css";
import React, { useEffect, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import PropTypes from "prop-types";
// import { Chip } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import { grey } from "@mui/material/colors";
import { BasicInfoContext } from "../../../context/CreateEventContext";
function BasicInfoComponents({
  changeButton,
  saveButton,
  isRequired,
  setIsRequired,
}) {
  const mySelectors = {
    width: 200,
    height: 50,
    fontSize: "14px",
    lineHeight: "22px",
    fontWeight: 400,
    boxSizing: "border-box",
    verticalAlign: "top",
    position: "relative",
    display: "flex",
    marginBottom: "16px",
    paddingTop: "1px",
    flexDirection: "row",
    borderRadius: "1px",
    marginRight: "8px",
  };
  const BasicInfoValues = useContext(BasicInfoContext);
  const {
    eventTitleContext,
    setEventTitleContext,
    organizerContext,
    setOrganizerContext,
  } = BasicInfoValues;

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
  const [color, setColor] = useState("red");
  const [eventTileValue, setEventTitle] = useState("");
  // const [isRequired, setIsRequired] = useState(false);
  const [count, setCount] = useState(0);
  function eventTitleChange(event) {
    const length = event.target.value.length;
    setCount(length);
    if (event.target.value.length >= 75) return;
    setEventTitle(event.target.value);
    setEventTitleContext(event.target.value);
    if (event.target.value.length === 0) {
      setColor("red");
      setIsRequired(true);
      changeButton(false);
      saveButton(false);
    } else {
      setColor("blue");
      setIsRequired(false);
      changeButton(true);
      saveButton(true);
    }
  }

  const [addButton, setAddButton] = useState(0);
  const [changeColor, setChangeColor] = useState(false);
  const [iserror, setErrorText] = useState(false);
  const [addtag, setAddTag] = useState("");
  const [tags, setTags] = useState([]);
  const [charLength, setCharLength] = useState(0);

  function handleClick(event) {
    if (addButton < 10 && iserror === false) {
      setAddButton(addButton + 1);
      setChangeColor(!changeColor);
      changeButton(true);
      setAddTag(event.target.value);
      const newTag = `Tag ${tags.length + 1}`;
      setTags([...tags, newTag]);
      setCharLength(0);
    }
  }

  const handleDeleteTag = (tagToDelete) => {
    const newTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(newTags);
    const len = addButton - 1;
    setAddButton(addButton - 1);
    if (len === 0) {
      changeButton(false);
    }
  };

  function addNumberText(event) {
    const length = event.target.value.length;
    setCharLength(length);
    if (event.target.value.length >= 25) return;
    else {
      const includesSymbols = conditions.some((word) =>
        event.target.value.includes(word)
      );
      if (includesSymbols) {
        setColor("red");
        setErrorText(true);
      } else {
        setColor("blue");
        setErrorText(false);
      }
    }
  }
  function addTagChange(event) {
    setAddTag(event.target.value);
    console.log(event.target.value);
    const includesSymbols = conditions.some((word) =>
      event.target.value.includes(word)
    );
    console.log(includesSymbols);
    if (includesSymbols) {
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
    if (event.target.value.length === 0) {
      changeButton(false);
    } else {
      changeButton(true);
    }
  }
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [hideSubCategory, setHideSubCategory] = useState(true);

  function handleChange(event) {
    // setOrganizer(event.target.value);
    if (hideSubCategory) {
      setShowSubCategory(false);
      setHideSubCategory(false);
    } else {
      setShowSubCategory(true);
      changeButton(true);
    }
  }

  const [showTypeNav, setshowTypeNav] = useState(false);
  const [hideTypeNav, setHideTypeNav] = useState(true);
  function handleChangeType(event) {
    // setOrganizer(event.target.value);
    if (hideTypeNav) {
      setshowTypeNav(false);
      setHideTypeNav(false);
    } else {
      setshowTypeNav(true);
      changeButton(true);
    }
  }
  return (
    <>
      <h1 className={styles.h1}>Basic Info</h1>
      <div className={styles.pBasic}>
        <p className={styles.text}>
          Name your event and tell event-goers why they should come. Add details
          that hightlight what makes it unique.
        </p>
      </div>
      <div className={styles.containerEventTitle}>
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
            padding: "1px",
            marginBottom: "4px",
            marginTop: "12px",
            borderRadius: "2px",
            fontWeight: 400,
            "& input": {
              fontSize: "14px",
            },
            "& label": {
              fontSize: "12px",
            },
            "& label.Mui-focused": {
              color: { color },
              fontSize: "12px",
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
            <aside className={styles.letterNumber}>{count}/75</aside>
          </div>
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
        sx={{
          marginBottom: "8px",

          fontWeight: 400,
          borderRadius: "2px",
          padding: "1px",
        }}
      />
      <p className={styles.text1}>
        This profile describes a unique organizer and shows all of the events on
        one page.
        <a href="">View Organizer Info</a>
      </p>
      <div className={styles.Selectors}>
        <Select
          defaultValue="Type"
          placeholder="Type"
          onChange={handleChangeType}
          sx={{
            ...mySelectors,
          }}
        >
          <Option value="appearance or singing">Appearance or Singing</Option>
          <Option value="attraction">Attraction</Option>
          <Option value="camp, trip, or retreat">Camp, Trip, or Retreat</Option>
          <Option value="class, training, or workshop">
            Class, Training, or Workshop
          </Option>
          <Option value="concert or performance">Concert or Performance</Option>
        </Select>
        <Select
          defaultValue="Category"
          placeholder="Category"
          // onListboxOpenChange={handleShowSubCategory}
          onChange={handleChange}
          sx={{
            ...mySelectors,
          }}
        >
          <Option value="auto, boat & air">Auto, Boat & Air</Option>
          <Option value="business & professional">
            Business & Professional
          </Option>
          <Option value="charity & causes">Charity & Causes</Option>
          <Option value="community & culture">Community & Culture</Option>
          <Option value="family & education">Family & Education</Option>
        </Select>

        {showSubCategory && (
          <Select
            defaultValue="Sub-category"
            placeholder="Sub-category"
            sx={{
              ...mySelectors,
            }}
          >
            <Option value="gaming">Gaming</Option>
            <Option value="adult">Adult</Option>
            <Option value="anime/comics">Anime/ Comics</Option>
            <Option value="DIY">DIY</Option>
            <Option value="drawing&painting">Drawing & Painting</Option>
          </Select>
        )}
      </div>
      <div className={styles.TagsBorder}>
        <div className={styles.LabelTag}>Tags</div>
        <p className={styles.textTag}>
          Improve discoverability of your event by adding tags relevant to the
          subject matter.
        </p>
        <div>
          <div className={styles.AddTagDiv}>
            <div className={styles.tagTextContainer}>
              <TextField
                required
                id="outlined-required"
                className={styles.AddTag}
                label="Press Enter to add a tag"
                defaultValue=""
                placeholder="Add search keywords to your event"
                onChange={addNumberText}
                inputProps={{ maxLength: 25 }}
                sx={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  fontWeight: 400,
                  paddingTop: "1px",
                  height: 50,
                  width: "100%",
                  paddingRight: "8px",
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
              <div className={styles.addtaglimit}>
                <aside>{addButton}/10 tags.</aside>
                <aside className={styles.letternumber1}>{charLength}/25</aside>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.AddTagButton} onClick={handleClick}>
                Add
              </button>
            </div>
            <div>
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onDelete={() => handleDeleteTag(tag)}
                  variant="outlined"
                  className={styles.chip}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
BasicInfoComponents.propTypes = {
  changeButton: PropTypes.func,
  saveButton: PropTypes.func,
  setIsRequired: PropTypes.func,
  isRequired: PropTypes.bool,
};
export default BasicInfoComponents;
