import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

const Players = (props) => {
  const {
    players = [],
    onPress,
    onAddNewPlayer,
    onChangeNewPlayer,
    currentPlayerValue,
  } = props;
  console.log(players);
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={[styles.text, styles.heading, styles.white]}>
          Spielerliste
        </Text>
      </View>
      <ScrollView style={styles.playersContainer}>
        {players.map((player, index) => {
          const borderStyle = () => {
            if (players.length - 1 !== index) {
              return styles.borderBottom;
            }
          };
          return (
            <View
              style={[styles.playerContainer, borderStyle()]}
              key={player.id}
            >
              <Text style={[styles.text, styles.black]} numberOfLines={1}>
                {player.title}
              </Text>
              <Text
                style={[styles.btn, styles.white]}
                onPress={() => onPress(player.id)}
              >
                ―
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.addPlayerContainer}>
        <TextInput
          placeholderTextColor="white"
          style={styles.newPlayerInput}
          autoCorrect={false}
          value={currentPlayerValue}
          onChangeText={onChangeNewPlayer}
          placeholder="Spieler hinzufügen"
          onSubmitEditing={onAddNewPlayer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: '#4B0082',
    backgroundColor: '#4B0082',
  },
  playersContainer: { maxHeight: '60%', backgroundColor: 'white' },
  playerContainer: {
    marginVertical: 5,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  addPlayerContainer: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#4B0082',
    backgroundColor: '#4B0082',
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
    borderRadius: 17.5,
    backgroundColor: 'red',
    fontSize: 20,
    height: 35,
    width: 35,
    textAlign: 'center',
    padding: 0,
    fontWeight: 'bold',
    marginRight: 15,
    marginTop: 7.5,
  },
});

export default Players;
