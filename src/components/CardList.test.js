import React from "react";
import CardList from "./CardList";
import { render, cleanup } from "@testing-library/react";

describe("Card Component", () => {
  afterEach(cleanup);

  test("should render layout correctely passing name, email and id props dynamically", async () => {
    const mockRobot = [
      {
        name: "Dynamic name",
        email: "vsallesa@gmail.com",
        id: "10",
      },
      {
        name: "Dynamic name2",
        email: "email@gmail.com",
        id: "11",
      },
    ];

    expect(render(<CardList robots={mockRobot} />)).toMatchSnapshot();
  });
});
