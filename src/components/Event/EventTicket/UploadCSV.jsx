import React, { useEffect, useState, useContext } from "react";
import styles from "./UploadCSV.module.css";
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
function UploadCSV({
  // showDrawerButton,
  // showMidTicketOnSave,
  // ticketList,
  // setTicketList,
  closeUploadCSVDrawer,
}) {
  const [codeNameValue, setCodeNameValue] = useState("");
  const [isCodeNameRequired, setIsCodeName] = useState(false);
  const [availableQuantityValue, setAvailableQuantityValue] = useState(""); //
  const [count, setCount] = useState(0);
  const [priceValue, setPriceValue] = useState(""); ///
  const [checkedOne, setCheckedOne] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(true);
  const [checkedThree, setCheckedThree] = useState(true);
  const [showStart1Date, setshowStart1Date] = useState("");
  const [showExpirationDate, setShowExpirationDate] = useState(""); //
  const [showTime1Start, setShowTime1Start] = useState("");
  const [showTimeExpiration, setShowTimeExpiration] = useState(""); //
  const [isDiscountPriceTextRequired, setIsDiscountPriceTextRequired] =
    useState(false);
  const [discountPriceValue, setDiscountPriceValue] = useState("");
  const [percentageValue, setPercentageValue] = useState("");
  const [isAmountTextRequired, setIsAmountTextRequired] = useState(false);
  const [amountValue, setAmountValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("radio1");
  const [selectedValue2, setSelectedValue2] = useState("radio3");
  const [selectedValue3, setSelectedValue3] = useState("radio5");
  const [showHideItemValue, setShowHideItemValue] = useState(false);
  const [showHideStartDateTime, setShowHideStartDateTime] = useState(false);
  const [showHideEndDateTime, setShowHideEndDateTime] = useState(false);
  const [hasError, setHasError] = useState(false);
  function amountChange(event) {
    setAmountValue(event.target.value);
    if (event.target.value.length === 0) {
      setIsAmountTextRequired(true);
    } else {
      setIsAmountTextRequired(false);
    }
  }
  function saveData(event) {
    if (codeNameValue === "" || discountPriceValue === "") {
      setHasError(true);
    } else {
      closePromoCodeDrawer(false);
      setShowPromoCodesAvailable(true);
      const promoCode = {
        name: codeNameValue,
        price: discountPriceValue,
      };
      setPromoCodeList((promoCodeList) => promoCodeList.concat(promoCode));
    }
  }
  function discountPriceChange(event) {
    setDiscountPriceValue(event.target.value);
    if (event.target.value.length === 0) {
      setIsDiscountPriceTextRequired(true);
    } else {
      setIsDiscountPriceTextRequired(false);
    }
  }
  function percentageChange(event) {
    setPercentageValue(event.target.value);
  }
  function startTime1Change(event) {
    setShowTime1Start(event.target.value);
  }
  function expirationTimeChange(event) {
    setShowTimeExpiration(event.target.value);
  }
  function startDate1Change(event) {
    setshowStart1Date(event.target.value);
  }
  function expirationDateChange(event) {
    setShowExpirationDate(event.target.value);
  }
  function codeNameChange(event) {
    const length = event.target.value.length;
    setCount(length);
    if (event.target.value.length >= 50) return;
    setCodeNameValue(event.target.value);
    if (event.target.value.length === 0) {
      setColor("red");
      setIsCodeName(true);
    } else {
      setColor("blue");
      setIsCodeName(false);
    }
  }
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
    if (event.target.value === "radio2") {
      setShowHideStartDateTime(true);
    } else {
      setShowHideStartDateTime(false);
    }
  };
  const handleRadioChange2 = (event) => {
    setSelectedValue2(event.target.value);
    if (event.target.value === "radio4") {
      setShowHideEndDateTime(true);
    } else {
      setShowHideEndDateTime(false);
    }
  };
  const handleRadioChange3 = (event) => {
    setSelectedValue3(event.target.value);
  };
  function LimitedDropDownChange(event) {
    console.log(event.target.value);
    if (event.target.value === "22") {
      console.log("alo");
      setShowHideItemValue(true);
    } else {
      setShowHideItemValue(false);
    }
  }
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setHasError(false);
  //   }, 8000); // hide error message after 5 seconds

  //   return () => clearTimeout(timer);
  // }, [hasError]);
  return (
    <>
      <Box className={styles["box-container"]}>
        {/* {hasError && <ErrorText />} */}
        <DrawerHeader>
          <div className={styles["add-ticket-container"]}>
            <h3 className={styles["add-ticket-h3"]}>Upload CSV</h3>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          <div className={styles["ticket-inputs"]}>
            <p className={styles["group-texts"]}>
              Upload up to 500 codes from a .csv or .txt file.
            </p>
            <p className={styles["group-texts"]}>
              Separate codes with commas, or list them on separate lines.
            </p>
            <p className={styles["group-texts"]}>
              Spaces, apostrophes, and special characters (except: -_,@.) are
              not allowed.
            </p>
            <form className={styles["input-general-admission"]}>
              <Input
                label="Code Name *"
                type="input"
                value={codeNameValue}
                onChange={codeNameChange}
                // style={{ color }}
                input={{
                  type: "input",
                  required: true,
                  id: "input code name",
                }}
              />
            </form>
            <div className={styles["aside-name-required"]}>
              {isCodeNameRequired && (
                <p className={styles.nameRequired}>Provide a code name</p>
              )}
              <div className={styles["letter-num-border"]}>
                <aside className={styles["letter-num"]}>{count}/50</aside>
              </div>
            </div>
          </div>
          <div className={styles["visibility-container"]}>
            <div className={styles["border-dropdown-input"]}>
              <form className={styles["visibility-form-dropdown"]}>
                <label htmlFor="visibility-label-dropdown">Ticket limit</label>
                <select
                  className={styles["visibility-selector"]}
                  onChange={LimitedDropDownChange}
                  id="limited or unlimited"
                  required
                >
                  <option value="11">Unlimited</option>
                  <option value="22">Limited to</option>
                </select>
              </form>
              <div>
                {showHideItemValue && (
                  <form className={styles["input-amount"]}>
                    <Input
                      label="Amount *"
                      type="input"
                      value={amountValue}
                      onChange={amountChange}
                      // style={{ color }}
                      input={{
                        type: "number",
                        required: true,
                        id: "input amount",
                        placeholder: "tickets",
                      }}
                    />
                  </form>
                )}
                <div>
                  {isAmountTextRequired && showHideItemValue && (
                    <p className={styles.amountRequired}>
                      Ticket limit quantity required
                    </p>
                  )}
                </div>
              </div>
            </div>
            <p className={styles["total-number-text"]}>
              Total number of tickets that can be purchased with this code
            </p>
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
              Reveal hidden tickets during checkout
            </label>
          </div>
          <div>
            <span className={styles["number-tickets-order"]}>
              Discount amount
            </span>
            <div className={styles["number-tickets"]}>
              <div className={styles["minimum-border"]}>
                <form className={styles["input-minimum-quantity"]}>
                  <Input
                    label="Price *"
                    onChange={discountPriceChange}
                    value={discountPriceValue}
                    input={{
                      type: "number",
                      required: true,
                      id: "input discount price ",
                    }}
                  />
                </form>
                <div className={styles["aside-name-required"]}>
                  {isDiscountPriceTextRequired && (
                    <p className={styles.required}>
                      Discount amount or percentage required
                    </p>
                  )}
                </div>
              </div>
              <div className={styles["minimum-border"]}>
                <form className={styles["input-maximum-quantity"]}>
                  <Input
                    label="Percentage *"
                    onChange={percentageChange}
                    value={percentageValue}
                    input={{
                      type: "number",
                      required: true,
                      id: "input discount percentage",
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
          <div>
            <span className={styles["labels"]}>Promo code starts</span>
            <div className={styles["selectors"]}>
              <label className={styles["radio1-label"]}>
                <input
                  type="radio"
                  name="options1"
                  value="radio1"
                  className={styles["radio1"]}
                  checked={selectedValue === "radio1"}
                  onChange={handleRadioChange}
                />
                Now
              </label>
              <div>
                <label className={styles["radio1-label"]}>
                  <input
                    type="radio"
                    name="options2"
                    className={styles["radio1"]}
                    checked={selectedValue === "radio2"}
                    onChange={handleRadioChange}
                    value="radio2"
                  />
                  Scheduled time
                </label>
              </div>
              {showHideStartDateTime && (
                <div className={styles["start-picker-border"]}>
                  <form className={styles["start-date"]}>
                    <label
                      className={styles["label-start-date"]}
                      htmlFor="label-start-date"
                    >
                      Start date*
                    </label>
                    <input
                      className={styles["input-start-date"]}
                      type="date"
                      id="input-start-date2"
                      required
                      onChange={startDate1Change}
                      value={showStart1Date}
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
                      id="input-start-time2"
                      required
                      value={showTime1Start}
                      onChange={startTime1Change}
                    />
                  </form>
                </div>
              )}
            </div>
          </div>
          <div>
            <span className={styles["labels"]}>Promo code ends</span>
            <div className={styles["selectors"]}>
              <label className={styles["radio1-label"]}>
                <input
                  type="radio"
                  name="options3"
                  className={styles["radio1"]}
                  value="radio3"
                  checked={selectedValue2 === "radio3"}
                  onChange={handleRadioChange2}
                />
                When ticket sales end
              </label>
              <div>
                <label className={styles["radio1-label"]}>
                  <input
                    type="radio"
                    name="options4"
                    className={styles["radio1"]}
                    value="radio4"
                    checked={selectedValue2 === "radio4"}
                    onChange={handleRadioChange2}
                  />
                  Scheduled time
                </label>
              </div>
              {showHideEndDateTime && (
                <div className={styles["start-picker-border"]}>
                  <form className={styles["start-date"]}>
                    <label
                      className={styles["label-end-date"]}
                      htmlFor="label-end-date"
                    >
                      Expiration date *
                    </label>
                    <input
                      className={styles["input-end-date"]}
                      type="date"
                      id="input-expiration-date"
                      onChange={expirationDateChange}
                      required
                      value={showExpirationDate}
                    />
                  </form>
                  <form className={styles["start-date"]}>
                    <label
                      htmlFor="input-time"
                      className={styles["label-end-time"]}
                    >
                      Expiration Time *
                    </label>
                    <input
                      type="time"
                      className={styles["input-end-time"]}
                      id="input-expiration-time"
                      required
                      value={showTimeExpiration}
                      onChange={expirationTimeChange}
                    />
                  </form>
                </div>
              )}
            </div>
          </div>
          <div>
            <span className={styles["labels"]}>Apply code to:</span>
            <div className={styles["selectors"]}>
              <label className={styles["radio1-label"]}>
                <input
                  type="radio"
                  name="options5"
                  className={styles["radio1"]}
                  value="radio5"
                  checked={selectedValue3 === "radio5"}
                  onChange={handleRadioChange3}
                />
                All visible tickets
              </label>
              <div>
                <label className={styles["radio1-label"]}>
                  <input
                    type="radio"
                    name="options6"
                    className={styles["radio1"]}
                    value="radio6"
                    checked={selectedValue3 === "radio6"}
                    onChange={handleRadioChange3}
                  />
                  Only certain visible tickets
                </label>
              </div>
            </div>
          </div>
        </List>
        <Divider />
        <List>
          <div className={styles["buttons-contariner"]}>
            <button
              onClick={() => closeUploadCSVDrawer(false)}
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
UploadCSV.propTypes = {
  closeUploadCSVDrawer: PropTypes.func,
  // showMidTicketOnSave: PropTypes.func,
  // ticketList: PropTypes.func,
  // setTicketList: PropTypes.func,
};
export default UploadCSV;
