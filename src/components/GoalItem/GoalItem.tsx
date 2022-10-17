import React, { FC, useState, type PropsWithChildren } from "react";
import { Text, TouchableOpacity } from "react-native";

import Dialog from "../Dialog";
import { IGoalItem } from "../../models";
import { styles } from "./styles";

const GoalItem: FC<PropsWithChildren<IGoalItem>> = ({ id, onDeleteItem, text }) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleDeleteItem = (): void => {
    setIsDialogVisible(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.goalItem} onPress={handleDeleteItem}>
        <Text style={styles.goalText}>{text}</Text>
      </TouchableOpacity>
      <Dialog isVisible={isDialogVisible} setIsVisible={setIsDialogVisible} onDelete={onDeleteItem.bind(this, id)} />
    </>
  );
};

export { GoalItem };
