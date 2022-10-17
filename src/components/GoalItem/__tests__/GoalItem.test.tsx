import React from "react";
import { fireEvent, render, screen, waitForElementToBeRemoved } from "test-utils";

import GoalItem from "..";

describe("GoalItem:", () => {
  test("Goal should renders correctly", () => {
    render(<GoalItem id="test-goal-item" onDeleteItem={jest.fn()} text="React Native" />);

    expect(screen.getByText(/react native/i)).toBeTruthy();
  });

  test("Portal Warning should renders", async () => {
    render(<GoalItem id="test-goal-item" onDeleteItem={jest.fn()} text="React Native" />);

    fireEvent.press(screen.getByText(/react native/i));

    const portalElement = await screen.findByText(/warning/i);
    expect(portalElement).toBeTruthy();
  });

  test("Portal Warning should disappear after press cancel button", async () => {
    render(<GoalItem id="test-goal-item" onDeleteItem={jest.fn()} text="React Native" />);
    fireEvent.press(screen.getByText(/react native/i));

    const portalCancelButton = await screen.findByText(/cancel/i);
    fireEvent.press(portalCancelButton);

    await waitForElementToBeRemoved(() => screen.getByText(/cancel/i));

    const portalElement = screen.getByText(/react native/i);
    expect(portalElement).toBeTruthy();
  });
});
