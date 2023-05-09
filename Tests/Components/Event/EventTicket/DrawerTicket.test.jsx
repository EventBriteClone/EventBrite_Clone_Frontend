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
import { ViTest, ViProvider } from "vitest";
import { createMockFunction } from "vitest-mock";

describe("check checkbox", () => {
  // it("renders text", () => {
  //   const { getByLabelText } = render(<DrawerTicket />);
  //   // const checkbox = getByLabelText("Will call");
  //   const checkbox = getById("toot");
  //   fireEvent.click(checkbox);
  //   expect(checkbox.checked).toBe(true);
  // });
  // test("checkbox is checked when clicked", () => {
  //   const handleChangeTwo = jest.fn();
  //   const { container } = ViTest.render(
  //     <ViProvider>
  //       <DrawerTicket />
  //     </ViProvider>
  //   );
  //   const checkbox = getByLabelText(container, "eTicket");
  //   fireEvent.click(checkbox);
  //   expect(checkbox).toBeChecked();
  //   expect(handleChangeTwo).toHaveBeenCalled();
  // });

  // const testCheckboxIsChecked = async () => {
  //   const handleChangeTwo = createMockFunction();
  //   const { container } = await ViTest.render(
  //     <ViProvider>
  //       <DrawerTicket handleChangeTwo={handleChangeTwo} />
  //     </ViProvider>
  //   );
  //   const checkbox = container.querySelector('input[type="checkbox"]');
  //   const label = container.querySelector('label[for="eTicket"]');

  //   await ViTest.fireEvent.click(label);

  //   expect(checkbox.checked).toBe(true);
  //   expect(handleChangeTwo).toHaveBeenCalled();
  // };

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
  it("renders all buttons", () => {
    const component = create(
      <MemoryRouter>
        <DrawerTicket />
      </MemoryRouter>
    );
    const inputs = component.root.findAll((el) => el.type === "input");
    expect(inputs.length).toBe(13);
  });
});
