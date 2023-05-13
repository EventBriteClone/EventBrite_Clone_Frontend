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
      </Section>
      <Section>
        <EventsInLocation />
      </Section>
      <Section>
        <TrendingCategories />
      </Section>
    </>
  );
}
