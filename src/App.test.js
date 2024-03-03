import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("check Edit text", () => {
  render(<App />);
  let editText = screen.getByText(/Edit/i);
  expect(editText).toBeInTheDocument();
});
