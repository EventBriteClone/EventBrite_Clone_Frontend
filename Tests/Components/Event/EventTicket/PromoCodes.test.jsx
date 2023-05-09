import PromoCodes from "../../../../src/components/Event/EventTicket/PromoCodes";
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
        <PromoCodes />
      </MemoryRouter>
    );
    const buttons = component.root.findAll((el) => el.type === "button");
    expect(buttons.length).toBe(2);
    // paid, free, donation, advanced settings , cancel and save
  });
  it("renders text", () => {
    const { getByText } = render(<PromoCodes />);
    const element = getByText(
      "To create promo codes that apply across multiple events, visit"
    );
    expect(element).toBeDefined();
  });
  it("renders text", () => {
    const { getByText } = render(<PromoCodes />);
    const element = getByText("Attract more attendees with promo codes");
    expect(element).toBeDefined();
  });
  it("renders text", () => {
    const { getByText } = render(<PromoCodes />);
    const element = getByText(
      "With promo codes, you can offer reduced prices with discount codes or reveal hidden tickets to attendees with access codes."
    );
    expect(element).toBeDefined();
  });
  it("renders text", () => {
    const { getByText } = render(<PromoCodes />);
    const element = getByText(
      "You can create codes or upload a CSV to import ones you’ve already made."
    );
    expect(element).toBeDefined();
  });
});
