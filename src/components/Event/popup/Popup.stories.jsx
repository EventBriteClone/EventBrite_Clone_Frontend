import Popup from "./Popup";
import { MemoryRouter } from 'react-router-dom';

export default {
  title: "Components/Booking/Popup",
  component: Popup,
  parameters: {
    docs: {
      description: {
        component: "The Popup component is used to display a modal popup window for booking an event."
      }
    }
  }
};

export const Primary = () => (
  <MemoryRouter>
    <Popup img="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F440854699%2F140533847643%2F1%2Foriginal.20230207-112359?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C72%2C1228%2C614&s=a4be3f3cf640cd2791d10eb04df87581" price={0}/>
  </MemoryRouter>
);
