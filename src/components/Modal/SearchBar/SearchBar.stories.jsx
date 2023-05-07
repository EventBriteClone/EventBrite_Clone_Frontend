import React, { useState } from "react";
import SearchBar from "./SearchBar";

export default {
  title: "Components/Modal/SearchBar",
  component: SearchBar,
  argTypes: {
    query: { control: "text" },
    handleQueryChange: { action: "query changed" },
  },
};

const Template = (args) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return <SearchBar query={query} handleQueryChange={handleQueryChange} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    query: "",
};

export const WithValue = Template.bind({});
WithValue.args = {
  query: "React",
};

export const Disabled = Template.bind({});
Disabled.args = {
  query: "",
  handleQueryChange: null,
};

export const Loading = Template.bind({});
Loading.args = {
  query: "React",
  isLoading: true,
};
