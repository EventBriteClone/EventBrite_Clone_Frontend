import Arrow from "./Arrow";

export default {
  title: "Components/Icons/Arrow",
  component: Arrow,
};

export const ArrowDirection = (args) => <Arrow {...args} />;
ArrowDirection.args = {
  direction: "left",
};
