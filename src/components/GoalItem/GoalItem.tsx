import React, { FC } from "react";
import { View, Text, Pressable, Alert } from "react-native";

import { IGoalItem } from "../../interfaces";
import { styles } from "./styles";

const GoalItem: FC<IGoalItem> = (props): JSX.Element => {
  const handleDeleteItem = (id: string): void => {
    Alert.alert("Warning", "Are you sure you want to delete this item?", [
      {
        text: "Yes",
        onPress: () => {
          props.onDeleteItem(id);
        },
      },
      { text: "No" },
    ]);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={handleDeleteItem.bind(this, props.id)}
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export { GoalItem };
