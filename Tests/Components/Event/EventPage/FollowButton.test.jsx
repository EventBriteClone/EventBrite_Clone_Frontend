import Organizer from "../../../../src/components/Event/EventPage/Organizer";
import { test, expect, describe } from "vitest";
import { create } from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ReactTestUtils from 'react-dom/test-utils';

describe("follow button", () => {
  it("renders text", () => {
    const component = create(
      <MemoryRouter>
        <Organizer />
      </MemoryRouter>
    );
    const button = component.root.find((el) => el.type === 'button');

    ReactTestUtils.Simulate.click(button);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
