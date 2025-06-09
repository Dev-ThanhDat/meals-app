import { FlatList, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const pressHandler = (categoryId) => {
    navigation.navigate('MealsOverview', { categoryId });
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(data) => (
        <CategoryGridTile
          title={data.item.title}
          color={data.item.color}
          onPress={() => pressHandler(data.item.id)}
        />
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
