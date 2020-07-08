import React from 'react';
import {Container} from '..';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';

it('should render correctly', () => {
  const component = renderer.create(
    <Container testID="wrapper">
      <Text>hello</Text>
    </Container>,
  );

  expect(component.toJSON()).toMatchSnapshot();
});
