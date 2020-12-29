import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Overlay, Button } from 'react-native-elements';
import { CATEGORIES } from '../data';

const Categories = (props) => {
  const { handleCategoryChanges, handleShowCategories } = props;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(CATEGORIES);
  }, []);

  const handleOnPress = (category) => {
    const selectCategory = categories.map((cat) => {
      if (cat.id === category.id) {
        return { ...category, selected: !cat.selected };
      }
      return cat;
    });
    setCategories(selectCategory);
  };

  const saveCategories = () => {
    const selectedCategories = categories.filter((cat) => !!cat.selected);
    handleCategoryChanges(selectedCategories);
    handleShowCategories();
  };

  return (
    <Overlay overlayStyle={overlayStyle} isVisible>
      <View>
        <View style={styles.headerContainer}>
          <Text style={[styles.text, styles.heading, styles.white]}>
            Kategorien
          </Text>
        </View>
        <ScrollView>
          <View>
            {categories.map((category) => (
              <ListItem
                containerStyle={[
                  categoryStyle,
                  category?.selected ? selectedStyle : undefined,
                ]}
                key={category.id}
                bottomDivider
                onPress={() => handleOnPress(category)}
              >
                <ListItem.Content>
                  <ListItem.Title style={styles.titleText}>
                    {category.title}
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.descText}>
                    {category.desc}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <Button title="Kategorien auswählen" onPress={saveCategories} />
        </View>
      </View>
    </Overlay>
  );
};
const overlayStyle = { width: '90%' };
const categoryStyle = {
  height: 75,
};
const selectedStyle = {
  backgroundColor: '#c0c0c0',
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 0,
    margin: 0,
  },
  headerContainer: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: '#4B0082',
    backgroundColor: '#4B0082',
  },
  bottomContainer: {
    margin: 15,
  },
  borderBottom: {
    borderBottomColor: '#8080805e',
    borderBottomWidth: 3,
    borderStyle: 'solid',
  },
  heading: {
    fontSize: 28,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    padding: 15,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  descText: {
    fontStyle: 'italic',
    fontSize: 14,
  },
  newPlayerInput: {
    height: 50,
    padding: 10,
    color: 'white',
    fontSize: 17,
  },
  black: {
    color: 'black',
  },
  white: {
    color: 'white',
  },
  btn: {
    borderRadius: 50,
    backgroundColor: 'red',
    fontSize: 20,
    height: 35,
    width: 35,
    textAlign: 'center',
    position: 'relative',
    padding: 0,
    fontWeight: 'bold',
    marginRight: 15,
    marginTop: 7.5,
  },
});
export default Categories;
