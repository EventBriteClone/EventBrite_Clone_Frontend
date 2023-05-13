import { test, expect, describe } from "vitest";
import { create } from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../../../../src/components/Event/EventPage/Footer"

describe("PriceTag", () => {
  it("footer test", () => {
    const component = create(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const a = component.root.findAll((el) => el.type === 'a');

    expect(a.length).toBe(30);
  });
});
