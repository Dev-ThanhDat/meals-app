import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(data) => (
          <MealItem
            id={data.item.id}
            title={data.item.title}
            imageUrl={data.item.imageUrl}
            affordability={data.item.affordability}
            complexity={data.item.complexity}
            duration={data.item.duration}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

export default MealsOverviewScreen;
