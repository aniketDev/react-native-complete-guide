import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text> The game is over</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOver;
