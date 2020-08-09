import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../../components/GuessNumberApp/BodyText';
import TitleText from '../../components/GuessNumberApp/TitleText';

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText> The game is over</TitleText>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was {props.userNumber}</BodyText>
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
