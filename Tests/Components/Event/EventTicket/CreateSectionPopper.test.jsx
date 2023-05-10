import CreateSectionPopper from "../../../../src/components/Event/EventTicket/CreateSectionPopper";
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

describe("check all", () => {
  it("renders text", () => {
    const { getByText } = render(<CreateSectionPopper />);
    const element = getByText(
      "Use a section to sell various ticket types that share the same section capacity"
    );
    expect(element).toBeDefined();
  });
});
