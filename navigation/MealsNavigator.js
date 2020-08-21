import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/MealsApp/CategoriesScreen';
import CategoryMealsScreen from '../screens/MealsApp/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealsApp/MealDetailsScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetails: MealDetailsScreen
});

export default createAppContainer(MealsNavigator);
