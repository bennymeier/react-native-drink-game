import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Players from './components/Players';
import Game from './components/Game';
import { v4 as uuidv4 } from 'uuid';
import Categories from './components/Categories';
import { CATEGORIES } from './data';

const App = () => {
  const [players, setPlayers] = useState([
    { id: 1, title: 'Benny' },
    { id: 2, title: 'Axel' },
  ]);
  const [categories, setCategories] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');
  const [startGame, setGameStart] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    setCategories(CATEGORIES);
  }, []);

  const handleCategoryChanges = (chosenCategories) => {
    setCategories(chosenCategories);
  };

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

  const handleShowCategories = () => {
    setShowCategories(false);
  };

  return (
    <>
      <SafeAreaView style={styles.scrollAreaView}>
        <View testID="MAINAREA" style={styles.mainArea}>
          <View testID="HEADER">
            <Text style={styles.headingStyle}>Trink App 🥃</Text>
            {showCategories && (
              <Categories
                handleCategoryChanges={handleCategoryChanges}
                handleShowCategories={handleShowCategories}
              />
            )}
          </View>
          <View testID="MAIN">
            <Players
              players={players}
              onPress={handleDelete}
              onAddNewPlayer={addNewPlayer}
              currentPlayerValue={newPlayer}
              onChangeNewPlayer={handleChange}
            />
            {startGame && (
              <Game handleGameStart={handleGameStart} categories={categories} />
            )}
          </View>
          <View testID="FOOTER" style={styles.mainContainer}>
            <View style={styles.buttonGroup}>
              <Button
                titleStyle={btnStyle}
                onPress={() => setShowCategories(true)}
                title="Kategorien auswählen"
              />
            </View>
            <View style={styles.buttonGroup}>
              <Button
                titleStyle={btnStyle}
                onPress={handleGameStart}
                title="Spiel starten!"
                disabled={players.length < 2}
              />
            </View>
          </View>
        </View>
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
    display: 'flex',
    flex: 1,
  },
  mainArea: {
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
    marginBottom: 25,
  },
  buttonGroup: {
    marginBottom: 15,
  },
});

export default App;
