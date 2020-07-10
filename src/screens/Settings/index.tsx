import React from 'react';
import {Text, Button} from 'react-native';
import {StackParams} from '../../providers/Navigation/params';
import {Container} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {useRootDispatch} from '../../providers';

type NavigationProps = StackNavigationProp<StackParams, 'Settings'>;

export function Settings() {
  const dispatch = useRootDispatch();
  const {navigate} = useNavigation<NavigationProps>();
  return (
    <Container>
      <Text>Settings Screen</Text>
      <Button
        testID="Home"
        title="Go to Home"
        onPress={() => navigate('Home')}
      />
      <Button
        testID="Home"
        title="Logout"
        onPress={() => dispatch({type: 'LOGOUT'})}
      />
    </Container>
  );
}
