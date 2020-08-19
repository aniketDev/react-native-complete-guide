import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
import Colors from '../../constants/colors';

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ borderRadius: 10, overflow: 'hidden' }}>
      <ButtonComponent activeOpacity={0.7} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15
    // borderRadius: 10
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'open-sans'
  }
});

export default MainButton;
