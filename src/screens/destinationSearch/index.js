import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import searchResults from '../../../assets/search';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          query={{
            key: 'AIzaSyA095K546uv6lhy17DWcgVS4yX9 - mCasL0',
            language: 'en',
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
        />
      </View>

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
            onPress={() => navigation.navigate('Guests')}>
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
