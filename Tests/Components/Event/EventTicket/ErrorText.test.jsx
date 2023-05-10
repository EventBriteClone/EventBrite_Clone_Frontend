import { test, expect, describe } from "vitest";
import { create } from "react-test-renderer";
import {
  getByLabelText,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import ErrorText from "../../../../src/components/Event/EventTicket/ErrorText";

describe("find text", () => {
  it("renders text", () => {
    const { getByText } = render(<ErrorText />);
    const element = getByText(
      "Please fill out all of the required fields correctly"
    );
    expect(element).toBeDefined();
  });
});
