import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';
import NumberContainer from '../GuessNumberApp/NumberContainer';
import Card from '../GuessNumberApp/Card';
import DefaultStyles from '../../constants/defaut-styles';
import MianButton from './MainButton';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import BodyText from '../GuessNumberApp/BodyText';
// import { ScreenOrientation } from 'expo';
import * as ScreenOrientation from 'expo-screen-orientation';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNum;
};

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = (props) => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  const { userChoice, onGameOver } = props;
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const [availableHeight, setAvailableHeight] = useState(
    Dimensions.get('window').height
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', () => updateLayout);

    return () => {
      Dimensions.removeEventListener('change', () => updateLayout);
    };
  });

  useEffect(() => {
    if (currentGuess === userChoice) {
      props.onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie", 'You know it is wrong', [
        { text: 'Sorry!', style: 'cancel' }
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds((currentRounds) => currentRounds + 1);
    setPastGuesses((pastGuesses) => [nextNumber.toString(), ...pastGuesses]);
  };

  if (availableHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text style={DefaultStyles.titleText}>Opponent's Guess</Text>
        <Card style={styles.buttonContainer}>
          <MianButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <MaterialIcons name="remove" size={24} color="white" />
          </MianButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <MianButton onPress={() => nextGuessHandler('greater')}>
            <MaterialIcons name="add" size={24} color="white" />
          </MianButton>
        </Card>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item) => item}
            data={pastGuesses}
            contentContainerStyle={styles.list}
            renderItem={renderListItem.bind(this, pastGuesses.length)}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.titleText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MianButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <MaterialIcons name="remove" size={24} color="white" />
        </MianButton>
        <MianButton onPress={() => nextGuessHandler('greater')}>
          <MaterialIcons name="add" size={24} color="white" />
        </MianButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          contentContainerStyle={styles.list}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
    width: '80%'
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  listContainer: {
    flexGrow: 1,
    height: Dimensions.get('window').height > 600 ? '60%' : '40%',
    width: '80%'
  },
  list: {
    // alignItems: 'center'
  }
});

export default GameScreen;
