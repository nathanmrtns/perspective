import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "../text";

describe("Text", () => {
  it("Renders a text with colors given in properties", () => {
    render(<Text id="123" text="Hello" color="#0076FF" align="right" />);

    const text = screen.getByText("Hello");

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle("color: #0076FF");
    expect(text).toHaveClass("text-right");
  });
});
