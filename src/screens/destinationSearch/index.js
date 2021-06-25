import React from 'react';
import {View} from 'react-native';
// import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
// import searchResults from '../../../assets/search';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './suggestionRow';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going ?"
        query={{
          key: 'AIzaSyA095K546uv6lhy17DWcgVS4yX9 - mCasL0',
          language: 'en',
          // types: '(cities)',
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        styles={{
          textInput: styles.textInput,
        }}
        suppressDefaultStyles={true}
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
