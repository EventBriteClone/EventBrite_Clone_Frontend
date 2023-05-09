import React from "react";
import styles from "./PromoCodeList.module.css";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

function PromoCodeList({ promoCodeList }) {
  return (
    <div>
      {/* <div><SearchBar/></div> */}
      {promoCodeList.map((val, key) => {
        return (
          <div className={styles["promo-list-container"]}>
            <div>
              {/* <button className={styles["search-icon-button"]} type="submit">
                <FaSearch className={styles["search-icon"]} />
              </button> */}
              <div className={styles["add-code-button"]}>
                <input
                  type="search"
                  className={styles["search-input"]}
                  // value={value}
                  // onChange={onChange}
                  placeholder="Search code"
                />
                <button className={styles["add-tickets-button"]}>
                  Add a code
                </button>
              </div>
            </div>
            <table className={styles["promo-table"]}>
              <thead>
                <tr key={key} className={styles["header-tr"]}>
                  <th className={styles["name-th"]}>
                    <button className={styles["list-buttons"]}>
                      <span>Name</span>
                    </button>
                  </th>
                  <th className={styles["name-th"]}>
                    <button className={styles["list-buttons"]}>
                      <span>Code type</span>
                    </button>
                  </th>
                  <th className={styles["name-th"]}>
                    <button className={styles["list-buttons"]}>
                      <span>Discount</span>
                    </button>
                  </th>
                  <th className={styles["name-th"]}>
                    <button className={styles["list-buttons"]}>
                      <span>Uses</span>
                    </button>
                  </th>
                  <th className={styles["name-th"]}>
                    <button className={styles["list-buttons"]}>
                      <span>Status</span>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles["body-tr"]}>
                  <td className={styles["body-list-td"]}>{val.name}</td>
                  <td className={styles["body-list-td"]}>Applies discount</td>
                  <td className={styles["body-list-td"]}>${val.price}</td>
                  <td className={styles["body-list-td"]}>0/Unlimited</td>
                  <td>
                    <div>
                      <div>Active</div>
                      <div className={styles["end-text"]}>
                        Ends: When event ends
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

PromoCodeList.propTypes = {
  promoCodeList: PropTypes.array,
};

export default PromoCodeList;
