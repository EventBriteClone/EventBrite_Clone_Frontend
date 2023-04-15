import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AllEvents from "../../../../src/components/Event/EventCreator/components/AllEvents";
import { BrowserRouter } from "react-router-dom";

describe("AllEvents component", () => {
  test("should render all events by default", () => {
    render(
      <BrowserRouter>
        <AllEvents />
      </BrowserRouter>
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(6);
  });
});
