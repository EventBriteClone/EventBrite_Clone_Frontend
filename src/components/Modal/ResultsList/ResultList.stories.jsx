import React from "react";
import ResultList from "./ResultList";
import { FaSearch, FaBookmark, FaClock } from "react-icons/fa";
import ResultItem from "./ResultItem";

export default {
  title: "Components/Modal/ResultList/ResultList",
  component: ResultList,
};


const Template = (args) => <ResultList {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <ResultItem title="Lorem ipsum" icon={<FaSearch />} />
      <ResultItem title="Dolor sit amet" icon={<FaBookmark />} />
    </>
  ),
};
export const WithClockIcon = Template.bind({});
WithClockIcon.args = {
  children: (
    <>
      <ResultItem title="Example 1" icon={<FaClock />} />
      <ResultItem title="Example 2" icon={<FaClock />} />
      <ResultItem title="Example 3" icon={<FaClock />} />
    </>
  ),
};



