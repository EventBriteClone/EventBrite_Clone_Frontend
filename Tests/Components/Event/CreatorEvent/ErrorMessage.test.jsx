import ErrorMessage from "../../../../src/components/Event/CreateEvent/ErrorMessage";
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
    const { getByText } = render(<ErrorMessage />);
    const element = getByText(
      "Please fill out all of the required fields correctly!"
    );
    expect(element).toBeDefined();
  });
});
