import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  return (
    <TextInput
      placeholder="Course goal"
      style={styles.textInput}
      onChangeText={props.goalInputHandler}
      value={props.enteredGoal}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingVertical: 3,
    marginHorizontal: 10,
    flex: 1,
  },
});

export default GoalInput;
