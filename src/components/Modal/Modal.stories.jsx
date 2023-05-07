import React from "react";
import Modal from "./Modal";

export default {
  title: "Components/Modal/Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithQuery = Template.bind({});
WithQuery.args = {
  query: "Event",
};

export const WithRecentAndTrends = Template.bind({});
WithRecentAndTrends.args = {
  recent: ["Event 1", "Event 2", "Event 3"],
  trends: [
    { term: "Event 4", score: 10 },
    { term: "Event 5", score: 8 },
    { term: "Event 6", score: 5 },
  ],
};

export const WithQueryAndRecentAndTrends = Template.bind({});
WithQueryAndRecentAndTrends.args = {
  query: "Event",
  recent: ["Event 1", "Event 2", "Event 3"],
  trends: [
    { term: "Event 4", score: 10 },
    { term: "Event 5", score: 8 },
    { term: "Event 6", score: 5 },
  ],
};
