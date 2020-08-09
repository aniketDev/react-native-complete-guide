import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../../components/GuessNumberApp/BodyText';
import TitleText from '../../components/GuessNumberApp/TitleText';
import Colors from '../../constants/colors';
import MainButton from '../../components/GuessNumberApp/MainButton';

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText> The game is over</TitleText>
      <Image
        source={require('../../assets/success.png')}
        // source={{
        //   uri:
        //     'https://www.fujifilm.in/globalassets/digital_cameras/x/fujifilm_x_t3/sample_images/img/index/ff_x_t3_002.jpg'
        // }}
        style={styles.image}
        resizeMode="cover"
      />
      <BodyText style={styles.textContainer}>
        Number of rounds:{' '}
        <Text style={styles.textNumber}>{props.roundsNumber}</Text> Number was{' '}
        <Text style={styles.textNumber}>{props.userNumber}</Text>
      </BodyText>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'grey',
    marginVertical: 10
  },
  textContainer: {
    marginVertical: 10
  },
  textNumber: {
    fontSize: 16,
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOver;
