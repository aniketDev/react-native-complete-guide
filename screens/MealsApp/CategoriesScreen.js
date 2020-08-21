import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>Meals app me!</Text>
      <Button
        title="Go to meals"
        onPress={() => {
          // props.navigation.navigate('CategoryMeals');
          props.navigation.replace('CategoryMeals');
        }}
      />
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

export default CategoriesScreen;
