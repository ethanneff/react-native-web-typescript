import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

type Props = {
  children: React.ReactElement | ReactElement[];
  testID?: string;
};

export function Container({children, testID}: Props): React.ReactElement {
  return (
    <View style={styles.center} testID={testID}>
      {children}
    </View>
  );
}
