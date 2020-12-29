import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import { Input, Button } from 'react-native-elements';

import Players from './components/Players';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState([]);
  const [startGame, setGameStart] = useState(false);

  const addNewPlayer = () => {
    // TODO: Create unique ID!
    const player = {
      id: newPlayer,
      title: newPlayer,
    };
    setPlayers([...players, player]);
    setNewPlayer('');
  };

  const handleChange = (player) => {
    setNewPlayer(player);
  };

  const handleGameStart = () => {
    setGameStart(true);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text style={styles.heading}>Trink App</Text>
            <Players players={players} />
          </View>
          <View style={styles.defaultMargin}>
            <Input
              value={newPlayer}
              onChangeText={handleChange}
              placeholder="Spielername"
              onSubmitEditing={addNewPlayer}
            />
            <Button onPress={handleGameStart} title="Spiel starten!" />
            {startGame && <Game />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
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
