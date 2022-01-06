import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    console.log(number, setNumber);
    setNumber((a) => {
      return a + 1;
    });
  };
  const onDecrease = () => {
    console.log(setNumber());
    setNumber((number) => number - 1);
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
