import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import DestinationSearchScreen from '../screens/destinationSearch';
import GuestScreen from '../screens/Guests';

const Stack = createStackNavigator();

const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{
            title: 'Search for your destination screen',
          }}
        />
        <Stack.Screen
          name={'Guests'}
          component={GuestScreen}
          options={{
            title: 'How many people?',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
