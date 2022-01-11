import React, { useReducer, useState } from "react";

function reducerForCounter(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
function Counter() {
  const [number, setNumber] = useReducer(reducerForCounter, 0);
  const onIncrease = () => {
    setNumber({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    setNumber({ type: "DECREMENT" });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
