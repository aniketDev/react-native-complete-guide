import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    /* shadow properties only work with android */
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    /* only works on android */
    elevation: 5,
    padding: 20,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    borderRadius: 10
  }
});

export default Card;
