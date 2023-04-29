import EventInfo from "./EventInfo";

export default {
    title: "Components/Event Page/Event Info",
    component: EventInfo
}

export const Primary = (args) => <EventInfo {...args}/>

Primary.args = {
    date: "Event Date",
    title: "Event Title",
    caption: "Caption"
}