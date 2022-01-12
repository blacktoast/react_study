import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
function TodoList(props) {
  const todos = useTodoState();
  console.log(todos);
  return (
    <TodoListBlock>
      {todos.map((todo) => {
        return (
          <TodoItem
            text={todo.text}
            done={todo.done}
            key={todo.id}
            id={todo.id}
          ></TodoItem>
        );
      })}
    </TodoListBlock>
  );
}

export default TodoList;
