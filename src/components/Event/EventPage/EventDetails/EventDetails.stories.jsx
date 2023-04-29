import EventDetails from "./EventDetails";

export default {
    title: "Components/Event Page/EventDetails",
    component: EventDetails
}

export const Primary = (args) => <EventDetails {...args}/>

Primary.args = {
    dateAndtime: "/Date and Time/",
    location: "/Location/",
    duration: "XXXX Hour(s)",
    ticket: "/Ticket/"
}