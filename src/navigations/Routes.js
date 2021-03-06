import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/destinationSearch';
import SearchResults from '../screens/searchResults';
import GuestScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import HomeScreen from '../screens/home';

const Stack = createStackNavigator();

const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name={'Guests'}
          component={GuestScreen}
          options={{
            title: 'How many people ?',
          }}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{
            title: 'Where to?',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
