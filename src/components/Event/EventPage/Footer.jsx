import styles from "./Footer.module.css";
import styled from "styled-components";

export default function Footer() {
  const Ul = styled.ul`
    list-style: none;
    padding: 0 20px;
    text-align: center;
    margin-bottom: 20px;

    li {
      display: inline-block;
      margin: 0 10px;
      position: relative;
    }
    li:before {
      content: "";
      position: absolute;
      top: 50%;
      left: -10px;
      transform: translateY(-50%);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: #ccc;
    }
    li a {
      color: #fff;
    }
    li a:hover {
      color: #3659e3 !important;
      text-decoration: underline;
    }
  `;

  const Select = styled.div`
    select {
      background-color: transparent !important;
      color: #fff;
      border: 0;
      outline: none;
    }
    select option {
      color: #000;
    }
  `;

  return (
    <div className={styles["footer"]}>
      <div className={styles["sb__footer section__padding"]}>
        <div className={styles["sb__footer-links"]}>
          <div className={styles["sb__footer-links_div"]}>
            <h4>Use Eventus</h4>
            <a href="#">
              <p>Create Events</p>
            </a>
            <a href="#">
              <p>Pricing</p>
            </a>
            <a href="#">
              <p>Eventus Boost</p>
            </a>
            <a href="#">
              <p>Eventus Mobile Ticket App</p>
            </a>
            <a href="#">
              <p>Eventus Check-In App</p>
            </a>
            <a href="#">
              <p>Eventus App Marketplace</p>
            </a>
            <a href="#">
              <p>Event Registration Software</p>
            </a>
            <a href="#">
              <p>Content Standards</p>
            </a>
            <a href="#">
              <p>FAQs</p>
            </a>
            <a href="#">
              <p>Sitemap</p>
            </a>
          </div>
          <div className={styles["sb__footer-links_div"]}>
            <h4>Plan Events</h4>
            <a href="#">
              <p>Sell Tickets Online</p>
            </a>
            <a href="#">
              <p>Event Planning</p>
            </a>
            <a href="#">
              <p>Sell Concert Ticekts Online</p>
            </a>
            <a href="#">
              <p>Event Payment System</p>
            </a>
            <a href="#">
              <p>Solutions for professional services</p>
            </a>
            <a href="#">
              <p>event managment software</p>
            </a>
            <a href="#">
              <p>community engagement</p>
            </a>
            <a href="#">
              <p>virtual events platform</p>
            </a>
            <a href="#">
              <p>QR codes for event check-in</p>
            </a>
            <a href="#">
              <p>post your event online</p>
            </a>
          </div>

          <div className={styles["sb__footer-links_div"]}>
            <h4>Find Events</h4>
            <a href="#">
              <p>New Orleans Food & Drink Events</p>
            </a>
            <a href="#">
              <p>San Francisco Holiday Events</p>
            </a>
            <a href="#">
              <p>Tulum Music Events</p>
            </a>
            <a href="#">
              <p>Denver Hobby Events</p>
            </a>
            <a href="#">
              <p>Atlanta Pop Music Events</p>
            </a>
            <a href="#">
              <p>New York Events</p>
            </a>
            <a href="#">
              <p>Chicago Events</p>
            </a>
            <a href="#">
              <p>Events in Dallas Today</p>
            </a>
            <a href="#">
              <p>Los Angeles Events</p>
            </a>
            <a href="#">
              <p>Washington Events</p>
            </a>
          </div>
        </div>

        {/* <div className={styles["sb__footer-below-links"]}>
          <Ul className={styles["sb__footer-below-links-ul"]}>
            <li>
              <a href="/terms">
                <p>About</p>
              </a>
            </li>
            <li>
              <a href="/terms">
                <p>Blog</p>
              </a>
            </li>
            <li>
              <a href="/terms">
                <p>Help</p>
              </a>
            </li>
            <li>
              <a href="/terms">
                <p>Careers</p>
              </a>
            </li>
            <li>
              <a href="/terms">
                <p>Press</p>
              </a>
            </li>

            <li>
              <a href="/terms">
                <p>Investors</p>
              </a>
            </li>

            <li>
              <a href="/terms">
                <p>Security</p>
              </a>
            </li>

            <li>
              <a href="/terms">
                <p>Developers</p>
              </a>
            </li>

            <li>
              <a href="/terms">
                <p>PrivacyCA Privacy Notice</p>
              </a>
            </li>

            <li>
              <a href="/terms">
                <p>Accessibility</p>
              </a>
            </li>

            <li>
              <a href="/terms">
                <p>Cookies</p>
              </a>
            </li>
          </Ul>
        </div> */}

        <div className={styles["sb__footer-below"]}>
          <div className={styles["sb__footer-copyright"]}>
            <p>@{new Date().getFullYear()} Eventus</p>
          </div>

          <Select>
            <select name="country" id="country">
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="mx">Mexico</option>
              <option value="gb">United Kingdom</option>
              <option value="au">Australia</option>
              <option value="nz">New Zealand</option>
              <option value="ie">Ireland</option>
              <option value="za">South Africa</option>
            </select>
          </Select>
        </div>
      </div>
    </div>
  );
}
