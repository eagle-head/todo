import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";

import { GoalItemType } from "./types";
import { styles } from "./styles";

const GoalItem: FC<GoalItemType> = (props): JSX.Element => {
  const handleDeleteItem = (id: string): void => {
    props.onDeleteItem(id);
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
