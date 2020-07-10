import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {borderRadius: 20, padding: 20, backgroundColor: 'white'},
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 30},
});

export function GlobalAlert() {
  const {goBack} = useNavigation();

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.title}>This is a alert!</Text>
        <Button onPress={() => goBack()} title="Dismiss" />
      </View>
    </View>
  );
}
