import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactElement} from 'react';
import {Details, Home} from '../screens';
import './GestureHandler';

export type StackParams = {
  Home: undefined;
  Details: {data: string} | undefined;
};

const Stack = createStackNavigator<StackParams>();

export function Navigation(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
