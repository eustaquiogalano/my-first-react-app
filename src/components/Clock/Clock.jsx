import React, { useState, useEffect } from "react";
import "./Clock.module.css";

function Clock() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    setInterval(() => {
      addCount();
      document.title = `Seconds passed ${count}`;
    }, 1000);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={addCount}>Click to add 1</button>
    </div>
  );
}

export default Clock;
