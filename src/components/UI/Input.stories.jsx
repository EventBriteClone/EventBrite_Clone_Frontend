import Input from "./Input";

export default {
  title: "Components/UI/Input",
  component: Input,
};

export function RegularTextField(args) {
  return <Input {...args} />;
}
RegularTextField.args = {
  label: "First Name",
  requiredAst: true,
  input: {
    required: true,
    id: "doc",
    type: "text",
  },
};

export function InvalidText(args) {
  return <Input {...args} />;
}
InvalidText.args = {
  label: "First Name",
  invalid: true,
  invalidText: "Please enter a First Name",
  input: {
    required: true,
    id: "doc",
    type: "text",
  },
};

export function CharLimitText(args) {
  return <Input {...args} />;
}
CharLimitText.args = {
  label: "First Name",
  charLength: 25,
  input: {
    required: true,
    id: "doc",
    type: "text",
  },
};

export function AdjustStyle(args) {
  return <Input {...args} />;
}
AdjustStyle.args = {
  label: "First Name",
  style: {
    height: "50px",
    width: "300px",
  },
  input: {
    required: true,
    id: "doc",
    type: "text",
  },
};
