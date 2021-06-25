import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const suggestionRow = ({item}) => {
  return (
    <View style={styles.row} onPress={() => navigation.navigate('Guests')}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={30} />
      </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </View>
  );
};

export default suggestionRow;
