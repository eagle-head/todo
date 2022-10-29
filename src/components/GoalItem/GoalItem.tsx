import React, { FC, useState, type PropsWithChildren } from "react";
import { Text, TouchableOpacity } from "react-native";
import Dialog from "../Dialog";
import { styles } from "./styles";

interface IGoalItem {
  text: string;
  onDeleteItem: () => void;
}

const GoalItem: FC<PropsWithChildren<IGoalItem>> = ({ onDeleteItem, text }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <TouchableOpacity style={styles.goalItem} onPress={setVisible.bind(this, true)}>
        <Text style={styles.goalText}>{text}</Text>
      </TouchableOpacity>
      <Dialog isVisible={visible} setIsVisible={setVisible} onDelete={onDeleteItem} />
    </>
  );
};

export { GoalItem };
