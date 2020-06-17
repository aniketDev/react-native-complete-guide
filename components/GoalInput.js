import React from 'react';
import { TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
  return (
    <Modal visible={false}>
      <TextInput
        placeholder="Course goal"
        style={styles.textInput}
        onChangeText={props.goalInputHandler}
        value={props.enteredGoal}
      />
    </Modal>
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
