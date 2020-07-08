import React from 'react';
import {Text, Button} from 'react-native';
import {StackParams} from '../../navigation';
import {Container} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<StackParams, 'Home'>;

export function Home() {
  const {navigate} = useNavigation<NavigationProps>();
  return (
    <Container>
      <Text>Home Screen</Text>
      <Button
        testID="details"
        title="Go to Details"
        onPress={() => navigate('Details', {data: '🤪'})}
      />
    </Container>
  );
}
