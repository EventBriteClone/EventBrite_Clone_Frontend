import EventDetails from "./EventDetails";

export default {
    title: "Components/Event Page/EventDetails",
    component: EventDetails,
    parameters: {
        docs: {
            description: {
                component: 'Displays date, time and location of the event'
            }
        }
    }
}

export const Primary = (args) => <EventDetails {...args}/>

Primary.args = {
    dateAndtime: "/Date and Time/",
    location: "/Location/",
    duration: "XXXX Hour(s)",
    ticket: "/Ticket/"
}