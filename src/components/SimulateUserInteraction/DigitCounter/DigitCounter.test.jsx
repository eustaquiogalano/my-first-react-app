import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import DigitCounter from "./DigitCounter";
import userEvent from "@testing-library/user-event";

describe("Testing Digital Counter ", () => {
  test("increment on button click", async () => {
    render(<DigitCounter />);

    // get the increment button
    const increment = screen.getByText("Increment");
    const testID = screen.getByTestId("count");

    await userEvent.click(increment);

    expect(testID.textContent).toEqual("1");
  });

  // GET BACK HERE!!!!
  // testing callbacks
});
