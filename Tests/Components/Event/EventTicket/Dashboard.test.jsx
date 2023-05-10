import CreateSectionPopper from "../../../../src/components/Event/EventTicket/CreateSectionPopper";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, getByClassName } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import Dashboard from "../../../../src/Pages/Dashboard";
import {
  getByLabelText,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import { create } from "react-test-renderer";

describe("check all", () => {
  it("renders text", () => {
    const { getByText } = render(<Dashboard />);
    const element = getByText("Open");
    expect(element).toBeDefined();
  });
  it("renders text", () => {
    const { getByText } = render(<Dashboard />);
    const element = getByText("share");
    expect(element).toBeDefined();
  });
});
