import React from "react";
import GoalItem from "..";
import { render, screen } from "@testing-library/react-native";

describe("GoalItem:", () => {
  it("should renders correctly", () => {
    const mockFunction = jest.fn();

    render(<GoalItem id="test-goal-item" onDeleteItem={mockFunction} text="React Native" />);
  });

  it("should get label text item", () => {
    const handleDeleteItemMock = jest.fn();

    render(<GoalItem id="test-goal-item" onDeleteItem={handleDeleteItemMock} text="Learn React Native" />);

    const element = screen.getByText(/learn react native/i);

    expect(element).toBeTruthy();
  });
});
