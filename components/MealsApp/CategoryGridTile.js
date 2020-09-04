import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from 'react-native';

const CategoryGridTile = (props) => {
  let TouchableContainer = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableContainer = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableContainer onPress={props.onSelect}>
        <View style={{ ...styles.card, backgroundColor: props.color }}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 120,
    borderRadius: 10,
    overflow: 'hidden'
  },
  card: {
    flex: 1,
    elevation: 3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    color: 'white',
    fontSize: 20
  }
});

export default CategoryGridTile;
