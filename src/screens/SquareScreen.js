import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
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