import React from "react";
import Badge from "./Badge";

export default {
  title: "Components/Modal/Suggested/Badge",
  component: Badge,
  argTypes: {
    title: { control: "text", defaultValue: "New" },
  },
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
