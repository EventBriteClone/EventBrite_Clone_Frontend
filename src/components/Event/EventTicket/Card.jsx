import React, { useState } from "react";
import styles from "./Card.module.css";
import PropTypes from "prop-types";
function MyCard({
  ticketList,
  setTicketList,
  setTicketNameTitle,
  showDrawerButton,
}) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const options = ["Edit", "Delete"];
  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, number) => {
    setOpen(false);
    setAnchorEl(null);
    // console.log(number);
    if (event.target.id === "Edit") {
      showDrawerButton(true);
      setTicketNameTitle(number.name);
      // console.log(number.name);
    } else if (event.target.id === "Delete") {
      let copy = [...ticketList];
      copy = copy.filter((item) => number.name != item.name);

      setTicketList(copy);
      // console.log(copy);
    }
  };
  return (
    <div>
      {ticketList.map((val, key, index) => {
        return (
          <tr key={key}>
            <td className={styles["table"]}>
              <div className={styles["card-container"]}>
                <div className={styles["cont"]}>
                  <div className={styles["list-card-div"]}>
                    <span className={styles["list"]}>
                      <i
                        class="eds-vector-image eds-icon--small eds-vector-image--grey-300"
                        data-spec="icon"
                        data-testid="icon"
                        aria-hidden="true"
                      >
                        <svg
                          id="drag-chunky_svg__eds-icon--drag-chunky_svg"
                          x="0"
                          y="0"
                          viewBox="0 0 24 24"
                          xmlSpace="preserve"
                        >
                          <path
                            fill="#45494E"
                            d="M6 10V8h12v2H6zm0 6v-2h12v2H6z"
                          ></path>
                        </svg>
                      </i>
                    </span>
                  </div>
                  <h1 className={styles["ticket-name"]}> {val.name}</h1>
                  <div>
                    <p className={styles["text-card"]}>
                      On Sale
                      <span className={styles["day-time-text"]}>
                        <i
                          className={styles["small-icon-circle"]}
                          data-spec="icon"
                          data-testid="icon"
                          aria-hidden="true"
                        >
                          <svg
                            id="status-dot-chunky_svg__eds-icon--alert-chunky_svg"
                            x="0"
                            y="0"
                            viewBox="0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </i>
                        Ends Jun 12, 2023 at 7:00 PM
                      </span>
                      <p className={styles["capacity-text"]}>
                        0/{val.quantity}
                      </p>
                      <p className={styles["price-text"]}>${val.price}</p>
                      <div className={styles["menu-container"]}>
                        <button
                          className={styles["more-button"]}
                          onClick={handleClick}
                        >
                          <span className={styles["more-icon"]}>&#8942;</span>
                        </button>
                        {open && (
                          <div className={styles["menu"]}>
                            {options.map((option) => (
                              <tr>
                                <td>
                                  <button
                                    key={option}
                                    id={option}
                                    className={styles["menu-item"]}
                                    onClick={(event) => {
                                      handleClose(event, val);
                                    }}
                                  >
                                    {option}
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </div>
                        )}
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </div>
  );
}

MyCard.propTypes = {
  ticketList: PropTypes.array,
  setTicketList: PropTypes.func,
  setTicketNameTitle: PropTypes.func,
  showDrawerButton: PropTypes.func,
};

export default MyCard;
