import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    marginVertical: 10,
    padding: 7,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 25,
    color: Colors.primary
  }
});

export default NumberContainer;
