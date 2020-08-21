import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GoalApp from './GoalApp';
import GuessNumberApp from './GuessNumberApp';
import MealsApp from './MealsApp';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MealsApp />;
}

const styles = StyleSheet.create({});
