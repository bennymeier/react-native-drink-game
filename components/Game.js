import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
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
    const filterCards = cards.filter((card) => card.id !== id);
    setCards(filterCards);
    const randomNr = randomNumber(0, filterCards.length - 1);
    setCard(filterCards[randomNr]);
    // If no cards anymore, close overlay, set current card to undefined
    if (!filterCards.length) {
      handleGameStart();
      setCard();
    }
  };

  return (
    <View>
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
