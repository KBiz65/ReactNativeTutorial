import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.text}>Enter password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 5 ? <Text>Your password must be at least 5 characters</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    fontSize: 24,
    textAlign: 'center',
  },

  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default TextScreen;