import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

import { IGoalItem } from "../../interfaces";
import { styles } from "./styles";

const GoalItem: FC<IGoalItem> = (props): JSX.Element => {
  const handleDeleteItem = (id: string): void => {
    props.onDeleteItem(id);
  };

  return (
    <TouchableOpacity style={styles.goalItem} onPress={handleDeleteItem.bind(this, props.id)}>
      <Text style={styles.goalText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export { GoalItem };
