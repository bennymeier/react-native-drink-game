import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import Players from './components/Players';
import Game from './components/Game';
import { v4 as uuidv4 } from 'uuid';

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
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text style={styles.heading}>Trink App</Text>
            <Players players={players} onPress={handleDelete} />
          </View>
          <View style={styles.defaultMargin}>
            <Input
              value={newPlayer}
              onChangeText={handleChange}
              placeholder="Spielername"
              onSubmitEditing={addNewPlayer}
            />
            <Button
              titleStyle={btnStyle}
              onPress={handleGameStart}
              title="Spiel starten!"
              disabled={players.length < 2}
            />
            {startGame && <Game handleGameStart={handleGameStart} />}
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
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  defaultMargin: {
    margin: 20,
  },
});

export default App;
