import AboutOrganizer from "./AboutOrganizer";

export default {
    title: "Components/Event Page/AboutOrganizer",
    component: AboutOrganizer
}

export const Primary = (args) => <AboutOrganizer {...args}/>

Primary.args = {
    organizerIcon: "https://via.placeholder.com/56x56.png",
    organizer: "Organizer",
    organizerFollowers: "##"
}

export const Missing = (args) => <AboutOrganizer {...args}/>

Missing.args = {
    organizerIcon: "",
    organizer: "",
    organizerFollowers: ""
}