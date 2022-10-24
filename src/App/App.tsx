import React, { FC, type PropsWithChildren, useRef, useState } from "react";
import { View, FlatList, StatusBar, ListRenderItemInfo, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import { Modalize } from "react-native-modalize";

import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";
import { IGoal } from "../models";
import { styles } from "./styles";

const App: FC<PropsWithChildren> = () => {
  const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);
  const goalInputRef = useRef<Modalize | null>(null);

  const handleAddGoal = (enteredGoalText: string): void => {
    setCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      { text: enteredGoalText.trim(), key: Math.random().toString() },
    ]);
  };

  const handleDelete = (id: string): void => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(({ key }) => key !== id);
    });
  };

  const renderGoalItem = ({ item }: ListRenderItemInfo<IGoal>): JSX.Element => {
    return <GoalItem text={item.text} id={item.key} onDeleteItem={handleDelete} />;
  };

  const handleOpenModalize = (): void => {
    goalInputRef.current?.open();
  };

  const handleCloseModalize = (): void => {
    goalInputRef.current?.close();
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} alwaysBounceVertical={false} renderItem={renderGoalItem} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon="plus-circle-outline"
          mode="outlined"
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={handleOpenModalize}>
          Goal
        </Button>
      </View>
      <GoalInput onAddGoal={handleAddGoal} onCancel={handleCloseModalize} ref={goalInputRef} />
    </SafeAreaView>
  );
};

export { App };
