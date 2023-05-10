import React, { useEffect, useState, useContext } from "react";
import styles from "./TicketPage.module.css";
import AddOns from "./AddOns";
import Holds from "./Holds";
import PromoCodes from "./PromoCodes";
import PromoCodeList from "./PromoCodeList";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Settings from "./Settings";
import Admission from "./Admission";

function TicketPage({
  showDrawerButton,
  ticketList,
  showPromoCodeDrawer,
  showUploadCSVDrawer,
  showAddTicketDrawer,
  showAddOnDrawer,
  promoCodeList,
  setShowPromoCodesAvailable,
  ShowPromoCodesAvailable,
  setTicketList,
  setTicketNameTitle,
}) {
  const [showSettings, setShowSettings] = useState(false);
  const [showHolds, setShowHolds] = useState(false);
  const [showPromoCodes, setShowPromoCodes] = useState(false);
  const [showAddOns, setShowAddOns] = useState(false);
  const [showAdmission, setShowAdmission] = useState(true);
  function admissionChange(event) {
    setShowAdmission(true);
    setShowAddOns(false);
    setShowPromoCodes(false);
    setShowHolds(false);
    setShowSettings(false);
    showPromoCodeDrawer(false);
    showUploadCSVDrawer(false);
  }
  function addOnsChange(event) {
    setShowAdmission(false);
    setShowAddOns(true);
    setShowPromoCodes(false);
    setShowHolds(false);
    setShowSettings(false);
    showUploadCSVDrawer(false);
    showPromoCodeDrawer(false);
  }
  function promoCodesChange(event) {
    setShowAdmission(false);
    setShowAddOns(false);
    setShowPromoCodes(true);
    setShowHolds(false);
    setShowSettings(false);
    showUploadCSVDrawer(false);
    showPromoCodeDrawer(false);
  }
  function holdsChange(event) {
    setShowAdmission(false);
    setShowAddOns(false);
    setShowPromoCodes(false);
    setShowHolds(true);
    setShowSettings(false);
    showUploadCSVDrawer(false);
    showPromoCodeDrawer(false);
  }
  function settingChange(event) {
    setShowAdmission(false);
    setShowAddOns(false);
    setShowPromoCodes(false);
    setShowHolds(false);
    setShowSettings(true);
    showUploadCSVDrawer(false);
    showPromoCodeDrawer(false);
  }
  return (
    <>
      <div className={styles.ticketContainer}>
        <h1 className={styles["tickets-h3"]}>Tickets</h1>
        <ul
          className={styles["whole-list-item"]}
          data-spec="list-wrapper"
          role="tablist"
        >
          <li
            className={styles["admission-list-item"]}
            role="tab"
            data-spec="list-item"
            aria-selected="true"
          >
            <a
              className={styles["admission-link"]}
              data-spec="nav-item"
              data-automation="admission-tab"
              onClick={admissionChange}
              // href=""
            >
              <span>Admission</span>
            </a>
          </li>
          <li
            className={styles["admission-list-item"]}
            role="tab"
            data-spec="list-item"
          >
            <a
              data-spec="nav-item"
              data-automation="addons-tab"
              onClick={addOnsChange}
              // href=""
            >
              <span>Add-ons</span>
            </a>
          </li>
          <li
            className={styles["admission-list-item"]}
            role="tab"
            data-spec="list-item"
          >
            <a
              data-spec="nav-item"
              data-automation="promocodes-tab"
              // href=""
              onClick={promoCodesChange}
            >
              <span>Promo codes</span>
            </a>
          </li>
          <li
            className={styles["admission-list-item"]}
            role="tab"
            data-spec="list-item"
          >
            <a
              data-spec="nav-item"
              data-automation="holds-tab"
              onClick={holdsChange}
              // href=""
            >
              <span>Holds</span>
            </a>
          </li>
          <li
            className={styles["admission-list-item"]}
            role="tab"
            data-spec="list-item"
          >
            <a
              data-spec="nav-item"
              data-automation="settings-tab"
              onClick={settingChange}
              // href=""
            >
              <span>Settings</span>
            </a>
          </li>
        </ul>
        {showAdmission && (
          <Admission
            showDrawerButton={showDrawerButton}
            ticketList={ticketList}
            showAddTicketDrawer={showAddTicketDrawer}
            setTicketList={setTicketList}
            setTicketNameTitle={setTicketNameTitle}
          />
        )}

        {showPromoCodes && !ShowPromoCodesAvailable && (
          <PromoCodes
            showPromoCodeDrawer={showPromoCodeDrawer}
            showUploadCSVDrawer={showUploadCSVDrawer}
          />
        )}
        {showPromoCodes && ShowPromoCodesAvailable && (
          <PromoCodeList promoCodeList={promoCodeList} />
        )}
        {showAddOns && <AddOns showAddOnDrawer={showAddOnDrawer} />}
        {showHolds && <Holds />}
        {showSettings && <Settings />}
      </div>
    </>
  );
}
TicketPage.propTypes = {
  showPromoCodeDrawer: PropTypes.func,
  showUploadCSVDrawer: PropTypes.func,
  showDrawerButton: PropTypes.func,
  ticketList: PropTypes.array,
  showAddTicketDrawer: PropTypes.func,
  showAddOnDrawer: PropTypes.func,
  promoCodeList: PropTypes.array,
  setTicketList: PropTypes.func,
  setShowPromoCodesAvailable: PropTypes.func,
  ShowPromoCodesAvailable: PropTypes.bool,
  setTicketNameTitle: PropTypes.func,
};

export default TicketPage;
