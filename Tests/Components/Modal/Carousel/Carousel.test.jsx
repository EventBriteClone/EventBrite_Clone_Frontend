import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import jest from 'jest-mock';
import Carousel from '../../../../src/components/Modal/Carousel/Carousel';

describe("Carousel component", () => {
  const event = [
    {
      imgSrc: "https://example.com/image1.jpg",
      title: "Event 1",
      organizerLogo: "https://example.com/logo1.jpg",
      organizerName: "Organizer 1",
      eventName: "Event Name 1",
      eventSummary: "Event Summary 1",
    },
    {
      imgSrc: "https://example.com/image2.jpg",
      title: "Event 2",
      organizerLogo: "https://example.com/logo2.jpg",
      organizerName: "Organizer 2",
      eventName: "Event Name 2",
      eventSummary: "Event Summary 2",
    },
    {
      imgSrc: "https://example.com/image3.jpg",
      title: "Event 3",
      organizerLogo: "https://example.com/logo3.jpg",
      organizerName: "Organizer 3",
      eventName: "Event Name 3",
      eventSummary: "Event Summary 3",
    },
  ];

  test("renders carousel with correct content", () => {
    // Render the Carousel component with event data
    const { getByText, getByAltText } = render(<Carousel events={event} />);

    // Assert that the title of the carousel is rendered correctly
    expect(getByText("Our favorite online event collections")).toBeInTheDocument();

    // Assert that the images are rendered correctly
    expect(getByAltText("Event 1")).toHaveAttribute("src", "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F126659303%2F438776807040%2F1%2Foriginal.20210219-204912?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=67eacd74136e607ebe46ebbaa4bbb7ef");
    expect(getByAltText("Event 2")).toHaveAttribute("src", "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F131060017%2F438776807040%2F1%2Foriginal.20210402-213056?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=ed10f677d3dbcda77b236074e536644f");
    expect(getByAltText("Event 3")).toHaveAttribute("src", "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F126659303%2F438776807040%2F1%2Foriginal.20210219-204912?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=67eacd74136e607ebe46ebbaa4bbb7ef");
  });

  test("scrolls left and right when arrow buttons are clicked", () => {
    // Render the Carousel component with event data
    const { getByTestId } = render(<Carousel events={event} />);

    // Mock the scrollBy function
    const scrollByMock = jest.fn();
    Element.prototype.scrollBy = scrollByMock;

    // Get the carousel container element
    const carouselContainer = getByTestId("carousel-container");

    // Click the left arrow button
    fireEvent.click(getByTestId("arrow-left"));

    // Assert that scrollBy is called with correct arguments
    waitFor(() =>  expect(scrollByMock).toHaveBeenCalledWith({
      left: -carouselContainer.offsetWidth,
      behavior: "smooth",
    }));

    // Click the right arrow button
    fireEvent.click(getByTestId("arrow-right"));

    // Assert that scrollBy is called with correct arguments
    waitFor(() => expect(scrollByMock).toHaveBeenCalledWith({
      left: carouselContainer.offsetWidth,
      behavior: "smooth",
    }));
  });
});
