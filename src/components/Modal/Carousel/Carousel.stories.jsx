import React from "react";
import Carousel from "./Carousel";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Modal/Carousel",
  component: Carousel,
  argTypes: {},
  args: {
    events: [
      {
        imgSrc:
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F126659303%2F438776807040%2F1%2Foriginal.20210219-204912?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=67eacd74136e607ebe46ebbaa4bbb7ef",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum",
        organizerLogo:
          "https://cdn.evbuc.com/images/100912392/438776807040/1/original.20200513-210241",
        organizerName: "Lorem ipsum",
        eventName: "Lorem ipsum dolor sit",
        eventSummary: "Lorem ipsum dolor sit",
        alt: "Event 1",
      },
      {
        imgSrc:
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F131060017%2F438776807040%2F1%2Foriginal.20210402-213056?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=ed10f677d3dbcda77b236074e536644f",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum",
        organizerLogo:
          "https://cdn.evbuc.com/images/100912392/438776807040/1/original.20200513-210241",
        organizerName: "Lorem ipsum",
        eventName: "Lorem ipsum dolor sit",
        eventSummary: "Lorem ipsum dolor sit",
        alt: "Event 2",
      },
      {
        imgSrc:
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F126659303%2F438776807040%2F1%2Foriginal.20210219-204912?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=67eacd74136e607ebe46ebbaa4bbb7ef",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum",
        organizerLogo:
          "https://cdn.evbuc.com/images/100912392/438776807040/1/original.20200513-210241",
        organizerName: "Lorem ipsum",
        eventName: "Lorem ipsum dolor sit",
        eventSummary: "Lorem ipsum dolor sit",
        alt: "Event 3"
      },
    ],
    description: `The Carousel component allows users to scroll through the collection of events using the arrow buttons located at the top of the component.
    
    Clicking on the left arrow button scrolls the collection to the left by one item.
    Clicking on the right arrow button scrolls the collection to the right by one item. When the user reaches the beginning or end of the collection, the respective arrow button is disabled.
   `

    
  }
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});

export const DefaultCarousel = Template.bind({});

DefaultCarousel.decorators = [
  (Story) => (
    <div style={{ width: '70%', margin: '0 auto' }}>
      <Story />
    </div>
  ),
];


export const DefaultCarousel2 = () => (
  <Carousel
    onClickLeft={action("left arrow clicked")}
    onClickRight={action("right arrow clicked")}
  />
);

DefaultCarousel2.args = {
  title: "Our favorite online event collections",
}



