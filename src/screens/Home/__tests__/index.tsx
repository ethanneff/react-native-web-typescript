import React from 'react';
import {Home} from '..';
import renderer from 'react-test-renderer';
import {mockNavigation} from '../../../mocks/Setup';

it('should render correctly', () => {
  const component = renderer.create(<Home />);
  expect(component.toJSON()).toMatchSnapshot();
});

it('navigates to details', () => {
  const component = renderer.create(<Home />);
  const button = component.root.findByProps({testID: 'details'});
  button.instance.props.onPress();
  expect(mockNavigation.navigate).toBeCalledWith('Details', {data: '🤪'});
});
