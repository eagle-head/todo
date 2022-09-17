import React, { forwardRef, useState } from "react";
import { View, TextInput, Button, Image, Platform } from "react-native";
import { Modalize } from "react-native-modalize";

import { styles } from "./styles";
import { IGoalInput } from "../../interfaces";

const GoalInput = forwardRef<Modalize, IGoalInput>(({ onCancel, onAddGoal }, ref): JSX.Element => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  const handleGoalInput = (enteredText: string): void => {
    setEnteredGoalText(enteredText);
  };

  const handleAddInputGoal = (): void => {
    onCancel();

    if (enteredGoalText.trim().length < 2) {
      // aqui entra logica do modal de alerta
      return;
    }

    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  const handleCancelButton = (): void => {
    onCancel();
    setEnteredGoalText("");
  };

  return (
    <Modalize
      keyboardAvoidingBehavior={Platform.OS === "ios" ? "padding" : "height"}
      ref={ref}
      modalStyle={styles.modalStyle}
      adjustToContentHeight>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../../assets/images/goal.png")} />
        <TextInput
          autoFocus
          style={styles.textInput}
          placeholder="Your text goal..."
          placeholderTextColor="#b180f0"
          onChangeText={handleGoalInput}
          value={enteredGoalText}
          returnKeyType="done"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleAddInputGoal} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleCancelButton} color="#f31282" />
          </View>
        </View>
      </View>
    </Modalize>
  );
});

export { GoalInput };
