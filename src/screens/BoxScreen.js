import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 2,
    borderColor: 'black',
  },
  viewOneStyle: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'pink',
  },
  viewTwoStyle: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'green',
    alignSelf: 'center',
    backgroundColor: '#AAE691',
    // ...StyleSheet.absoluteFillObject, // equivalent of position: 'absolute' and top/bottom/left/right: 0
  },
  viewThreeStyle: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'purple',
    position: 'absolute',
    alignSelf: 'flex-end',
    backgroundColor: 'plum',
  },
});

export default BoxScreen;