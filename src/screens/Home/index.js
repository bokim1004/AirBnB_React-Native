import React from 'react';
import {ImageBackground, View, Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = props => {
  return (
    <View>
      <Pressable style={styles.searchButton}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require ('../../../assets/images/wallpaper.jpg')}
        style={styles.image}
      >
        <Text style={styles.title}> Go Near </Text>
        <Pressable style={styles.button}>

          <Text style={styles.buttonText}> Explore nearby stays </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;