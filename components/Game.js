import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import DATA from '../data';
import Card from './Card';
import { randomNumber } from '../utils';

const Game = (props) => {
  const { handleGameStart } = props;
  const [cards, setCards] = useState([]);
  const [currentCard, setCard] = useState();
  useEffect(() => {
    setCards(DATA);
    const randomNr = randomNumber(0, DATA.length - 1);
    setCard(DATA[randomNr]);
  }, []);

  const nextCard = (id) => {
    // If no cards anymore, close overlay, set current card to undefined
    console.log('Cards left: ', cards.length);
    if (!cards.length) {
      handleGameStart();
      setCard();
    } else {
      const filterCards = cards.filter((card) => card.id !== id);
      console.log('Filtered: ', filterCards);
      setCards(filterCards);
      const randomNr = randomNumber(0, cards.length - 1);
      setCard(cards[randomNr]);
    }
  };

  return (
    <View>
      <Text>{cards.length}</Text>
      {!!currentCard && (
        <Card
          {...currentCard}
          onPress={nextCard}
          handleGameStart={handleGameStart}
        />
      )}
    </View>
  );
};

export default Game;
