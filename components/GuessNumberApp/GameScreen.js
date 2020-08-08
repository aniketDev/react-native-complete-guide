import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumberContainer from '../GuessNumberApp/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const randomNum = Math.floor(Math.random() * (min - max)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNum;
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  return (
    <View>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;
