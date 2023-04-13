import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
// import BasicInfo from "../../../../src/Pages/BasicInfo";

import SignUp from "../../../src/Pages/SignUp";

describe("find text", () => {
  it("renders text", () => {
    const { getByText } = render(<SignUp />);
    const element = getByText("Other sign up methods");
    expect(element).toBeDefined();
  });
});
