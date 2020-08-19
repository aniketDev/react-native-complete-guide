import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import Colors from '../../constants/colors';

export const Header = (props) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.HeaderAndroid
        })
      }}
    >
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: 30,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerIOS: {
    backgroundColor: Colors.accent
    // borderBottomColor: 'transparent',
    // borderBottomWidth: 0
  },
  HeaderAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: '#ccc',
    borderBottomWidth: 5
  },
  headerText: {
    color: 'black',
    fontSize: 18
  }
});
