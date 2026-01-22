import { useState } from "react";

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
      <h2 data-testid="count">{count}</h2>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default DigitCounter;
