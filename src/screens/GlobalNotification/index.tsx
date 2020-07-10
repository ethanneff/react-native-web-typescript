import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const height = 100;
const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height,
    width: '100%',
  },
  overlay: {flex: 1, zIndex: 1},
  safeArea: {
    position: 'absolute',
    backgroundColor: 'white',
    height,
    width: '100%',
  },
  title: {fontSize: 30},
});

export function GlobalNotification() {
  const {goBack} = useNavigation();
  return (
    <>
      <SafeAreaView style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>This is a notification!</Text>
          <Button onPress={() => goBack()} title="Dismiss" />
        </View>
      </SafeAreaView>
      <View style={styles.safeArea} />
    </>
  );
}
