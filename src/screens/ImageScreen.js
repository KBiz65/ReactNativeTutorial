import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = ({ navigation }) => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        imageScore="5"
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        imageScore="9"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        imageScore="7"
      />
      <Button onPress={() => navigation.navigate('Home')} title="Back" />
    </View>
  );
}

const styles = StyleSheet.create({

})

export default ImageScreen;
