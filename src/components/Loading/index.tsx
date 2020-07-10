import React from 'react';
import {Theme} from '../../utils';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loading = () => {
  const styles = StyleSheet.create({
    loading: {
      justifyContent: 'center',
      ...Theme.center,
    },
  });
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  );
};
