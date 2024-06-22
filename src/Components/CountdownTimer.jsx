import React, { useEffect, useState } from "react";

const CountdownTimer = ({ hours = 1, minutes = 1, seconds = 0 }) => {
  const [time, setTime] = useState({ hours, minutes, seconds });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(interval);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const displayTime = `${time.hours}:${
    time.minutes < 10 ? `0${time.minutes}` : time.minutes
  }:${time.seconds < 10 ? `0${time.seconds}` : time.seconds}`;

  return <div style={{ fontSize: "40px", color: "red" }}>{displayTime}</div>;
};

export default CountdownTimer;
