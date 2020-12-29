import React from 'react';
import { View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { CATEGORIES } from '../data';

const Categories = () => {
  return (
    <View>
      <Text>Kategorien</Text>
      {CATEGORIES.map((category) => (
        <ListItem key={category.id} bottomDivider>
          <Avatar
            source={{
              uri: 'https://reactnativeelements.com/img/logo-icon.svg',
            }}
          />
          <ListItem.Content>
            <ListItem.Title>{category.title}</ListItem.Title>
            <ListItem.Subtitle>{category.desc}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default Categories;
