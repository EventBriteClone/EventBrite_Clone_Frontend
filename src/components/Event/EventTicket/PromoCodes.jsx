import React, { useEffect, useState, useContext } from "react";
import styles from "./PromoCodes.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PromoCodes({ showPromoCodeDrawer, showUploadCSVDrawer }) {
  // const [showCreatePromoCode, setshowCreatePromoCode] = useState(false);
  return (
    <>
      <div className={styles["promo-codes-bigger-container"]}>
        <div className={styles["div-image-inputs"]}>
          <div className={styles["spans-container"]}>
            <span className={styles["banner-icon-circle-yellow-container"]}>
              <i
                className={styles["promos-small-icon-vector"]}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg
                  id="ticket-multi_svg__eds-icon--ticket-multi_svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#231f20"
                    d="M20 3v19h-4v1h5V3h-1zM9.1 22a4.14 4.14 0 012.3-2.7 2.18 2.18 0 01.9.7 3.21 3.21 0 00-2.3 3H5v-1zM6 10.5h2v1H6zM10 10.5h2v1h-2zM14 10.5h2v1h-2z"
                  ></path>
                  <path
                    d="M14 1s0 3.5-3 3.5S8 1 8 1H3v20h5a2.94 2.94 0 012.88-3H11a2.94 2.94 0 013 2.88V21h5V1zm4 19h-3a3.72 3.72 0 00-4-3 3.72 3.72 0 00-4 3H4V2h3c.4 1.7 1.5 3.5 4 3.5s3.6-1.8 4-3.5h3z"
                    fill="#231f20"
                  ></path>
                </svg>
              </i>
            </span>
            <span className={styles["promo-codes-span"]}>
              To create promo codes that apply across multiple events, visit
              <a className={styles["marketing-link"]} href="">
                Marketing
              </a>
            </span>
            <div className={styles["promo-codes-article"]}>
              <h2 className={styles["promo-codes-h2"]}>
                Attract more attendees with promo codes
              </h2>
              <p className={styles["promo-codes-text1"]}>
                With promo codes, you can offer reduced prices with discount
                codes or reveal hidden tickets to attendees with access codes.
              </p>
              <p className={styles["promo-codes-text2"]}>
                You can create codes or upload a CSV to import ones you’ve
                already made.
              </p>
              <div className={styles["buttons-contariner"]}>
                <button
                  className={styles["create-promo-code-button"]}
                  onClick={() => showPromoCodeDrawer(true)}
                >
                  Create promo code
                </button>
                <button
                  className={styles["upload-csv-button"]}
                  onClick={() => showUploadCSVDrawer(true)}
                >
                  Upload CSV
                </button>
              </div>
            </div>
          </div>
          <img
            src="https://cdn.evbstatic.com/s3-build/fe/build/images/379badca6639dc1c5a14473fe52ab756-PromotionsCallToActionIllustrationSvg.svg"
            className={styles["promo-codes-empty-state-illustration"]}
          ></img>
        </div>
      </div>
    </>
  );
}
PromoCodes.propTypes = {
  showPromoCodeDrawer: PropTypes.func,
  showUploadCSVDrawer: PropTypes.func,
};
export default PromoCodes;
{
  /* {showCreatePromoCode && <CreatePromoCodeDrawer />} */
}
