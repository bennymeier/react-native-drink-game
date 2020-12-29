import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Players = (props) => {
  const { players, onPress } = props;
  return (
    <View style={styles.container}>
      {players.map((player) => {
        return (
          <View style={styles.playerContainer} key={player.id}>
            <Text style={styles.player} numberOfLines={1}>
              {player.title}
            </Text>
            <Button
              onPress={() => onPress(player.id)}
              title="Spieler löschen"
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 15,
  },
  playerContainer: {
    marginVertical: 5,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  player: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default Players;
