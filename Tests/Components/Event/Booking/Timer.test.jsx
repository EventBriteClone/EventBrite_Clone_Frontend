import { test, expect, describe } from "vitest";
import { create } from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Popup from "../../../../src/components/Event/popup/Popup"

describe("Popup", () => {
  it("test timer", () => {
    const component = create(
      <MemoryRouter>
        <Popup />
      </MemoryRouter>
    );
    const timer = component.root.findAll((el) => el.type === 'Timer');

    expect(timer.length).toBeDefined();
  });
});
