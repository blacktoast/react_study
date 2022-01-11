import { render, screen } from "@testing-library/react";
import TodoHead from "./TodoHead";

test("Todo Head test", () => {
  let test = 4;

  render(<TodoHead test={test}></TodoHead>);

  screen.debug();
});
