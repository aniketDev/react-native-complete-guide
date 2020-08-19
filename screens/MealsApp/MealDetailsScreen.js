import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Detail me!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailsScreen;
