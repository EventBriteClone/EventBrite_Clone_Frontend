import { test, expect, describe } from "vitest";
import {
  getByLabelText,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import DateTime from "../../../../src/components/Event/CreateEvent/DateTime";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, getByClassName } from "@testing-library/react";

describe("find text", () => {
  it("renders text", () => {
    // const props = { changeButton: false };
    const { getByLabelText } = render(<DateTime />);
    const checkbox = getByLabelText("timeEnd");

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
  it("renders text", () => {
    // const props = { changeButton: false };
    const { getByLabelText } = render(<DateTime />);
    const checkbox = getByLabelText("timeStart");

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
  it("renders text", () => {
    const { getByText } = render(<DateTime />);
    const element = getByText(
      "Single event happens once and can last multiple days"
    );
    expect(element).toBeDefined();
  });
});
