import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlockRenderer from "../blockRenderer";

describe("BlockRenderer", () => {
  it("Renders a button", () => {
    render(
      <BlockRenderer
        blocks={[
          {
            id: "218fb0f6146b4728ad0b19e3b1084awd",
            type: "button",
            text: "Nice Menu!",
            color: "white",
            bgColor: "#0076FF",
          },
        ]}
      />
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Renders a text", () => {
    render(
      <BlockRenderer
        blocks={[
          {
            id: "b5e08d664867419a85c40d333ca4a123",
            type: "text",
            text: "Check out our awesome menu!",
            color: "#202020",
            align: "center",
          },
        ]}
      />
    );

    const text = screen.getByText("Check out our awesome menu!");

    expect(text).toBeInTheDocument();
  });

  it("Renders an image", () => {
    render(
      <BlockRenderer
        blocks={[
          {
            id: "9f2f25ad177843b6b7fc81811b4f0456",
            type: "image",
            src: "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
          },
        ]}
      />
    );

    const displayedImage = document.querySelector("img") as HTMLImageElement;

    expect(displayedImage).toBeInTheDocument();
  });

  it("Renders a list", () => {
    render(
      <BlockRenderer
        blocks={[
          {
            id: "6dc5ca19c11d4314bba0905de6c9dc07",
            type: "list",
            items: [
              {
                title: "Drinks",
                description: "Tshhh... Ahhhhh!",
                src: "https://img.icons8.com/0076FF/win10/247/kawaii-soda",
              },
              {
                title: "Icecream",
                description: "Cool down ...",
                src: "https://img.icons8.com/0076FF/win10/247/kawaii-cupcake",
              },
            ],
          },
        ]}
      />
    );

    const item1Title = screen.getByText("Drinks");
    const item1Description = screen.getByText("Tshhh... Ahhhhh!");

    expect(item1Title).toBeInTheDocument();
    expect(item1Description).toBeInTheDocument();

    const item2Title = screen.getByText("Icecream");
    const item2Description = screen.getByText("Cool down ...");

    expect(item2Title).toBeInTheDocument();
    expect(item2Description).toBeInTheDocument();
  });
});
