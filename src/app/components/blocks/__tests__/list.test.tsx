import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../list";

describe("List", () => {
  it("Renders a list with items", () => {
    render(
      <List
        id="123"
        items={[
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
        ]}
      />
    );

    const item1Title = screen.getByText("Drinks");
    const item1Description = screen.getByText("Tshhh... Ahhhhh!");
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage).toBeInTheDocument();
    expect(item1Title).toBeInTheDocument();
    expect(item1Description).toBeInTheDocument();

    const item2Title = screen.getByText("Icecream");
    const item2Description = screen.getByText("Cool down ...");
    expect(item2Title).toBeInTheDocument();
    expect(item2Description).toBeInTheDocument();
  });
});
