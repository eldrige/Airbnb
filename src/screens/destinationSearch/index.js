import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import searchResults from '../../../assets/search';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('Guest')}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
