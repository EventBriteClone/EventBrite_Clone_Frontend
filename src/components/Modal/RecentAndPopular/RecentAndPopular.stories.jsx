import React from "react";
import RecentAndPopular from "./RecentAndPopular";
import {mockData} from '../../../../mock-data/db'

export default {
  title: "Components/Modal/RecentAndPopular",
  component: RecentAndPopular,
  args: {
    recent: mockData.recent,
    trends: mockData.trends,
  }
};

export const Default = (args) => (
  <RecentAndPopular {...args} />
);

export const NoRecentSearches = () => (
  <RecentAndPopular recent={[]} trends={mockData.trends} />
);

export const NoTrendingSearches = () => (
  <RecentAndPopular recent={mockData.recent} trends={[]} />
);
