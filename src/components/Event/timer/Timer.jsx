import { useState, useEffect } from "react";

function Timer({ onTimerEnd }) {
  const [timer, setTimer] = useState(1800);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      onTimerEnd();
    }
  }, [timer, onTimerEnd]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <p>
      {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
    </p>
  );
}

export default Timer;
