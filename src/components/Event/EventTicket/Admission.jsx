import React, { useEffect, useState, useContext } from "react";
import styles from "./Admission.module.css";
import PropTypes from "prop-types";
import MyCard from "./Card";
import { Link } from "react-router-dom";

function Admission({
  showDrawerButton,
  ticketList,
  setTicketList,
  setTicketNameTitle,
}) {
  function admissionAddButton(event) {
    showDrawerButton(true);
  }
  const [rows, setRows] = useState(ticketList);
  return (
    <>
      <div className={styles.ticketContainer}>
        <button
          className={styles["add-tickets-button"]}
          onClick={admissionAddButton}
        >
          Add tickets
        </button>
      </div>
      <MyCard
        ticketList={ticketList}
        setTicketList={setTicketList}
        setTicketNameTitle={setTicketNameTitle}
        showDrawerButton={showDrawerButton}
      />
    </>
  );
}
Admission.propTypes = {
  showDrawerButton: PropTypes.func,
  ticketList: PropTypes.array,
  showAddTicketDrawer: PropTypes.func,
  setTicketList: PropTypes.func,
  setTicketNameTitle: PropTypes.func,
};

export default Admission;
