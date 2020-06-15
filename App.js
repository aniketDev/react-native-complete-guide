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
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { uid: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoal('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <GoalInput
          enteredGoal={enteredGoal}
          goalInputHandler={goalInputHandler}
        />
        <Button title="Click here" onPress={addGoalHandler}></Button>
      </View>
      <FlatList
        style={styles.listContainer}
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={(itemList) => <GoalItem itemList={itemList.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 10,
    marginBottom: 50,
  },
});
