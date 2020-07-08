import React from 'react';
import {Text, Button} from 'react-native';
import {Container} from '../../components';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {StackParams} from '../../navigation';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<StackParams, 'Details'>;
type RouteProps = RouteProp<StackParams, 'Details'>;

export function Details() {
  const {push, popToTop, navigate, goBack} = useNavigation<NavigationProps>();
  const {params} = useRoute<RouteProps>();

  return (
    <Container>
      <Text>Details Screen</Text>
      <Text>Data passed: {params?.data}</Text>
      <Button
        testID="again"
        title="Go to Details... again"
        onPress={() => push('Details')}
      />
      <Button
        testID="home"
        title="Go to Home"
        onPress={() => navigate('Home')}
      />
      <Button testID="back" title="Go back" onPress={() => goBack()} />
      <Button
        testID="first"
        title="Go back to first screen in stack"
        onPress={() => popToTop()}
      />
    </Container>
  );
}
