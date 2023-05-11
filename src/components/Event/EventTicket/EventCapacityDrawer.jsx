import React, { useEffect, useState, useContext } from "react";
import styles from "./EventCapacityDrawer.module.css";
import PropTypes, { object } from "prop-types";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Input from "../../UI/Input";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import config from "../../../utils/config";
import { fetchDataFromAPI } from "../../../utils";

const drawerWidth = 290;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  height: "500",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));
function EventCapacityDrawer() {
  const [isCapacityRequired, setIsCapacityRequired] = useState(false);
  const [capacityValue, setCapacityValue] = useState("");

  function capacityValueChange(event) {
    setCapacityValue(event.target.value);
    if (event.target.value.length === 0) {
      setIsCapacityRequired(false);
    } else {
      setIsCapacityRequired(true);
    }
  }
  return (
    <>
      <Box className={styles["box-container"]}>
        <DrawerHeader>
          <div className={styles["event-capacity-container"]}>
            <h3 className={styles["event-capacity-h3"]}>Event capacity</h3>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          <div className={styles["event-inputs "]}>
            <p className={styles["event-capacity-paragraph"]}>
              Event capacity is the total number of tickets available for sale
              at your event. When you set an event capacity, your event will
              sell out as soon as you sell that number of total tickets. You can
              adjust your event capacity to prevent overselling.
            </p>
            <form className={styles["input-event-capacity"]}>
              <Input
                label="Capacity *"
                type="input"
                value={capacityValue}
                defaultValue="9"
                onChange={capacityValueChange}
                // style={{ color }}
                input={{
                  type: "number",
                  required: true,
                  id: "input event capacity",
                }}
              />
            </form>
            <div className={styles["aside-capacity-required"]}>
              {isCapacityRequired && (
                <p className={styles.capacityRequired}>Capacity is required.</p>
              )}
            </div>
          </div>
        </List>
        <Divider />
        <List>
          <div className={styles["buttons-contariner"]}>
            <button
              id="cancel-button-event-capacity"
              className={styles["cancel-button"]}
            >
              Cancel
            </button>
            <button
              // onClick={saveData}
              id="save-button-event-capacity"
              className={styles["save-button"]}
            >
              Save
            </button>
          </div>
        </List>
      </Box>
    </>
  );
}

export default EventCapacityDrawer;
