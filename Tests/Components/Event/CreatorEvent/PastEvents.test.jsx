import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AllEvents from "../../../../src/components/Event/EventCreator/components/AllEvents";
import { BrowserRouter } from "react-router-dom";

describe("past component", () => {
  test("should render past events when selected in dropdown", () => {
    render(
      <BrowserRouter>
        <AllEvents />
      </BrowserRouter>
    );

    const dropdown = screen.getByRole("combobox");
    fireEvent.change(dropdown, { target: { value: "past" } });

    const eventCards = screen.getAllByTestId("event-card");
    expect(eventCards.length).toBe(3);
  });
});
