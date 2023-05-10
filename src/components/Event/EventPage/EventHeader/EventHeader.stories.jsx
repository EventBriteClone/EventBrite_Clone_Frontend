import EventHeader from "./EventHeader"

export default {
    title: "Components/Event Page/Event Header",
    component: EventHeader,
    parameters: {
        docs: {
            description: {
                component: 'This is the header component for the event page.'
            }
        }
    }
}

export const Primary = (args) => <EventHeader {...args}/>

Primary.args = {img: "https://via.placeholder.com/1200x470.png"}

export const ImageNotFound = () => <EventHeader/>
