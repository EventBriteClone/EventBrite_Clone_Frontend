import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="eds-global-footer__base eds-g-grid eds-l-pad-hor-6"></div>
      <div className="eds-global-footer__copyright eds-g-cell eds-g-cell-12-12 eds-g-cell-mn-2-12 eds-l-pad-vert-4">
        &copy;2023 Eventbrite
      </div>
      <div
        className="eds-global-footer__general-links eds-g-cell eds-g-cell-12-12 eds-g-cell-mn-8-12 eds-text--center"
        data-spec="global-footer-general-links"
      >
        <ul className="eds-l-mar-all-0 eds-l-pad-hor-0">
          <li
            className="eds-global-footer__link-bullet eds-global-footer__horizontal-link-item eds-hide-md eds-hide-mw eds-hide-ln eds-hide-lg eds-hide-lw"
            data-spec="global-footer-link-item"
          ></li>
        </ul>
      </div>
    </div>
  );
}
