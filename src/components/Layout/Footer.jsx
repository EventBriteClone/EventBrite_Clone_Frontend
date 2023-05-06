import "./footer.css";
import styled from "styled-components";

 function Footer() {

    const Ul= styled.ul`
    list-style: none;
    padding: 0 20px;
    text-align:center;
    margin-bottom:20px;
  
  
  
    li{
      display: inline-block;
      margin: 0 10px;
      position: relative;
      
    }
    li:before{
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
     li a{
      color: #fff;
     }
     li a:hover{
      color: #3659e3 !important;
      text-decoration: underline;
      
     }
  
    `;
  
    const Select = styled.div`
    select{
      background-color: transparent !important;
      color:#fff;
      border:0;
      outline: none;
    }
    select option{
       color:#000;
      }
    
    `



    
  return (
  
       <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Use Eventbrite</h4>
            <a href="https://www.eventbrite.com/organizer/overview/">
              <p>Create Events</p>
            </a>
            <a href="https://www.eventbrite.com/organizer/pricing/">
              <p>Pricing</p>
            </a>
            <a href="https://www.eventbrite.com/boost/">
              <p>Eventbrite Boost</p>
            </a>
            <a href="https://www.eventbrite.com/l/eventbrite-app/">
              <p>Eventbrite Mobile Ticket App</p>
            </a>
            <a href="https://www.eventbrite.com/l/organizer-check-in-app/">
              <p>Eventbrite Check-In App</p>
            </a>
            <a href="https://www.eventbrite.com/apps/">
              <p>Eventbrite App Marketplace</p>
            </a>
            <a href="https://www.eventbrite.com/l/registration-online/">
              <p>Event Registration Software</p>
            </a>
            <a href="https://www.eventbrite.com/l/contentstandards/">
              <p>Content Standards</p>
            </a>
            <a href="https://www.eventbrite.com/l/frequently-asked-questions/">
              <p>FAQs</p>
            </a>
            <a href="https://www.eventbrite.com/sitemap/">
              <p>Sitemap</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Plan Events</h4>
            <a href="https://www.eventbrite.com/l/sell-tickets/">
              <p>Sell Tickets Online</p>
            </a>
            <a href="https://www.eventbrite.com/l/planning-an-event/">
              <p>Event Planning</p>
            </a>
            <a href="https://www.eventbrite.com/l/music-venues/">
              <p>Sell Concert Ticekts Online</p>
            </a>
            <a href="https://www.eventbrite.com/l/event-payment/">
              <p>Event Payment System</p>
            </a>
            <a href="https://www.eventbrite.com/l/professional-services/">
              <p>Solutions for professional services</p>
            </a>
            <a href="https://www.eventbrite.com/l/event-management-software/">
              <p>event managment software</p>
            </a>
            <a href="https://www.eventbrite.com/l/community-engagement/">
              <p>community engagement</p>
            </a>
            <a href="https://www.eventbrite.com/l/virtual-events-platform/">
              <p>virtual events platform</p>
            </a>
            <a href="https://www.eventbrite.com/l/how-to-use-qr-codes-for-events/">
              <p>QR codes for event check-in</p>
            </a>
            <a href="https://www.eventbrite.com/l/post-events/">
              <p>post your event online</p>
            </a>
          </div>

          <div className="sb__footer-links_div">
            <h4>Find Events</h4>
            <a href="https://www.eventbrite.com/b/la--new-orleans/food-and-drink/">
              <p>New Orleans Food & Drink Events</p>
            </a>
            <a href="https://www.eventbrite.com/b/ca--san-francisco/holiday/">
              <p>San Francisco Holiday Events</p>
            </a>
            <a href="https://www.eventbrite.com/b/mexico--tulum/music/">
              <p>Tulum Music Events</p>
            </a>
            <a href="https://www.eventbrite.com/b/co--denver/hobbies/">
              <p>Denver Hobby Events</p>
            </a>
            <a href="https://www.eventbrite.com/b/co--atlanta/music/pop/">
              <p>Atlanta Pop Music Events</p>
            </a>
            <a href="https://www.eventbrite.com/d/ny--new-york/events/">
              <p>New York Events</p>
            </a>
            <a href="https://www.eventbrite.com/d/il--chicago/events/">
              <p>Chicago Events</p>
            </a>
            <a href="https://www.eventbrite.com/d/tx--dallas/events--today/">
              <p>Events in Dallas Today</p>
            </a>
            <a href="https://www.eventbrite.com/d/ca--los-angeles/events/">
              <p>Los Angeles Events</p>
            </a>
            <a href="https://www.eventbrite.com/d/dc--washington/events/">
              <p>Washington Events</p>
            </a>
          </div>

          <div className="sb__footer-links_div">
            <h4>Connect With Us</h4>
            <a href="https://www.eventbrite.com/support/contact-us">
              <p>Contact Support</p>
            </a>
            <a href="https://www.twitter.com/Eventbrite">
              <p>Twitter</p>
            </a>
            <a href="https://www.facebook.com/Eventbrite">
              <p>Facebook</p>
            </a>

            <a href="https://www.linkedin.com/company/eventbrite">
              <p>LinkedIn</p>
            </a>

            <a href="https://www.instagram.com/eventbrite/">
              <p>Instagram</p>
            </a>
          </div>
        </div>

        <div className="sb__footer-below-links">
          <Ul className="sb__footer-below-links-ul">
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
        </div>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} EventBrite</p>
          </div>

          <Select  >
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

export default Footer;
