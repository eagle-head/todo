import "react-native";
import React from "react";
import { fireEvent, render, screen, waitForElementToBeRemoved } from "test-utils";

import { App } from "../App";

describe("App tests", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should render correctly", () => {
    render(<App />);

    const button = screen.getByText(/goal/i);

    expect(button).toBeTruthy();
  });

  it("should click button and open input modal", async () => {
    render(<App />);

    const GoalButton = screen.getByText(/goal/i);

    fireEvent.press(GoalButton);

    const ModalInput = await screen.findByPlaceholderText(/your text goal.../i);
    const ModalCancelButton = await screen.findByText(/cancel/i);
    const ModalConfirmButton = await screen.findByText(/add goal/i);
    expect(ModalInput).toBeTruthy();
    expect(ModalCancelButton).toBeTruthy();
    expect(ModalConfirmButton).toBeTruthy();
  });

  it("should hide Input Modal after click on Cancel Button", async () => {
    render(<App />);

    const GoalButton = screen.getByText(/goal/i);
    fireEvent.press(GoalButton);

    const ModalCancelButton = await screen.findByText(/cancel/i);
    fireEvent.press(ModalCancelButton);
    await waitForElementToBeRemoved(() => screen.getByText(/cancel/i));

    expect(screen.queryByText(/cancel/i)).toBeNull();
  });

  it("should create a goal item", async () => {
    render(<App />);

    const GoalButton = screen.getByText(/goal/i);
    fireEvent.press(GoalButton);

    fireEvent.changeText(screen.getByPlaceholderText(/your text goal.../i), "React Native");

    const ModalConfirmButton = await screen.findByText(/add goal/i);
    fireEvent.press(ModalConfirmButton);
    await waitForElementToBeRemoved(() => screen.getByText(/add goal/i));

    const GoalItem = screen.getByText(/react native/i);
    expect(GoalItem).toBeTruthy();
  });

  it("should not create a goal item, must be at least 2 characters long!", async () => {
    render(<App />);

    const GoalButton = screen.getByText(/goal/i);
    fireEvent.press(GoalButton);

    fireEvent.changeText(screen.getByPlaceholderText(/your text goal.../i), "R");
    const ModalConfirmButton = await screen.findByText(/add goal/i);
    fireEvent.press(ModalConfirmButton);

    const GoalItem = await screen.findByText(/must be at least 2 characters long!/i);
    expect(GoalItem).toBeTruthy();
  });

  it("should not delete Goal Item after click on it", async () => {
    const { debug } = render(<App />);

    const GoalButton = screen.getByText(/goal/i);
    fireEvent.press(GoalButton);

    fireEvent.changeText(screen.getByPlaceholderText(/your text goal.../i), "React Native");

    const ModalConfirmButton = await screen.findByText(/add goal/i);
    fireEvent.press(ModalConfirmButton);

    const GoalItem = await screen.findByText(/react native/i);
    fireEvent.press(GoalItem);

    const DeleteGoalItemButton = await screen.findByText(/ok/i);
    fireEvent.press(DeleteGoalItemButton);

    const DeletedItem = screen.queryByText(/react native/i);
    expect(DeletedItem).toBeNull();
  });
});
