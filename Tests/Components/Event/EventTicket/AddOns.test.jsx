import AddOns from "../../../../src/components/Event/EventTicket/AddOns";
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
        <AddOns />
      </MemoryRouter>
    );
    const buttons = component.root.findAll((el) => el.type === "button");
    expect(buttons.length).toBe(1);
    // paid, free, donation, advanced settings , cancel and save
  });
  it("renders text", () => {
    const { getByText } = render(<AddOns />);
    const element = getByText(
      "Sell additional items for your event-like parking, merchandise, or campsites."
    );
    expect(element).toBeDefined();
  });
});
