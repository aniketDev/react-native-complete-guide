import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalAppComponents/GoalItem';
import GoalInput from './components/GoalAppComponents/GoalInput';

export default function GoalApp() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { uid: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.uid !== goalId);
    });
  };

  const onCancelModal = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={onCancelModal}
      />
      <FlatList
        style={styles.listContainer}
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.uid}
            onDelete={deleteGoalHandler}
            itemList={itemData.item}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
    padding: 10,
  },
  listContainer: {
    padding: 10,
    marginBottom: 50,
  },
});
