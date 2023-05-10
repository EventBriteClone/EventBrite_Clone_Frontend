import { test, expect, describe } from "vitest";
import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Popup from "../../../../src/components/Event/popup/Popup";

describe("Order Summary", () => {
    it("renders text", () => {
        const { getByText } = render(
            <MemoryRouter>
            <Popup />
          </MemoryRouter>
        );
        const element = getByText("Order Summary", "Subtotal", "Discount", "Fees", "Total");
        expect(element).toBeDefined();
    });
});