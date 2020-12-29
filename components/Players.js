import React from 'react';
import { View, FlatList, Button } from 'react-native';

const Players = (props) => {
  const { players, onPress } = props;
  return (
    <>
      <View>
        {players.map((player) => {
          return (
            <Button key={player.id} onPress={onPress} title={player.title} />
          );
        })}
      </View>
    </>
  );
};

export default Players;
