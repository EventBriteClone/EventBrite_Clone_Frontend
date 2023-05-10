import { test, expect, describe } from "vitest";
import { create } from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Popup from "../../../../src/components/Event/popup/Popup"

describe("Popup", () => {
  it("test input fields", () => {
    const component = create(
      <MemoryRouter>
        <Popup />
      </MemoryRouter>
    );
    const inputs = component.root.findAll((el) => el.type === 'input');

    expect(inputs.length).toBe(5);
  });
});
