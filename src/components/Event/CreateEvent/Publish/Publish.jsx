import styles from "./Publish.module.css";
import EventPreview from "./EventPreview";
import Footer from "../../EventPage/Footer";
import { convertTimeTo24HourFormat, fetchDataFromAPI } from "../../../../utils";
import config from "../../../../utils/config";
import HomeNavConatiner from "../../EventTicket/HomeNavContainer";
import StructureDrawer from "../../EventTicket/StructureDrawer";
import HeaderTicket from "../../EventTicket/HeaderTicket";
import { useContext, useEffect, useState } from "react";
import { CreateEventContext } from "../../../../context/CreateEventContext";
import { AuthContext } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Publish() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createEvent: event, setCreateEvent } = useContext(CreateEventContext);
  const { isAuthenticated, token } = useContext(AuthContext).authState;
  useEffect(() => {
    if (!isAuthenticated) return navigate("/login");
  }, []);
  async function handlePublishEvent() {
    try {
      setIsLoading(true);
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
        capacity: CAPACITY,
      } = event;
      const eventBody = {
        Title,
        organizer,
        Description,
        sub_Category,
        venue_name,
        ST_DATE,
        END_DATE,
        ST_TIME: convertTimeTo24HourFormat(ST_TIME),
        END_TIME: convertTimeTo24HourFormat(END_TIME),
        online: online === true ? "True" : "False",
        Summery,
        STATUS,
        CAPACITY,
        image: event.images[0]?.file,
        image1: event.images[1]?.file,
        image2: event.images[2]?.file,
        image3: event.images[3]?.file,
        image4: event.images[4]?.file,
      };
      const formData = new FormData();
      for (const key in eventBody) {
        if (eventBody[key]) formData.append(key, eventBody[key]);
      }
      const configurationOpt = {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `customToken ${token}`,
        },
      };
      const createEventEndpoint =
        config.mocking === "true" ? "event/" : "events/create/";

      const createEventRes = await fetchDataFromAPI({
        endpoint: createEventEndpoint,
        configurationOpt,
      });
      console.log(createEventRes);
      const { ID } = createEventRes;
      if (ID) {
        setCreateEvent({ type: "clear" });
        setIsLoading(false);
        navigate(`/event-ticket/${ID}`);
        // const publicityEndpoint = `eventmanagement/${ID}/publish`;
      }
    } catch (error) {
      setIsLoading(false);
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
                    defaultChecked
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
          <div className={styles["submit-card__container"]}>
            <button onClick={handlePublishEvent} disabled={isLoading}>
              {isLoading ? "Loading..." : "Publish Event"}
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
