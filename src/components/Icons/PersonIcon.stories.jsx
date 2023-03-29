import PersonIcon from "./PersonIcon";

export default {
  title: "Components/Icons/PersonIcon",
  component: PersonIcon,
};

export const Person = (args) => <PersonIcon {...args} />;
Person.args = {
  height: "50px",
  width: "50px",
};
