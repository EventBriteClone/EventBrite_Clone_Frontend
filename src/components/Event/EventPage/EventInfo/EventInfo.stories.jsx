import EventInfo from "./EventInfo";

export default {
    title: "Components/Event Page/Event Info",
    component: EventInfo,
    parameters: {
        docs: {
            description: {
                component: "Displays event information such as date, title, and caption."
            }
        }
    }
}

export const Primary = (args) => <EventInfo {...args}/>

Primary.args = {
    date: "Event Date",
    title: "Event Title",
    caption: "Caption"
}
