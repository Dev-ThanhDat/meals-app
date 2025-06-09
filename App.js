import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style='light' />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories'
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            options={({ route }) => {
              const { categoryId } = route.params;
              return {
                title: categoryId ? `Meals in ${categoryId}` : 'Meals Overview'
              };
            }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            options={{
              title: 'Meal Detail'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
