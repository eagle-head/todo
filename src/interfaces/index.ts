export interface Goal {
  text: string;
  key: string;
}

export interface GoalInput {
  onAddGoal: (param: string) => void;
  onCancel: () => void;
  isVisible: boolean;
}

export interface GoalItem {
  text: string;
  id: string;
  onDeleteItem: (param: string) => void;
}
