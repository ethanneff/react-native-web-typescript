import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
import {Container} from '../../components';

export function Landing() {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Button title="sign in" onPress={() => navigate('SignIn')} />
      <Button title="sign up" onPress={() => navigate('SignUp')} />
    </Container>
  );
}
