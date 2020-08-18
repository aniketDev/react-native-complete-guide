import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import BodyText from '../../components/GuessNumberApp/BodyText';
import TitleText from '../../components/GuessNumberApp/TitleText';
import Colors from '../../constants/colors';
import MainButton from '../../components/GuessNumberApp/MainButton';

const GameOver = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').width / 1.5,
    borderRadius: Dimensions.get('window').width / (1.5 * 2),
    borderWidth: 3,
    borderColor: 'grey',
    marginVertical: Dimensions.get('window').height / 30
  },
  textContainer: {
    marginVertical: Dimensions.get('window').height / 30
  },
  textNumber: {
    fontSize: Dimensions.get('window').height < 600 ? 20 : 15,
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOver;
