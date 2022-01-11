import { createGlobalStyle } from "styled-components";
import TodoHead from "./Components/TodoHead";
import TodoList from "./Components/TodoList";
import TodoTemplate from "./Components/TodoTemplate";
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  let test = "test";
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div>
        {test}
        <TodoTemplate>
          <TodoHead></TodoHead>
          <TodoList></TodoList>
        </TodoTemplate>
      </div>
    </>
  );
}

export default App;
