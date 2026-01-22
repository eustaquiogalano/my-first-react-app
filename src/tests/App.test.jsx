import { describe, it, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./../App";
import MouseCirclePointer from "../components/MouseCirclePointer/MouseCirclePointer";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it("render App", () => {
    render(<App />);

    // screen.debug();
  });

  it("render mcp", () => {
    render(<MouseCirclePointer />);

    const checkbox = screen.getByRole("checkbox", {
      name: "The dot is allowed to move",
    });

    expect(checkbox).toBeInTheDocument();
  });
});

describe("render practice", () => {
  test("render label", () => {
    // render the component
    render(<MouseCirclePointer />);

    // 1
    // dislay dom in the console
    // screen.debug();

    // assertions
    // expect(screen.getByText("The dot is allowed to move")).toBeInTheDocument();

    // 2
    const listElement = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    // assertions again
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass("apostles");
    expect(listItems.length).toEqual(4);
  });
});
