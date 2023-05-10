import Timer from "./Timer"

export default {
    title: "Components/Booking/Timer",
    component: Timer
}

export const Primary = () => <Timer/>

export const Timeout = () => {
    return (
      <p>
        00:00
      </p>
    );
}