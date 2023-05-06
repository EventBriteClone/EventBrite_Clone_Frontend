import { test, expect, describe } from "vitest";
import { create } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllEvents from "../../../../src/components/Event/EventCreator/components/AllEvents";

describe("PriceTag", () => {
  it("renders all buttons", () => {
    const component = create(
      <MemoryRouter>
        <AllEvents />
      </MemoryRouter>
    );
    const buttons = component.root.findAll((el) => el.type === "button");

    expect(buttons.length).toBe(3);
  });
});
