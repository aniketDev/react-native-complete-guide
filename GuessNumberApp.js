import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, SafeAreaView } from 'react-native';
import { Header } from './components/GuessNumberApp/Header';
import StartGameScreen from './screens/StartGameScreen';

import GameScreen from './components/GuessNumberApp/GameScreen';
import GameOverScreen from './components/GuessNumberApp/GameOver';

const GuessNumberApp = (props) => {
  const [userNumber, setUserNumber] = useState();
  const [numOfRounds, setNumOfRounds] = useState(0);

  const configureNewGame = () => {
    setNumOfRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setNumOfRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setNumOfRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && numOfRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (numOfRounds > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={numOfRounds}
        onRestart={configureNewGame}
      />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flexGrow: 1
  }
});

export default GuessNumberApp;
