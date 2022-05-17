import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 5;
const COLOR_DECREMENT = -5;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    if (color === 'red') {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
    }
    if (color === 'green') {
      if (green + change > 255 || green + change < 0) {
        return;
      } else {
        setGreen(green + change);
      }
    }
    if (color === 'blue') {
      if (blue + change > 255 || blue + change < 0) {
        return;
      } else {
        setBlue(blue + change);
      }
    }
  }

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', COLOR_DECREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', COLOR_DECREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', COLOR_DECREMENT)}
      />
      <Text>Color: {`Red: ${red}, Green: ${green}, Blue: ${blue}`}</Text>
      <View
        style={{
          marginTop: 5,
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default SquareScreen;