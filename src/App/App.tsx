import React, { FC, useCallback, useRef, useState } from "react";
import { StyleSheet, View, FlatList, StatusBar, Button, ListRenderItemInfo, SafeAreaView } from "react-native";
import { Modalize } from "react-native-modalize";

import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";
import { IGoal } from "../interfaces";

const App: FC = (): JSX.Element => {
  const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);
  const goalInputRef = useRef<Modalize | null>(null);

  const handleAddGoal = useCallback(
    (enteredGoalText: string): void => {
      if (enteredGoalText.trim().length >= 2) {
        setCourseGoals(currentCourseGoal => [
          ...currentCourseGoal,
          { text: enteredGoalText.trim(), key: Math.random().toString() },
        ]);
      }
    },
    [setCourseGoals]
  );

  const handleDelete = useCallback(
    (id: string): void => {
      setCourseGoals(currentCourseGoals => {
        return currentCourseGoals.filter(({ key }) => key !== id);
      });
    },
    [setCourseGoals]
  );

  const renderGoalItem = ({ item }: ListRenderItemInfo<IGoal>): JSX.Element => {
    return <GoalItem text={item.text} id={item.key} onDeleteItem={handleDelete} />;
  };

  const handleOpenModalize = useCallback((): void => {
    goalInputRef.current?.open();
  }, [goalInputRef]);

  const handleCloseModalize = useCallback((): void => {
    goalInputRef.current?.close();
  }, [goalInputRef]);

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.buttonContainer}>
        <Button title="Add New goal" color="#a065ec" onPress={handleOpenModalize} />
      </View>
      <GoalInput onAddGoal={handleAddGoal} onCancel={handleCloseModalize} ref={goalInputRef} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} alwaysBounceVertical={false} renderItem={renderGoalItem} />
      </View>
    </SafeAreaView>
  );
};

export { App };

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
    marginTop: 16,
    marginHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 32,
  },
});
