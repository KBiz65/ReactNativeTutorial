import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const countIncrement = 1;

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement' }
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return;
  };
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increment', payload: countIncrement })
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrement', payload: countIncrement })
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const style = StyleSheet.create({

});

export default CounterScreen;