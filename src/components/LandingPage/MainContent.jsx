import { useState } from "react";
import Section from "../Layout/Section";
import AvailableTabs from "./AvailableTabs";
import EventsInLocation from "./EventsInLocation";
import LocationPopularity from "./LocationPopularity";
import TrendingCategories from "./TrendingCategories";
import CategoryResults from "./CategoryResults";

export default function MainContent(props) {
  const [category, setCategory] = useState("Auto, Boat & Air");
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
        <TrendingCategories setCategory={setCategory} />
        <CategoryResults category={category} />
      </Section>
    </>
  );
}
