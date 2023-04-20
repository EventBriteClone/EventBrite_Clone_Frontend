import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import jest from 'jest-mock';
import Modal from '../../../src/components/Modal/Modal'

describe("Modal", () => {
  it("renders Modal component correctly", () => {
    // Render the Modal component
    const { getByText, getByTestId } = render(<Modal />);

    // Check if close button is present
    const closeButton = getByTestId("closeButton");
    expect(closeButton).to.exist;

    // Check if search section is present
    const searchSection = getByTestId("searchSection");
    expect(searchSection).to.exist;

    // Check if carousel section is present
    const carouselSection = getByTestId("carouselSection");
    expect(carouselSection).to.exist;

    // // Check if result section is present
    const resultSection = getByTestId("resultSection");
    expect(resultSection).to.exist;
  });

  it("handles query change correctly", () => {
    // Render the Modal component
    const { getByTestId } = render(<Modal />);

    // Get the search input field
    const searchInput = getByTestId("searchInput");
    expect(searchInput).to.exist;
  });

  it("handles modal close correctly", () => {
    // Mock the search dispatch function
    const mockSearchDispatch = jest.fn();

    // Render the Modal component with mocked search dispatch function
    const { getByTestId } = render(
      <Modal useSearchDispatch={() => mockSearchDispatch} />
    );

    // Get the close button
    const closeButton = getByTestId("closeButton");

    // Fire a click event on the close button
    fireEvent.click(closeButton);

    // Check if the mock search dispatch function is called..
    // It should wait for click on the close button then it will called..
    waitFor(() => expect(mockSearchDispatch).toHaveBeenCalledWith(false));
  });
});
