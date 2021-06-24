/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native';

import GuestScreen from './src/screens/Guests';
// import HomeScreen from './src/screens/home';
// import Post from './src/components/posts/index';
// import SearchResults from './src/screens/searchResults';
import Routes from './src/navigations/Routes';
// import DestinationSearchScreen from './src/screens/destinationSearch';

const App: () => Node = () => {
  return (
    <>
      <StatusBar />
      <Routes />
    </>
  );
};

export default App;
