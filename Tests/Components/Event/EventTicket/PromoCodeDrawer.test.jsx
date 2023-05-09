import PromoCodeDrawer from "../../../../src/components/Event/EventTicket/PromoCodeDrawer";
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
        <PromoCodeDrawer />
      </MemoryRouter>
    );
    const buttons = component.root.findAll((el) => el.type === "button");
    expect(buttons.length).toBe(2);
    // paid, free, donation, advanced settings , cancel and save
  });
  it("renders all buttons", () => {
    const component = create(
      <MemoryRouter>
        <PromoCodeDrawer />
      </MemoryRouter>
    );
    const inputs = component.root.findAll((el) => el.type === "input");
    expect(inputs.length).toBe(10);
  });
  it("renders text", () => {
    const { getByText } = render(<PromoCodeDrawer />);
    const element = getByText(
      "Total number of tickets that can be purchased with this code"
    );
    expect(element).toBeDefined();
  });
});
