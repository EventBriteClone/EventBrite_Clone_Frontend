import Section from "../Layout/Section";
import AvailableTabs from "./AvailableTabs";
import EventsInLocation from "./EventsInLocation";
import LocationPopularity from "./LocationPopularity";
import TrendingCategories from "./TrendingCategories";

export default function MainContent(props) {
  return (
    <>
      <Section>
        <LocationPopularity />
        <AvailableTabs />
        <TrendingCategories />
      </Section>
      <Section>
        <EventsInLocation events={props.events} />
      </Section>
    </>
  );
}
