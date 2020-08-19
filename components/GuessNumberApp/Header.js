import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import Colors from '../../constants/colors';

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
    backgroundColor: Platform.OS === 'android' ? Colors.accent : Colors.primary,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'ios' ? 'transparent' : '#ccc',
    borderBottomWidth: Platform.OS === 'ios' ? 0 : 5
  },
  headerText: {
    color: 'black',
    fontSize: 18
  }
});
