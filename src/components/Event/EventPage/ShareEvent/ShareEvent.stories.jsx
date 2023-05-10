import ShareEvent from "./ShareEvent";

export default {
    title: "Components/Event Page/Share Event",
    component: ShareEvent,
    parameters: {
        docs: {
            description: {
                component: 'Variety of platforms to share event.'
            }
        }
    }
}

export const Primary = (args) => <ShareEvent/>