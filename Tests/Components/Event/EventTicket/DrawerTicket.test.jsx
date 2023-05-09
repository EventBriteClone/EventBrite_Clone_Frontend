import DrawerTicket from "../../../../src/components/Event/EventTicket/DrawerTicket";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, getByClassName } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import {
  getByLabelText,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import { create } from "react-test-renderer";

describe("check checkbox", () => {
  it("renders all buttons", () => {
    const component = create(
      <MemoryRouter>
        <DrawerTicket />
      </MemoryRouter>
    );
    const buttons = component.root.findAll((el) => el.type === "button");
    expect(buttons.length).toBe(6);
    // paid, free, donation, advanced settings , cancel and save
  });
  // it("renders all buttons", () => {
  //   const component = create(
  //     <MemoryRouter>
  //       <DrawerTicket />
  //     </MemoryRouter>
  //   );
  //   const inputs = component.root.findAll((el) => el.type === "input");
  //   expect(inputs.length).toBe(13);
  // });
});
