import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "deccrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      break;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("deccrement")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default Counter;
