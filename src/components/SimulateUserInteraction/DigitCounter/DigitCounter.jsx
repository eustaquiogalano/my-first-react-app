// This is a practice file for simulating user interaction
// this component is used only for testing

import { useState } from "react";
import CountDisplay from "../CounDisplay/CountDisplay";

function DigitCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev) => ++prev);
  }

  function handleDecrement() {
    setCount((prev) => --prev);
  }

  return (
    <div>
      <CountDisplay count={count} />
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default DigitCounter;
