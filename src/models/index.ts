export interface IGoal {
  text: string;
  key: string;
}

export interface IGoalInput {
  onAddGoal: (param: string) => void;
  onCancel: () => void;
}

export interface IGoalItem {
  text: string;
  id: string;
  onDeleteItem: (param: string) => void;
}

export interface IDialog {
  isVisible: boolean;
  setIsVisible: (arg: boolean) => void;
  onDelete: () => void;
}
