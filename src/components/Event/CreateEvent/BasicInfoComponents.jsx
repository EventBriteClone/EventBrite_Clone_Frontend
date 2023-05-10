import styles from "./BasicInfoComponents.module.css";
import React, { useEffect, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import PropTypes from "prop-types";
// import { Chip } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import { grey } from "@mui/material/colors";
import { CreateEventContext } from "../../../context/CreateEventContext";
import ImageGallery from "./ImageGallery";
function BasicInfoComponents({
  changeButton,
  saveButton,
  isRequired,
  setIsRequired,
}) {
  const ctx = useContext(CreateEventContext);
  const { createEvent, setCreateEvent } = ctx;
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
  const [eventTitleValue, setEventTitle] = useState("");
  const [organizerValue, setOrganizer] = useState("");

  // const [organizerNameValue, setOrganizer] = useState("");
  // const [isRequired, setIsRequired] = useState(false);
  const [count, setCount] = useState(0);
  function eventTitleChange(event) {
    const length = event.target.value.length;
    setCount(length);
    if (event.target.value.length >= 75) return;
    setCreateEvent({ type: "set", data: { eventTitle: event.target.value } });
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
    // console.log(event.target.value);
    const includesSymbols = conditions.some((word) =>
      event.target.value.includes(word)
    );
    // console.log(includesSymbols);
    if (includesSymbols) {
      setColor("red");
      setErrorText(true);
    } else {
      setColor("blue");
      setErrorText(false);
    }
  }
  function organizerValueChange(event) {
    setCreateEvent({ type: "set", data: { organizer: event.target.value } });
    if (event.target.value.length === 0) {
      changeButton(false);
    } else {
      changeButton(true);
    }
  }
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [hideSubCategory, setHideSubCategory] = useState(true);

  function handleChange(e) {
    setCreateEvent({
      type: "set",
      data: { category: e?.target.textContent.toLowerCase() },
    });
    // setOrganizer(event.target.value);
    if (hideSubCategory) {
      setShowSubCategory(false);
      setHideSubCategory(false);
    } else {
      setShowSubCategory(true);
      changeButton(true);
    }
  }
  function handleChangeSubcategory(e) {
    setCreateEvent({
      type: "set",
      data: { subcategory: e?.target.textContent.toLowerCase() },
    });
  }

  const [showTypeNav, setShowTypeNav] = useState(false);
  const [hideTypeNav, setHideTypeNav] = useState(true);
  function handleChangeType(event) {
    setCreateEvent({
      type: "set",
      data: { type: event?.target.textContent.toLowerCase() },
    });
    // setOrganizer(event.target.value);
    if (hideTypeNav) {
      setShowTypeNav(false);
      setHideTypeNav(false);
    } else {
      setShowTypeNav(true);
      changeButton(true);
    }
  }

  function handleImageChange(e) {
    if (createEvent.images.length === 4) return;
    const [file] = e.target.files;
    const reader = new FileReader();
    // reader.readAsDataURL(file);
    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
      const imageSrc = e.target.result;
      const fileName = file.name;
      const fileType = file.type;
      const newFile = new File([imageSrc], fileName, { type: fileType });
      const src = URL.createObjectURL(newFile);
      console.log(createEvent.images);
      setCreateEvent({
        type: "set",
        data: {
          images: [...createEvent.images, { src, file: newFile }],
        },
      });
    };
  }

  function summaryChange(e) {
    setCreateEvent({ type: "set", data: { summary: e.target.value } });
  }
  function descriptionChange(e) {
    setCreateEvent({ type: "set", data: { description: e.target.value } });
  }

  useEffect(() => {
    function globalClickHandler(event) {
      const clickedElement = event.target;
      const computedStyle = window.getComputedStyle(clickedElement, "::before");
      if (
        computedStyle
          .getPropertyValue("background")
          .includes("TrashIcon.svg") &&
        createEvent.images.length
      ) {
        const currentImg = document.querySelector(
          ".image-gallery-slide.center"
        );
        const { ariaLabel } = currentImg;
        const index = Number(ariaLabel.split(" ").at(-1)) - 1;
        const newImages = structuredClone(createEvent.images);
        newImages.splice(index, 1);
        setCreateEvent({ type: "set", data: { images: newImages } });
      }
    }
    document.addEventListener("click", globalClickHandler);
    return () => document.removeEventListener("click", globalClickHandler);
  }, [createEvent.images]);

  return (
    <>
      <h1 className={styles.h1}>Basic Info</h1>
      <div className={styles.pBasic}>
        <h2>Event Media</h2>
        <p className={styles.text}>
          Add photos to show what your event will be about. You can upload up to
          5 images.
        </p>
        <input type="file" onChange={handleImageChange} />
        <ImageGallery />
        <p>Events with a summary can attract up to 75% more customers</p>
        <TextField
          required
          id="outlined-required"
          className={styles.EventTitle}
          label="Event Summary"
          value={createEvent.summary}
          placeholder="Event summary."
          onChange={summaryChange}
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
        <p>Write a description for your event!</p>
        <TextField
          required
          id="outlined-required"
          className={styles.EventTitle}
          label="Event Description"
          value={createEvent.description}
          placeholder="Event description."
          onChange={descriptionChange}
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
      </div>
      <hr />
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
          value={createEvent.eventTitle}
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
        value={createEvent.organizer}
        placeholder="Tell attendees who is organizing this event."
        onChange={organizerValueChange}
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
          value={createEvent.type}
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
          placeholder="Category"
          onChange={handleChange}
          value={createEvent.category}
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
        {(showSubCategory || createEvent.subcategory) && (
          <Select
            defaultValue="Sub-category"
            placeholder="Sub-category"
            onChange={handleChangeSubcategory}
            value={createEvent.subcategory}
            sx={{
              ...mySelectors,
            }}
          >
            <Option value="gaming">Gaming</Option>
            <Option value="adult">Adult</Option>
            <Option value="anime/comics">Anime/Comics</Option>
            <Option value="diy">DIY</Option>
            <Option value="drawing & painting">Drawing & Painting</Option>
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
