import { describe, it, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import UserDashboard from "./UserDashboard";

describe("Test UserDashboard component", () => {
  test("loading in the screen", async () => {
    render(<UserDashboard />);

    const loading = screen.getByText("loading...");
    expect(loading).toBeInTheDocument();
  });
});
