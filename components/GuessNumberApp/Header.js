import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: 30,
    backgroundColor: '#f7287b',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 18,
  },
});
