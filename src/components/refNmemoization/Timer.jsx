import React, { useEffect, useRef, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  });

  return (
    <div>
      Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      <button onClick={() => setTimer((prev) => prev + 1)}>Play</button>
    </div>
  );
}

export default Timer;
