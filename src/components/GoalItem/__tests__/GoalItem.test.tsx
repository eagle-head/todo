import React from "react";
import GoalItem from "..";
import { render } from "@testing-library/react-native";

describe("GoalItem:", () => {
  it("should renders correctly", () => {
    const mockFunction = jest.fn();

    render(<GoalItem id="test-goal-item" onDeleteItem={mockFunction} text="React Native" />);
  });
});
