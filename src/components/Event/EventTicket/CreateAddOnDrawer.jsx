import React, { useEffect, useState, useContext } from "react";
import styles from "./CreateAddOnDrawer.module.css";
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
function CreateAddOnDrawer({ closeAddOnDrawer }) {
  const [createAddOnNameValue, setCreateAddOnNameValue] = useState(""); // ticket name hya event name
  const [isNameRequired, setIsNameRequired] = useState(false);
  const [isTotalQuantityRequired, setIsTotalQuantityRequired] = useState(false);
  const [totalQuantityValue, setTotalQuantityValue] = useState(""); //
  const [count1, setCount1] = useState(0);
  const [isPriceRequired1, setIsPriceRequired1] = useState(false);
  const [priceValue1, setPriceValue1] = useState("");
  const [descriptionAddOn, setDescriptionAddOn] = useState("");
  const [descriptionCount1, setDescriptionCount1] = useState(0);
  const [detailsConfirmationEmail, setDetailsConfirmationEmail] = useState("");
  const [minimumValue1, setMinimumValue1] = useState("");
  const [isMinRequired1, setIsMinRequired1] = useState(false);
  const [maximumValue1, setMaximumValue1] = useState("");
  const [isMaxRequired1, setIsMaxRequired1] = useState(false);
  const [showStartDate1, setshowStartDate1] = useState(""); //
  const [showEndDate1, setshowEndDate1] = useState(""); //
  const [showTimeStart1, setShowTimeStart1] = useState(""); //
  const [showTimeEnd1, setShowTimeEnd1] = useState(""); //
  function startTime1Change(event) {
    setShowTimeStart1(event.target.value);
  }
  function endTime1Change(event) {
    setShowTimeEnd1(event.target.value);
  }
  function startDate1Change(event) {
    setshowStartDate1(event.target.value);
  }
  function endDate1Change(event) {
    setshowEndDate1(event.target.value);
  }
  function maximumValueChange(event) {
    setMaximumValue1(event.target.value);
    if (event.target.value.length === 0) {
      setIsMaxRequired1(true);
    } else {
      setIsMaxRequired1(false);
    }
  }
  function minimumValueChange(event) {
    setMinimumValue1(event.target.value);
    if (event.target.value.length === 0) {
      setIsMinRequired1(true);
    } else {
      setIsMinRequired1(false);
    }
  }
  function createAddOnNameChange(event) {
    const length = event.target.value.length;
    setCount1(length);
    if (event.target.value.length >= 50) return;
    setCreateAddOnNameValue(event.target.value);
    if (event.target.value.length === 0) {
      setIsNameRequired(true);
    } else {
      setIsNameRequired(false);
    }
  }
  function detailsConfirmationEmailChange(event) {
    setDetailsConfirmationEmail(event.target.value);
  }
  function descriptionAddOnChange(event) {
    const length = event.target.value.length;
    setDescriptionCount1(length);
    if (event.target.value.length >= 2500) return;
    setDescriptionAddOn(event.target.value);
  }

  function totalQuantityValueChange(event) {
    setTotalQuantityValue(event.target.value);
    if (event.target.value.length === 0) {
      setIsTotalQuantityRequired(true);
    } else {
      setIsTotalQuantityRequired(false);
    }
  }
  function priceValueAddOnChange(event) {
    setPriceValue1(event.target.value);
    if (event.target.value.length === 0) {
      setIsPriceRequired1(false);
    } else {
      setIsPriceRequired1(true);
    }
  }
  return (
    <>
      <Box className={styles["box-container"]}>
        <DrawerHeader>
          <div className={styles["create-add-on-container"]}>
            <h3 className={styles["create-add-on-h3"]}>Create add-on</h3>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          <div className={styles["add-on-inputs "]}>
            <div className={styles.CheckboxBorder}>
              <label>
                <input
                  type="checkbox"
                  className={styles["checkbox-checkmarket"]}
                  fill="#3659e3"
                />
              </label>
              <label className={styles["checkout-label"]}>
                This add-on has multiple prices or varieties
              </label>
            </div>
            <form className={styles["input-general-admission"]}>
              <Input
                label="Name *"
                type="input"
                value={createAddOnNameValue}
                onChange={createAddOnNameChange}
                input={{
                  type: "input",
                  required: true,
                  id: "input name create add-on",
                  placeholder: "Name",
                }}
              />
            </form>
            <div className={styles["aside-name-required"]}>
              {isNameRequired && (
                <p className={styles.nameRequired}>Name is required.</p>
              )}
              <div className={styles["letter-num-border"]}>
                <aside className={styles["letter-num"]}>{count1}/50</aside>
              </div>
            </div>
            <form className={styles["input-available-quantity"]}>
              <Input
                type="input"
                label="Total quantity *"
                value={totalQuantityValue}
                onChange={totalQuantityValueChange}
                // style={{ color }}
                input={{
                  type: "number",
                  required: true,
                  id: "input total quantity",
                  placeholder: "Total Quantity",
                }}
              />
            </form>
            <div className={styles["aside-name-required"]}>
              {isTotalQuantityRequired && (
                <p className={styles.nameRequired}>Quantity is required.</p>
              )}
            </div>
            <form className={styles["input-price"]}>
              <Input
                label="Price *"
                type="input"
                placeholder="0.00"
                value={priceValue1}
                onChange={priceValueAddOnChange}
                input={{
                  type: "number",
                  required: true,
                  id: "input price1",
                  placeholder: "0.00",
                }}
              />
            </form>
            <div className={styles["aside-price-required"]}>
              {isPriceRequired1 && (
                <p className={styles.priceTextRequired}>
                  Buyer total: calculating
                </p>
              )}
              <div className={styles["how-fees-work-border"]}>
                {isPriceRequired1 && (
                  <Link className={styles["how-fees-work"]} href="#">
                    How fees work
                  </Link>
                )}
              </div>
            </div>
            <div className={styles["description-container"]}>
              <form className={styles["input-description"]}>
                <Input
                  label="Description"
                  onChange={descriptionAddOnChange}
                  value={descriptionAddOn}
                  input={{
                    type: "input",
                    required: true,
                    id: "input description",
                    placeholder: "Tell attendees more about this add-on.",
                  }}
                />
              </form>
              <div className={styles["letter-num-border"]}>
                <aside className={styles["letter-num"]}>
                  {descriptionCount1}/2500
                </aside>
              </div>
            </div>
            <div className={styles["description-container"]}>
              <form className={styles["input-description"]}>
                <Input
                  label="Details for confirmation email"
                  onChange={detailsConfirmationEmailChange}
                  value={detailsConfirmationEmail}
                  input={{
                    type: "input",
                    required: true,
                    id: "input details confirmation email",
                    placeholder:
                      "Instructions to redeem or other important info",
                  }}
                />
              </form>
            </div>
          </div>
          <div>
            <span className={styles["number-tickets-order"]}>
              Add-ons per Order
            </span>
            <div className={styles["number-tickets"]}>
              <div className={styles["minimum-border"]}>
                <form className={styles["input-minimum-quantity"]}>
                  <Input
                    label="Minimum quantity *"
                    onChange={minimumValueChange}
                    value={minimumValue1}
                    input={{
                      type: "number",
                      required: true,
                      id: "input minimum tickets quantity1",
                      defaultValue: "1",
                    }}
                  />
                </form>
                <div className={styles["aside-name-required"]}>
                  {isMinRequired1 && (
                    <p className={styles.nameRequired}>Min is required.</p>
                  )}
                </div>
              </div>
              <div className={styles["minimum-border"]}>
                <form className={styles["input-maximum-quantity"]}>
                  <Input
                    label="Maximum quantity"
                    onChange={maximumValueChange}
                    value={maximumValue1}
                    input={{
                      type: "number",
                      required: true,
                      id: "input maximum tickets quantity1",
                      defaultValue: "10",
                    }}
                  />
                </form>
                {isMaxRequired1 && (
                  <p className={styles.nameRequired}>Max is required.</p>
                )}
              </div>
            </div>
          </div>
          <div className={styles["start-picker-border"]}>
            <form className={styles["start-date"]}>
              <label
                className={styles["label-start-date"]}
                htmlFor="label-start-date"
              >
                Start Date *
              </label>
              <input
                className={styles["input-start-date"]}
                type="date"
                id="input-start-date"
                required
                onChange={startDate1Change}
                value={showStartDate1}
              />
            </form>
            <form className={styles["start-date"]}>
              <label
                htmlFor="input-time"
                className={styles["label-start-date"]}
              >
                Start Time *
              </label>
              <input
                type="time"
                className={styles["input-start-date"]}
                id="input-start-time"
                required
                value={showTimeStart1}
                onChange={startTime1Change}
                placeholder="Select a time"
                defaultValue={"12:00"}
              />
            </form>
          </div>
          <div className={styles["start-picker-border"]}>
            <form className={styles["start-date"]}>
              <label
                className={styles["label-end-date"]}
                htmlFor="label-end-date"
              >
                End Date *
              </label>
              <input
                className={styles["input-end-date"]}
                type="date"
                id="input-end-date"
                onChange={endDate1Change}
                required
                value={showEndDate1}
              />
            </form>
            <form className={styles["start-date"]}>
              <label htmlFor="input-time" className={styles["label-end-time"]}>
                End Time *
              </label>
              <input
                type="time"
                className={styles["input-end-time"]}
                id="input-end-time"
                required
                value={showTimeEnd1}
                onChange={endTime1Change}
                placeholder="Select a time"
                defaultValue={"07:00"}
              />
            </form>
          </div>
          <div className={styles.CheckboxBorder}>
            <label>
              <input
                type="checkbox"
                // checked={checkedOne}
                // onChange={handleChangeOne}
                className={styles["checkbox-checkmarket"]}
                fill="#3659e3"
              />
            </label>
            <label className={styles["checkout-label"]}>
              Show add-on sale end dates and sale status at checkout
            </label>
          </div>
          <div className={styles["visibility-container"]}>
            <form className={styles["visibility-form-dropdown"]}>
              <label htmlFor="visibility-label-dropdown">Visibility</label>
              <select
                className={styles["visibility-selector"]}
                id="visibility-dropdown"
                required
              >
                <option value="1">Visible</option>
                <option value="2">Hidden</option>
                <option value="3">Hidden when not on sale</option>
                <option value="4">Custom schedule</option>
              </select>
            </form>
          </div>
          <div className={styles["visibility-container"]}>
            <form className={styles["visibility-form-dropdown"]}>
              <label htmlFor="visibility-label-dropdown">Sales channel</label>
              <select
                className={styles["visibility-selector"]}
                id="sales-channel-dropdown"
                required
              >
                <option value="everywhere">Everywhere</option>
                <option value="online-only">Online only</option>
                <option value="at-the-door-only">At the door only</option>
              </select>
            </form>
          </div>
          <div className={styles.CheckboxBorder}>
            <label>
              <input
                type="checkbox"
                id="e ticket 1"
                // checked={checkedTwo}
                // onChange={handleChangeTwo}
                inputProps={{ "aria-labelledby": "eTicket" }}
                // id="eTicket"
                fill="#3659e3"
                className={styles["checkbox-checkmarket"]}
              />
            </label>
            <label className={styles["checkout-label"]}>
              <span>
                <p>eTicket</p>
              </span>
            </label>
          </div>
          <div className={styles.CheckboxBorder}>
            <label>
              <input
                type="checkbox"
                id="will call 1"
                // checked={checkedThree}
                // onChange={handleChangeThree}
                fill="#3659e3"
                inputProps={{ "aria-label": "Will call" }}
                className={styles["checkbox-checkmarket"]}
              />
            </label>
            <label className={styles["checkout-label"]}>
              <span>
                <p>Will call</p>
              </span>
            </label>
          </div>
        </List>
        <Divider />
        <List>
          <div className={styles["buttons-contariner"]}>
            <button
              onClick={() => closeAddOnDrawer(false)}
              className={styles["cancel-button"]}
            >
              Cancel
            </button>
            <button
              // onClick={saveData}
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
CreateAddOnDrawer.propTypes = {
  closeAddOnDrawer: PropTypes.func,
};
export default CreateAddOnDrawer;
