import styles from "./Publish.module.css";
import EventPreview from "./EventPreview";
import Footer from "../../EventPage/Footer";
import SubmitCard from "./SubmitCard";
import { fetchDataFromAPI } from "../../../../utils";
import config from "../../../../utils/config";
import HomeNavConatiner from "../../EventTicket/HomeNavContainer";
import StructureDrawer from "../../EventTicket/StructureDrawer";
import HeaderTicket from "../../EventTicket/HeaderTicket";

export default function Publish() {
  function handlePublish() {
    const configurationOpts = {
      method: "POST",
    };
    let endpoint = config.mocking === "true" ? "" : "";

    fetchDataFromAPI({ endpoint, configurationOpt });
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
          <SubmitCard onClick={handlePublish}></SubmitCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
