import { test, expect, describe } from "vitest";
import { create } from "react-test-renderer";
import {
  getByLabelText,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import Settings from "../../../../src/components/Event/EventTicket/Settings";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, getByClassName } from "@testing-library/react";

describe("find text", () => {
  it("renders text", () => {
    const { getByText } = render(<Settings />);
    const element = getByText("Display number of tickets remaining.");
    expect(element).toBeDefined();
  });
  it("renders text", () => {
    const { getByText } = render(<Settings />);
    const element = getByText(
      "The number of tickets remaining will be displayed to attendees."
    );
    expect(element).toBeDefined();
  });
  it("renders text", () => {
    const { getByText } = render(<Settings />);
    const element = getByText(
      "The attendee will see the ticket purchase button as - Get tickets"
    );
    expect(element).toBeDefined();
  });
  it("renders text", () => {
    const { getByText } = render(<Settings />);
    const element = getByText(
      "The attendee will see the ticket purchase button as - Reserve a spot"
    );
    expect(element).toBeDefined();
  });
  it("renders all buttons", () => {
    const component = create(
      <MemoryRouter>
        <Settings />
      </MemoryRouter>
    );
    const inputs = component.root.findAll((el) => el.type === "input");
    expect(inputs.length).toBe(4);
  });
});
