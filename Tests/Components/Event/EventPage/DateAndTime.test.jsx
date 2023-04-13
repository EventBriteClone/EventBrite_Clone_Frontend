import { test, expect, describe } from "vitest";
import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EventPage from "../../../../src/Pages/EventPage"
import EventDetails from "../../../../src/components/Event/EventPage/EventDetails";

describe("get tickets", () => {
    it("renders text", () => {
        const { getByText } = render(<EventDetails/>);
        const element = getByText("Date and Time","Location", "When and Where");
        expect(element).toBeDefined();
    });
});