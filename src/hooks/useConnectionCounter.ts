import { useEffect, useState, useRef } from "react";
import { OutlineStatus, useOutline } from "../providers/OutlineProvider";

export const useConnectionCounter = () => {
  const { status } = useOutline();
  const [timer, setTimer] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const id = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (status === OutlineStatus.connected) {
      id.current = setInterval(() => {
        setTimer((timer) => {
          if (timer.seconds === 59)
            return {
              ...timer,
              seconds: 0,
              minutes: timer.minutes + 1,
            };

          if (timer.minutes === 59)
            return {
              ...timer,
              minutes: 0,
              hours: timer.hours + 1,
            };

          return {
            ...timer,
            seconds: timer.seconds + 1,
          };
        });
      }, 1000);
    } else {
      clearInterval(id.current);
    }

    return () => clearInterval(id.current);
  }, [status]);

  return {
    hours: timer.hours < 10 ? `0${timer.hours}` : timer.hours,
    minutes: timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes,
    seconds: timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds,
  };
};
