export interface IGoal {
  text: string;
  key: string;
}

export interface IGoalInput {
  onAddGoal: (param: string) => void;
  onCancel: () => void;
  isVisible: boolean;
}

export interface IGoalItem {
  text: string;
  id: string;
  onDeleteItem: (param: string) => void;
}
