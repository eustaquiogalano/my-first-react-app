import React, { useReducer } from "react";

const initialState = {
  initialCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { initialCount: state.initialCount + 1 };
    case "deccrement":
      return { initialCount: state.initialCount - 1 };
    case "reset":
      return initialState;
    default:
      break;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [bilang, galawan] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <p>{count.initialCount}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "deccrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <p>{bilang.initialCount}</p>
        <button onClick={() => galawan({ type: "increment" })}>+</button>
        <button onClick={() => galawan({ type: "deccrement" })}>-</button>
        <button onClick={() => galawan({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
