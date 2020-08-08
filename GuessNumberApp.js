import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { Header } from './components/GuessNumberApp/Header';
import StartGameScreen from './screens/StartGameScreen';

const GuessNumberApp = (props) => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
  }
});

export default GuessNumberApp;
