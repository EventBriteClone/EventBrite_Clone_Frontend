import "@testing-library/jest-dom";
import jest from 'jest-mock';
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import LocationBar from "../../../../src/components/Modal/LocationBar/LocationBar";

describe("LocationBar component", () => {
  it("should render location input with placeholder text", () => {
    const { getByPlaceholderText } = render(<LocationBar />);

    const locationInput = getByPlaceholderText("Choose a location");

    expect(locationInput).toBeInTheDocument();
  });

  it("should update query state when input value changes", () => {
    const { getByPlaceholderText } = render(<LocationBar />);

    const locationInput = getByPlaceholderText("Choose a location");

    fireEvent.change(locationInput, { target: { value: "New York" } });

    expect(locationInput.value).toBe("New York");
  });

  it("should call handleSearchClick when location icon is clicked", () => {
    const handleSearchClickMock = jest.fn();
    const { getByTestId } = render(<LocationBar handleSearchClick={handleSearchClickMock} />);

    const locationIcon = getByTestId("location-icon");
    fireEvent.click(locationIcon);

    waitFor(() => expect(handleSearchClickMock).toHaveBeenCalled());
  });
});
