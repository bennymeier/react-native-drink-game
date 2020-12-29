import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';
import Players from './components/Players';
import Game from './components/Game';
import { v4 as uuidv4 } from 'uuid';
import Categories from './components/Categories';

const App = () => {
  const [players, setPlayers] = useState([
    { id: 1, title: 'Benny' },
    { id: 2, title: 'Axel' },
  ]);
  const [newPlayer, setNewPlayer] = useState('');
  const [startGame, setGameStart] = useState(false);

  const addNewPlayer = () => {
    const player = {
      id: uuidv4(),
      title: newPlayer,
    };
    setPlayers([...players, player]);
    setNewPlayer('');
  };

  const handleChange = (player) => {
    setNewPlayer(player);
  };

  const handleGameStart = () => {
    if (newPlayer) {
      addNewPlayer();
    }
    setGameStart(!startGame);
  };

  const handleDelete = (id) => {
    const filterPlayers = players.filter((player) => player.id !== id);
    setPlayers(filterPlayers);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.scrollAreaView}>
        <ScrollView style={styles.scrollView}>
          <View testID="HEADER">
            <Text style={styles.headingStyle}>Trink App 🥃</Text>
            <Categories />
          </View>
          <View testID="MAIN">
            <Players
              players={players}
              onPress={handleDelete}
              onAddNewPlayer={addNewPlayer}
              currentPlayerValue={newPlayer}
              onChangeNewPlayer={handleChange}
            />
            {startGame && <Game handleGameStart={handleGameStart} />}
          </View>
          <View testID="FOOTER" style={styles.mainContainer}>
            <Button
              titleStyle={btnStyle}
              onPress={handleGameStart}
              title="Spiel starten!"
              disabled={players.length < 2}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const btnStyle = {
  fontSize: 17,
  fontWeight: 'bold',
};

const styles = StyleSheet.create({
  scrollAreaView: {
    backgroundColor: '#9400D3',
  },
  scrollView: {
    marginVertical: 25,
    marginHorizontal: 15,
  },
  container: {
    justifyContent: 'center',
    marginVertical: 25,
    marginHorizontal: 18,
  },
  mainContainer: {
    justifyContent: 'center',
    margin: 15,
    maxHeight: 400,
  },
  headingStyle: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
