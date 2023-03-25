import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { waitForElement } from "@testing-library/dom";
import CreatorEvent from "../src/Pages/CreatorEvent";
import { MemoryRouter } from "react-router-dom";

test("Creator's Event page should have 6 Events", async () => {
  // render(<LandingPage />);
  render(
    <MemoryRouter initialEntries={["/my-events"]}>
      <CreatorEvent />
    </MemoryRouter>
  );
  // const eventCards = await waitForElement(() => {
  //   return screen.getAllByTestId("event-card");
  // });
  // console.log(screen.getAllByTestId("event-card"));
  const eventCards = document.querySelectorAll(".event__card");
  expect(eventCards.length).toBe(6);
});
