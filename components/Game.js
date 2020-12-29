import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import DATA from '../data';
import Card from './Card';
import { randomNumber } from '../utils';

const Game = () => {
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
    const randomNr = randomNumber(0, cards.length - 1);
    setCard(cards[randomNr]);
  };

  return (
    <View>{!!currentCard && <Card {...cards[0]} onPress={nextCard} />}</View>
  );
};

export default Game;
