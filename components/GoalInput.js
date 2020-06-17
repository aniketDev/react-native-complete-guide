import React, { useState } from 'react';
import { TextInput, StyleSheet, Modal, Button, View } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const onGoalAdd = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    // <Modal visible={false}>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title="Click here"
        // onPress={props.onAddGoal.bind(this, enteredGoal)}
        onPress={onGoalAdd}
      />
    </View>
    // </Modal>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GoalInput;
