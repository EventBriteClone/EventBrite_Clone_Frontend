import { test, expect, describe } from "vitest";
import { create } from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Popup from "../../../../src/components/Event/popup/Popup"

describe("Popup", () => {
  it("test buttons", () => {
    const component = create(
      <MemoryRouter>
        <Popup />
      </MemoryRouter>
    );
    const buttons = component.root.findAll((el) => el.type === 'button');

    expect(buttons.length).toBe(4);
  });
});
