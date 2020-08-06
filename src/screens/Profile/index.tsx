import React from 'react';
import {Text, Button} from 'react-native';
import {StackParams} from '../../providers/Navigation/params';
import {Container} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<StackParams, 'Profile'>;

export function Profile() {
  const {navigate} = useNavigation<NavigationProps>();
  return (
    <Container>
      <Text>Profile Screen</Text>
      <Button
        testID="Home"
        title="Go to Home"
        onPress={() => navigate('Home')}
      />
    </Container>
  );
}
