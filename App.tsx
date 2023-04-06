import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/homeScreen';

const image = {uri: 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=400'};

const App = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <HomeScreen></HomeScreen>
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
