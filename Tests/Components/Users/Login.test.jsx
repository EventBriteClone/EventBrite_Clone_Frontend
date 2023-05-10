import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
// import CreateAddOnDrawer from "../../../../src/components/Event/EventTicket/CreateAddOnDrawer";
import Login from "../../../src/components/Users/Login";
import { MemoryRouter } from "react-router-dom";
import { getByText } from "@testing-library/react";
import { create } from "react-test-renderer";
import { element } from "prop-types";

describe("find text", () => {
  it("renders text", () => {
    const { getByText } = render(<Login />);
    const element = getByText("Other login methods");
    expect(element).toBeDefined();
  });
  it("renders all buttons", () => {
    const component = create(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const buttons = component.root.findAll((el) => el.type === "button");
    expect(buttons.length).toBe(4);
  });
  it("renders all buttons", () => {
    const component = create(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const inputs = component.root.findAll((el) => el.type === "input");
    expect(inputs.length).toBe(3);
  });
});
