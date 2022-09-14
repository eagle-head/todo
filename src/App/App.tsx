import React, { FC, useState } from "react";
import { StyleSheet, View, FlatList, StatusBar, Button, ListRenderItemInfo, SafeAreaView } from "react-native";

import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";
import { IGoal } from "../interfaces";

const App: FC = (): JSX.Element => {
  const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const addGoalHandler = (enteredGoalText: string): void => {
    if (enteredGoalText.trim().length >= 2) {
      setCourseGoals(currentCourseGoal => [
        ...currentCourseGoal,
        { text: enteredGoalText.trim(), key: Math.random().toString() },
      ]);
    }

    setModalIsVisible(false);
  };

  const deleteHandler = (id: string): void => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(({ key }) => key !== id);
    });
  };

  const startAddGoalHandler = (): void => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = (): void => {
    setModalIsVisible(false);
  };

  const renderGoalItem = ({ item }: ListRenderItemInfo<IGoal>): JSX.Element => {
    return <GoalItem text={item.text} id={item.key} onDeleteItem={deleteHandler} />;
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle="light-content" />
      <Button title="Add New goal" color="#a065ec" onPress={startAddGoalHandler} />
      <GoalInput onAddGoal={addGoalHandler} isVisible={modalIsVisible} onCancel={endAddGoalHandler} />
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
    // paddingTop: 50,
    // paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
    marginTop: 16,
  },
});
