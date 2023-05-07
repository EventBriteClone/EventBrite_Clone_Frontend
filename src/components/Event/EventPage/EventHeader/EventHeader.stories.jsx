import EventHeader from "./EventHeader"

export default {
    title: "Components/Event Page/Event Header",
    component: EventHeader
}

export const Primary = (args) => <EventHeader {...args}/>

Primary.args = {img: "https://via.placeholder.com/1200x470.png"}

export const ImageNotFound = () => <EventHeader/>