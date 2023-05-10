import UploadCSV from "../../../../src/components/Event/EventTicket/UploadCSV";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, getByClassName } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import {
  getByLabelText,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import { create } from "react-test-renderer";

describe("check all", () => {
  it("renders all buttons", () => {
    const component = create(
      <MemoryRouter>
        <UploadCSV />
      </MemoryRouter>
    );
    const buttons = component.root.findAll((el) => el.type === "button");
    expect(buttons.length).toBe(2);
    // paid, free, donation, advanced settings , cancel and save
  });
  it("renders all buttons", () => {
    const component = create(
      <MemoryRouter>
        <UploadCSV />
      </MemoryRouter>
    );
    const inputs = component.root.findAll((el) => el.type === "input");
    expect(inputs.length).toBe(10);
  });
  it("renders text", () => {
    const { getByText } = render(<UploadCSV />);
    const element = getByText(
      "Upload up to 500 codes from a .csv or .txt file."
    );
    expect(element).toBeDefined();
  });
  it("renders text", () => {
    const { getByText } = render(<UploadCSV />);
    const element = getByText(
      "Separate codes with commas, or list them on separate lines."
    );
    expect(element).toBeDefined();
  });
  it("renders text", () => {
    const { getByText } = render(<UploadCSV />);
    const element = getByText(
      "Spaces, apostrophes, and special characters (except: -_,@.) are not allowed."
    );
    expect(element).toBeDefined();
  });
});
