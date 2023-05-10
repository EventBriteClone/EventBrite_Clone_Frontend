import React, { useEffect, useState, useContext } from "react";
import styles from "./DrawerTicket.module.css";
import PropTypes, { object } from "prop-types";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Input from "../../UI/Input";
import Box from "@mui/material/Box";
import ErrorText from "./ErrorText";
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
function DrawerTicket({
  showDrawerButton,
  showMidTicketOnSave,
  ticketList,
  setTicketList,
  ticketNameValue,
  setTicketNameTitle,
}) {
  const [color, setColor] = useState("blue");
  // const [ticketNameValue, setTicketNameTitle] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [isQuantityRequired, setIsQuantityRequired] = useState(false);
  const [availableQuantityValue, setAvailableQuantityValue] = useState(""); //
  const [count, setCount] = useState(0);
  const [descriptionCount, setDescriptionCount] = useState(0);
  const [description, setDescriptionValue] = useState("");
  const [isPriceRequired, setIsPriceRequired] = useState(false);
  const [priceValue, setPriceValue] = useState(""); ///
  const [checkedOne, setCheckedOne] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(true);
  const [checkedThree, setCheckedThree] = useState(true);
  const [showStartDate, setshowStartDate] = useState(""); //
  const [showEndDate, setshowEndDate] = useState(""); //
  const [showTimeStart, setShowTimeStart] = useState(""); //
  const [showTimeEnd, setShowTimeEnd] = useState(""); //
  const [isPaidOpen, setIsPaidOpen] = useState(true);
  const [isFreeOpen, setIsFreeOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [showPaid, setshowPaid] = useState(true);
  const [showFree, setShowFree] = useState(false);
  const [showDonation, setShowDonation] = useState(false);
  const [isMinRequired, setIsMinRequired] = useState(false);
  const [isMaxRequired, setIsMaxRequired] = useState(false);
  const [minimumValue, setMinimumValue] = useState("");
  const [maximumValue, setMaximumValue] = useState("");
  const [hasError, setHasError] = useState(false);
  async function saveData(e) {
    e.preventDefault();
    let endpoint,
      configurationOpt = {};
    if (config.mocking === "true") {
      endpoint = "event-ticket";
    } else {
      endpoint = `events/${8}/Tickets`;
      configurationOpt = {
        method: "POST",
        body: JSON.stringify({
          NAME: ticketNameValue,
          PRICE: priceValue,
          capacity: availableQuantityValue,
          Sales_start: showStartDate,
          Sales_end: showEndDate,
          Start_time: showTimeStart,
          End_time: showTimeEnd,
        }),
      };
    }
    const response = await fetchDataFromAPI({ endpoint, configurationOpt });
  }
  function saveData(event) {
    // console.log(ticketNameValue);
    if (
      ticketNameValue === "" ||
      availableQuantityValue === "" ||
      priceValue === ""
    ) {
      setHasError(true);
    } else {
      showMidTicketOnSave(false);
      showDrawerButton(false);
      const ticket = {
        name: ticketNameValue,
        quantity: availableQuantityValue,
        price: priceValue,
      };
      setTicketList((ticketList) => ticketList.concat(ticket));
    }
  }
  useEffect(() => {
    setTicketNameTitle(ticketNameValue);
  }, [ticketNameValue]);
  function minimumChange(event) {
    setMinimumValue(event.target.value);
    if (event.target.value.length === 0) {
      setColor("red");
      setIsMinRequired(true);
    } else {
      setColor("blue");
      setIsMinRequired(false);
    }
  }
  function maximumChange(event) {
    setMaximumValue(event.target.value);
    if (event.target.value.length === 0) {
      setColor("red");
      setIsMaxRequired(true);
    } else {
      setColor("blue");
      setIsMaxRequired(false);
    }
  }
  function descriptionChange(event) {
    const length = event.target.value.length;
    setDescriptionCount(length);
    if (event.target.value.length >= 2500) return;
    setDescriptionValue(event.target.value);
  }
  function handleShowPaid(event) {
    if (
      isPaidOpen === true &&
      isFreeOpen === false &&
      isDonationOpen === false
    ) {
      setshowPaid(true);
      setShowFree(false);
    } else {
      setshowPaid(true);
      setshowPaid(false);
      const child1 = event.target.parentNode.childNodes[1];
      const child2 = event.target.parentNode.childNodes[2];
      event.target.classList.remove(styles.FreeButton);
      event.target.classList.add(styles.PaidButton);
      if (isFreeOpen === true) {
        child1.classList.remove(styles.PaidButton);
        child1.classList.add(styles.FreeButton);
      } else if (isDonationOpen === true) {
        child2.classList.remove(styles.PaidButton);
        child2.classList.add(styles.DonationButton);
      }
      setIsPaidOpen(true);
      setIsFreeOpen(false);
      setIsDonationOpen(false);
    }
  }
  function handleShowFree(event) {
    if (
      isPaidOpen === false &&
      isFreeOpen === true &&
      isDonationOpen === false
    ) {
      setshowPaid(false);
      setShowFree(true);
    } else {
      setshowPaid(false);
      setShowFree(true);
      const child1 = event.target.parentNode.childNodes[0];
      const child2 = event.target.parentNode.childNodes[2];
      event.target.classList.remove(styles.FreeButton);
      event.target.classList.add(styles.PaidButton);
      if (isPaidOpen === true) {
        child1.classList.remove(styles.PaidButton);
        child1.classList.add(styles.FreeButton);
      } else if (isDonationOpen === true) {
        child2.classList.remove(styles.PaidButton);
        child2.classList.add(styles.DonationButton);
      }
      setIsPaidOpen(false);
      setIsFreeOpen(true);
      setIsDonationOpen(false);
    }
  }
  function handleShowDonation(event) {
    if (
      isPaidOpen === false &&
      isFreeOpen === false &&
      isDonationOpen === true
    ) {
      setshowPaid(false);
      setShowFree(false);
      setShowDonation(true);
    } else {
      setshowPaid(false);
      setShowFree(false);
      setShowDonation(true);
      const child1 = event.target.parentNode.childNodes[0];
      const child2 = event.target.parentNode.childNodes[1];
      event.target.classList.remove(styles.DonationButton);
      event.target.classList.add(styles.PaidButton);
      if (isPaidOpen === true) {
        child1.classList.remove(styles.PaidButton);
        child1.classList.add(styles.FreeButton);
      } else if (isFreeOpen === true) {
        child2.classList.remove(styles.PaidButton);
        child2.classList.add(styles.FreeButton);
      }
      setIsPaidOpen(false);
      setIsFreeOpen(false);
      setIsDonationOpen(true);
    }
  }
  function startTimeChange(event) {
    setShowTimeStart(event.target.value);
  }
  function endTimeChange(event) {}
  function startDateChange(event) {
    setshowStartDate(event.target.value);
  }
  function endDateChange(event) {
    setshowEndDate(event.target.value);
  }

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
  function handleChangeThree(event) {
    setCheckedThree(event.target.checked);
    changeButton(true);
    if (checkedThree === false) {
      changeButton(false);
    } else {
      changeButton(true);
    }
  }
  function ticketNameChange(event) {
    const length = event.target.value.length;
    setCount(length);
    if (event.target.value.length >= 50) return;
    setTicketNameTitle(event.target.value);
    if (event.target.value.length === 0) {
      setColor("red");
      setIsRequired(true);
      // changeButton(false);
    } else {
      setColor("blue");
      setIsRequired(false);
      // changeButton(true);
    }
  }

  function availableQuantityValueChange(event) {
    setAvailableQuantityValue(event.target.value);
    if (event.target.value.length === 0) {
      setIsQuantityRequired(true);
    } else {
      setIsQuantityRequired(false);
    }
  }
  function priceValueChange(event) {
    setPriceValue(event.target.value);
    if (event.target.value.length === 0) {
      setIsPriceRequired(false);
    } else {
      setIsPriceRequired(true);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasError(false);
    }, 8000); // hide error message after 5 seconds

    return () => clearTimeout(timer);
  }, [hasError]);
  return (
    <>
      <Box className={styles["box-container"]}>
        {hasError && <ErrorText />}
        <DrawerHeader>
          <div className={styles["add-ticket-container"]}>
            <h3 className={styles["add-ticket-h3"]}>Add tickets</h3>
            <a className={styles["learn-more-link"]} href="">
              Learn more
            </a>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          <div className={styles.AddTicketsButtons}>
            <button className={styles.PaidButton} onClick={handleShowPaid}>
              Paid
            </button>
            <button className={styles.FreeButton} onClick={handleShowFree}>
              Free
            </button>
            <button
              className={styles.DonationButton}
              onClick={handleShowDonation}
            >
              Donation
            </button>
          </div>
          <div className={styles["ticket-inputs"]}>
            <form className={styles["input-general-admission"]}>
              <Input
                label="Name *"
                type="input"
                defaultValue="General Admission"
                value={ticketNameValue}
                onChange={ticketNameChange}
                style={{ color }}
                input={{
                  type: "input",
                  required: true,
                  id: "input general admission",
                  placeholder: "Ticket name",
                }}
              />
            </form>
            <div className={styles["aside-name-required"]}>
              {isRequired && (
                <p className={styles.nameRequired}>Name is required.</p>
              )}
              <div className={styles["letter-num-border"]}>
                <aside className={styles["letter-num"]}>{count}/50</aside>
              </div>
            </div>
            <form className={styles["input-available-quantity"]}>
              <Input
                type="input"
                label="Available quantity *"
                value={availableQuantityValue}
                onChange={availableQuantityValueChange}
                style={{ color }}
                input={{
                  type: "number",
                  required: true,
                  id: "input available quantity",
                }}
              />
            </form>
            <div className={styles["aside-name-required"]}>
              {isQuantityRequired && (
                <p className={styles.nameRequired}>Quantity is required.</p>
              )}
            </div>
            <form className={styles["input-price"]}>
              <Input
                label="Price *"
                type="input"
                placeholder="0.00"
                value={priceValue}
                onChange={priceValueChange}
                input={{
                  type: "number",
                  required: true,
                  id: "input price",
                  placeholder: "0.00",
                }}
              />
            </form>
            <div className={styles["aside-price-required"]}>
              {isPriceRequired && (
                <p className={styles.priceTextRequired}>
                  Buyer total: calculating
                </p>
              )}
              <div className={styles["how-fees-work-border"]}>
                {isPriceRequired && (
                  <Link className={styles["how-fees-work"]} href="#">
                    How fees work
                  </Link>
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
                Sales start *
              </label>
              <input
                className={styles["input-start-date"]}
                type="date"
                id="input-start-date"
                required
                onChange={startDateChange}
                value={showStartDate}
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
                value={showTimeStart}
                onChange={startTimeChange}
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
                Sales end *
              </label>
              <input
                className={styles["input-end-date"]}
                type="date"
                id="input-end-date"
                onChange={endDateChange}
                required
                // defaultValue={dayjs("08/06/2023")}
                value={showEndDate}
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
                value={showTimeEnd}
                onChange={endTimeChange}
                placeholder="Select a time"
                defaultValue={"07:00"}
              />
            </form>
          </div>
          <div className={styles["advanced-settings-container"]}>
            <button className={styles["advanced-settings-button"]}>
              <div className={styles["advanced-settings"]}>
                Advanced settings
              </div>
              <div className={styles["advanced-settings-small-icon"]}>
                <i
                  className={styles["advanced-settings-small-icon-symbol"]}
                  data-spec="icon"
                  data-testid="icon"
                  aria-hidden="true"
                >
                  <svg
                    id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_svg"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <path
                      id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
                    ></path>
                  </svg>
                </i>
              </div>
            </button>
          </div>
          <div className={styles.CheckboxBorder}>
            {/* <div className={styles["checkbox-checkmarket"]}> */}
            <label>
              <input
                type="checkbox"
                checked={checkedOne}
                onChange={handleChangeOne}
                className={styles["checkbox-checkmarket"]}
                fill="#3659e3"
              />
            </label>
            {/* </div> */}
            <label className={styles["checkout-label"]}>
              Show ticket sale end dates and sale status at checkout
            </label>
          </div>
          <div className={styles["description-container"]}>
            <form className={styles["input-description"]}>
              <Input
                label="Description"
                onChange={descriptionChange}
                value={description}
                input={{
                  type: "input",
                  required: true,
                  id: "input description",
                  placeholder: "Tell attendees more about this ticket.",
                }}
              />
            </form>
            <div className={styles["letter-num-border"]}>
              <aside className={styles["letter-num"]}>
                {descriptionCount}/2500
              </aside>
            </div>
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
          <div>
            <span className={styles["number-tickets-order"]}>
              Tickets per order
            </span>
            <div className={styles["number-tickets"]}>
              <div className={styles["minimum-border"]}>
                <form className={styles["input-minimum-quantity"]}>
                  <Input
                    label="Minimum quantity *"
                    onChange={minimumChange}
                    value={minimumValue}
                    input={{
                      type: "number",
                      required: true,
                      id: "input minimum tickets quantity",
                      defaultValue: "1",
                    }}
                  />
                </form>
                <div className={styles["aside-name-required"]}>
                  {isMinRequired && (
                    <p className={styles.nameRequired}>Min is required.</p>
                  )}
                </div>
              </div>
              <div className={styles["minimum-border"]}>
                <form className={styles["input-maximum-quantity"]}>
                  <Input
                    label="Maximum quantity"
                    onChange={maximumChange}
                    value={maximumValue}
                    input={{
                      type: "number",
                      required: true,
                      id: "input maximum tickets quantity",
                      defaultValue: "10",
                    }}
                  />
                </form>
                {isMaxRequired && (
                  <p className={styles.nameRequired}>Max is required.</p>
                )}
              </div>
            </div>
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
            {/* <div className={styles["checkbox-checkmarket"]}> */}
            <label>
              <input
                type="checkbox"
                checked={checkedTwo}
                onChange={handleChangeTwo}
                inputProps={{ "aria-labelledby": "eTicket" }}
                // id="eTicket"
                fill="#3659e3"
                className={styles["checkbox-checkmarket"]}
              />
            </label>
            {/* </div> */}
            <label className={styles["checkout-label"]}>
              <span>
                <p className={styles.LabeltextCheckout}>eTicket</p>
              </span>
            </label>
          </div>
          <div className={styles.CheckboxBorder}>
            {/* <div className={styles["checkbox-checkmarket"]}> */}
            <label>
              <input
                type="checkbox"
                id="toot"
                checked={checkedThree}
                onChange={handleChangeThree}
                fill="#3659e3"
                inputProps={{ "aria-label": "Will call" }}
                className={styles["checkbox-checkmarket"]}
              />
            </label>
            {/* </div> */}
            <label className={styles["checkout-label"]}>
              <span>
                <p className={styles.LabeltextCheckout}>Will call</p>
              </span>
            </label>
          </div>
        </List>
        <Divider />
        <List>
          <div className={styles["buttons-contariner"]}>
            <button
              onClick={() => showDrawerButton(false)}
              className={styles["cancel-button"]}
            >
              Cancel
            </button>
            <button onClick={saveData} className={styles["save-button"]}>
              Save
            </button>
          </div>
        </List>
      </Box>
    </>
  );
}
DrawerTicket.propTypes = {
  showDrawerButton: PropTypes.func,
  showMidTicketOnSave: PropTypes.func,
  ticketList: PropTypes.func,
  setTicketList: PropTypes.func,
  ticketNameValue: PropTypes.element,
  setTicketNameTitle: PropTypes.func,
};
export default DrawerTicket;
