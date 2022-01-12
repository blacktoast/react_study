import { createGlobalStyle } from "styled-components";
import TodoCreate from "./Components/TodoCreate";
import TodoHead from "./Components/TodoHead";
import TodoList from "./Components/TodoList";
import TodoTemplate from "./Components/TodoTemplate";
import Sample from "./Sample";
import { TodoProvider } from "./TodoContext";
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  let test = "test";
  return (
    <TodoProvider>
      <GlobalStyle></GlobalStyle>
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
