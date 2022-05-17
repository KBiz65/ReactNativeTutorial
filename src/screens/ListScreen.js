import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const ListScreen = ({ navigation }) => {
  const friends = [
    { name: 'Friend #1', age: 25 },
    { name: 'Friend #2', age: 30 },
    { name: 'Friend #3', age: 47 },
    { name: 'Friend #4', age: 51 },
    { name: 'Friend #5', age: 35 },
    { name: 'Friend #6', age: 49 },
    { name: 'Friend #7', age: 26 },
    { name: 'Friend #8', age: 62 },
    { name: 'Friend #9', age: 63 },
  ];

  return (
    <View>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
      <Button onPress={() => navigation.navigate('Home')} title="Back" />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    // borderStyle: 'solid',
    // borderColor: 'black',
    // borderWidth: 2,
    // width: 200,
  }
});

export default ListScreen;