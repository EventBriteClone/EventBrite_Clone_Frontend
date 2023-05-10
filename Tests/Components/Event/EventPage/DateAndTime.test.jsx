import { test, expect, describe } from "vitest";
import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EventDetails from "../../../../src/components/Event/EventPage/EventDetails/EventDetails";

describe("event details", () => {
    it("renders text", () => {
        const { getByText } = render(<EventDetails/>);
        const element = getByText("Date and Time","Location", "When and Where");
        expect(element).toBeDefined();
    });
});