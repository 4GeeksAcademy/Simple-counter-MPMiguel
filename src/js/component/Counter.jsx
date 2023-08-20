import React, { useEffect, useState } from "react";
import Board from "./Board";

function Counter() {
  let [counter, setCounter] = useState(0);

  const days = Math.floor(counter / (60 * 60 * 24));
  const hours = Math.floor((counter / (60 * 60)) % 24);
  const minutes = Math.floor((counter / 60) % 60);
  const seconds = counter % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return <Board days={days} hours={hours} minutes={minutes} seconds={seconds} />;
}

export default Counter;