import React, { useEffect, useState, useContext } from "react";
import styles from "./AddOns.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AddOns({ showAddOnDrawer }) {
  return (
    <>
      <div>
        <div className={styles["add-ons-logo-container"]}>
          <span className={styles["span-add-ons"]}>
            <div className={styles["icon-add-ons-background"]}>
              <i
                className={styles["vector-image-size-add-ons"]}
                data-spec="icon"
                data-testid="icon"
                aria-hidden="true"
              >
                <svg viewBox="0 0 144 144">
                  <defs>
                    <path
                      id="diamond-graphic_svg__path-1"
                      d="M0 0h99.99v97.256H0z"
                    ></path>
                  </defs>
                  <g
                    id="diamond-graphic_svg__diamond_graphic_2"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="diamond-graphic_svg__graphic_diamond"
                      transform="translate(22 20)"
                    >
                      <path
                        id="diamond-graphic_svg__Fill-1"
                        fill="#FFF"
                        fill-rule="nonzero"
                        d="M15.345 23.325L1.172 40.721H98.81L84.637 23.325z"
                      ></path>
                      <path
                        id="diamond-graphic_svg__Fill-2"
                        fill="#DBDAE3"
                        fill-rule="nonzero"
                        d="M15.345 23.326L34.243 40.72 49.99 23.326z"
                      ></path>
                      <path
                        id="diamond-graphic_svg__Fill-3"
                        fill="#DBDAE3"
                        fill-rule="nonzero"
                        d="M49.99 23.326L65.74 40.72l18.897-17.395z"
                      ></path>
                      <path
                        id="diamond-graphic_svg__Fill-4"
                        fill="#DBDAE3"
                        fill-rule="nonzero"
                        d="M1.172 40.72l48.819 60.095L98.81 40.72z"
                      ></path>
                      <path
                        id="diamond-graphic_svg__Fill-5"
                        fill="#FFF"
                        fill-rule="nonzero"
                        d="M34.243 40.72l15.748 60.095L65.739 40.72z"
                      ></path>
                      <path
                        id="diamond-graphic_svg__Fill-6"
                        fill="#F05537"
                        fill-rule="nonzero"
                        d="M84.636 20.163L81.486 5.93l-3.149 14.233-14.173 3.163 14.173 3.162 3.15 14.233 3.15-14.233 14.173-3.162z"
                      ></path>
                      <path
                        id="diamond-graphic_svg__Fill-7"
                        fill="#FFF"
                        fill-rule="nonzero"
                        d="M68.888 7.512l-1.574-6.326-1.575 6.326-6.3 1.581 6.3 1.581L67.314 17l1.574-6.326 6.3-1.581z"
                      ></path>
                      <path
                        id="diamond-graphic_svg__Fill-8"
                        fill="#FFF"
                        fill-rule="nonzero"
                        d="M68.774 39.535h11.24l-1.9-8.595z"
                      ></path>
                      <g id="diamond-graphic_svg__Group-14">
                        <g
                          id="diamond-graphic_svg__Group-11"
                          transform="translate(0 4.744)"
                        >
                          <g id="diamond-graphic_svg__Fill-9-Clipped">
                            <mask id="diamond-graphic_svg__mask-2" fill="#fff">
                              <use xlink:href="#diamond-graphic_svg__path-1"></use>
                            </mask>
                            <path
                              d="M31.207 34.79H3.665l11.803-14.486L31.207 34.79zm2.959-.493L18.38 19.767h28.94l-13.154 14.53zm29.87-14.53l13.311 2.97.173.786-11.704 10.774-13.156-14.53h11.375zm21.591 2.97l.736-.164 9.954 12.218H82.96l2.667-12.054zm-21.42 14.426L49.99 91.409 35.774 37.163h28.433zm15.806-2.372h-11.24l9.34-8.595 1.9 8.595zM49.991 20.345L63.068 34.79H36.912l13.08-14.446zm24.932-2.95l3.671-.819c.448-.1.797-.45.896-.9l1.997-9.021 1.996 9.021c.1.45.448.8.897.9l8.986 2.005-6.095 1.36-1.292.288-1.29.29-.309.068a1.229 1.229 0 00-.297.112c-.167.09-.304.223-.412.38a1.223 1.223 0 00-.188.407l-1.996 9.022-1.364-6.162-.296-1.338-.294-1.335-.043-.187c-.099-.449-.448-.8-.896-.9l-3.67-.819-5.315-1.186 5.314-1.186zM3.66 37.163h29.673L47.462 91.08 3.66 37.163zM52.52 91.08l14.13-53.917H96.322L52.519 91.08zm47.414-55.435c-.016-.051-.025-.102-.047-.15-.005-.01-.005-.018-.01-.027-.023-.051-.06-.09-.088-.136-.024-.035-.04-.075-.065-.106L88.946 21.997l10.12-2.258c.54-.12.925-.601.925-1.158 0-.556-.384-1.037-.924-1.157l-13.44-2.999L82.64.928a1.182 1.182 0 00-2.307 0l-2.986 13.497-13.312 2.97H15.346a1.178 1.178 0 00-.555.152c-.129.07-.249.157-.346.272-.003.005-.01.006-.013.011l-.006.008-.005.005L.26 35.226c-.027.031-.043.07-.065.106-.03.045-.064.085-.09.136-.004.009-.004.017-.009.026-.022.05-.03.1-.046.15-.015.056-.037.111-.044.17-.006.049-.001.098-.003.147 0 .06-.005.12.003.182.007.047.024.093.038.139.016.06.028.122.054.179.004.008.004.015.008.023.022.046.053.081.08.12.024.042.04.086.072.122l48.82 60.093c.015.02.043.029.06.05.084.09.18.162.284.222.038.02.073.045.112.062.145.062.298.103.458.103.16 0 .314-.041.458-.103.038-.017.074-.041.11-.062.105-.06.2-.132.286-.223.015-.02.044-.028.061-.049l48.819-60.093c.03-.036.047-.08.072-.121.026-.04.059-.075.08-.12.002-.009.002-.016.007-.024.027-.057.04-.119.055-.179.013-.046.03-.092.038-.14.008-.06.003-.121.003-.181-.001-.05.003-.098-.003-.147-.008-.059-.03-.114-.044-.17z"
                              id="diamond-graphic_svg__Fill-9"
                              fill="#1E0A3C"
                              fill-rule="nonzero"
                              mask="url(#diamond-graphic_svg__mask-2)"
                            ></path>
                          </g>
                        </g>
                        <path
                          d="M66.884 7.8l.429-1.724.43 1.724c.105.425.436.757.86.861l1.714.432-1.714.43a1.182 1.182 0 00-.86.864l-.43 1.723-.429-1.723a1.182 1.182 0 00-.86-.864l-1.714-.43 1.715-.432c.423-.104.754-.436.86-.861m-7.731 2.443l5.61 1.41 1.404 5.635c.13.527.605.898 1.145.898.541 0 1.016-.371 1.146-.898l1.403-5.635 5.611-1.41a1.186 1.186 0 000-2.3l-5.61-1.41L68.458.898A1.182 1.182 0 0067.313 0c-.54 0-1.014.37-1.145.898l-1.403 5.635-5.611 1.409a1.188 1.188 0 000 2.3"
                          id="diamond-graphic_svg__Fill-12"
                          fill="#1E0A3C"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </i>
            </div>
          </span>
        </div>
        <h1 className={styles["add-ons-h1"]}>Anything else?</h1>
        <p className={styles["paragraph-add-ons"]}>
          Sell additional items for your event-like parking, merchandise, or
          campsites.
          <a className={styles["learn-more-link-add-ons"]} href="">
            Learn more
          </a>
        </p>
        <div className={styles["button-contariner"]}>
          <button
            className={styles["add-ons-button"]}
            onClick={() => showAddOnDrawer(true)}
          >
            Create Add-On
          </button>
        </div>
      </div>
    </>
  );
}
AddOns.propTypes = {
  showAddOnDrawer: PropTypes.func,
};
export default AddOns;
