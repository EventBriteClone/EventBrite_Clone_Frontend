import React, { useEffect, useState, useContext } from "react";
import styles from "./CreateSectionPopper.module.css";
import PropTypes, { func } from "prop-types";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Input from "../../UI/Input";

function CreateSectionPopper({ createSectionButton }) {
  const [sectionName, setSectionName] = useState("");
  const [sectionCapacity, setSectionCapacity] = useState("");
  const [isSectionNameRequired, setIsSectionNameRequired] = useState(false);
  const [isSectionCapacityRequired, setIsSectionCapacityRequired] =
    useState(false);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");
  function sectionNameChange(event) {
    const length = event.target.value.length;
    setCount(length);
    if (event.target.value.length >= 50) return;
    setSectionName(event.target.value);
    if (event.target.value.length === 0) {
      setColor("red");
      setIsSectionNameRequired(true);
    } else {
      setColor("blue");
      setIsSectionNameRequired(false);
    }
  }
  function sectionCapacityChange(event) {
    setSectionCapacity(event.target.value);
    if (event.target.value.length === 0) {
      setColor("red");
      setIsSectionCapacityRequired(true);
    } else {
      setColor("blue");
      setIsSectionCapacityRequired(false);
    }
  }
  function closePopper(event) {
    createSectionButton(false);
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 560,
    height: 340,
    bgcolor: "background.paper",
    border: "1px solid #4b4d63",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <p>aloo yomna was here :)</p> */}
          <div className={styles["create-section-container"]}>
            <div className={styles["image-create-section-border"]}>
              {/* <img src="/images/myImage.svg"></img> */}
              <svg
                className={styles["create-section-svg"]}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="300px"
                height="470px"
                viewBox="0 0 205 340"
                enable-background="new 0 0 205 340"
                xmlSpace="preserve"
              >
                {" "}
                <image
                  id="image0"
                  width="209"
                  height="348"
                  x="0"
                  y="0"
                  href="data:image/png;base64,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"
                />
              </svg>
            </div>
            <div className={styles["create-section-border"]}>
              <h3 className={styles["create-section-h3-popper"]}>
                Create section
              </h3>
              <p className={styles["create-section-text-popper"]}>
                Use a section to sell various ticket types that share the same
                section capacity
              </p>

              <form className={styles["section-name-input"]}>
                <Input
                  label="Section name"
                  value={sectionName}
                  onChange={sectionNameChange}
                  style={{ color }}
                  input={{
                    type: "input",
                    required: true,
                    id: "section name input",
                  }}
                />
              </form>
              <div className={styles["aside-name-required"]}>
                {isSectionNameRequired && (
                  <p className={styles.nameRequired}>
                    Section name is required.
                  </p>
                )}
                <div className={styles["letter-num-border"]}>
                  <aside className={styles["letter-num"]}>{count}/50</aside>
                </div>
              </div>
              <form className={styles["section-capacity-input"]}>
                <Input
                  label="Section capacity"
                  value={sectionCapacity}
                  onChange={sectionCapacityChange}
                  style={{ color }}
                  input={{
                    type: "number",
                    required: true,
                    id: "section capacity input",
                  }}
                />
              </form>
              <div className={styles["aside-name-required"]}>
                {isSectionCapacityRequired && (
                  <p className={styles.nameRequired}>
                    Section capacity is required.
                  </p>
                )}
              </div>
              <hr className={styles["create-section-line"]} />
              <div className={styles["buttons-contariner"]}>
                <button
                  className={styles["cancel-button"]}
                  onClick={closePopper}
                  id="cancel-button-create-section"
                >
                  Cancel
                </button>
                <button
                  id="create-button-create-section"
                  className={styles["create-button"]}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
CreateSectionPopper.propTypes = {
  createSectionButton: PropTypes.func,
};
export default CreateSectionPopper;
