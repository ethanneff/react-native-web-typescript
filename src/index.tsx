import React from 'react';
import {AppRegistry, Platform} from 'react-native';
import {Navigation} from './navigation';

export function App() {
  return <Navigation />;
}

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
