import './GestureHandler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home, Details} from '../screens';

export type StackParams = {
  Home: undefined;
  Details: {data: string} | undefined;
};

const Stack = createStackNavigator<StackParams>();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
