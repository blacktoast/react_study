import React, { useContext } from "react";
import { TodoStateContext, TodoDispatchContext } from "../src/TodoContext";

function Sample() {
  // const dispatch = useContext(TodoDispatchContext);
  return <div onClick={test}>Sample </div>;
}

export default Sample;
