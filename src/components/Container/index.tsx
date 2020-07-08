import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

type Props = {
  children: ReactNode | ReactNode[];
  testID?: string;
};

export function Container({children, testID}: Props) {
  return (
    <View style={styles.center} testID={testID}>
      {children}
    </View>
  );
}
