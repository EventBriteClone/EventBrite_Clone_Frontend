import styles from "./Publish.module.css";
import EventPreview from "./EventPreview";
import Footer from "../../EventPage/Footer";
import SubmitCard from "./SubmitCard";
import { fetchDataFromAPI } from "../../../../utils";
import config from "../../../../utils/config";
import HomeNavConatiner from "../../EventTicket/HomeNavContainer";
import StructureDrawer from "../../EventTicket/StructureDrawer";
import HeaderTicket from "../../EventTicket/HeaderTicket";
import { useContext } from "react";
import { CreateEventContext } from "../../../../context/CreateEventContext";
import { AuthContext } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Publish() {
  const navigate = useNavigate();
  const { createEvent: event, setCreateEvent } = useContext(CreateEventContext);
  const { isAuthenticated, token } = useContext(AuthContext);
  // if (!isAuthenticated) return navigate("/login");
  async function handlePublishEvent() {
    try {
      const {
        eventTitle: Title,
        organizer,
        description: Description,
        type,
        subcategory: sub_Category,
        location: venue_name,
        startDate: ST_DATE,
        endDate: END_DATE,
        startTime: ST_TIME,
        endTime: END_TIME,
        online,
        summary: Summery,
        status: STATUS,
      } = event;
      const eventBody = {
        Title,
        organizer,
        Description,
        sub_Category,
        venue_name,
        ST_DATE,
        END_DATE,
        ST_TIME,
        END_TIME,
        online,
        Summery,
        STATUS,
        image: event.images[0]?.file,
        image1: event.images[1]?.file,
        image2: event.images[2]?.file,
        image3: event.images[3]?.file,
        image4: event.images[4]?.file,
      };
      const configurationOpt = {
        method: "POST",
        body: JSON.stringify(eventBody),
        headers: {
          Authorization: `customToken ${token}`,
        },
      };
      const createEventEndpoint =
        config.mocking === "true" ? "event/" : "events/create/";
      const publicityEndpoint = "";

      const createEventRes = await fetchDataFromAPI({
        endpoint: createEventEndpoint,
        configurationOpt,
      });
      console.log(createEventRes);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <HeaderTicket></HeaderTicket>
      <div className={styles["flex"]}>
        <HomeNavConatiner></HomeNavConatiner>
        <StructureDrawer></StructureDrawer>
        <div className={styles["main"]}>
          <h1>Publish Your Event</h1>
          <EventPreview />
          <div className={styles["publish-preview__container"]}>
            <div>
              <h2>Who can see your event?</h2>
              <div className={styles["options-group"]}>
                <div className={styles["radio-container"]}>
                  <input
                    type="radio"
                    checked
                    name="privacy"
                    id="public-privacy"
                  />
                  <div className={styles["options-label__container"]}>
                    <label htmlFor="public-privacy">Public</label>
                    <label
                      className={styles["smaller"]}
                      htmlFor="public-privacy"
                    >
                      Shared on Eventus and search engines
                    </label>
                  </div>
                </div>
                <div className={styles["radio-container"]}>
                  <input type="radio" name="privacy" id="private-privacy" />
                  <div className={styles["options-label__container"]}>
                    <label htmlFor="private-privacy">Private</label>
                    <label
                      className={styles["smaller"]}
                      htmlFor="private-privacy"
                    >
                      Only available to a selected audience
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SubmitCard onClick={handlePublishEvent}></SubmitCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
