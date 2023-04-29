import Organizer from "./Organizer"

export default {
    title: "Components/Event Page/Organizer",
    component: Organizer
}

export const Primary = (args) => <Organizer {...args}/>

Primary.args = {
    organizerIcon: "https://via.placeholder.com/56x56.png",
    organizer: "Organizer",
    organizerFollowers: "0000"
}

export const IncompleteInfo = () => <Organizer/>