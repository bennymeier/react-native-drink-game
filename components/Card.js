import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import { randomNumber } from '../utils';

const Card = (props) => {
  const { id, desc, onPress, handleGameStart } = props;
  const shots = randomNumber();
  const text = desc(shots);

  return (
    <Overlay
      isVisible={true}
      overlayStyle={overlayStyle}
      onBackdropPress={handleGameStart}
    >
      <View>
        <Text style={styles.heading}>Hoch die Gläser! 🍻</Text>
        <Text style={styles.text}>{text}</Text>
        <Button onPress={() => onPress(id)} title="Weiter!" />
        <Button
          buttonStyle={cancelBtnStyle}
          onPress={handleGameStart}
          title="Abbrechen"
        />
      </View>
    </Overlay>
  );
};

const cancelBtnStyle = { marginTop: 15, backgroundColor: 'red' };
const overlayStyle = { padding: 15, margin: 15 };
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
    textAlign: 'center',
  },
});

export default Card;
