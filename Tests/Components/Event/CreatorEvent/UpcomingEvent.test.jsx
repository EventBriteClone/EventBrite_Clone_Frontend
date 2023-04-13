import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AllEvents from "../../../../src/components/Event/EventCreator/components/AllEvents";
import { BrowserRouter } from "react-router-dom";

describe("Upcoming component", () => {
  test("should render upcoming events when selected in dropdown", () => {
    render(
      <BrowserRouter>
        <AllEvents />
      </BrowserRouter>
    );

    const dropdown = screen.getByRole("combobox");
    fireEvent.change(dropdown, { target: { value: "upcoming" } });
    const eventCards = screen.getAllByTestId("event-card");
    expect(eventCards.length).toBe(3);
  });
});
