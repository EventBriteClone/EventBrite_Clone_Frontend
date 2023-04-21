import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Use Eventbrite</h4>
                        <a href="/employer">
                            <p>Create Events</p>
                        </a>
                        <a href="/employer">
                            <p>Pricing</p>
                        </a>
                        <a href="/employer">
                            <p>Eventbrite Boost</p>
                        </a>
                        <a href="/employer">
                            <p>Eventbrite Mobile Ticket App</p>
                        </a>
                        <a href="/employer">
                            <p>Eventbrite Check-In App</p>
                        </a>
                        <a href="/employer">
                            <p>Eventbrite App Marketplace</p>
                        </a>
                        <a href="/employer">
                            <p>Event Registration Software</p>
                        </a>
                        <a href="/employer">
                            <p>Content Standards</p>
                        </a>
                        <a href="/employer">
                            <p>FAQs</p>
                        </a>
                        <a href="/employer">
                            <p>Sitemap</p>
                        </a>


                    </div>
                    <div className="sb__footer-links_div">
                    <h4>Plan Events</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                    <h4>Find Events</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>

                    <div className="sb__footer-links_div">
                    <h4>Connect With Us</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>

                    <div className="sb__footer-links_div">
                    <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>

                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} EventBrite
                        </p>

                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms and Conditions</p></div></a>
                        <a href="/terms"><div><p>Terms and Conditions</p></div></a>
                        <a href="/terms"><div><p>Terms and Conditions</p></div></a>
                        <a href="/terms"><div><p>Terms and Conditions</p></div></a>
                        <a href="/terms"><div><p>Terms and Conditions</p></div></a>

                    </div>

                </div>
            </div>
    </div>
  );
}
