import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const HomeScreen = props => {
  return (
    <View>
      <Pressable style={styles.searchBtn} onPress={() => console.log('Yeah')}>
        <Fontisto name={'search'} color="#f15454" size={25} />
        <Text style={styles.searchTxt}>Where are you going ?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.img}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable style={styles.btn} onPress={() => console.log('Yeah')}>
          <Text style={styles.btnText}>Explore More</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
