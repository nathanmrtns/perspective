import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../button";

describe("Button", () => {
  it("Renders a button with colors given in properties", () => {
    render(<Button id="123" text="Hello" color="#0076FF" bgColor="white" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle("color: #0076FF");
    expect(button).toHaveStyle("backgroundColor: white");
    expect(button).toHaveTextContent("Hello");
  });
});
