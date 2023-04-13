import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
// import BasicInfo from "../../../../src/Pages/BasicInfo";

import GetSignUpEmail from "../components/Users/GetSignUpEmail";

describe("find text", () => {
  it("renders text", () => {
    const { getByText } = render(<GetSignUpEmail />);
    const element = getByText("Other sign up methods");
    expect(element).toBeDefined();
  });
});
