import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Location from "../../../../src/components/Event/CreateEvent/Location";
import { MemoryRouter } from "react-router-dom";
import { getByText } from "@testing-library/react";
import { create } from "react-test-renderer";
import { element } from "prop-types";

describe("find text", () => {
  it("renders text", () => {
    const { getByText } = render(<Location />);
    const element = getByText(
      "Help people in the area discover your event and let attendees know where to show up."
    );
    expect(element).toBeDefined();
  });
  it("renders all buttons", () => {
    const component = create(
      <MemoryRouter>
        <Location />
      </MemoryRouter>
    );
    const buttons = component.root.findAll((el) => el.type === "button");
    expect(buttons.length).toBe(4);
  });

  // it("should show text when clicking on recurring event button", () => {
  //   const props = { changeButton: true };
  //   const { getByText } = render(<Location {...props} />);
  //   const element = getByText(
  //     "Online events have unique event pages where you can add links to livestreams and more"
  //   );
  //   //   (content, element) => {
  //   //   const hasText = (element) => element.textContent === content;

  //   //   // Check if any child element contains the specified text
  //   //   const childrenHaveText = (element) =>
  //   //     Array.from(element.children).some((child) => hasText(child));

  //   //   // Check if the element or any of its children contain the specified text
  //   //   return hasText(element) || childrenHaveText(element);
  //   // }, "Online events have unique event pages where you can add links to livestreams and more");
  //   expect(element).toBeDefined();
  // });
});
