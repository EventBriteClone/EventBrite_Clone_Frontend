import { test, expect, describe } from "vitest";
import {
  getByLabelText,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import Holds from "../../../../src/components/Event/EventTicket/Holds";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, getByClassName } from "@testing-library/react";
import { create } from "react-test-renderer";

describe("check all", () => {
  it("renders text", () => {
    const { getByText } = render(<Holds />);
    const element = getByText("To create hold tickets, first");
    expect(element).toBeDefined();
  });
});
