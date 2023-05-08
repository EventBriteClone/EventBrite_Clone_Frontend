import MidTicketContainer from "../../../../src/components/Event/EventTicket/MidTicketContainer";
import { MemoryRouter } from "react-router-dom";
import { getByText } from "@testing-library/react";
import { create } from "react-test-renderer";
import { element } from "prop-types";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";

describe("find text", () => {
  it("renders text", () => {
    const { getByText } = render(<MidTicketContainer />);
    const element = getByText(
      "Create a section if you want to sell multiple ticket types that share the same inventory. i.e. Floor, Mezzanine."
    );
    expect(element).toBeDefined();
  });
  it("renders all buttons", () => {
    const component = create(
      <MemoryRouter>
        <MidTicketContainer />
      </MemoryRouter>
    );
    const buttons = component.root.findAll((el) => el.type === "button");
    expect(buttons.length).toBe(2);
  });
});
