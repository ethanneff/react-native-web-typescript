import React from 'react';
import {AppRegistry, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Redux, Navigation} from './providers';

export function App() {
  return (
    <Redux>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Redux>
  );
}

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
