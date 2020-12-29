import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import { randomNumber } from '../utils';

const Card = (props) => {
  const { id, desc, onPress, handleGameStart } = props;
  const shots = randomNumber();
  const text = desc(shots);

  return (
    <Overlay isVisible={true} style={styles.overlay}>
      <Text style={styles.heading}>Hoch die Gläser! 🍻</Text>
      <Text style={styles.text}>{text}</Text>
      <Button onPress={() => onPress(id)} title="Weiter!" />
      <Button
        buttonStyle={styles.cancelBtn}
        onPress={handleGameStart}
        title="Abbrechen"
      />
    </Overlay>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '900',
  },
  text: {
    fontSize: 25,
    marginHorizontal: 15,
    marginVertical: 35,
  },
  overlay: {
    padding: 15,
    margin: 15,
  },
  cancelBtn: {
    marginTop: 15,
    backgroundColor: 'red',
  },
});

export default Card;
