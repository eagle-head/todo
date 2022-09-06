import React, { FC, useState } from "react";
import { View, TextInput, Button, Modal, Image } from "react-native";

import { styles } from "./styles";
import { GoalInputType } from "./types";

const GoalInput: FC<GoalInputType> = (props): JSX.Element => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  const goalInputHandler = (enteredText: string): void => {
    setEnteredGoalText(enteredText);
  };

  const addInputGoalHandler = (): void => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your text goal..."
          placeholderTextColor="#b180f0"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addInputGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export { GoalInput };
