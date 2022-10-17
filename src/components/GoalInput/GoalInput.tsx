import React, { forwardRef, useState } from "react";
import { View, TextInput, Image, Platform } from "react-native";
import { Modalize } from "react-native-modalize";
import { Button, Snackbar } from "react-native-paper";

import { styles } from "./styles";
import { IGoalInput } from "../../models";

const GoalInput = forwardRef<Modalize, IGoalInput>(({ onCancel, onAddGoal }, ref) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");
  const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false);

  const onToggleSnackBar = (): void => setIsSnackbarVisible(!isSnackbarVisible);

  const onDismissSnackBar = (): void => setIsSnackbarVisible(false);

  const handleGoalInput = (enteredText: string): void => setEnteredGoalText(enteredText);

  const handleAddInputGoal = (): void => {
    onCancel();

    if (enteredGoalText.trim().length < 2) {
      return onToggleSnackBar();
    }

    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  const handleCancelButton = (): void => {
    onCancel();
    setEnteredGoalText("");
  };

  return (
    <>
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
            <Button
              style={styles.buttonCancel}
              labelStyle={styles.buttonTextCancel}
              mode="text"
              onPress={handleCancelButton}>
              Cancel
            </Button>
            <Button
              style={styles.buttonGoal}
              labelStyle={styles.buttonTextGoal}
              mode="text"
              onPress={handleAddInputGoal}>
              Add Goal
            </Button>
          </View>
        </View>
      </Modalize>
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {},
        }}>
        Must be at least 2 characters long!
      </Snackbar>
    </>
  );
});

export { GoalInput };
