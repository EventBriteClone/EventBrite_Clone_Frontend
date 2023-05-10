import { test, expect, describe } from "vitest";
import { create } from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Organizer from "../../../../src/components/Event/EventPage/Organizer/Organizer"

describe("PriceTag", () => {
  it("check follow button", () => {
    const component = create(
      <MemoryRouter>
        <Organizer />
      </MemoryRouter>
    );
    const buttons = component.root.findAll((el) => el.type === 'button');

    expect(buttons.length).toBe(1);
  });
});
