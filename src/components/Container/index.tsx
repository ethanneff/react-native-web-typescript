import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {Theme} from '../../utils';

type Props = {
  children: ReactNode | ReactNode[];
  testID?: string;
};

export function Container({children, testID}: Props) {
  return (
    <View style={Theme.center} testID={testID}>
      {children}
    </View>
  );
}
